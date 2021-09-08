const L = window.L || {};

const mapInstance = {
  map: null,
  layer: null,
  markers: L.featureGroup()
};

function IconPrice(content) {
  return L.divIcon({ className: 'map-price', html: content, iconSize: null })
}

const defaultOptions = { zoom: 13, coords: [], maxZoom: 18 };

function initialize($element, options = defaultOptions) {
  mapInstance.map = L.map($element).setView(options.coords, options.zoom);

  mapInstance.layer = L.tileLayer('https://api.mapbox.com/styles/v1/{styleId}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: '<a href="#">&copy; MapBox</a>',
    styleId: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiYXlydG9udGVzaGltYSIsImEiOiJja3Q0eGk3ZXcwMzNkMm9vMGM1NjFxa2g0In0.1L_Iz2plHMs3M-KMq2yEeA',
  }).addTo(mapInstance.map);

  mapInstance.markers
    .on('mouseover', function(e) {
      console.log(e);
      e.layer.setZIndexOffset(100);
    })
    .on('mouseout', function(e) {
      e.layer.setZIndexOffset(0);
    })
    .addTo(mapInstance.map);

}

function addMarker(attrs = {}) {
  mapInstance.markers.addLayer(
    L.marker(attrs.coords, {
      icon: IconPrice(attrs.content),
    })
  )
}

export default {
  initialize,
  addMarker
}