document.addEventListener("DOMContentLoaded", ()=>{
    groups=document.getElementsByClassName("groups");

    for(const group of groups){
        group.addEventListener("change", openGroupLayer)
    };
});
var layerId;
function openGroupLayer(event){
    const checkbox=event.target;
     layerId=checkbox.value;
    const checked=checkbox.checked;

    if(checked){
        map.createPane(layerId);
        map.getPane(layerId).style.zIndex=649;
        map.addLayer(basemaps[layerId]);
        
    }
    else(map.removeLayer(basemaps[layerId]));
};

