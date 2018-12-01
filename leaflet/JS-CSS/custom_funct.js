function leaflet_alert() {
    alert("Clicking OK the user takes full responsibility of using this map.");
}

function leaflet_alert2() {
  var txt;
  var r = confirm("Clicking OK the user takes full responsibility of using this map.");
  if (r != true) {
      txt = "You pressed Cancel";
  }
}
