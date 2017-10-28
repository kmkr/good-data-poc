const mapStyle = [
  {
      "featureType": "all",
      "elementType": "labels.text.fill",
      "stylers": [
          {
              "saturation": 36
          },
          {
              "color": "#000000"
          },
          {
              "lightness": 40
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.text.stroke",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#000000"
          },
          {
              "lightness": 16
          }
      ]
  },
  {
      "featureType": "all",
      "elementType": "labels.icon",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 20
          }
      ]
  },
  {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 17
          },
          {
              "weight": 1.2
          }
      ]
  },
  {
      "featureType": "landscape",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 20
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 21
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 17
          }
      ]
  },
  {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 29
          },
          {
              "weight": 0.2
          }
      ]
  },
  {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 18
          }
      ]
  },
  {
      "featureType": "road.local",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 16
          }
      ]
  },
  {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 19
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
          {
              "color": "#000000"
          },
          {
              "lightness": 17
          }
      ]
  }
];

const styledMapType = new google.maps.StyledMapType(mapStyle, {name: 'Good Map'});

const UPDATE_INTERVAL = 100;
const STEP_INTERVAL = 0.00001;

function interpolate (from, to) {
  const latDiff = to.lat - from.lat;
  const lngDiff = to.lng - from.lng;
  const latDelta = latDiff / 100;
  const lngDelta = lngDiff / 100;

  const numInterpolations = Math.round(
    Math.max(
      Math.abs(latDiff / STEP_INTERVAL), Math.abs(lngDiff / STEP_INTERVAL)
    )
  );

  const latFactor = latDiff < 0 ? -1 : 1;
  const lngFactor = lngDiff < 0 ? -1 : 1;

  return [...new Array(numInterpolations)].reduce((prevVal, curVal) => {
    const prevPos = prevVal[prevVal.length - 1];
    prevVal.push({
      lat: prevPos.lat + latDelta, // * latFactor,
      lng: prevPos.lng + lngDelta // * lngFactor
    })
    return prevVal;
  }, [from]);
}

const trucks = [
  {
    routePoints: [
      {"from":{"lat":59.91256202078543,"lng":10.740766525268555 },"to":{"lat":59.9114970426313,"lng":10.739715099334717}},
      {"from":{"lat":59.91150964910661,"lng":10.739704370498657},"to":{"lat":59.91139131613657,"lng":10.740171074867249}}
    ]
  },
  {
    routePoints: [
      {"from":{"lat":59.911114307761885,"lng":10.744559168815613},"to":{"lat":59.91049573702844,"lng":10.743958353996277}}
    ]
  }
];


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

let firstClick;
map.addListener('click', evt => {
  if (firstClick) {
    console.log(JSON.stringify({
      from: { lat: firstClick.latLng.lat(), lng: firstClick.latLng.lng() },
      to: { lat: evt.latLng.lat(), lng: evt.latLng.lng() },
    }))
    firstClick = null;
    return;
  }

  firstClick = evt;
});

function flatten (ary) {
  return ary.reduce((a, b) => a.concat(b));
}

trucks.forEach(truck => {
  const interpolatedTruckRoutes = truck.routePoints
    .map(elem => interpolate(elem.from, elem.to))
    .reduce((a, b) => a.concat(b));
  let marker;
  setInterval(() => {
    const nextPosition = interpolatedTruckRoutes.shift();
    if (marker) {
      marker.setPosition(nextPosition);
    } else {
      marker = createMarker(map, nextPosition);
    }
  }, UPDATE_INTERVAL);
})

