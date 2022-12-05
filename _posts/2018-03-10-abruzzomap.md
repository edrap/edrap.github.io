---
layout: single_post
title: "Abruzzo Topographic Map"
categories:
excerpt: "Winter activities in mountainous regions that experience snowfalls and a seasonal snow cover..."
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
      <i class="fa fa-language" aria-hidden="true"></i> Traduci questo post in <a href="{{ site.url }}{{ site.baseurl }}/_posts-ita/2018-03-10-abruzzomap-ita"><font color="#54ADC8">Italiano</font></a><BR>
      <i class="fa fa-clock-o" aria-hidden="true"></i> {% include read-time.html %}
    </p>
  {% endif %}
</header>
{% endunless %} 

<p style="text-align: justify;">
Winter activities in mountainous regions that experience snowfalls and a seasonal snow cover are always affected by <b>avalanche risk</b>.

<p style="text-align: justify;">
The avalanche risk can be mitigated by a careful evaluation of the <b>snowpack</b> characteristics, <b>orography</b> and <b>tree cover</b> density.

<p style="text-align: justify;">
<b>Avalanche bulletins</b> of <a href="http://www.meteomont.gov.it/infoMeteo/stampaBollettinoStampa.do?settore=D" target="_blank">Meteomont</a> service provide daily important informations about the snowpack <b>stability</b> and the dangerous elevations and expositions. A careful evaluation of the avalanche bulletin can mitigate the risk during the tour, nevertheless it's fundamental to <b>observe</b> the snowpack while proceeding, because it provides informations of the stability conditions right at the tour location.

<p style="text-align: justify;">
It's also important to know the orography and the tree cover density at the tour location, because <b>slope</b> and <b>forest</b> density are key variables to asses the avalanche risk and have to be taken into account to <b>plan</b> the tour before starting it. The informations obtained <b>observing</b> the terrain and the tree cover are also fundamental and have to be integrated with the ones obtained from the map during the tour planning.

<p style="text-align: justify;">
It's really useful to follow the <b>lessons</b> of the <a href="https://www.whiterisk.ch/it/" target="_blank">White Risk</a> portal to learn how to plan a mountain winter tour and how to behave during it.

<p style="text-align: justify;">
For <b>Abruzzo</b> region it's possible to plan the tour online using a <a href="https://edrap.github.io/leaflet/abruzzomap.html" target="_blank"><b>topographic map</b></a> that includes several layers: i) a slope layer obtained from a DEM provided by <a href="http://tinitaly.pi.ingv.it/" target="_blank">Istituto NazionaIe di Geofisica e Vulcanologia</a> at 10 meters resolution; ii) a tree cover layer provided by <a href="https://land.copernicus.eu/pan-european/high-resolution-layers/forests/dominant-leaf-type" target="_blank">Copernicus</a> at 10 meters resolution; iii) a snow cover layer showing the presence or absence of snow in the past 6 days at 20 meters resolution provided again by <a href="https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring/snow-products/snow-cover" target="_blank">Copernicus</a>; iv) two layers that show the avalanches corresponding to the photointerpretation (orange color) and to the direct survey (purple color) present in the Avalanche Hazard Location Map (C.L.P.V.), provided by the <a href="https://opendata.regione.abruzzo.it/content/carta-storica-della-valanghe" target="_blank">Abruzzo region</a> portal. Slope classes, tree cover and snow cover layers are not representative of the terrain conditions at scales smaller than the respective resolution, however they provide useful data to plan the tour. It is also crucial to observe the snowpack and the terrain characteristics during the tour to obtain a more precise information.

<p style="text-align: justify;">
<b>The users take full responsibility for using the <a href="https://edrap.github.io/leaflet/abruzzomap.html" target="_blank">topographic map</a> for outdoor activities.</b>

<p style="text-align: justify;">
<b><a href="https://www.oruxmaps.com" target="_blank">Oruxmaps</a> integration:</b>
<br>
<ul>
  <li>To use the hillshade and slope class layers with Oruxmaps, download <a href="https://edrap.github.io/leaflet/integration/abruzzomapsources.txt" target="_blank"><b>this file</b></a> and copy it's content to the onlinemapsources.xml file.</li>
</ul>




<!--
<div style="width: 100%; height: 100%; margin: 0 auto;">
<div style="position: relative; padding-top: 60%;"><iframe style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://edrap.github.io/leaflet/abruzzomap.html" frameborder="0" allowfullscreen="allowfullscreen"></iframe></div>
</div>
-->


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
