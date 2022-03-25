---
author: giboow
title: 'PostgreSQL - Comment booster ses recherches de point géolocalisé'
date: '2022-03-24'
keywords:
- PostgreSQL
- PostGIS
- Latitude
- Longitude
- Optimisation
- SQL
image: /static/images/post/postgres-geoloc-optim.png
summary: "Récemment j’ai voulu créer une petite application mobile qui permet de rechercher les boîtes aux lettres qui sont autour de la géolocalisation utilisateur. D’autres apps existent, mais leurs performances n’étaient pas vraiment au rendez-vous, alors j’ai voulu tenter de trouver des solutions"
---
Récemment j’ai voulu créer une petite application mobile qui permet de rechercher les boîtes aux lettres qui sont autour de la géolocalisation utilisateur. D’autres apps existent, mais leurs performances n’étaient pas vraiment au rendez-vous, alors j’ai voulu tenter de trouver des solutions!

Pour commencer, j’ai réussi à récupérer un jeu de donnée sur le site [data.gouv.fr](http://data.gouv.fr/) : [https://www.data.gouv.fr/fr/datasets/liste-des-boites-aux-lettres-de-rue-france-metropolitaine-et-dom-avec-heure-limite-de-depot-1/](https://www.data.gouv.fr/fr/datasets/liste-des-boites-aux-lettres-de-rue-france-metropolitaine-et-dom-avec-heure-limite-de-depot-1/) . Ce jeu de données comporte 140 000 entrées, bien sûr l’utilisateur qui va vouloir afficher les boîtes aux lettres proches de lui, n’aura pas besoin d’afficher toutes les boîtes disponibles dans la base de données, mais seulement celles proches de lui, par exemple 10km.

Pour mon projet j’utilise une API SpringBoot, mais ce n’est pas ce qui va vous intéresser aujourd’hui. Le vrai problème c’est comment récupérer l’ensemble des données, stockées dans une base de données PostgreSQL, qui sont géolocalisées proche d’un point dans un temps convenable!

## L’objectif

Mon objectif est donc de trouver un ensemble de points qui se trouvent dans un rayon de 10km, en un temps record!

![Objectif de la requete](/static/images/post/postgres-geoloc-optim.png)

## PostGIS à la rescousse

PostGIS est une extension de PostgreSQL, elle permet d’offrir de nouvelle fonction et des types de données qui facilitent les recherches géolocalisées.

Pour installer PostGIS sur son serveur :

```bash
~$ sudo apt install postgis
```

Il faut ensuite l’activer dans PosgresSQL, en se connectant à la base de données et en ajoutant l’extension **postgis**. Elle sera donc active uniquement dans la base de données sélectionnée.

```sql
psql (13.6 (Ubuntu 13.6-0ubuntu0.21.10.1))
Type "help" for help.

postgres=# \c test;
postgres=# CREATE EXTENSION postgis;
```

Nous pouvons maintenant créer une table qui contient un id, une latitude, une longitude ainsi qu’un point GPS.  La valeur du SRID **4326**  permet de déclarer un point utilisant le système de référence spatiale géographique.

```sql
CREATE TABLE public.test (
    id bigserial NOT NULL,
    lat real NOT NULL,
    long real NOT NULL,
    location geography(Point, 4326) NOT NULL
);
```

On peut alors facilement ajouter un point en utilisant la requête suivante :

```sql
INSERT INTO test (lat, long, location)
VALUES (49.548462,1.0779799,ST_SetSRID(ST_MakePoint(49.548462,1.0779799), 4326));
```

## Optimisation

Pour valider mon optimisation, j’ai ajouté à ma table 140 000 lignes de données géolocalisées.

Bêtement j’ai voulu rechercher tous les points qui se trouvaient dans un rayon de moins de 10km avec la fonction **st_distancesphere**.

Voici la requête que j’exécute pour récupérer tous les points GPS dans un rayon de 10km :

```sql
EXPLAIN(ANALYSE , BUFFERS )
SELECT st_distancesphere(t.location::geometry,ST_SetSRID(ST_MakePoint(49.548462,1.0779799), 4326))
FROM test t
WHERE
st_distancesphere(t.location::geometry,ST_SetSRID(ST_MakePoint(49.548462,1.0779799), 4326)) < 10000;
```

L’analyser de requête de PostgeSQL montre bien qu’aucun index n’est utilisé et que la requête prend 463ms pour renvoyer 21 points qui correspondes aux conditions.

```sql
Gather  (cost=1000.00..2776968.00 rows=47062 width=8) (actual time=160.851..461.391 rows=115 loops=1)
  Workers Planned: 1
  Workers Launched: 1
  Buffers: shared hit=1759
  ->  Parallel Seq Scan on test t  (cost=0.00..2771261.80 rows=27684 width=8) (actual time=218.887..415.046 rows=58 loops=2)
"        Filter: (st_distance(geography((location)::geometry), '0101000020E6100000A48CB80034C64840F5EC03DA673FF13F'::geography, false) < '10000'::double precision)"
        Rows Removed by Filter: 70535
        Buffers: shared hit=1759
Planning Time: 0.376 ms
JIT:
  Functions: 8
"  Options: Inlining true, Optimization true, Expressions true, Deforming true"
"  Timing: Generation 2.485 ms, Inlining 178.841 ms, Optimization 117.797 ms, Emission 56.983 ms, Total 356.106 ms"
Execution Time: 463.431 ms
```

Nous allons donc créer un index qui va permettre d’accélérer la requête (voir  la doc [http://postgis.net/workshops/postgis-intro/indexing.html](http://postgis.net/workshops/postgis-intro/indexing.html)):

```sql
CREATE INDEX test_position_geography_index ON test USING GIST(geography(location));
```

Mais nous allons avoir une mauvaise surprise, car l’index ne fonctionne toujours pas. Après une recherche rapide, je me suis aperçu qu’il n’y a que certaines fonctions de PostGIS qui peuvent utiliser l’indexation (voir la doc ici : [http://postgis.net/workshops/postgis-intro/indexing.html#spatially-indexed-functions](http://postgis.net/workshops/postgis-intro/indexing.html#spatially-indexed-functions)).

Je décide donc d’utiliser la fonction ST_DWithin qui renvoie un vrai si deux points se trouvent bien à la distance passée dans le 3e paramètre.

Voici donc la requête suivie de l’analyse :

```sql
EXPLAIN(ANALYSE , BUFFERS )
SELECT st_distancesphere(t.location::geometry,ST_SetSRID(ST_MakePoint(49.548462,1.0779799), 4326))
FROM test t
WHERE
   ST_DWithin(t.location, ST_SetSRID(ST_MakePoint(49.548462,1.0779799), 4326)::geography, 10000);
```

```sql
Bitmap Heap Scan on test t  (cost=4.95..2390.34 rows=14 width=8) (actual time=1.212..2.205 rows=115 loops=1)
"  Filter: st_dwithin(location, '0101000020E6100000A48CB80034C64840F5EC03DA673FF13F'::geography, '10000'::double precision, true)"
  Rows Removed by Filter: 200
  Heap Blocks: exact=150
  Buffers: shared hit=188
  ->  Bitmap Index Scan on test_position_geography_index  (cost=0.00..4.95 rows=72 width=0) (actual time=0.288..0.288 rows=315 loops=1)
"        Index Cond: (location && _st_expand('0101000020E6100000A48CB80034C64840F5EC03DA673FF13F'::geography, '10000'::double precision))"
        Buffers: shared hit=26
Planning Time: 0.446 ms
Execution Time: 2.288 ms
```

On voit bien que l’index **test_position_geography_index** est utilisé et qu’il permet de récupérer les 21 points en **2.288ms** 🤯. ****Le gain est énorme, il permet de réduire considérablement le temps d’exécution et le temps d’utilisation processeur.

## Bilan

Dans mon API de géolocalisation de boîtes aux lettres, cela m’a permis de diviser par 10 le temps de requête et de soulager le serveur lorsque je simulais une charge serveur avec l’outil de tests de performance d’Apache **ab** ([https://httpd.apache.org/docs/2.4/fr/programs/ab.html](https://httpd.apache.org/docs/2.4/fr/programs/ab.html)).
