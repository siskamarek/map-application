var basemaps = {
  maptiler: L.tileLayer(
    "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=l6LE501kztQbg1HaKhEg",
    {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }
  ),
  orthoUGKK: L.tileLayer.wms(
    "https://zbgisws.skgeodesy.sk/zbgis_ortofoto_wms/service.svc/get",
    {
      layers: "1,2,3",
      format: "image/png",
      transparent: true,
    }
  ),
  mapyCZ: L.tileLayer("https://mapserver.mapy.cz/bing/{z}-{x}-{y}"),

  SAZP: L.tileLayer.wms("http://tiles.geop.sazp.sk/base/service?",
  {
    layers: "ortofoto_2010",
    format:"image/png",
    transparent: true,
  }),

  orto2017: L.tileLayer("https://ofmozaika.tiles.freemap.sk/{z}/{x}/{y}.jpg"),
};

var overlays = {
  Lidar: L.tileLayer("https://dmr5.tiles.freemap.sk/{z}/{x}/{y}.png"),

  Nazvoslovie: L.tileLayer.wms(
    "https://zbgisws.skgeodesy.sk/zbgis_geograficke_nazvoslovie_wms/service.svc/get",
    {
      layers: "0,1,2,3,4,5",
      format: "image/png",
      transparent: true,
    }
  ),

  ParcelyC: L.tileLayer.wms(
    "https://kataster.skgeodesy.sk/eskn/services/NR/kn_wms_norm/MapServer/WmsServer?",
    {
      layers: "2,3,4,5,6,7,8,11,12,13,14,15",
      format: "image/png",
      transparent: true,
    }
  ),

  ParcelyE: L.tileLayer.wms(
    "https://kataster.skgeodesy.sk/eskn/services/NR/uo_wms_norm/MapServer/WmsServer?",
    {
      layers: "0,3,4,5",
      format: "image/png",
      transparent: true,
    }
  ),

  ESRI: L.tileLayer(
      "https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer/0",
      {
        layers: "World Hillshade",
        format: "image/png",
        transparent: true,
      }
  ),
  "III. vojenské mapovanie": L.tileLayer.wms(
    "https://zbgisws.skgeodesy.sk/hm_III_vm/service.svc/get?",
    {
      layers: "1,2,3",
      format: "image/png",
      transparent: true,
    }
  ),
  "II. vojenské mapovanie":L.tileLayer("http://tiles.geop.sazp.sk/base/service",
  {
    dpiMode: 7,
    format: 'image/png',
    layers: "sazp_vojenske_mapovanie_II",
  }),

  "IV. vojenské mapovanie":L.tileLayer("https://zbgisws.skgeodesy.sk/hm_III_vm/service.svc/get?",
  {
    layers: "1",
    format: 'image/png',
    transparent: true,
  }),
};

function getLayers() {
  return { basemaps, overlays };
}

