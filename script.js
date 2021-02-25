//crs-krovak
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

}).setView([48.5, 19.5], 8);

//basemaps
var baseMaps = {
    
    "podkladova mapa": L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=l6LE501kztQbg1HaKhEg",
        {
            attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
        }
    ),
    "ortofoto - UGKK": L.tileLayer.wms("https://zbgisws.skgeodesy.sk/zbgis_ortofoto_wms/service.svc/get",
    {
        layers: "1,2,3",
        format: 'image/png',
        transparent: true,
    }),
    "ortofoto - Mapy.cz": L.tileLayer("https://mapserver.mapy.cz/bing/{z}-{x}-{y}")
};
//layers
var overlays = {
    "Nazvoslovie": L.tileLayer.wms("https://zbgisws.skgeodesy.sk/zbgis_geograficke_nazvoslovie_wms/service.svc/get",
    {
        layers: "0,1,2,3,4,5",
        format: 'image/png',
        transparent: true,

    
    }),
    "parcely C" : L.tileLayer.wms("https://kataster.skgeodesy.sk/eskn/services/NR/kn_wms_norm/MapServer/WmsServer?",
    {
        layers: "2,3,4,5,6,7,8,11,12,13,14,15",
        format: 'image/png',
        transparent: true,
    }),
    "parcely E" : L.tileLayer.wms("https://kataster.skgeodesy.sk/eskn/services/NR/uo_wms_norm/MapServer/WmsServer?",
    {
        layers: "0,3,4,5",
        format: 'image/png',
        transparent: true,
    })
}
//overlaymaps
var overlayMaps = {
    "III. vojenské mapovanie": L.tileLayer.wms(
      "https://zbgisws.skgeodesy.sk/hm_III_vm/service.svc/get?",
      {
          layers: "1,2,3",
          format: 'image/png',
          transparent: true,
                             
      }
    ),
    
};

   
L.control.layers(baseMaps, overlays).addTo(Mymap);
L.control.layers(overlayMaps).addTo(Mymap);


Mymap.addLayer(baseMaps["podkladova mapa"]);

let selectedBase = null;
Mymap.on('baselayerchange', (e) => {
  if (!Object.hasOwnProperty.call(overlayMaps, e.name)) {
    return;
  }

  selectedBase = overlayMaps[e.name];
});


//scale
var scale = L.control.scale().addTo(Mymap);


// Measure plugin
// @see https://github.com/aprilandjan/leaflet.measure
L.control.measure({
  //  control position
  position: 'topleft',
  //  weather to use keyboard control for this plugin
  keyboard: true,
  //  shortcut to activate measure
  activeKeyCode: 'M'.charCodeAt(0),
  //  shortcut to cancel measure, defaults to 'Esc'
  cancelKeyCode: 27,
  //  line color
  lineColor: 'red',
  //  line weight
  lineWeight: 2,
  //  line dash
  lineDashArray: '6, 6',
  //  line opacity
  lineOpacity: 1,
  //  distance formatter
  // formatDistance: function (val) {
  //   return Math.round(1000 * val / 1609.344) / 1000 + 'mile';
  // }
}).addTo(Mymap);

//opacity tool
document.querySelector('#opacity').addEventListener('change', (e) => {
  if (!selectedBase) {
    return;
  }

  const opacity = e.target.value;
  selectedBase.setOpacity(opacity);
});
//point tool
function myfunc(){
    var x = document.getElementById("lat").value;
    var y = document.getElementById("long").value;
    //var form = document.getElementById('input');
    var marker = L.marker([x,y]).addTo(Mymap)
    .bindPopup('lat'+x+ '<br>long ='+y)
    .openPopup();
    document.getElementById("lat").value="";
    document.getElementById("long").value="";

    Mymap.setView([x, y], 15);
    
         
 };
//enter - nefunguje !
 var inputText = document.getElementById("input");
    inputText.addEventListener("keydown", function(event) {
        if (event.activeKeyCode === "Enter") {
           event.preventDefault();
           document.getElementById("button").click();
        }
     });
   
    
   