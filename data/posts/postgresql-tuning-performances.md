---
author: giboow
title: 'PGTune, lutilitaire qui va te faire gagner du temps'
date: '2020-12-02'
keywords:  
- Postgresql
- Tunning
- Performances
image: /static/images/post/pgtune.png
--- 

Récemment j'ai dû mettre le nez dans les serveurs de notre application, car nous avions des problèmes de performances et
de stabilité. 

Pour vous re-planter le décors, l'application dont je m'occupe aujourd'hui est hebergé sur un serveur qui comprend un service
de base de donnée Postgres, un serveur d'application Java, ainsi que d'un serveur apache permettant aux utilisateurs de télécharger le front.
Tout ca fonctionne sur le même serveur sans conteneur. N'ayant pas installer ces services moi même, j'ai dû pas mal chercher pour comprendre pourquoi notre serveur plantait lors de forte charges...
Puis je me suis apperçu grace à notre système de monitoring, que la memoire du postgres n'était même pas limitée... 

Je n'ai aucune connaissance sur les configruration postgres, et comme je n'aime pas trop perdre de temps à éplucher les documentations,
j'ai fouiller un peu sur la toile. C'est la que j'ai découvert le travail de [Alexey Vasiliev (@leOpard)](https://github.com/le0pard)
qui propose un générateur de configuration Postgres : [PGTune](https://pgtune.leopard.in.ua/#/)

Il suffit simplement de configurer, en fonction des ressources que vous voulez allouer sur le serveur! Et paf ca fait le ☕!

![PGTune capture](/static/images/post/capture-pgtune.png)

Il vous reste ensuite à injecter cette nouvelle configuration dans le fichier de configuration de votre postgres.

Depuis que j'ai appliquer cette configuration, je n'ai plus de problème de performance, mes utilisateurs sont contents et moi aussi 😃.

Pour les fans de [Ruby](https://www.ruby-lang.org/fr/), où si celà vous amuse, vous pouvez aller consulter le code du 
générateur de @leOpard, les sources sont dispobibles sur Github : [https://github.com/le0pard/pgtune](https://github.com/le0pard/pgtune)  