import maps from './libs/maps.js';
import { getPosition } from './helpers/geolocation.js';
import AccommodationComponent from './components/AccommodationComponent.js';
import accommodationsService from './services/accommodationService.js';
import accommodationAdapter from './components/accommodationAdapter.js';

async function init() {
  const { coords } = await getPosition();

  const accommodationsData = await accommodationsService.getAccommodations();

  const mapInstance = maps(
    document.querySelector('.map-instance'),
    {
      coords: [ coords.latitude, coords.longitude ],
      zoom: 13,
      onChange: function() {
        render();
      },
      marker: {
        classNames: {
          default: 'map-price',
          hover: 'map-price--hover'
        }
      }
    }
  );

  const $accommodations = document.querySelector('.accommodations');

  function getAccommodationsFromMapBounds(accommodations) {
    return accommodations.filter((accommodation) => {
      return mapInstance.contains([ 
        accommodation.listing.lat, 
        accommodation.listing.lng 
      ])
    });
  }

  function render() {
    const cardsAndAccommodationsMapped = new WeakMap;

    const accommodationsAreaMap = getAccommodationsFromMapBounds(accommodationsData);
    const $frag = document.createDocumentFragment();

    $accommodations.innerHTML = '';
    mapInstance.clearMarkers();

    accommodationsAreaMap.forEach(accommodation => {
      const $accommodation = AccommodationComponent({
        ...accommodationAdapter(accommodation),
        onMouseover() {
          mapInstance.setActiveMarker(
            cardsAndAccommodationsMapped.get(this)
          );
        },
        onMouseout() {
          mapInstance.setActiveMarker(
            cardsAndAccommodationsMapped.get(this),
            false
          );
        }
      });

      const marker = mapInstance.addMarker({
        coords: [ accommodation.listing.lat, accommodation.listing.lng ],
        content: accommodation.pricingQuote.priceString
      })

      cardsAndAccommodationsMapped.set($accommodation, marker);

      $frag.appendChild($accommodation);

    })

    $accommodations.appendChild($frag);
  }

  render();
}

export default init;