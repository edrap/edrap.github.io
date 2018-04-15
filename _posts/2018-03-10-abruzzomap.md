---
layout: single_post
title: "Abruzzo topographic map"
categories:
excerpt: "Winter activities in the montainous regions that experience snowfall and a seasonal snowcover..."
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
      <i class="fa fa-language" aria-hidden="true"></i> traduci questo post in <a href="{{ site.url }}{{ site.baseurl }}/posts_ita/2018-03-10-abruzzomap-ita"> <font color="#555555">italiano</font></a>.
    </p>
  {% endif %}
</header>
{% endunless %} 

<p style="text-align: justify;">
Winter activities in the montainous regions that experience snowfall and a seasonal snowcover are always affected by <b>avalanche risk</b>.

<p style="text-align: justify;">
The avalanche risk can be mitigated by a careful evaluation of the <b>snowpack</b> characteristics, <b>orography</b> and <b>tree cover</b> density.

<p style="text-align: justify;">
<b>Avalanche bulletins</b> of the <a href="http://www.meteomont.gov.it/infoMeteo/stampaBollettinoStampa.do?settore=D" target="_blank">Meteomont</a> service provide daily important informations about snowpack <b>stability</b> and dangerous elevations and the expositions. A careful evaluation of the avalanche bulletin can mitigate the risk during the tour, nevertheless it's fundamental to <b>observe</b> the snowpack during the tour, because it provides informations about the stability conditions right at the tour location.

<p style="text-align: justify;">
It's also important to know the orography and tree cover density at the tour location, because the <b>slope</b> and the <b>forest</b> density are key variables to asses the avalanche risk and have to be taken into account to <b>plan</b> the tour before starting it. The informations obtained <b>observing</b> the terrain and tree cover characteristics are also fundamental and have to be integrated with the ones obtained during the tour planning using the map.

<p style="text-align: justify;">
It's really useful to follow the <b>lessons</b> of the <a href="https://www.whiterisk.ch/it/" target="_blank">White Risk</a> portal to learn how to plan a mountain winter tour and how to behave during it.

<p style="text-align: justify;">
For the <b>Abruzzo</b> region it's possible to plan the tour online using a <a href="https://edrap.github.io/leaflet/abruzzomap.html" target="_blank"><b>topographic map</b></a> that includes a tree cover density laver, provided by <a href="https://land.copernicus.eu/pan-european/high-resolution-layers/forests/tree-cover-density" target="_blank">Copernicus</a> and a slope layer obtained from DEM provided by the <a href="http://tinitaly.pi.ingv.it/" target="_blank">Istituto NazionaIe di Geofisica e Vulcanologia</a>. These informations are represented on the map with a resolution of 20 meters for the tree cover and 10 meters for the slope classes, thus they're not representative of the terrain morphology at smaller scales, but they provide useful informations to plan tha tour. Is also crucial to observe the snowpack and terrain characteristics during the tour to obtain a more precise information.

<p style="text-align: justify;">
<b>The slope layer does not represent the terrain conditions at scales smaller than 10 meters, thus the use is up to the user who takes full responsibility for the risks involved.</b>

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
