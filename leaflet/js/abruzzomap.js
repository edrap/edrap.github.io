$(document).ready(function () {

  // ----------- MAPS LAYERS -----------
  // var mappos = L.Permalink.getMapLocation();
  // var map = L.map('map', {
  //   center: mappos.center,
  //   zoom: mappos.zoom
  // });

  var map = L.map('map', {
    attributionControl: false,
    center: [42.3469,13.39817],
    zoom: 14
  });

  var mapy_winter = L.tileLayer('https://mapserver.mapy.cz/winter-m/{z}-{x}-{y}', {
    maxZoom: 16,
    maxNativeZoom: 18,
    minNativeZoom: 3,
    minZoom: 10,
    attribution: '&copy; <a href="https://mapy.cz" target="_blank">Mapy</a>'
  });
  
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

  //var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //  maxZoom: 16,
  //  maxNativeZoom: 18,
  //  minNativeZoom: 3,
  //  minZoom: 10,
  //  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  //});
  
  var osm = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
    maxZoom: 16,
    maxNativeZoom: 18,
    minNativeZoom: 3,
    minZoom: 10,
    attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  }).addTo(map);

  //var osm = L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
  //  maxZoom: 16,
  //  maxNativeZoom: 18,
  //  minNativeZoom: 3,
  //  minZoom: 10,
  //  attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
  //});
  
  var googleHybrid = L.tileLayer('https://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 16,
    maxNativeZoom: 20,
    minNativeZoom: 3,
    minZoom: 10,
    subdomains:['mt0','mt1','mt2','mt3'],
    attribution: '&copy; <a href="https://www.google.com" target="_blank">Google</a>'
  });

  //var igm25k_reg = L.tileLayer.wms('https://tinyurl.com/4xvpkp3y', {
  var igm25k_reg = L.tileLayer.wms('http://geocatalogo.regione.abruzzo.it/erdas-iws/ogc/wms/', {
    layers: 'Mosaici_UTM-WGS84_IGM25k_WGS84.ecw',
    maxZoom: 16,
    minZoom: 10,
    attribution: '&copy; <a href="http://geoportale.regione.abruzzo.it/Cartanet/catalogo/cartografia-di-sfondo-raster/carta-topografica-igm-scala-1-25.000" target="_blank">Geoportale Regione Abruzzo</a>'
  });

  //var igm25k_min = L.tileLayer.wms('https://tinyurl.com/mrtec773', {
  var igm25k_min = L.tileLayer.wms('http://wms.pcn.minambiente.it/ogc?map=/ms_ogc/WMS_v1.3/raster/IGM_25000.map', {
    layers: 'CB.IGM25000.33',
    maxZoom: 16,
    minZoom: 10,
    attribution: '&copy; <a href="http://www.pcn.minambiente.it/geoportal/catalog/search/resource/details.page?uuid={E0BD50F3-2238-41B5-8F78-AE3593BB1B3F}" target="_blank">Geoportale Nazionale</a>'
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

  //var tcdlayer = L.tileLayer('https://www.meteoaquilano.it/abruzzo/tcd_abr/{z}/{x}/{y}.png', {
  //  //transparent: true,
  //  opacity: 0.3,
  //  maxZoom: 16,
  //  maxNativeZoom: 16,
  //  minNativeZoom: 10,
  //  minZoom: 10,
  //  tms: true,
  //  attribution: '&copy; <a href="https://land.copernicus.eu/pan-european/high-resolution-layers/forests/tree-cover-density" target="_blank">Copernicus</a>'
  // }).addTo(map);

  // var options_fsc = {
  //   maxZoom: 16,
  //   minZoom: 10,
  //   debug: 0,
  //   style: (properties) => {
  //       if (properties.SDATA == 100) {
  //         return {fillColor:"#1f78b4", stroke: false, weight: 0.1, fillOpacity:0.4, clickable:false};
  //       }
  //       else if (properties.SDATA == 205) {
  //         return {fillColor:"#7f7f7f", stroke: false, weight: 0.1, fillOpacity:0.6, clickable:false};
  //       }
  //       else if (properties.SDATA == 255) {
  //        return {fillColor:"#000000", stroke: false, weight: 0.1, fillOpacity:0.6, clickable:false};
  //       }
  //   },
  //   attribution: '&copy; <a href="https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring/snow-products" target="_blank">Copernicus</a>'
  // };
  // var sca = L.geoJson.vt(data_fsc, options_fsc);
  // var sca2 = L.geoJson.vt(data_gfsc, options_fsc);

  var sca = L.tileLayer('', {
    attribution: '&copy; <a href="https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring/snow-products" target="_blank">Copernicus</a>'
  });
  
  //var url_to_geotiff_file = "https://github.com/edrap/edrap.github.io/raw/master/leaflet/fsc_33_merged.tif";
  var url_to_geotiff_file = "https://edrap.github.io/leaflet/fsc_33_merged.tif";

  fetch(url_to_geotiff_file)
    .then(response => response.arrayBuffer())
    .then(arrayBuffer => {
      parseGeoraster(arrayBuffer).then(georaster => {
        console.log("georaster:", georaster);

        /*
            GeoRasterLayer is an extension of GridLayer,
            which means can use GridLayer options like opacity.
            Just make sure to include the georaster option!
            http://leafletjs.com/reference-1.2.0.html#gridlayer
        */
        var sca = new GeoRasterLayer({
            georaster: georaster,
            opacity: 0.4,
            resolution: 256,
            maxZoom: 16,
            minZoom: 10,
            pixelValuesToColorFn: function(pixelValues) {
              var pixelValue = pixelValues[0]; // there's just one band in this raster

              // if there's zero wind, don't return a color
              if (pixelValue == 0) {
                var color=null;
              }
              else if (pixelValue > 0 && pixelValue <= 100) {
                var color="#1f78b4";
              }
              else if (pixelValue == 205) {
                var color="#7f7f7f";
              }
              else if (pixelValue == 255) {
                var color="#000000";
              }

              return color;
            },
        });
        //sca.addTo(map);

        //map.fitBounds(sca.getBounds());

        map.removeControl(layersControl);

        // --------- HASHTAG ---------
        //var allMapLayers = {'mpw':mapy_winter, '4um':baselayer2, 'otm':baselayer, 'igm1':igm25k_min, 'igm2':igm25k_reg, 'gh':googleHybrid, 'tc':tcdlayer, 'hs':hillshlayer, 'sc':slopelayer, 'sp':pistelayer, 'uf':userFeatures};
        var allMapLayers = {'lf':gpsFeatures, 'mpw':mapy_winter, 'osm':osm, '4um':baselayer2, 'otm':baselayer, 'gh':googleHybrid, 'tc':tcdlayer, 'hs':hillshlayer, 'sc':slopelayer, 'sa':sca, 'va':avalanches_va, 'vf':avalanches_vf, 'sp':pistelayer, 'uf':userFeatures, 'igm1':igm25k_min, 'igm2':igm25k_reg};

        // ----------- LAYERS ----------
        // var baseMaps = {'Mapy Winter':mapy_winter, '4UMaps':baselayer2, 'OpenTopoMap':baselayer, 'Igm25k Min':igm25k_min, 'Igm25k Reg':igm25k_reg, 'Google Hybrid':googleHybrid};
        var baseMaps = {'Mapy Winter':mapy_winter, '4UMaps':baselayer2, 'OpenTopoMap':baselayer, 'CyclOSM':osm, 'Google Hybrid':googleHybrid, 'IGM Italia':igm25k_min, 'IGM Abruzzo':igm25k_reg};
        var overlayMaps = {'Snow cover':sca, 'Tree cover':tcdlayer, 'Hillshade':hillshlayer, 'C.L.P.V. VA':avalanches_va, 'C.L.P.V. VF':avalanches_vf, 'Slope class':slopelayer, 'Ski Piste':pistelayer, 'User features':userFeatures};        
        
        L.control.layers(baseMaps, overlayMaps, {position: 'topright'}).addTo(map);
        
        alert("Snow cover layer ready to use!")
        
    });
  });

  var tcdlayer = L.esri.imageMapLayer({
    //url: "https://image.discomap.eea.europa.eu/arcgis/rest/services/GioLandPublic/HRL_TreeCoverDensity_2018/ImageServer",
    url: "https://image.discomap.eea.europa.eu/arcgis/rest/services/GioLandPublic/HRL_DominantLeafType_2018/ImageServer",
    opacity: 0.25,
    maxZoom: 16,
    maxNativeZoom: 16,
    minNativeZoom: 10,
    minZoom: 10,
    attribution: '&copy; <a href="https://land.copernicus.eu/pan-european/high-resolution-layers/forests/dominant-leaf-type" target="_blank">Copernicus</a>'
    //format: "jpgpng" // server exports in either jpg or png format
  }).addTo(map).bringToBack();

 //var contours = L.tileLayer.wms('https://ows.terrestris.de/osm/service?', {
 //   layers: 'SRTM30-Contour',
 //   maxZoom: 16,
 //   minZoom: 10,
 //   minNativeZoom: 10,
 //   transparent: true,
 //   opacity: 0.2,
 //   format: 'image/png',
 //   attribution: '&copy; <a href="https://www.terrestris.de" target="_blank">Terrestris</a>'
 // });
  
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

  // var hillshlayer = L.tileLayer('https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer/tile/{z}/{y}/{x}.png', {
  //   transparent: true,
  //   opacity: 1.,
  //   maxZoom: 16,
  //   maxNativeZoom: 16,
  //   minNativeZoom: 10,
  //   minZoom: 10,
  //   tms: false,
  //   attribution: '&copy; <a href="https://tinitaly.pi.ingv.it/" target="_blank">Tinitaly</a>'
  // }).addTo(map);


 //var avalanches_va = L.tileLayer.wms('https://tinyurl.com/yf6t2xrv', {
 var avalanches_va = L.tileLayer.wms('http://catasto.regione.abruzzo.it:6080/arcgis/services/Protezione_Civile/CLPV_Abruzzo/MapServer/WMSServer', {
    layers: 'VA',
    maxZoom: 16,
    minZoom: 10,
    minNativeZoom: 13,
    transparent: true,
    format: 'image/png',
    attribution: '&copy; <a href="http://geoportale.regione.abruzzo.it/Cartanet/catalogo/protezione-civile/c.l.p.v.-abruzzo" target="_blank">Geoportale Regione Abruzzo</a>'
  });

 //var avalanches_vf = L.tileLayer.wms('https://tinyurl.com/yf6t2xrv', {
 var avalanches_vf = L.tileLayer.wms('http://catasto.regione.abruzzo.it:6080/arcgis/services/Protezione_Civile/CLPV_Abruzzo/MapServer/WMSServer', {
    layers: 'VF',
    maxZoom: 16,
    minZoom: 10,
    minNativeZoom: 13,
    transparent: true,
    format: 'image/png',
    attribution: '&copy; <a href="http://geoportale.regione.abruzzo.it/Cartanet/catalogo/protezione-civile/c.l.p.v.-abruzzo" target="_blank">Geoportale Regione Abruzzo</a>'
  });

  // var avalanches = new L.GeoJSON.AJAX("https://edrap.github.io/leaflet/shapefiles/out.geojson", {
  //   dataType:"json",
  //   onEachFeature: onEachFeature,
  //   style: {color:"blue", weight:1, opacity:.6, fill:true, fillColor:"blue", fillOpacity:.4, clickable:true},
  // });
  // avalanches.getAttribution = function() { return '&copy; <a href="https://opendata.regione.abruzzo.it/content/carta-storica-della-valanghe" target="_blank">Opendata Regione Abruzzo</a>'; };
  // avalanches.addTo(map).bringToFront();
  // // avalanches.on('data:loaded', function() {
  // //   avalanches.addTo(map).bringToFront();
  // // })

  // var avalanches = L.featureGroup();
  // // Load kml file
  // fetch('https://edrap.github.io/leaflet/shapefiles/out.kml')
  //    .then(res => res.text())
  //    .then(kmltext => {
  //        // Create new kml overlay
  //        const parser = new DOMParser();
  //        const kml = parser.parseFromString(kmltext, 'text/xml');
  //        const track = new L.KML(kml);
  //        avalanches.addLayer(track);
  //
  //        // Adjust map to show the kml
  //        //const bounds = track.getBounds();
  //        //map.fitBounds(bounds);
  //    });
  // avalanches.getAttribution = function() { return '&copy; <a href="https://opendata.regione.abruzzo.it/content/carta-storica-della-valanghe" target="_blank">Opendata Regione Abruzzo</a>'; };
  // avalanches.addTo(map);

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
  var allMapLayers = {'lf':gpsFeatures, 'mpw':mapy_winter, 'osm':osm, '4um':baselayer2, 'otm':baselayer, 'gh':googleHybrid, 'tc':tcdlayer, 'hs':hillshlayer, 'sc':slopelayer, 'sa':sca, 'va':avalanches_va, 'vf':avalanches_vf, 'sp':pistelayer, 'uf':userFeatures, 'igm1':igm25k_min, 'igm2':igm25k_reg};
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
  //L.Control.FileLayerLoad.LABEL = '<img class="icon" src="https://edrap.github.io/leaflet/images/folder.svg" alt="file icon"/>';
  var load = L.Control.fileLayerLoad({
    // Allows you to use a customized version of L.geoJson.
    // For example if you are using the Proj4Leaflet leaflet plugin,
    // you can pass L.Proj.geoJson and load the files into the
    // L.Proj.GeoJson instead of the L.geoJson.
    layer: L.geoJson,
    // See http://leafletjs.com/reference.html#geojson-options
    //layerOptions: {style: {color:'red'}},
    //layerOptions: {style: {color:"red", weight:5, opacity:.6}},
    layerOptions: {
      style: function(feature, layer) {
        console.log(feature)
        if (feature.geometry.type == "Polygon") {
          //return {color:"#1f78b4", weight:0, opacity:.4, clickable:false};
          if (feature.properties.SDATA == 100) {
            return {fillColor:"#1f78b4", stroke: false, fillOpacity:0.3, clickable:false};
          }
          else if (feature.properties.SDATA == 205) {
            return {fillColor:"#7f7f7f", stroke: false, fillOpacity:0.3, clickable:false};
          }
          else if (feature.properties.SDATA == 255) {
           return {fillColor:"#000000", stroke: false, fillOpacity:0.3, clickable:false};
          }
          else {
            return {color:"red", weight:5, opacity:.6, fill:true, fillColor:"red", fillOpacity:.2, clickable:true};
          }
        }
        else {
          //return {color:"red", weight:5, opacity:.6, fill:true, fillColor:"red", fillOpacity:.2, clickable:true};
          return {color:"red", weight:5, opacity:.6, fill:false, clickable:true};
        };
      //style: {color:"red", weight:5, opacity:.6, clickable:true},
      },
      onEachFeature: onEachLoadedFeature,
    },
    //layerOptions: {style: {color:"red",weight:4,opacity:.5,fill:!0,fillColor:null,fillOpacity:.2}},
    // Add to map after loading (default: true) ?
    addToMap: true,
    // File size limit in kb (default: 1024) ?
    fileSizeLimit: 102400,
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
    draw: {
        polygon: true,
        circle: false,
        rectangle: false
    },
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
        // var gpx = togpx(data);
        var kml = tokml(data);
        // Stringify GPX, KML, GeoJson
        // var convertedData = 'text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(data));
        // var convertedData = 'application/gpx+xml;charset=utf-8,' + encodeURIComponent(gpx);
        var convertedData = 'application/xml;charset=utf-8,' + encodeURIComponent(kml);
        // Create export
        var exp_feat = document.createElement('a');
        exp_feat.setAttribute('href', 'data:' + convertedData);
        // exp_feat.setAttribute('download', 'data.geojson');
        // exp_feat.setAttribute('download', 'data.gpx');
        exp_feat.setAttribute('download', 'data.kml');
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
  var baseMaps = {'Mapy Winter':mapy_winter, '4UMaps':baselayer2, 'OpenTopoMap':baselayer, 'OSM':osm, 'Google Hybrid':googleHybrid, 'IGM Italia':igm25k_min, 'IGM Abruzzo':igm25k_reg};
  var overlayMaps = {'Snow cover':sca, 'Tree cover':tcdlayer, 'Hillshade':hillshlayer, 'C.L.P.V. VA':avalanches_va, 'C.L.P.V. VF':avalanches_vf, 'Slope class':slopelayer, 'Ski Piste':pistelayer, 'User features':userFeatures};
  var layersControl = L.control.layers(baseMaps, overlayMaps, {position: 'topright'}).addTo(map);
  
  // ----------- ATTRIBUTION -----------
  L.control.attribution({
    position: 'bottomleft'
  }).addTo(map);

  // ----------- SCALE BAR -----------
  L.control.scale({imperial: false, position: 'bottomleft'}).addTo(map);
  
  // ----------- LEGEND -----------
  function getColor(d) {
    return d > 45   ? '#b546fc' :
    d > 40   ? '#fb322f' :
    d > 35   ? '#fdac2b' :
    d > 30   ? '#efe72e' :
    '#FFEDA0';
  }
  // function getPercent(d) {
  //   return d > 80   ? '#246627' :
  //   d > 60   ? '#3a8240' :
  //   d > 40   ? '#55a05a' :
  //   d > 20   ? '#78c376' :
  //   d > 1    ? '#a3ec9a' :
  //   '#FFEDA0';
  // }
  var legend = L.control({position: 'bottomleft'});
  legend.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'info legend'),

    // percent = [1, 20, 40, 60, 80];
    // labels = ['<strong> Tree density </strong>'];
    //   // loop through our density intervals and generate a label with a colored square for each interval
    //   div.innerHTML += '<br>' + '<br>' + labels + '<br>';
    //   for (var i = 0; i < percent.length; i++) {
    //     div.innerHTML +=
    //     '<i style="background:' + getPercent(percent[i] + 1) + '"></i> ' +
    //     percent[i] + '%' + (percent[i + 1] ? '&ndash;' + percent[i + 1] + '%' + '<br>' : '+');
    //   }

    sca_legend = ["Snow", "Clouds","No data"];
    sca_legend_colors = ["#1f78b4", "#7f7f7f", "#000000"]
    labels = ['<strong> Snow cover </strong>'];
      // loop through our density intervals and generate a label with a colored square for each interval
    div.innerHTML = labels + '<br>';
    for (var i = 0; i < sca_legend.length; i++) {
      div.innerHTML +=
      '<i style="background:' + sca_legend_colors[i] + '"></i> ' +
      sca_legend[i] + '<br>';
    }

    tc_dlt = ["Broadleaved", "Coniferous"];
    tc_dlt_colors = ["#469e4a", "#1c5c24"]
    labels = ['<strong> Leaf type </strong>'];
      // loop through our density intervals and generate a label with a colored square for each interval
    div.innerHTML += labels + '<br>';
    for (var i = 0; i < tc_dlt.length; i++) {
      div.innerHTML +=
      '<i style="background:' + tc_dlt_colors[i] + '"></i> ' +
      tc_dlt[i] + '<br>';
    }

    grades = [30, 35, 40, 45];
    labels = ['<strong> Slope class </strong>'];
    // loop through our density intervals and generate a label with a colored square for each interval
    div.innerHTML += labels + '<br>';
    for (var i = 0; i < grades.length; i++) {
      div.innerHTML +=
      '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
      grades[i] + '°' + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '°' + '<br>' : '+');
    }

    return div;

  };
  legend.addTo(map);

})
