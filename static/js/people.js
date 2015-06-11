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

  L.mapbox.accessToken = 'pk.eyJ1IjoiY3Vnb3MiLCJhIjoidGNnSlBNTSJ9.qPHDxAemDindkSskKNv90g';
  var map = L.mapbox.map('people-map', 'cugos.jphcb71d')
    .setView([40, -74.50], 9);
  var fl = L.mapbox.featureLayer();
  fl.setGeoJSON(peopleGeoJson).addTo(map);
  map.fitBounds(fl.getBounds());
});