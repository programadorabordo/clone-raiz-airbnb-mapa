const L = window.L || {};

function IconPrice({ content, className }) {
  return L.divIcon({ className, html: content, iconSize: null })
}

const defaultOptions = { 
  zoom: 13,
  coords: [], 
  maxZoom: 18,
  tileServer: 'mapbox',
  marker: {
    classNames: {
      default: 'map-price',
      hover: 'map-price--hover'
    }
  }
};

const mapTileConfig = {
  mapbox: {
    url: 'https://api.mapbox.com/styles/v1/{styleId}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    options: {
      attribution: '<a href="#">&copy; MapBox</a>',
      styleId: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoiYXlydG9udGVzaGltYSIsImEiOiJja3Q0eGk3ZXcwMzNkMm9vMGM1NjFxa2g0In0.1L_Iz2plHMs3M-KMq2yEeA',
    }
  },
  maptiler: {
    url: 'https://api.maptiler.com/maps/{id}/{z}/{x}/{y}.png?key={key}',
    options: {
      key: '27SvwP213KN2CoEF10Kz',
      id: 'basic'
    }
  }
};

export default function initialize($element, options = {}) {
  const optionsBase = {
    ...defaultOptions,
    ...options
  };

  const map = L.map($element).setView(optionsBase.coords, optionsBase.zoom);

  L.tileLayer(
    mapTileConfig[optionsBase.tileServer].url,
    mapTileConfig[optionsBase.tileServer].options
  ).addTo(map);

  const markers = L.featureGroup().addTo(map);

  map.on('moveend', optionsBase.onChange);

  function addMarker(attrs = {}) {
    const marker = L.marker(attrs.coords, {
      riseOnHover: true,
      icon: IconPrice({
        content: attrs.content,
        className: optionsBase.marker.classNames.default
      }),
    });

    markers.addLayer(marker);

    return marker;
  }

  function contains(coords) {
    return map.getBounds().contains(coords);
  }

  function clearMarkers() {
    markers.clearLayers();
  }

  function setActiveMarker(marker, active = true) {
    marker.setIcon(IconPrice({
      content: marker.options.icon.options.html,
      className: `${optionsBase.marker.classNames.default} ${active ? optionsBase.marker.classNames.hover : ''}`
    }))
  }

  return {
    addMarker,
    contains,
    clearMarkers,
    setActiveMarker
  }
}
