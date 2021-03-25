var basemaps = {
  maptiler: L.tileLayer(
    "https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=l6LE501kztQbg1HaKhEg",
    {
      attribution:
        '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',
    }
  ),
  GoogleMaps: L.tileLayer("http://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"),

  bing: L.tileLayer("http://ecn.t3.tiles.virtualearth.net/tiles/a{q}.jpeg?g=1"),

  ZBGISmap: L.tileLayer("https://zbgisws.skgeodesy.sk/zbgis_wmts_new/service.svc/get?", {
    format: "image/png",
    transparent: true,
  }),

  freeMap: L.tileLayer("https://outdoor.tiles.freemap.sk/{z}/{x}/{y}.jpg"),

  orthoUGKK: L.tileLayer.wms(
    "https://zbgisws.skgeodesy.sk/zbgis_ortofoto_wms/service.svc/get",
    {
      layers: "1,2,3",
      format: "image/png",
      transparent: true,
    }
  ),
  mapyCZ: L.tileLayer("https://mapserver.mapy.cz/bing/{z}-{x}-{y}"),

  orto2010: L.tileLayer.wms("http://tiles.geop.sazp.sk/base/service?",
  {
    layers: "ortofoto_2010",
    crs: L.CRS.EPSG4326,
    format:"image/png",
    transparent: true,
  }),

  orto2017: L.tileLayer("https://ofmozaika.tiles.freemap.sk/{z}/{x}/{y}.jpg",
  {
    format: "image/png",
    transparent: true,
  }),

  ZM: L.tileLayer.wms("https://zbgisws.skgeodesy.sk/ZMSR_wms/service.svc/get",
  {
    layers: "1,2,3",
    format: "image/png",
    transparent: true,
    pane: "ZM",
  }),

  IVM: L.tileLayer.wms("http://tiles.geop.sazp.sk/base/service", {
    layers: "sazp_vojenske_mapovanie_I",
    crs: L.CRS.EPSG4326,
    format: "image/png",
    transparent: true,
    pane: "IVM",
  }),

  IIVM: L.tileLayer.wms("http://tiles.geop.sazp.sk/base/service",
  {
    dpiMode: 7,
    format: 'image/png',
    transparent: true,
    layers: "sazp_vojenske_mapovanie_II",
    crs: L.CRS.EPSG4326,
    pane: "IIVM"
  }),

  IIIVM: L.tileLayer.wms(
    "https://zbgisws.skgeodesy.sk/hm_III_vm/service.svc/get?",
    {
      layers: "1,2,3",
      format: "image/png",
      transparent: true,
      pane: "IIIVM",
    }
  ),

  IIIVMr: L.tileLayer.wms("http://tiles.geop.sazp.sk/base/service",
  {
    layers: "sazp_vojenske_mapovanie_IIIr",
    crs: L.CRS.EPSG4326,
    format: 'image/png',
    transparent: true,
    pane: "IIIVMr",
  }),

  IVVM: L.tileLayer.wms("http://tiles.geop.sazp.sk/base/service",
  {
    layers: "sazp_vojenske_mapovanie_IV",
    crs: L.CRS.EPSG4326,
    format: 'image/png',
    transparent: true,
    pane: "IVVM",
  }),

  IVVMr: L.tileLayer.wms("http://tiles.geop.sazp.sk/base/service",
  {
    layers: "sazp_vojenske_mapovanie_IVr",
    crs: L.CRS.EPSG4326,
    format: 'image/png',
    transparent: true,
    pane: "IVVMr",
  }),


  NONE: '',
};



var overlays = {
  DMR: L.tileLayer.wms("https://zbgisws.skgeodesy.sk/zbgis_dmr3_wms/service.svc/get",
  {
    layers: "0,1,2",
    format: "image/png",
    transparent: true,
    pane: "DMR",
  }),

  Lidar: L.tileLayer("https://dmr5.tiles.freemap.sk/{z}/{x}/{y}.png"),

  Nazvoslovie: L.tileLayer.wms(
    "https://zbgisws.skgeodesy.sk/zbgis_geograficke_nazvoslovie_wms/service.svc/get",
    {
      layers: "0,1,2,3,4,5",
      format: "image/png",
      transparent: true,
      pane: "Nazvoslovie",
    }
  ),

  ParcelyC: L.tileLayer.wms(
    "https://kataster.skgeodesy.sk/eskn/services/NR/kn_wms_norm/MapServer/WmsServer?",
    {
      layers: "2,3,4,5,6,7,8,11,12,13,14,15",
      format: "image/png",
      transparent: true,
      pane:"ParcelyC",
    }
  ),

  ParcelyE: L.tileLayer.wms(
    "https://kataster.skgeodesy.sk/eskn/services/NR/uo_wms_norm/MapServer/WmsServer?",
    {
      layers: "0,3,4,5",
      format: "image/png",
      transparent: true,
      pane: "ParcelyE",
    }
  ),

  ESRI: L.tileLayer(
      "https://services.arcgisonline.com/arcgis/rest/services/Elevation/World_Hillshade/MapServer/0",
      {
        layers: "World Hillshade",
        format: "image/png",
        transparent: true,
        pane: "ESRI",
      }
  ),
};

function getLayers() {
  return { basemaps, overlays }};

