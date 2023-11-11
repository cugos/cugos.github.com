maps = [];

$(document).ready(function(){

  /* NAVIGATION EXPAND
   *
   *
   */
  $('#menu-expand').on('click', function(){
    $('#menu').slideToggle(300);
    $(this).toggleClass('open');
    if($(this).hasClass('open')) {
      $(this).html('<i class="fa fa-times"></i>');
    } else {
      $(this).html('<i class="fa fa-bars"></i>');
    }
  });

  /* MAPS
   * This builds a map if the element is specified with class .map-marker
   * It only requires latitude and longitude, which can be passed as attributes
   * in the .map-marker element like data-latitude & data-longitude.
   * If a .map-marker element exists, run buildData() on each of the instances.
   *
   */
  var mapElems = document.getElementsByClassName('map-marker');
  if (mapElems.length > 0) {
    for ( var m = 0; m < mapElems.length; m++ ) {
      if (mapElems[m].hasChildNodes()) {
        var mrks = [];
        for (var i = 0; i < mapElems[m].childNodes.length; i++) {
          if (mapElems[m].childNodes[i].className === 'marker-elem') {
            var mrk = {
              latitude: mapElems[m].childNodes[i].getAttribute('data-latitude'),
              longitude: mapElems[m].childNodes[i].getAttribute('data-longitude'),
              icon: mapElems[m].childNodes[i].getAttribute('data-icon'),
              color: mapElems[m].childNodes[i].getAttribute('data-color'),
              content: mapElems[m].childNodes[i].getAttribute('data-popup')
            };
            mrks.push(mrk);
          }
        }
        buildMapMarker(mapElems[m], mrks);
      } else {
        buildMapMarker(mapElems[m]);
      }
    }
  }

  var mapMarkers = document.getElementsByClassName('marker-elem');
  if (mapMarkers.length > 0) {

  }

  /* PERSON HOVER
   * This builds a tooltip when the user hovers on a person in /people
   *
   */
  var tooltip = null;
  $('.person').on('mouseover', function(){
    tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.innerHTML = $(this).attr('data-title');
    $(this).append(tooltip);
  });
  $('.person').on('mouseout', function(){
    $('.tooltip').remove();
  });

});

function buildMapMarker(elem, markers) {

  L.mapbox.accessToken = 'pk.eyJ1IjoiY3Vnb3MiLCJhIjoidGNnSlBNTSJ9.qPHDxAemDindkSskKNv90g';

  var url = 'https://maps.clockworkmicro.com/streets/v1/raster/{z}/{x}/{y}?x-api-key=QTAgfbPHPESSEpqPEGtk8PdMXpsUnld2Dzy53jh8';
  var layer = L.tileLayer(url);
  var map = L.mapbox.map(elem.id).addLayer(layer);

  if (!markers) {
    var coordinates = [elem.getAttribute('data-latitude'), elem.getAttribute('data-longitude')];
    map.setView(coordinates, 12);
    var marker = L.marker(coordinates, {
      icon: L.mapbox.marker.icon({
        'marker-size': 'large',
        'marker-symbol': 'building',
        'marker-color': '#3f75a2'
      })
    }).addTo(map);
    if (elem.getAttribute('data-popup')) marker.bindPopup(elem.getAttribute('data-popup'));
  } else {
    map.setView([0,0], 3);
    var group = L.mapbox.featureLayer();
    for (var l = 0; l < markers.length; l++) {
      var mark = createMarker(markers[l]);
      group.addLayer(mark);
    }
    group.addTo(map);
    map.fitBounds(group.getBounds(), {padding: [20, 20]});
  }

  if (!elem.getAttribute('data-scrollZoom')) map.scrollWheelZoom.disable();
  maps.push(map);
}

function createMarker(info) {
  var marker = L.marker([info.latitude, info.longitude], {
    icon: L.mapbox.marker.icon({
      'marker-size': 'large',
      'marker-symbol': info.icon || 'star',
      'marker-color': info.color || '#3f75a2'
    })
  });
  if (info.content) marker.bindPopup(info.content);
  return marker;
}
