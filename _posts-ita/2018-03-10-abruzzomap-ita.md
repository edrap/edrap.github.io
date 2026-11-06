---
layout: single_post
title: "Carta Topografica Dell'Abruzzo"
categories:
excerpt: "Nelle regioni montuose soggette a nevicate, che presentano una copertura nevosa stagionale, le attività invernali..."
tags: []
image:
  feature:
modified: 2022-12-05T16:00:00-00:00 
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
      <i class="fa fa-language" aria-hidden="true"></i> Translate this post in <a href="{{ site.url }}{{ site.baseurl }}/abruzzomap"><font color="#54ADC8">English</font></a><BR>
      <i class="fa fa-clock-o" aria-hidden="true"></i> {% include read-time.html %}
    </p>
  {% endif %}
</header>
{% endunless %}

Nelle regioni montuose soggette a nevicate, che presentano una copertura nevosa stagionale, le attività invernali sono
sempre affette da rischio legato al <b>pericolo valanghe</b>. 

La mitigazione del rischio dovuto al pericolo valanghe può avvenire tramite un'attenta valutazione delle caratteristiche del 
<b>manto nevoso</b>, dell'<b>orografia</b> e della densità della <b>copertura boschiva</b>.

I <b>bollettini valanghe</b> del servizio
<a href="https://meteomont.carabinieri.it/home" target="_blank">Meteomont</a> forniscono giornalmente 
preziose informazioni riguardanti la <b>stabilità</b> del manto nevoso, le quote e le esposizioni più a rischio. Uno studio
attento del bollettino valanghe può mitigare il rischio durante l'escursione, tuttavia è di fondamentale
importanza l'<b>osservazione</b> del manto nevoso durante la gita stessa, in quanto può fornire informazioni sulle condizioni del
manto nella zona esatta dell'escursione.

Conoscere l'orografia e la copertura boschiva del luogo di interesse è altrettanto fondamentale, poichè la <b>pendenza</b> e la densità del <b>bosco</b> sono variabili chiave per la stima del rischio valanghe e devono essere considerate per <b>pianificare</b> il percorso prima di intraprendere la gita. Le informazioni ottenute tramite l'<b>osservazione</b> delle caratteristiche orografiche del terreno e della copertura boschiva sul luogo dell'escursione sono di fondamentale importanza e devono integrare quelle ricavate dalla pianificazione dell'itinerario tramite mappa.

Per conoscere meglio come pianificare un'escursione invernale in montagna e come comportarsi durante lo svolgimento della gita è molto utile seguire le <b>lezioni</b> del portale <a href="https://www.whiterisk.ch/it/" target="_blank">White Risk</a>.

Per la regione <b>Abruzzo</b> l'itinerario può essere pianificato online utilizzando la <b>carta topografica</b> seguente, che include: i) un livello per le classi di inclinazione superiori a 30° con una risoluzione a 10 metri, ottenuto dal DEM fornito dall'<a href="http://tinitaly.pi.ingv.it/" target="_blank">Istituto NazionaIe di Geofisica e Vulcanologia</a>; ii) un livello per la copertura boschiva a 10 metri, fornito da <a href="https://land.copernicus.eu/pan-european/high-resolution-layers/forests/dominant-leaf-type" target="_blank">Copernicus</a>; iii) un livello che riporta la presenza o assenza di neve combinando osservazioni satellitari nell'arco dei 6 giorni precedenti elaborata da datiCopernicus <a href="https://dataspace.copernicus.eu/data-collections/copernicus-sentinel-missions/sentinel-2" target="_blank">Sentinel-2</a> a 10 metri di risoluzione; iv) un livello che riporta la neve fresca caduta nelle 24 ore precedenti ottenuto tramite l'approccio <a href="https://edrap.github.io/_posts-ita/2024-01-25-newsnow-ita/" target="_blank">descritto qui</a>; v) un'acquisizione satellitare del 6 Aprile 2026 elaborata da dati Copernicus <a href="https://dataspace.copernicus.eu/data-collections/copernicus-sentinel-missions/sentinel-2" target="_blank">Sentinel-2</a> a 10 metri di risoluzione. Le informazioni di classi di inclinazione, copertura boschiva e copertura nevosa non sono rappresentative della conformazione e tipologia di terreno a scale inferiori alla loro risoluzione, tuttavia forniscono dati utili per poter pianificare l'escursione. È inoltre di fondamentale importanza l'osservazione delle caratteristiche del terreno e del manto nevoso durante la gita stessa per ottenere un'informazione più puntuale e precisa.

<b>Gli utenti si assumono tutte le responsabilità dell'utilizzo della carta topografica per attività all'aperto.</b>

<b>Web App:</b>
È possibile visualizzare la mappa topografica tramite questo link: <a href="https://bregno.it/abruzzomap" target="_blank"><b>https://bregno.it/abruzzomap</b></a>

<b>Android App:</b>
È anche possibile utilizzare la carta topografica tramite app Android dedicata, scaricando ed installando <a href="https://bregno.it/abruzzomap/abruzzomap.apk" target="_blank"><b>questo file</b></a> (Versione 1.56 - Ultimo aggiornamento 6/11/2026 18:20). 

<b>Integrazione con <a href="https://www.oruxmaps.com" target="_blank">Oruxmaps</a>:</b>
Per usare i livelli di classi di pendenza, ombreggiatura e copertura boschiva in Oruxmaps, scarica <a href="https://edrap.github.io/leaflet/integration/abruzzomapsources_tcd.txt" target="_blank"><b>questo file</b></a> e copia il suo contenuto nel file onlinemapsources.xml

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
