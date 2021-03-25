//open baselayers
var activelayer;
var button;
function setLayer(layerName){
   
   if(activelayer!=null && activelayer!=''){
      map.removeLayer(activelayer)
      button.style.color="black";
   };
      activelayer=basemaps[layerName];
      var baseLayer = basemaps.maptiler;
      var baseMap = L.layerGroup([baseLayer, activelayer]);
      button= document.getElementById(layerName);
      button.style.color="blue";
      map.addLayer(baseMap);
      
   };
 
//open overlayMaps
var activeOverlayMap;
var element;
  
   //open maps
function setOverlayMap(id){
    //close map before
   if(activeOverlayMap!=null && activeOverlayMap!=''){
      map.removeLayer(activeOverlayMap);
      
      if(id!="NONE"){element.style.color="black"};
      document.getElementById("NONE").style.color= "rgba(197, 82, 82, 0.979)";
   };
      //open new map
   
   
   if(id!="NONE"){
   
   activeOverlayMap=basemaps[id];

   map.createPane(id);
   map.getPane(id).style.zIndex=649;
   activeOverlayMap.addTo(map);
   element=document.getElementById(id);
   element.style.color = "blue";
   
         //dragLayerButon has occured
   dragLayer.removeAttribute('hidden');
   }
   else{dragLayer.setAttribute('hidden', true);
   element.style.color="black";
   document.getElementById(id).style.color="red";
   };
   
    
};



//click event on layers
/*document.addEventListener("DOMContentLoaded", function(event){
   const overlayMaps=document.getElementsByClassName("overlayMap");
   console.log(11);
   for(const overlayMap of overlayMaps){
      overlayMap.addEventListener("click", openOverlayMap)
      
   }
})*/
   



//toggle hidden
   
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
   map.createPane(layerName);
   map.getPane(layerName).style.zIndex=650;
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
    
    const checkboxes = document.getElementsByClassName("overlay");
   
   //the event occurred
   
	for (const checkbox of checkboxes) {
      checkbox.addEventListener('change', onOverlayChange);
	}
   
 })


 
//set control
 function onControlChange(event){
   const id = event.target.value;
   const checked = event.target.checked;
//open group layer control
if(id=="groups" && checked){
   const groups=document.getElementsByClassName(id);
   const opacitySelect = document.getElementById("selectLayer");
   opacitySelect.hidden=false;
   for(const group of groups){group.hidden=false;};
  ;}
else if(id=="groups" && !checked){
   const groups=document.getElementsByClassName(id)
   const opacitySelect = document.getElementById("selectLayer");
   opacitySelect.hidden=true;
   for(const group of groups){group.hidden=true;};
};

//open another controls (timeline, opacity)
   if(checked){
      document.getElementById(id).hidden=false;
   }
   else{
      document.getElementById(id).hidden=true;
   };
  };

 function setControl (){
   
      const controls = document.getElementsByClassName("control");
      
     for (const control of controls) {
        control.addEventListener('change', onControlChange)
        };
     };
     document.addEventListener('DOMContentLoaded', setControl);
     

   