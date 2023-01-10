function fetch_fsc(url, colors) {
  fetch(url)
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
                var color=colors[0];
              }
              else if (pixelValue == 205) {
                var color=colors[1];
              }
              else if (pixelValue == 255) {
                var color=colors[2];
              }

              return color;
            },
        });
        //sca.addTo(map);
        
        return sca;
        
        //map.fitBounds(sca.getBounds());

        //reloadMapControl();
        
    });
  });
};

function fetch_hs(url) {
  fetch(url)
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
        var hs = new GeoRasterLayer({
            georaster: georaster,
            opacity: 0.6,
            resolution: 256,
            maxZoom: 16,
            minZoom: 10,
            pixelValuesToColorFn: function(pixelValues) {
              var pixelValue = pixelValues[0]; // there's just one band in this raster

              // if there's zero wind, don't return a color
              if (pixelValue < 1) {
                var color=null;
              }
              else if (pixelValue >= 1 && pixelValue < 10) {
                var color=colors[0];
              }
              else if (pixelValue >= 10 && pixelValue < 30) {
                var color=colors[1];
              }
              else if (pixelValue >= 30 && pixelValue < 50) {
                var color=colors[2];
              }
              else if (pixelValue >= 50) {
                var color=colors[3];
              }
              
              return color;
            },
        });
        //sca.addTo(map);
        
        return hs;

        //map.fitBounds(sca.getBounds());

        //reloadMapControl();
        
    });
  });
};

function reloadMapControl() {

  map.removeControl(layersControl);

  // --------- HASHTAG ---------
  //var allMapLayers = {'mpw':mapy_winter, '4um':baselayer2, 'otm':baselayer, 'igm1':igm25k_min, 'igm2':igm25k_reg, 'gh':googleHybrid, 'tc':tcdlayer, 'hs':hillshlayer, 'sc':slopelayer, 'sp':pistelayer, 'uf':userFeatures};
  var allMapLayers = {'lf':gpsFeatures, 'mpw':mapy_winter, 'osm':osm, '4um':baselayer2, 'otm':baselayer, 'gh':googleHybrid, 'tc':tcdlayer, 'hs':hillshlayer, 'sc':slopelayer, 'sa':sca, 'va':avalanches_va, 'vf':avalanches_vf, 'sp':pistelayer, 'uf':userFeatures, 'igm1':igm25k_min, 'igm2':igm25k_reg, 'hs24':hs24, 'hs48':hs48, 'hs72':hs72};

  // ----------- LAYERS ----------
  // var baseMaps = {'Mapy Winter':mapy_winter, '4UMaps':baselayer2, 'OpenTopoMap':baselayer, 'Igm25k Min':igm25k_min, 'Igm25k Reg':igm25k_reg, 'Google Hybrid':googleHybrid};
  var baseMaps = {'Mapy Winter':mapy_winter, '4UMaps':baselayer2, 'OpenTopoMap':baselayer, 'CyclOSM':osm, 'Google Hybrid':googleHybrid, 'IGM Italia':igm25k_min, 'IGM Abruzzo':igm25k_reg};
  var overlayMaps = {'Snow cover':sca, 'New snow 24H':hs24, 'New snow 48H':hs48, 'New snow 72H':hs72, 'Tree cover':tcdlayer, 'Hillshade':hillshlayer, 'C.L.P.V. VA':avalanches_va, 'C.L.P.V. VF':avalanches_vf, 'Slope class':slopelayer, 'Ski Piste':pistelayer, 'User features':userFeatures};        

  L.control.layers(baseMaps, overlayMaps, {position: 'topright'}).addTo(map);

  //alert("Snow cover layer ready to use!")

};

