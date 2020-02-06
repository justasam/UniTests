var platform = new H.service.Platform({
  apikey: 'iYvMpF1KOQJ89K6boSx23q7-l9Xtv4Jz3a5fun9MS1w'
});

function getLocation(map) {
  //if supported
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Oops! This browser does not support HTML Geolocation.");
  }
}

//Put marker on map and center
function showPosition(position) {
  var lat = position.coords.latitude;
  var lon = position.coords.longitude;
  map.setCenter({
    lat: lat,
    lng: lon
  });
  marker = new H.map.Marker({
    lat: lat,
    lng: lon
  });
  map.addObject(marker);
}

function geocode(text) {
  var geocoder = platform.getGeocodingService(),
    geocodingParameters = {
      searchText: text,
      jsonattributes: 1
    };

  geocoder.geocode(
    geocodingParameters,
    onSuccess,
    onError
  );
}
function onSuccess(result) {
  var locations = result.response.view[0].result;
}

function onError(error) {
  alert('Can\'t reach the remote server');
}

// Instantiate the map:
var map = new H.Map(
  document.getElementById('mapContainer'),
  defaultLayers.vector.normal.map, {
  zoom: 4,
  center: {
    lng: -95,
    lat: 37
  }
});
