var slider = document.getElementById("slider");
var selector = document.getElementById("selector");
var selectValue = document.getElementById("selectValue");

const yearLabels = [
    {
        year: '2019',
        layerId: "orthoUGKK",
    },
    {
        year: '2017',
        layerId: "orto2017",
    },
    {
        year: '1883',
        layerId: "IIIVM",
    },
    {
        year: '1910',
        layerId: 1
    },
    {
        year: '1910',
        layerId: 1
    },
    {
        year: '1910',
        layerId: 1
    },
    {
        year: '1910',
        layerId: 1
    },
    {
        year: '1910',
        layerId: 1
    },
    {
        year: '1910',
        layerId: 1
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
    const layerName = yearLabels[this.value].layerId;
    setLayer(layerName);
}