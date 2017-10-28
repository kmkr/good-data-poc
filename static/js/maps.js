import styledMapType from './map-styles.js';
import truckData from './truck-data.js';

const UPDATE_INTERVAL = 500;

function initMap() {
  const center = { lat: 59.91080620046494, lng: 10.742686986923218 };

  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center
  });

  map.mapTypes.set('good_map', styledMapType);
  map.setMapTypeId('good_map');

  return map;
}

function createMarker(map, position) {
  return new google.maps.Marker({
    position,
    map,
    icon: 'static/images/truck.png',
    mapTypeControlOptions: {
      mapTypeIds: ['styled_map']
    }
  });
}

const map = initMap();

map.addListener('click', evt => {
  console.log(JSON.stringify(
    { lat: evt.latLng.lat(), lng: evt.latLng.lng() }
  ));
});

function flatten (ary) {
  return ary.reduce((a, b) => a.concat(b));
}

truckData.forEach(truck => {
  let marker;
  setInterval(() => {
    const nextPosition = truck.routes.shift();
    if (!nextPosition) {
      return;
    }
    if (marker) {
      marker.setPosition(nextPosition);
    } else {
      marker = createMarker(map, nextPosition);
    }
  }, UPDATE_INTERVAL);
})

