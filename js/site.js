function init() {
	// meeting maps
	geojson['features'].push(newFeature);

	var map = L.mapbox.map('map', 'examples.map-9ijuk24y')
    	.setView([lat, lng], 13)
    	.featureLayer.setGeoJSON(geojson);
}

window.onLoad = init();