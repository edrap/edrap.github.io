function leaflet_alert() {
    alert("By using the map the user takes full responsibility of the risks involved.");
}

function leaflet_confirm() {
  var txt;
  var r = confirm("By clicking OK the user takes full responsibility of using this map and absolves the map developper of any responsibility.");
  if (r != true) {
      window.location = 'https://edrap.github.io/abruzzomap';
  }
}

function keyPress (e) {
    if(e.key === "Escape") {
        return false;
    }
}
