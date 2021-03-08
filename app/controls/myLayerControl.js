function setLayer(layerName){
    let activelayer
    //map.removeLayer(activelayer);
    activelayer=basemaps[layerName];
    document.getElementById(layerName).id = ("selected");
    map.addLayer(activelayer);
    
   };
    
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
    //const unchecked = document.querySelectorAll(`${parent} input[type="checkbox"]:not:checked`);
    //const uncheckedLayers = Array.from(checkboxes).map(unchecked => unchecked.value);
    //console.log(uncheckedLayers);
    layerNames.forEach(Element=> map.addLayer(overlays[Element]));
    
 }