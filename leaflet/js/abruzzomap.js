$(document).ready(function () {

  // ----------- MAPS LAYERS -----------
  // var mappos = L.Permalink.getMapLocation();
  // var map = L.map('map', {
  //   center: mappos.center,
  //   zoom: mappos.zoom
  // });

  var map = L.map('map', {
    center: [42.3469,13.39817],
    zoom: 14
  });

  var mapy_winter = L.tileLayer('https://mapserver.mapy.cz/winter-m/{z}-{x}-{y}', {
    maxZoom: 16,
    maxNativeZoom: 18,
    minNativeZoom: 3,
    minZoom: 10,
    attribution: '&copy; <a href="https://mapy.cz" target="_blank">Mapy</a>'
  }).addTo(map);

  var baselayer = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
    maxZoom: 16,
    maxNativeZoom: 17,
    minNativeZoom: 5,
    minZoom: 10,
    attribution: '&copy; <a href="https://opentopomap.org" target="_blank">OpenTopoMap</a>'
  });

  var baselayer2 = L.tileLayer('https://4umaps.com/{z}/{x}/{y}.png', {
    maxZoom: 16,
    maxNativeZoom: 15,
    minNativeZoom: 2,
    minZoom: 10,
    attribution: '&copy; <a href="https://www.4umaps.com" target="_blank">4UMaps</a>'
  });

  var googleHybrid = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 16,
    maxNativeZoom: 20,
    minNativeZoom: 3,
    minZoom: 10,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '&copy; <a href="https://www.google.com" target="_blank">Google</a>'
  });

  // var igm25k_min = L.tileLayer('https://www.meteoaquilano.it/abruzzo/igm25k_min_abr/{z}/{x}/{y}.png', {
  //   //transparent: true,
  //   maxZoom: 16,
  //   maxNativeZoom: 16,
  //   minNativeZoom: 12,
  //   minZoom: 10,
  //   tms: true,
  //   attribution: '&copy; <a href="https://www.pcn.minambiente.it/geoportal/catalog/search/resource/details.page?uuid={E0BD50F3-2238-41B5-8F78-AE3593BB1B3F}" target="_blank">Geoportale Nazionale</a>'
  // });
  //
  // var igm25k_reg = L.tileLayer('https://www.meteoaquilano.it/abruzzo/igm25k_reg_abr/{z}/{x}/{y}.png', {
  //   //transparent: true,
  //   maxZoom: 16,
  //   maxNativeZoom: 16,
  //   minNativeZoom: 10,
  //   minZoom: 10,
  //   tms: true,
  //   attribution: '&copy; <a href="https://geoportale.regione.abruzzo.it/Cartanet/catalogo/cartografia-di-sfondo-raster/carta-topografica-igm-scala-1-25.000" target="_blank">Geoportale Regione Abruzzo</a>'
  // });

  // var igm25k_reg = L.tileLayer.wms('http://geocatalogo.regione.abruzzo.it/erdas-iws/ogc/wms/?', {
  //   layers: 'Mosaici_UTM-WGS84_IGM25k_WGS84.ecw',
  //   maxZoom: 16,
  //   minZoom: 10,
  //   attribution: '&copy; <a href="http://geoportale.regione.abruzzo.it/Cartanet" target="_blank">Geoportale Regione Abruzzo</a>'
  // }).addTo(map);

  var tcdlayer = L.tileLayer('https://www.meteoaquilano.it/abruzzo/tcd_abr/{z}/{x}/{y}.png', {
    //transparent: true,
    opacity: 0.3,
    maxZoom: 16,
    maxNativeZoom: 16,
    minNativeZoom: 10,
    minZoom: 10,
    tms: true,
    attribution: '&copy; <a href="https://land.copernicus.eu/pan-european/high-resolution-layers/forests/tree-cover-density" target="_blank">Copernicus</a>'
  }).addTo(map);

  var hillshlayer = L.tileLayer('https://www.meteoaquilano.it/abruzzo/ingv_dem10m_hillshade_abr/{z}/{x}/{y}.png', {
    //transparent: true,
    opacity: 0.2,
    maxZoom: 16,
    maxNativeZoom: 16,
    minNativeZoom: 10,
    minZoom: 10,
    tms: true,
    attribution: '&copy; <a href="https://tinitaly.pi.ingv.it/" target="_blank">Tinitaly</a>'
  }).addTo(map);

  var slopelayer = L.tileLayer('https://www.meteoaquilano.it/abruzzo/ingv_dem10m_slope_abr/{z}/{x}/{y}.png', {
    //transparent: true,
    opacity: 0.4,
    maxZoom: 16,
    maxNativeZoom: 16,
    minNativeZoom: 10,
    minZoom: 10,
    tms: true,
    attribution: '&copy; <a href="https://tinitaly.pi.ingv.it/" target="_blank">Tinitaly</a>'
  }).addTo(map);

  var pistelayer = L.tileLayer('https://www.opensnowmap.org/tiles-pistes/{z}/{x}/{y}.png', {
    maxZoom: 16,
    maxNativeZoom: 18,
    minNativeZoom: 3,
    minZoom: 10,
    attribution: '&copy; <a href="https://www.opensnowmap.org/" target="_blank">OpenSnowMap</a>'
  }).addTo(map);

  var userFeatures = L.featureGroup().addTo(map);
  var gpsFeatures = L.featureGroup().addTo(map);

  // --------- HASHTAG ---------
  //var allMapLayers = {'mpw':mapy_winter, '4um':baselayer2, 'otm':baselayer, 'igm1':igm25k_min, 'igm2':igm25k_reg, 'gh':googleHybrid, 'tc':tcdlayer, 'hs':hillshlayer, 'sc':slopelayer, 'sp':pistelayer, 'uf':userFeatures};
  var allMapLayers = {'lf':gpsFeatures, 'mpw':mapy_winter, '4um':baselayer2, 'otm':baselayer, 'gh':googleHybrid, 'tc':tcdlayer, 'hs':hillshlayer, 'sc':slopelayer, 'sp':pistelayer, 'uf':userFeatures};
  L.hash(map, allMapLayers);
  // L.Permalink.setup(map);

  //----------- INFO -----------
  L.easyButton({
    states: [{
      icon: '<img style="width:10px;" src="https://raw.githubusercontent.com/edrap/edrap.github.io/master/leaflet/images/information.png">',
      title: 'Go to description page',
      onClick: function(){
        //var export = document.createElement('export');
        // Extract GeoJson from featureGroup
        window.open('https://edrap.github.io/abruzzomap', '_blank');
      }
    }]
  }).addTo(map);

  //// ----------- PRINT MAP -----------
  //L.control.browserPrint().addTo(map);

  // ----------- LOAD FEATURES -----------
  var load = L.Control.fileLayerLoad({
    // Allows you to use a customized version of L.geoJson.
    // For example if you are using the Proj4Leaflet leaflet plugin,
    // you can pass L.Proj.geoJson and load the files into the
    // L.Proj.GeoJson instead of the L.geoJson.
    layer: L.geoJson,
    // See http://leafletjs.com/reference.html#geojson-options
    //layerOptions: {style: {color:'red'}},
    layerOptions: {style: {color:"red",weight:4,opacity:.3,fill:!0,fillColor:null,fillOpacity:.1}},
    // Add to map after loading (default: true) ?
    addToMap: true,
    // File size limit in kb (default: 1024) ?
    fileSizeLimit: 1024,
    // Restrict accepted file formats (default: .geojson, .kml, and .gpx) ?
    formats: [
      '.geojson',
      '.gpx',
      '.kml'
    ]
  }).addTo(map);
  load.loader.on('data:loaded', function (e) {
    // Add to map layer switcher
    userFeatures.addLayer(e.layer);
  });

  // ----------- DRAW FEATURES -----------
  var drawControl = new L.Control.Draw({
    edit: {
      featureGroup: userFeatures
    }
  }).addTo(map);
  map.on('draw:created', function(e) {
    // Each time a feaute is created, it's added to the over arching feature group
    userFeatures.addLayer(e.layer);
  });

  // ----------- DOWNLOAD FEATURES -----------
  L.easyButton({
    states: [{
      icon: '<img style="width:10px;" src="https://edrap.github.io/leaflet/images/download.png">',
      title: 'Export features to GPX',
      onClick: function(e) {
        // Extract GeoJson from featureGroup
        var data = userFeatures.toGeoJSON();
        // var kml = tokml(data);
        var gpx = togpx(data);
        // Stringify GPX, KML, GeoJson
        var convertedData = 'application/gpx+xml;charset=utf-8,' + encodeURIComponent(gpx);
        // var convertedData = 'application/xml;charset=utf-8,' + encodeURIComponent(kml);
        // var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
        // Create export
        var exp_feat = document.createElement('a');
        exp_feat.setAttribute('href', 'data:' + convertedData);
        // exp_feat.setAttribute('download', 'data.geojson');
        exp_feat.setAttribute('download', 'data.gpx');
        exp_feat.style.display = 'none';
        document.body.appendChild(exp_feat);
        exp_feat.click();
        document.body.removeChild(exp_feat);
      }
    }]
  }).addTo(map);

  // ----------- FULLSCREEN -----------
  L.control.fullscreen({position: 'topright'}).addTo(map);

  //----------- GET GPS LOCATION -----------
  L.control.locate({
    keepCurrentZoomLevel: 'false',
    position: 'topright',
    layer: gpsFeatures,
    setView: 'always'
  }).addTo(map);

  // ----------- SEARCH BOX -----------
  var geocoder = new L.Control.geocoder({position: "topright", collapsed: true, showResultIcons: false});
  map.addControl(geocoder);
  geocoder.markGeocode = function(result) {
    map.fitBounds(result.bbox);
  };

  // ----------- LAYERS ----------
  // var baseMaps = {'Mapy Winter':mapy_winter, '4UMaps':baselayer2, 'OpenTopoMap':baselayer, 'Igm25k Min':igm25k_min, 'Igm25k Reg':igm25k_reg, 'Google Hybrid':googleHybrid};
  var baseMaps = {'Mapy Winter':mapy_winter, '4UMaps':baselayer2, 'OpenTopoMap':baselayer, 'Google Hybrid':googleHybrid};
  var overlayMaps = {'Tree cover':tcdlayer, 'Hillshade':hillshlayer, 'Slope class':slopelayer, 'Ski Piste':pistelayer, 'User features':userFeatures};
  L.control.layers(baseMaps, overlayMaps, {position: 'topright'}).addTo(map);

  // ----------- SCALE BAR -----------
  L.control.scale({imperial: false, position: 'bottomright'}).addTo(map);

  // ----------- LEGEND -----------
  function getColor(d) {
    return d > 45   ? '#b546fc' :
    d > 40   ? '#fb322f' :
    d > 35   ? '#fdac2b' :
    d > 30   ? '#efe72e' :
    '#FFEDA0';
  }
  function getPercent(d) {
    return d > 80   ? '#246627' :
    d > 60   ? '#3a8240' :
    d > 40   ? '#55a05a' :
    d > 20   ? '#78c376' :
    d > 1    ? '#a3ec9a' :
    '#FFEDA0';
  }
  var legend = L.control({position: 'bottomright'});
  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),
    grades = [30, 35, 40, 45];
    labels = ['<strong> Slope class </strong>'];
    // loop through our density intervals and generate a label with a colored square for each interval
    div.innerHTML = labels + '<br>';
    for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
      '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
      grades[i] + '°' + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '°' + '<br>' : '+');
    }
    // percent = [1, 20, 40, 60, 80];
    // labels = ['<strong> Tree density </strong>'];
    //   // loop through our density intervals and generate a label with a colored square for each interval
    //   div.innerHTML += '<br>' + '<br>' + labels + '<br>';
    //   for (var i = 0; i < percent.length; i++) {
    //     div.innerHTML +=
    //     '<i style="background:' + getPercent(percent[i] + 1) + '"></i> ' +
    //     percent[i] + '%' + (percent[i + 1] ? '&ndash;' + percent[i + 1] + '%' + '<br>' : '+');
    //   }
    return div;
  };
  legend.addTo(map);

})