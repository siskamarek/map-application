/*var map = L.map('map').setView([49.2, 18], 7);
L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=l6LE501kztQbg1HaKhEg' , 
{
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
}).addTo(map);*/

var krovakCrs = new L.Proj.CRS(
    "EPSG:5514",
    "+proj=krovak +lat_0=49.5 +lon_0=24.83333333333333 +alpha=30.28813972222222 +k=0.9999 +x_0=0 +y_0=0 +ellps=bessel +towgs84=589,76,480,0,0,0,0 +units=m +no_defs",
    {
        origin: [-951499.37, -930499.37],
        // The difficult part
        resolutions: [
            131088,
            65544,
            32772,
            16386,
            8193,
            4096.5,
            2048.25,
            1024.125,
            512.0625,
            256.03125,
            128.015625,
            64.0078125,
            32.00390625,
            16.001953125,
            8.0009765625,
            4.00048828125,
            2.000244140625,
            1.0001220703125,
            0.50006103515625,
            0.250030517578125,
            0.1250152587890625,
            0.06250762939453125,
        ],
    }
);

var Mymap = L.map("map", {

}).setView([48.5, 19.5], 1);

var basemaps = {
    "III. vojenské mapovanie": L.tileLayer.wms(
        "https://zbgisws.skgeodesy.sk/hm_III_vm/service.svc/get?",
        {
            layers: "1,2,3",
        }
    ),
    "ortofoto": L.tileLayer.wms("https://zbgisws.skgeodesy.sk/zbgis_ortofoto_wms/service.svc/get",
        {
            layers: "1,2,3",
        }

    ),

    "podkladova mapa": L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=l6LE501kztQbg1HaKhEg",
        {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        }
    ),

    /* "skuska": L.tileLayer.wms("https://zbgisws.skgeodesy.sk/zbgis_ortofoto_wms/service.svc/get",
     {
         layers: "Katastrálna mapa",
     })*/

};
var layerControl = L.control
layerControl.layers(basemaps).addTo(Mymap);
//layerControl.addOverlay(tileLayer , "ortofoto");
Mymap.addLayer(basemaps["podkladova mapa"]);


//scale
L.control.scale().addTo(Mymap);