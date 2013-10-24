--
layout: post
title: CUGOS Fall Fling Recap
category: blog

excerpt: Notes from the CUGOS Fall Fling
---

by Jared Dominguez


The [CUGOS 2013 Fall Fling](http://cugos.org/events/2013/10/16/fall-fling/) was a hit! (And I'm not just saying that because I got pizza and beer.) Thank you to everyone who presented, attended, and kept things running smoothly. 

![Approximately 60 GIS users attended the CUGOS 2013 Fall Fling. Image courtesy of Aaron Racicot.](/images/CUGOS_Attendees.jpg)

Rather than bore you with my lengthy set of notes, I compiled a partial list of the open source projects that we discussed along with some of their applications.

- [Ames Stereo Pipeline](http://ti.arc.nasa.gov/tech/asr/intelligent-robotics/ngt/stereo/). A suite of tools developed by NASA to process stereo imagery, create DEMs, and more. [David Shean](https://github.com/dshean) from the University of Washington wowed us all with his glaciological research. He uses Ames in conjunction with VisualSFM below to produce 3D images and DEMs.
- [CartoCSS](https://www.mapbox.com/tilemill/docs/manual/carto/). A project by [MapBox](http://mapbox.com/) that brings the power of CSS to web mapping.
- [Conveyor](https://github.com/gina-alaska/conveyor). A data processing tool developed by the [Geographic Information Network of Alaska](http://gina.alaska.edu/) (GINA) to move data across systems. GINA's own [Will Fisher](https://github.com/teknofire) joined us from Alaska to present his work.
- [D3](http://d3js.org/). A JavaScript library that brings your data and maps to life with HTML, SVG, and CSS. [Sam Mathews](http://mapsam.com/) gave us a lightning tour of D3 and pointed us in the direction of some amazing [examples](http://biovisualize.github.io/d3visualization/).
- [GeoExt](http://geoext.org/). A JavaScript toolkit for rich web mapping applications.
- [GeoServer Shell](https://github.com/jericks/geoserver-shell). A command line interface for GeoServer. Developed and presented by CUGOS regular, [Jared Erickson](https://github.com/jericks).
- [Leaflet](http://leafletjs.com/). An open-source JavaScript library for creating rich, interactive web maps. 
- [MapBender](http://www.mapbender.org/). A framework for displaying, navigating, and querying map services implemented in PHP, JavaScript, and XML.
- [Mapnik](http://mapnik.org/). A toolkit for creating beautiful maps.
- [MapServer](http://mapserver.org/). A platform for publishing spatial data and interactive mapping applications to the web.
- [Node.js](http://nodejs.org/). A platform to build scalable network applications. Although not GIS-specific, [Ryan Whitley](https://github.com/apollolm) used the node.js platform in conjunction with PostGIS, nodetiles, phantasm, and other tools to perform on-the-fly analytics and display dynamic map tiles.
- [Nodetiles](https://github.com/nodetiles/nodetiles-core/). A JavaScript library for rendering map tiles. Also see node.js.
- [OpenLayers](http://openlayers.org/). A powerful and well-established JavaScript library for creating web maps.
- [OpenStreetMap](http://www.openstreetmap.org/). A crowd-sourced worldwide map. CUGOS members [Clifford Snow](http://www.openstreetmap.org/user/Glassman) and Chase Stephens contribute extensively to the project and continue in their unflagging efforts to improve the coverage of the Pacific Northwest.
- [Paxdb](https://github.com/keppy/paxdb). A graph data system that uses [leveldb](https://code.google.com/p/leveldb/) as a key-value store and is currently under development by [James "keppy" Dominguez](https://github.com/keppy).
- [Phantasm](https://github.com/apollolm/phantasm). A node.js web service that uses [PhatomJS](http://phantomjs.org/) to print web pages (and maps!) Also see node.js.
- [PostGIS](http://postgis.net/). An extension for PostgreSQL that adds support for geographic objects and spatial queries.
- [Puffin Feeder Viewer](https://github.com/gina-alaska/gina-puffinfeeder-android-viewer). An android viewer for the [Geographic Information Network of Alaska's](http://gina.alaska.edu/) extensive set of data and imagery. Also see Conveyor.
- [Python GDAL API](http://pcjericks.github.io/py-gdalogr-cookbook/). A Python API for the ubiquitous [Geospatial Data Abstraction Library](http://www.gdal.org/) (GDAL). Multiple CUGOS members collaborated to present the [Python GDAL/OGR Cookbook](http://pcjericks.github.io/py-gdalogr-cookbook/), a set of code snippets for using the Python API.
- [QGIS](http://www.qgis.org/). A full-fledged desktop GIS program. Michael Patrick introduced the new features available in QGIS 2.0, including a snazzy user interface, advanced map styling, layer blending, additional database support, and more.
- [TileMill](https://www.mapbox.com/tilemill/). A design studio for creating beautiful maps with previously mentioned CartoCSS. This is another project by [MapBox](https://www.mapbox.com).
- [TileStache](http://tilestache.org/). An approachable python-based tile server. [Matthew Kenny](http://mattmakesmaps.com/) presented his demo application for viewing animated GIF tiles rendered by TileStache and the [GiphyAPI](https://github.com/giphy/GiphyAPI).
- [VisualSFM](http://ccwu.me/vsfm/). A GUI application for 3D reconstruction using structure from motion (SFM). Also see the Ames Stereo Pipeline.

Impressed? You should be. CUGOS is a great way to learn about the GIS world. I'll be back next year for more open source goodness...and more treats.

![TREATS! Image courtesy of Aaron Racicot.](/images/CUGOS_Treats.jpg)
