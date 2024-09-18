---
layout: single_post
title: "New snow height from RADAR"
categories:
excerpt: "Sono un appassionato di sci e scialpinismo, perciò non posso che adorare la neve, soprattutto quella fresca e polverosa. 
Perciò ogni volta che si verifica..."
tags: []
image:
 feature:
modified: 2024-01-25T21:00:00-00:00
author_profile: true
comments: true
read_time: true
share: true
published: true
visible: true
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

Sono un appassionato di sci e scialpinismo, perciò non posso che adorare la neve, soprattutto quella fresca e polverosa. 
Perciò ogni volta che si verifica una nevicata nella mia regione, guardo sempre le immagini delle webcam ed i dati riportati
dalle stazioni meteo per capire dove si trovi l'accumulo maggiore di neve fresca. 
Tuttavia, le stazioni meteorologiche automatiche e le webcam non offrono una visione su larga scala degli accumuli
di precipitazione al suolo.

Pertanto, ho implementato un metodo per la stima della quantità di neve fresca accumulata al suolo su scala regionale,
utilizzando solo dati radar meteorologici e misurazioni della temperatura dell'aria a 2 metri dalla superficie del terreno.
Le stime sono mostrate su delle mappe che riportano l'accumulo relativo alle 1, 3, 6, 12, 24, 48 e 72 ore antecedenti
alla pubblicazione delle mappe stesse, e vengono aggiornate ogni ora.

I dati per produrre le mappe sono forniti dall'<a href="https://dpc-radar.readthedocs.io/it/latest/api.html" target="_blank">API della Protezione Civile Italiana</a>,
e i risultati sono mostrati di seguito in questa pagina.

<p></p>
<a href="http://www.meteoaquilano.it/radar-sat/SRTHSN1.png"><img style="width:100%;" src="http://www.meteoaquilano.it/radar-sat/SRTHSN1.png" alt="">

<p></p>
<a href="http://www.meteoaquilano.it/radar-sat/SRTHSN3.png"><img style="width:100%;" src="http://www.meteoaquilano.it/radar-sat/SRTHSN3.png" alt="">

<p></p>
<a href="http://www.meteoaquilano.it/radar-sat/SRTHSN6.png"><img style="width:100%;" src="http://www.meteoaquilano.it/radar-sat/SRTHSN6.png" alt="">

<p></p>
<a href="http://www.meteoaquilano.it/radar-sat/SRTHSN12.png"><img style="width:100%;" src="http://www.meteoaquilano.it/radar-sat/SRTHSN12.png" alt="">

<p></p>
<a href="http://www.meteoaquilano.it/radar-sat/SRTHSN24.png"><img style="width:100%;" src="http://www.meteoaquilano.it/radar-sat/SRTHSN24.png" alt="">

<p></p>
<a href="http://www.meteoaquilano.it/radar-sat/SRTHSN48.png"><img style="width:100%;" src="http://www.meteoaquilano.it/radar-sat/SRTHSN48.png" alt="">

<p></p>
<a href="http://www.meteoaquilano.it/radar-sat/SRTHSN72.png"><img style="width:100%;" src="http://www.meteoaquilano.it/radar-sat/SRTHSN72.png" alt="">

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
