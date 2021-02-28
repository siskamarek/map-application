var marker;

//point tool
function setView() {
  if (marker) {
    // marker.delete();
  }
  var x = document.getElementById("lat").value;
  var y = document.getElementById("long").value;
  //var form = document.getElementById('input');
  var map = getMap();
  marker = L.marker([x, y])
    .addTo(map)
    .bindPopup("lat" + x + "<br>long =" + y)
    .openPopup();
  document.getElementById("lat").value = "";
  document.getElementById("long").value = "";

  map.setView([x, y], 15);
}
