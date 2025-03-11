$(document).ready(function(){
  var paco = '';
  $(window).bind('keypress', function(e){
    key = String.fromCharCode(e.keyCode || e.which);
    paco += key;
    check = paco.substr(paco.length - 4);
    if(check=='paco') {
      console.log($('#thebigspoon img').attr('src'));
      $('#thebigspoon img').attr('src', '/image/paco.png');
    }
  });

  var map = L.map('people-map')
    .setView([40, -74.50], 9);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  var cugosIcon = L.icon({
    iconUrl: '/image/logos/cugos-sticker-round.svg',
    iconSize: [25, 25],
    shadowUrl: '/image/logos/logo-shadow-50px.png',
    shadowSize: [25, 25],
    shadowAnchor: [11, 11]
  });
  var person_layer = L
    .geoJSON(
      peopleGeoJson,
      {
        pointToLayer: function(_, latlng){
          return L.marker(latlng, {icon: cugosIcon, opacity: 0.9})
        }
      }
    )
    .bindTooltip(
      function (layer) { return layer.feature.properties.title},
      {direction: 'top'}
    );
  person_layer.addTo(map);
  map.fitBounds(person_layer.getBounds());
});