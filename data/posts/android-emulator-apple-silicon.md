---
author: giboow 
title: "Android Emulator sur Apple Silicon, enfin une preview!" 
date: '2020-12-06' 
keywords:
    - Android
    - Android Emulator
    - Apple Silicon
    - AppleM1
image: /static/images/post/android-apple.png
--- 
Bonsoir à tous!

J'ai récemment craqué pour le nouveau MacBook Pro M1! Depuis 1 semaine que je l'apprivoise, toutes les applications 
que j'utilise fonctionnent (merci Rosetta2!). Mon seul problème, en tant que developpeur mobile, est que l'Emulateur 
Android ne fonctionne pas. C'est 
d'ailleurs le problème de toutes les applications qui font de la virtualisation (Docker, ParallelDesktop, etc …)!
Je dois donc utiliser un téléphone physique, et cela m'empêche de tester mes applications sur différentes versions 
d'Android.

Heureusement les ingénieurs de Google sont à fond sur le  coup et ont mis à disposition une version Preview de 
l'émulateur ici : [https://androidstudio.googleblog.com/2020/12/android-emulator-apple-silicon-preview.html](https://androidstudio.googleblog.com/2020/12/android-emulator-apple-silicon-preview.html)

Et ça fonctionne :

![Capture Android preview](/static/images/post/capture_android_emulator_preview.png)

Pour autant tout n'est pas parfait :
* Les Webview ne fonctionnent pas
* Pas de son
* Pas de skin téléphone
* Les codecs vidéos ne sont pas fonctionnels
* Les applications ARM 32Bits ne sont pas compatibles
* Quelques bugs graphiques sur les applications utilisant l'API Vulkan
* Une popup apparait au démarrage de l'émulateur, indiquant qu'elle ne trouve pas ADB

Tout est dit! Il ne reste plus qu'à tester 😃.

Amusez-vous bien!