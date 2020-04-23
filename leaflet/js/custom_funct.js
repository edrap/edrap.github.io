function leaflet_alert() {
    alert("The users take full responsibility for using the map for outdoor activities");
}

function onEachFeature(feature, layer) {
  //var popupContent = null;
  if (feature.properties && feature.properties.description) {
    //popupContent += feature.properties.description;
    popupContent = feature.properties.description;
  }
  layer.bindPopup(popupContent, {
    maxWidth: "200",
    maxHeight : "300",
    closeOnClick: true,
    closeButton: false,
    offset: [110, 10]
  });  
  //layer.bringToFront();
}

function onEachLoadedFeature(feature, layer) {
  //var popupContent = null;
  //console.log(feature)
  if (feature.properties && feature.properties.name) {
    //popupContent += feature.properties.description;
    popupContent = feature.properties.name;
  }
  layer.bindPopup(popupContent, {
    maxWidth: "200",
    maxHeight : "300",
    closeOnClick: true,
    closeButton: false,
    //offset: [10, 10]
  });
  //layer.bringToFront();
}
