function createOpacityTool() {
  document.getElementById("opacity").addEventListener("change", (e) => {
    var opacityVal = e.target.value;
    //var layerControl = getLayerControl();
    //var activeOverlays = layerControl.getActiveOverlays();
    
    //activeOverlays.forEach((activeOverlay) => {
      activeOverlayMap.setOpacity(opacityVal);
    //});
  });
}
