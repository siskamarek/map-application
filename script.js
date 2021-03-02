createMap();

var layer;
function setLayer(layerName){
   
    layer=basemaps[layerName];

    return map.addLayer(layer);
   } ;


function toggleHidden(selector) {
   const optionsDiv = document.querySelector(selector);
   if (optionsDiv.hasAttribute('hidden')) {
      optionsDiv.removeAttribute('hidden');
      return;
   }

   optionsDiv.setAttribute('hidden', true);
}

function getSelectedValues(parent) {
   const checkboxes = document.querySelectorAll(`${parent} input[type="checkbox"]:checked`);
   const layerNames = Array.from(checkboxes).map(checkbox => checkbox.value);
   console.log(layerNames);
}
  