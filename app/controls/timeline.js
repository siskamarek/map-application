function createTimeLine(){
var slider = document.getElementById("slider");
var selector = document.getElementById("selector");
var selectValue = document.getElementById("selectValue");

const yearLabels = [
    {
        year: '2019',
        layerId: "GoogleMaps",
    },
    {
        year: '2017',
        layerId: "orto2017",
    },
    {
        year: '2010',
        layerId: "orto2010",
    },
    {
        year: '1934',
        layerId: "IIIVMr"
    },
    {
        year: '1931',
        layerId: "IVVMr"
    },
    {
        year: '1897',
        layerId: "IVVM"
    },
    
    {
        year: '1884',
        layerId: "IIIVM"
    },
    {
        year: '1869',
        layerId: "IIVM"
    },
    {
        year: '1787',
        layerId: "IVM"
    },
    {
        year: '1910',
        layerId: 1
    }
];


slider.oninput = function () {
    selectValue.innerHTML = yearLabels[this.value].year;
    selector.style.left = (this.value*10) + '%';

    // Otvor mapu pre rok
    if(this.value>2){
        const layerName=yearLabels[this.value].layerId;
        
        setOverlayMap(layerName);
    }


        const layerName = yearLabels[this.value].layerId;
        setLayer(layerName);
}
} 

    
    
    
    
