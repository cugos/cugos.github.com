---
layout: post
title: FOSS4G-NA notes from PeterK
category: blog
excerpt: Raw notes from Peters trip to FOSS4G-NA
---

##FOSS4G-NA, May 22- 24, 2013##
**Topics and Highlights from Minneapolis, MN**
by Peter Keum

Stats: 375 registered, 11% women, 34 states
###Day 1###
Morning Keynote Erek Dyskant - Team lead for geospatial analytic for DNC 2012.

- Self service tools and data are KEY to analyst
- GRASS to script to run travel time model using OSM data
- User expericne: only two layers allowed, no layer reordering, simple styling, and focus user experience
- End users to choose: raw database level, QGIS/GRASS, web service, web browser
- Server side platform - PostGIS solved many problems
- Tools to drive work flow **"How can we use that info to drive action?""**
- Tagged data and show more ways to display them - tabular, time series and graphs

****
Presentations

**Shaping OSM into global basemap - AJ Ashton**
Methodology on using OSM to create various basemaps used in MapBox product.

- MapBox uses customized basempa using OSM data
- Using OSM to create basemap still feels like art project
- OSM data Features
	- Nodes - points and vertices
	- Ways - lines or polygons
	- Relation data - no GIS equivalent
	- Tagging system - no set schema or pre-defined feature classes, conventions by consensus & popularity
	- Have to look at surround tags to identify some objects in OSM data
	- Difficult to use OSM without pre-processing

