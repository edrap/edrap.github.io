function leaflet_alert() {
    alert("Clicking OK the user takes full responsibility of using this map.");
}

function leaflet_alert2() {
  var txt;
  var r = confirm("By clicking OK the user takes full responsibility of using this map and absolves the map developper of any responsibility.");
  if (r != true) {
      window.open('https://edrap.github.io/abruzzomap');
  }
}
