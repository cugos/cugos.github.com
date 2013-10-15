var map = null;

$(function() {
    map = L.mapbox.map('map', 'examples.map-9ijuk24y')
        .setView([48, -122], 5);
    var markers = new L.markerClusterGroup();
    
    $.getJSON( "cugos_users.geojson", function( data ) {
        var items = [];
        $.each( data.features, function( index, feature ) {
            var title = 'Name: '+feature.properties.First+' '+feature.properties.Last;
            var lon = feature.geometry.coordinates[0];
            var lat = feature.geometry.coordinates[1];
            var marker = L.marker(new L.LatLng(lat, lon), {
                title: title
            });
            marker.bindPopup(title);
            markers.addLayer(marker);
        });
    });
    map.addLayer(markers);
});