- Creating basemap using OSM is like creating a sculpture of art project
- OSM data + natural earth data = good basemap
- [http://taginfo.openstreetmap.org/](http://taginfo.openstreetmap.org/ "Taginfo") site to inspect commonly used tags
- Site to read only API, alternative to OSM - explore particular facets of data [http://overpass-turbo.eu/](http://overpass-turbo.eu/ "Overpass")
- [http://ideditor.com/](http://ideditor.com/ "iD OSM editor") Editor tool to make additions & corrections to OSM data

- Tools to make basemap
	- osm2pqsql & postgresSQL (postGIS, hstore, PL/pgsql, PY/pgsql)
	- Create sensible data structure by reducing the large number of table columns - one table for water features, one for road etc.
	
- Do data transformation 
	- Just bring basic data - id, geometries and tags in a single store column
	- Simplified geometries for low zoom levels


----------
**OSM iD Editor - Tom MacWright, MapBox**

- Slide Presentation - [ http://macwright.org/presentations/id-foss4g/#0]( http://macwright.org/presentations/id-foss4g/#0)
- It is built from pure-javascript to edit and to edit data into OSM using web browser.
- Very easy to use
- iD editor displays various data layers according to geogrphaic areas (euro imagery, US etc)- scale dependency
- It uses tiny libraries - GeoJSON, convert GPS and KML to GeoJSON
- Only 10,258 javascript lines
- Motto used "You are not going to need it"
- Libraries - Rtree, d3, also built libraries - osm-auth, ohauth
- edit-GeoJSON tool from Tom - Draw feature and return GeoJSON [http://macwright.org/edit-geojson/](http://macwright.org/edit-geojson/ "GeoJSON Tool")


----------
**High Performance Data Visualization in Javascript - Vladimir Agafonkin "Mr Leaflet"**
Method to Increase Javascript Performance

- Data visualization - lots of types
	- Charts, maps, became more interactive and dynamic
- Navigate through data
- Demand for real-time interactivity is increasing 
- Processing data is shifting from the server to the browser more recently
- Pure javascript - very fast but rendering in DOM is very slow
- To Increase speed
	- Data processing first then show to render
	- Data reduction (in order to render at browser)
	- load the data once then search the data later to increase the speed	
	- Using Grid method - load the data then only pick the data that falls under viewing box but still not fast enough
	- Use tree data structures - binary help, range tree, k-d tree, quadtree, R-tree
	- Crossfilter (many dimensions)
	- Cohon-sutherland clipping - for line clipping
	- Sutherland-hodgemann algorithm for polygon clipping
	- Douglas-Peucker simplification & distance based simplification 
	- Simplification line/polyline library [http://mourner.github.io/simplify-js/](http://mourner.github.io/simplify-js/)
	- Clustering - grouping of the objects and increase performance used hierarchical clustering used in Leaflet
	- Data loading and processing - UI-js-UI(browser), freezes on large data so solution is to use web worker js.
	- Loading and sending to Worker using multi-thread
	- Used in transferable objects in Chrome and Firefox - data is sent as an array buffer in the browser to prevent freeze
	- asm.js soon to be implemented in Chrome and now Firefox - allows the computational intense to relieve bottleneck (Didn't quite understood this web worker js methodology)
	- Rendering SVG uses low number of objects- ltos of stuff to draw use Canvas (if you want to render lots of objects)


----------
**CartoCSS for Styling Maps - Tom MacWright, MapBox**

- Slide Presentation :[http://macwright.org/presentations/carto-foss4g/#0](http://macwright.org/presentations/carto-foss4g/#0)
- Developed for styling language for TileMill
- Labeling and anti-aliasing etc for easy and beautiful maps
- CartoDB uses cartoCSS styling language
- Copy and paste is very important
- Stylesheet Language Ph.D thesis [http://people.opera.com/howcome/2006/phd/](http://people.opera.com/howcome/2006/phd/)
- Not designed for inter-operable but for mapnik only
- Has variables, nesting selectors
- Written in javascript and run in node.js
- Make assumption to use in spherical projection (WGS 84)
- What's important about CartoCSS
	- very fast to render
	- very friendly, gives nice error reporting with flag
	- design to show part of the properties and push tab, it'll show up different options.
	- it has very good in-line help


----------
**ESRI and Large Data: Andrew Turner, ESRI**

- Lots of open source projects in github/esri
- Using hadoop service to process large data and analysis capabilities
- [http://esri.github.io/#JavaScript](http://esri.github.io/#JavaScript)


----------
###Day 2###

Keynote speaker - Eric Gundersen, MapBox (CEO of MapBox).

It was very inspirational and positive keynote speech.

- MapBox goal - make easy maps for people, be a canvas for everything location
- Moving to open source that can be made into money business (using open source tools and open data) - "dog food" company of 30 folks.
- Building in the open makes better product
- The value is in the packing
- 100% Development Seed is going into MapBox
- Wants to go against Google, Bing, ESRI, MapQuest, TomTom, Nokia
- Using open source and open data gives very large leverage that go against the giants
- The global geo service industry is valued at  up to $270 Billion, 30% increase every year
- Keep building as fast as possible
- Amazon & Node.js, backbone for MapBox (infrastructure availability)
- Using Amazon web services as distributor
- Open Street Map as data to be used
- Find a tool to fix the errors very fast and constantly, that's the key to success
- Released MapBox satellite recently
- TileMill design studio- to create basemap and other maps using CartoCSS style sheet language
- Feb 2011, lunched TileMill
- Find the way to iterative and keep building
- Create more opportunity instead of competitive
- Blog constantly but do repetitively and recursively
- Started the business w/ consulting and use that as seed to develop and open products
- Future of making better software is to open method and share with others
- Created vector tiles
- Map is going to be very central focus in lot of things
- Value is not in the code but the value around it (hence importance of open source) packaging
- Invest heavily in design, developing the best design not necessary.
- **"How are you ever going to create anything interesting if you are terrified of cannibalizing your own work?"**
- "the value is not in the code(data), it's in the service around the code"
- "be consistently open and communicate repetitively" 
- **"foss4g crowd" resurgent of spatial"**

----------

**Mobile, Offline Maps -Justin Miller, MapBox**

- justin@mapbox.com / @incanus77
- MapBox 115 repo at github
- TileMill desktop app for making maps
- MapBox iOS SDK - rebuild of apple's mapkit
- Works w/ MapBox, OSM and various other tiles
- Add map tile then add point/polyline overlays
- 15k line of codes
- Problems w/ off-line mapping
	- very large number of tiles 
	- transferility of tiles over network or USB painful
	- maintaining data integrity
- Traditionally file storage system (x,y coordinate)
- Better ways to manage the tiles, hence created MbTile (SQLite, self contained and server-less database), simple and easy to grok, fast and light weight --> MbTiles
- MbTile is open standard tile storage, one SQLite contains all the necessary tiles in the directory
- Place tiles into database associate with x and y and binary png file then insert into database in SQLite - MbTile
- Building the stack - TileMill exports, iOS off line, WhirlyGlobe/Maply
- Preview content for MbTile
- MapProxy/Arc2Earth export out to web
- Futher benefits
	-made to file size smaller, 3GB to 1GB to 300 MB
	-de-duplication, blue ocean tiles, light sand tiles ect, can get in vector 
-Future plan - vector tiles (efficient storing data client-side) and rendering at client side, style on-the fly, overzooming

----------
**GeoJSON is Spectacularly Wrong - Sean Gillies**

- Slide Presentation: [http://sgillies.github.io/foss4gna-2013-geojson-is-spectacularly-wrong/#/](http://sgillies.github.io/foss4gna-2013-geojson-is-spectacularly-wrong/#/)
- GeoJSON is very flexible and evolable
- Likes json, minimal, portable and textual, self-describing, subset of javascript
- Order of coordinates is wrong, lat/long not long/lat
- It doesn't confirm to ISO 191***
- Good for programmers
- It's flexible (tillable)
- Some things not correct but very useful

----------
**Moving up to an Enterprise open source geospatial plaform - Nancy Read, Metro Mosquito Control District, MN.**

- Efficiency, accuracy and transparency of data to control mosquito
- Issue (want to create common view to take various spatially reference data) and make into the table
- How to build business case for making enterprise open source
	-identify immediate ROI based efficiency (document the open source)
	-money for license ersi product, they can use that fund to make customization of OS tools
- field data entry: all collected data go to same location
- due to turn ovver staff, customization software vs training for new people. Decided to go w/ customization with minimal training
- Business case
	- powerful tools
	- easy access for manager, pilot, public
	- custom software and can share development w/ other agencies
	- avoided per-seat licenses fees
	- treat it as capital expenses (w/ cycle of maintenance and operation)
	- more money for development in first year, no additional cost to scale the application other than cloud server, allowed for great flexibility for custom development

----------
**Automatically geotagging unstructured text with open source tools- Charlie Greenbacker, Berico Technology**


- Ingest unstrctured text
- Extract place names - geo entity extraction 
- Diambiguate names - geo entity resolution
- Named entity recognition
- Using open source tools, named entity recognition - standford natural language process to pull out names from the content. 
- Using GeoName.org to show names of the places
- Intelligent context-based heuristic - rank by population
- Use CLAVIN - location resolver [http://clavin.bericotechnologies.com/](http://clavin.bericotechnologies.com/)


----------
**Leaflet - Past, Present and Future - Vladimir Agafonkin**
He was very positive and excited about the project.

- Leaflet History
	- started CloudMade April 2008
	- first slippy map w/ 200 line of codes then built full-feature API
	- came w/ very minimal geographic knowledge
	- first product: "Web Maps Lite" turned into Leaflet
	- very light but for two years, he was only person to maintain and became too much work
	- Open sourced it on Sept 2010
	- Rewrote the libraries from scratch and made it better
	- 2.5 years of development, 6531 lines of code, with over 129 contributors
	- plugins 63 plugins (examples: vector editing, clustering)

- Future of Leaflet
	- Simplicity very important 
	- number of features will be reduced
	- just basic features 
	- focus on quality of features instead of quantity of features
	- keep API as simple as possible
	- convention over configuration/ simple inside and outside
	- complexity limits contribution and github has revolutionized the code contribution
	- need to be not just open but TRANSPARENT

- Suggestions for foss4g software developers
	- make it simple, refractoring for flexibility 
	- improving performance
	-improving usability
	-improving plugin infrastructure
	-better web site, 
	-more tutorial sites
	-"get excited, build cool stuff, believe in yourself"

