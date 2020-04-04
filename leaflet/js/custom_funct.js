function leaflet_alert() {
    alert("The users take full responsibility for using the map for outdoor activities");
}

function onEachFeature(feature, layer) {
  //var popupContent = null;
  if (feature.properties && feature.properties.description) {
    //popupContent += feature.properties.description;
    popupContent = feature.properties.description;
  }
  layer.bindPopup(popupContent, {maxWidth: "200", maxHeight : "300", closeOnClick: true, closeButton: false});
}
