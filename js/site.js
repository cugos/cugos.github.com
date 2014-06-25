function init() {
	// meeting maps
	geojson['features'].push(newFeature);

	var map = L.mapbox.map('map', 'examples.map-i86nkdio')
    	.setView([lat, lng], 13)
    	.featureLayer.setGeoJSON(geojson);
}

window.onLoad = init();