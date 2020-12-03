---
author: giboow 
title: "PGTune, l'utilitaire qui va te faire gagner du temps" 
date: '2020-12-02' 
keywords:
    - Postgresql
    - Tunning
    - Performances 
image: /static/images/post/pgtune.png
--- 
Récemment, j'ai dû mettre le nez dans les serveurs de notre application, car nous avions des problèmes de performances
et de stabilité.

Pour vous replanter le décor, l'application dont je m'occupe aujourd'hui est hébergé sur un serveur qui comprend un
service de base de données Postgres, un serveur d'application Java, ainsi que d'un serveur apache permettant aux
utilisateurs de télécharger le front. Tout ça fonctionne sur le même serveur sans conteneurs. N'ayant pas installé ces
services moi-même, j'ai dû passer un peu de temps pour comprendre pourquoi notre serveur plantait lors de fortes
charges... Puis je me suis aperçu grâce à notre système de monitoring que la mémoire du serveur Postgres n'était même
pas limitée...

Je n'ai aucune connaissance sur les configurations des services Postgres, et comme je n'aime pas trop perdre de temps à
éplucher les documentations, j'ai fouillé un peu sur la toile. C'est là que j'ai découvert le travail
de [Alexey Vasiliev (@leOpard)](https://github.com/le0pard) qui propose un générateur de configuration
Postgres : [PGTune](https://pgtune.leopard.in.ua/#/)

Il suffit de paramétrer votre configuration en fonction des ressources que vous voulez allouer sur le serveur! Et PAF ça
fait le ☕!

![PGTune capture](/static/images/post/capture-pgtune.png)

Il vous reste ensuite à injecter cette nouvelle configuration dans le fichier de configuration de votre Postgres.

Depuis que j'ai appliqué cette configuration, je n'ai plus de problème de performance. Finalement, mes utilisateurs sont
contents, et moi aussi 😃.

Pour les fans de [Ruby](https://www.ruby-lang.org/fr/), où si cela vous amuse, vous pouvez aller consulter le code du
générateur de @leOpard, les sources sont disponibles sur
Github : [https://github.com/le0pard/pgtune](https://github.com/le0pard/pgtune)  
