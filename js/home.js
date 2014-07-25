$(document).ready(function(){
  var map = L.mapbox.map('hero-map', 'examples.map-i86nkdio', {
    zoomControl: false
  }).setView([47.6097, -122.3331], 11)
    .featureLayer.setGeoJSON(cugos);

  map.dragging.disable();
  map.touchZoom.disable();
  map.doubleClickZoom.disable();
  map.scrollWheelZoom.disable();
});

