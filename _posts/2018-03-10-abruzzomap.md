---
layout: single_post
title: "Carta topografica dell'Abruzzo"
categories:
excerpt: "Nelle regioni montuose soggette a nevicate, che presentano una copertura nevosa stagionale, le attività invernali..."
tags: []
image:
  feature:
modified: 2018-03-10T12:00:00-00:00 
author_profile: true
comments: true
read_time: true
share: true
---
{% unless page.header.overlay_color or page.header.overlay_image %}
<header>
  {% if page.title %}<h1 class="page__title" itemprop="headline">{{ page.title | markdownify | remove: "<p>" | remove: "</p>" }}</h1>{% endif %}
  {% if page.read_time %}
    <p style="font-size:18px" class="page__meta">
      <i class="fa fa-clock-o" aria-hidden="true"></i> {% include read-time.html %}<BR>
    </p>
  {% endif %}
</header>
{% endunless %}

<p style="text-align: justify;">
Nelle regioni montuose soggette a nevicate, che presentano una copertura nevosa stagionale, le attività invernali sono
sempre affette da rischio legato al <b>pericolo valanghe</b>. 

<p style="text-align: justify;">
La mitigazione del rischio dovuto al pericolo valanghe può avvenire tramite un'attenta valutazione delle caratteristiche del 
<b>manto nevoso</b>, dell'<b>orografia</b> e della densità della <b>copertura boschiva</b>.

<p style="text-align: justify;">
I <b>bollettini valanghe</b> del servizio
<a href="http://www.meteomont.gov.it/infoMeteo/stampaBollettinoStampa.do?settore=D" target="_blank">Meteomont</a> forniscono giornalmente 
preziose informazioni riguardanti la <b>stabilità</b> del manto nevoso, le quote e le esposizioni più a rischio. Uno studio
attento del bollettino valanghe può mitigare il rischio durante l'escursione, tuttavia è di fondamentale
importanza l'<b>osservazione</b> del manto nevoso durante la gita stessa, in quanto può fornire informazioni sulle condizioni del
manto nella zona esatta dell'escursione.

<p style="text-align: justify;">
Conoscere l'orografia e la copertura boschiva del luogo di interesse è altrettanto fondamentale, poichè la <b>pendenza</b> e la densità del <b>bosco</b> sono variabili chiave per la stima del rischio valanghe e devono essere considerate per <b>pianificare</b> il percorso prima di intraprendere la gita. L'<b>osservazione</b> delle caratteristiche orografiche del terreno e della copertura boschiva sul luogo dell'escursione sono di fondamentale importanza e devono integrare le informazioni ottenute dalla pianificazione dell'itinerario tramite mappa.

<p style="text-align: justify;">
Per conoscere meglio come pianificare un'escursione invernale in montagna e come comportarsi durante lo svolgimento della gita è molto utile seguire le <b>lezioni</b> del portale <a href="https://www.whiterisk.ch/it/" target="_blank">White Risk</a>.

<p style="text-align: justify;">
Per la regione <b>Abruzzo</b> l'itinerario può essere pianificato online utilizzando una <a href="https://edrap.github.io/leaflet/abruzzo20m.html" target="_blank"><b>carta topografica</b></a>, che include un livello per la copertura boschiva, fornito da <a href="https://land.copernicus.eu/pan-european/high-resolution-layers/forests/tree-cover-density" target="_blank">Copernicus</a>, ed un livello per le classi di pendenza superiori a 30°, ottenuto rielaborando il DEM fornito dall'<a href="http://tinitaly.pi.ingv.it/" target="_blank">Istituto NazionaIe di Geofisica e Vulcanologia</a>. Queste informazioni sono rappresentate sulla mappa con una risoluzione di 20 metri per la copertura boschiva e 10 metri per le classi di pendenza, perciò non sono rappresentative della conformazione e tipologia di terreno a scale inferiori, tuttavia forniscono dati utili per poter pianificare l'escursione. È inoltre di fondamentale importanza l'osservazione delle caratteristiche del terreno e del manto nevoso durante la gita stessa per ottenere un'informazione più puntuale e precisa.

<p style="text-align: justify;">
<b>La carta delle pendenze non rappresenta le reali condizioni del terreno a scale inferiori a 10 metri e non è stata validata dagli organismi preposti, pertanto l'utilizzo è a discrezione dell'utente che si assume tutte le responsabilità dei rischi connessi</b>.

<div style="width: 100%; height: 100%; margin: 0 auto;">
<div style="position: relative; padding-top: 60%;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://edrap.github.io/leaflet/abruzzomap.html" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>

{% if page.comments %}
<div id="disqus_thread"></div>
<script id="dsq-count-scr" src="//https-edrap-github-io.disqus.com/count.js" async></script>
<script>
/**
*  RECOMMENDED CONFIGURATION VARIABLES: EDIT AND UNCOMMENT THE SECTION BELOW TO INSERT DYNAMIC VALUES FROM YOUR PLATFORM OR CMS.
*  LEARN WHY DEFINING THESE VARIABLES IS IMPORTANT: https://disqus.com/admin/universalcode/#configuration-variables*/
/*
var disqus_config = function () {
this.page.url = page.url;  // Replace PAGE_URL with your page's canonical URL variable
this.page.identifier = page.id; // Replace PAGE_IDENTIFIER with your page's unique identifier variable
};
*/
(function() { // DON'T EDIT BELOW THIS LINE
var d = document, s = d.createElement('script');
s.src = 'https://https-edrap-github-io.disqus.com/embed.js';
s.setAttribute('data-timestamp', +new Date());
(d.head || d.body).appendChild(s);
})();
</script>
<noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
{% endif %}
