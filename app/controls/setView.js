var marker;

//point tool
function handleSetView(event) {
  event.preventDefault();
  if (marker) {
    getMap().removeLayer(marker)
  };
 
  var x = document.getElementById("lat").value;
  var y = document.getElementById("long").value; 

  var map = getMap();

  marker = L.marker([x, y])
    .addTo(map)
    .bindPopup("Latitude = " + x + "°" + "<br>Longitude = " + y + "°" )
    .openPopup();

  document.getElementById("lat").value = "";
  document.getElementById("long").value = "";

  map.setView([x, y], 10);
  
}
