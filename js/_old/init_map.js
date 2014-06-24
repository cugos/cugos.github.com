function init_map(members) {
	// Show the loading indicator first
	var map_options = { 
	'units' : "m",
	'maxResolution' : 156543.0339,
	'numZoomLevels' : 22,
	'projection' : new OpenLayers.Projection("EPSG:900913"),
	'displayProjection' : new OpenLayers.Projection("EPSG:4326"),
	'maxExtent' : new OpenLayers.Bounds(-20037508,-20037508,20037508,20037508)
	};
	  
	var map_options = {
		'projection': new OpenLayers.Projection("EPSG:4326")
	}
	var map = function(fn, iter){
        ret = []
        for (var i = iter.length - 1; i >= 0; i--) {
            ret[i] = fn(iter[i])
        };
        return ret
    }
    var data = function() {
	  	var features = map(function(x) { 
		  		return '{"type": "Feature", "geometry":' + x + '}'
		  	}, members)
	  	var features = map($.parseJSON, features);

		return {
		  "type": "FeatureCollection", 
		  "features": features
		}
	}();
	var map = new OpenLayers.Map('map', map_options);

	map.layers.base = new OpenLayers.Layer.OSM("OpenStreetMap");
	map.addLayer(map.layers.base);
	map.addControl(new OpenLayers.Control.LayerSwitcher());

	var gj = new OpenLayers.Format.GeoJSON();
	var vector = new OpenLayers.Layer.Vector(); 
	map.addLayer(vector);
	vector.addFeatures(gj.read(data));
	var center = new OpenLayers.LonLat(-122.29, 47.65)
		.transform(
			new OpenLayers.Projection("EPSG:4326"),
			new OpenLayers.Projection("EPSG:900913"));
	map.setCenter(center,6);
	map.updateSize();

	//Hide the loading div
	jQuery("#loading").hide();
}
	    