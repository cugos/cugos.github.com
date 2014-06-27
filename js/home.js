$(document).ready(function(){
  var map = L.mapbox.map('hero-map', 'examples.map-i86nkdio')
    .setView([47.6097, -122.3331], 11)
    .featureLayer.setGeoJSON(cugos);
});

