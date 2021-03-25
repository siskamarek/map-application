function onDragLayerChange(event){
    var map=document.getElementById("map");
    var checked = event.target.checked;
    if(checked){map.style.cursor="col-resize"}
    else{map.style.cursor="grab"};
}

function setTool(){
    var dragLayer = document.getElementById("tool");
    
    dragLayer.addEventListener("change", onDragLayerChange);

    
}
document.addEventListener('DOMContentLoaded', setTool);