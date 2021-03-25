var map;
function createMap() {
  map = L.map("map", {}).setView([48.5, 19.5], 8);

  var layers = getLayers();

  map.addLayer(layers.basemaps.maptiler);
  //createLayerControl(layers);

  L.control.scale().addTo(map);
  createMeasureTool();
  createOpacityTool();
  createTimeLine();
}

function getMap() {
  if (!map) {
    throw new Error("Map not created");
  }
  return map;
}
