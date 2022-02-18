function leaflet_alert() {
    var newLine = "\r\n"
    var brows = "The map was tested on Firefox and Safari. To use it on Chrome you must allow mixed contents."
    var resp = "The users take full responsibility for using the map for outdoor activities."
    msg = brows + newLine + newLine + resp;
    alert(msg);
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

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                //alert(allText);
            }
        }
    }
    rawFile.send(null);
}
