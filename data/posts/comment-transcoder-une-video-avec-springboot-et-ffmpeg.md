---
author: giboow 
title: 'Comment construire un transcodeur vidéo avec SpringBoot et FFMPEG !'
date: '2021-10-12' 
keywords:
    - Video
    - Transcoder
    - SpringBoot
    - FFMpeg
    - Java
image: /static/images/post/proxy-transcoder-ffmpeg/main.jpg
--- 
J'ai récemment commencé à travailler sur un système de caméras de surveillance et je souhaite pouvoir afficher les vidéos collectées sur des pages Web.
À première vue, cela semblait très facile, mais je me suis vite rendu compte que je devais me creuser la tête!

# Comment cela doit fonctionner?

La caméra est connectée à un NVR (Numeric Video recorder) qui possède une API permettant de récupérer les informations de configuration et le flux vidéo. En cherchant un peu sur le Web (Oui la documentation est difficile d'accès..), je découvre que le protocole de communication utilisé par le NVR est le RTSP (Real-Time Streaming Protocol). C'est là que je rencontre le principal problème ! Comment utiliser ce protocole dans une page HTML qui ne le supporte pas ? Ma solution est d'utiliser un serveur qui permet de transcoder la vidéo dans un format plus connu (MP4) et un protocole ultra standard (Http). Cela me permettra également de cacher les identifiants d'accès à la caméra en utilisant mon serveur comme un proxy.

![Graph it should work](https://giboow.fr/static/images/post/proxy-transcoder-ffmpeg/graph-ffmpeg-transcoder.png)

# Alors comment on fait ça?

Un excellent outil bien connu pour faire de la conversion vidéo est [FFMPeg](https://www.ffmpeg.org/), donc je commence à regarder comment je peux l'utiliser pour convertir RSTP. Je trouve rapidement une ligne de commande qui fonctionne :

```bash
ffmpeg -y -loglevel level+info -n -re -acodec pcm_s16le -rtsp_transport tcp -i rtsp://user:passwd@192.168.1.200:554/ISAPI/Streaming/channels/101/live -vcodec copy -af asetrate=22050 -acodec aac -b:a 96k -nostdin myvideo.mp4
```

Alors comment faire un proxy avec SpringBoot ? C'est très simple en fait, il suffit d'utiliser l'objet [StreamingResponseBody](https://docs.spring.io/spring-framework/docs/current/javadoc-api/org/springframework/web/servlet/mvc/method/annotation/StreamingResponseBody.html). Cela permet de renvoyer un traitement asynchrone de la requête, où l'application peut écrire directement sur le flux de sortie de la réponse sans bloquer le reste de mon API.

Enfin, il me suffit d'utiliser FFMPEG dans mon contrôleur pour envoyer le flux via mon API. J'aurais pu utiliser " Runtime.getRuntime().exec(" ffmpeg...) " mais je n'arrivais pas à trouver comment obtenir mon flux. Heureusement, j'ai trouvé une bibliothèque magique [Jaffree](https://github.com/kokorin/Jaffree) : "Jaffree stands for JAva FFmpeg and FFprobe FREE command line wrapper. Jaffree supports programmatic video production and consumption (with transparency)"

# La solution

Voici la solution finale et comment relayer un flux vidéo provenant d'une caméra HikVision afin que le format soit utilisable par une page HTML.

```java
import com.github.kokorin.jaffree.StreamType;
import com.github.kokorin.jaffree.ffmpeg.FFmpeg;
import com.github.kokorin.jaffree.ffmpeg.PipeOutput;

@RestController
@RequestMapping("/video")
@Log4j2
public class VideoController {
    @GetMapping(value = "/live.mp4")
    @ResponseBody
    public ResponseEntity<StreamingResponseBody> livestream(@PathVariable("id") Long tipperId) throws Exception {

        String rtspUrl = "rtsp://user:passwd@192.168.1.200:554/ISAPI/Streaming/channels/101/live";

        return ResponseEntity.ok()
                .contentType(MediaType.APPLICATION_OCTET_STREAM)
                .body(os -> {
                    FFmpeg.atPath()
                            .addArgument("-re")
                            .addArguments("-acodec", "pcm_s16le")
                            .addArguments("-rtsp_transport", "tcp")
                            .addArguments("-i", $rtspUrl)
                            .addArguments("-vcodec", "copy")
                            .addArguments("-af", "asetrate=22050")
                            .addArguments("-acodec", "aac")
                            .addArguments("-b:a", "96k" )
                            .addOutput(PipeOutput.pumpTo(os)
                                    .disableStream(StreamType.AUDIO)
                                    .disableStream(StreamType.SUBTITLE)
                                    .disableStream(StreamType.DATA)
                                    .setFrameCount(StreamType.VIDEO, 100L)
                                     //1 frame every 10 seconds
                                    .setFrameRate(0.1)
                                    .setDuration(1, TimeUnit.HOURS)
                                    .setFormat("ismv"))
                            .addArgument("-nostdin")
                            .execute();
                });

    }
}
```

Vous devrez également modifier la configuration de votre application SpringBoot (fichier application.properties) pour augmenter le délai d'attente pour les requêtes asynchrones.

```html
spring.mvc.async.request-timeout = 3600000
```

Il vous suffit d'appeler votre API sur la page web :

```html
<div class="video">
  <video width="100%" height="auto" controls autoplay muted loop *ngIf="event?.video">
    <source src="http://localhost:8080/video/live.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
  </video>
</div>
```

Et voici le résultat :

![Final result](https://giboow.fr/static/images/post/proxy-transcoder-ffmpeg/result-ffmpeg-transcoder.png)

Facile non?


[Retrouvez l'article anglais sur dev.to](https://dev.to/giboow/how-to-build-a-video-transcoder-with-springboot-and-ffmpeg-n7p)
