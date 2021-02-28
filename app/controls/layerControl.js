var layerControl;
function createLayerControl(layers) {
  layerControl = L.control
    .layers(
      {
        "podkladova mapa": layers.basemaps.maptiler,
        "ortofoto - UGKK": layers.basemaps.orthoUGKK,
        "ortofoto - Mapy.cz": layers.basemaps.mapyCZ,
        "SAZP":layers.basemaps.SAZP,
      },
      layers.overlays
    )
    .addTo(map);
  L.Control.Layers.include({
    getActiveOverlays: function () {
      // Create array for holding active layers
      var active = [];

      // Iterate all layers in control
      this._layers.forEach(function (obj) {
        // Check if it's an overlay and added to the map
        if (obj.overlay && getMap().hasLayer(obj.layer)) {
          // Push layer to active array
          active.push(obj.layer);
        }
      });

      // Return array
      return active;
    },
  });
}

function getLayerControl() {
  if (!layerControl) {
    throw new Error("Layer control not defined");
  }
  return layerControl;
}
