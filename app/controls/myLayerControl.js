//baselayers
var activelayer;
function setLayer(layerName){
    //document.getElementById(layerName).id="layerName";
    if(activelayer!=null && activelayer!=''){map.removeLayer(activelayer)};
    activelayer=basemaps[layerName];
    //document.getElementById(layerName).id = ("selected");
    var baseLayer = basemaps.maptiler;
    var baseMap = L.layerGroup([baseLayer, activelayer]);
    map.addLayer(baseMap);
    
   };
   


   
function toggleHidden(selector) {
    const optionsDiv = document.querySelector(selector);
    if (optionsDiv.hasAttribute('hidden')) {
       optionsDiv.removeAttribute('hidden');
       return;
    }
 
    optionsDiv.setAttribute('hidden', true);
 }
 
 //overlays checkboxes

 function setOverlay(layerName)
 {
   map.addLayer(overlays[layerName]);
 }

 function removeOverlay(layerName){
    map.removeLayer(overlays[layerName]);
 }

 function onOverlayChange(event) {
    const checkbox = event.target;
    const layerName = checkbox.value;
    const checked = checkbox.checked;
    if(checked){setOverlay(layerName)}
    else{removeOverlay(layerName)};
   
 }
 console.log(1);
 document.addEventListener('DOMContentLoaded', function(event)  {
    console.log(2)
    const checkboxes = document.getElementsByClassName("overlay");
    console.log(checkboxes);
   //the event occurred
   
	for (const checkbox of checkboxes) {
      checkbox.addEventListener('change', onOverlayChange);
	}
   
 })


 function onControlChange(event){
   const checked = event.target.checked;
   if(checked){document.getElementById("controls").hidden=false}
   else{
      document.getElementById("controls").hidden=true;
   };
}

 function setControl (){
   
      const controls = document.getElementsByClassName("control");
      
     for (const control of controls) {
        control.addEventListener('change', onControlChange)
        };
     };
   

   