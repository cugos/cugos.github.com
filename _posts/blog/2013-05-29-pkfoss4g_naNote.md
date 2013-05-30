<h2>FOSS4G-NA, May 22- 24, 2013</h2>
<p><strong>Topics and Highlights from Minneapolis, MN</strong>
by Peter Keum</p>
<p>Stats: 375 registered, 11% women, 34 states</p>
<h3>Day 1</h3>
<p>Morning Keynote Erek Dyskant - Team lead for geospatial analytic for DNC 2012.</p>
<ul>
<li>Self service tools and data are KEY to analyst</li>
<li>GRASS to script to run travel time model using OSM data</li>
<li>User expericne: only two layers allowed, no layer reordering, simple styling, and focus user experience</li>
<li>End users to choose: raw database level, QGIS/GRASS, web service, web browser</li>
<li>Server side platform - PostGIS solved many problems</li>
<li>Tools to drive work flow <strong>&quot;How can we use that info to drive action?&quot;&quot;</strong></li>
<li>Tagged data and show more ways to display them - tabular, time series and graphs</li>
</ul>
<hr />
<p>Presentations</p>
<p><strong>Shaping OSM into global basemap - AJ Ashton</strong>
Methodology on using OSM to create various basemaps used in MapBox product.</p>
<ul>
<li>MapBox uses customized basempa using OSM data</li>
<li>Using OSM to create basemap still feels like art project</li>
<li>
<p>OSM data Features</p>
<ul>
<li>Nodes - points and vertices</li>
<li>Ways - lines or polygons</li>
<li>Relation data - no GIS equivalent</li>
<li>Tagging system - no set schema or pre-defined feature classes, conventions by consensus &amp; popularity</li>
<li>Have to look at surround tags to identify some objects in OSM data</li>
<li>Difficult to use OSM without pre-processing</li>
</ul>
</li>
<li>
<p>Creating basemap using OSM is like creating a sculpture of art project</p>
</li>
<li>OSM data + natural earth data = good basemap</li>
<li><a href="http://taginfo.openstreetmap.org/" title="Taginfo">http://taginfo.openstreetmap.org/</a> site to inspect commonly used tags</li>
<li>Site to read only API, alternative to OSM - explore particular facets of data <a href="http://overpass-turbo.eu/" title="Overpass">http://overpass-turbo.eu/</a></li>
<li>
<p><a href="http://ideditor.com/" title="iD OSM editor">http://ideditor.com/</a> Editor tool to make additions &amp; corrections to OSM data</p>
</li>
<li>
<p>Tools to make basemap</p>
<ul>
<li>osm2pqsql &amp; postgresSQL (postGIS, hstore, PL/pgsql, PY/pgsql)</li>
<li>Create sensible data structure by reducing the large number of table columns - one table for water features, one for road etc.</li>
</ul>
</li>
<li>
<p>Do data transformation </p>
<ul>
<li>Just bring basic data - id, geometries and tags in a single store column</li>
<li>Simplified geometries for low zoom levels</li>
</ul>
</li>
</ul>
<hr />
<p><strong>OSM iD Editor - Tom MacWright, MapBox</strong></p>
<ul>
<li>Slide Presentation - <a href="http://macwright.org/presentations/id-foss4g/#0"> http://macwright.org/presentations/id-foss4g/#0</a></li>
<li>It is built from pure-javascript to edit and to edit data into OSM using web browser.</li>
<li>Very easy to use</li>
<li>iD editor displays various data layers according to geogrphaic areas (euro imagery, US etc)- scale dependency</li>
<li>It uses tiny libraries - GeoJSON, convert GPS and KML to GeoJSON</li>
<li>Only 10,258 javascript lines</li>
<li>Motto used &quot;You are not going to need it&quot;</li>
<li>Libraries - Rtree, d3, also built libraries - osm-auth, ohauth</li>
<li>edit-GeoJSON tool from Tom - Draw feature and return GeoJSON <a href="http://macwright.org/edit-geojson/" title="GeoJSON Tool">http://macwright.org/edit-geojson/</a></li>
</ul>
<hr />
<p><strong>High Performance Data Visualization in Javascript - Vladimir Agafonkin &quot;Mr Leaflet&quot;</strong>
Method to Increase Javascript Performance</p>
<ul>
<li>
Data visualization - lots of types
<ul>
<li>Charts, maps, became more interactive and dynamic</li>
</ul>
</li>
<li>Navigate through data</li>
<li>Demand for real-time interactivity is increasing </li>
<li>Processing data is shifting from the server to the browser more recently</li>
<li>Pure javascript - very fast but rendering in DOM is very slow</li>
<li>
To Increase speed
<ul>
<li>Data processing first then show to render</li>
<li>Data reduction (in order to render at browser)</li>
<li>load the data once then search the data later to increase the speed  </li>
<li>Using Grid method - load the data then only pick the data that falls under viewing box but still not fast enough</li>
<li>Use tree data structures - binary help, range tree, k-d tree, quadtree, R-tree</li>
<li>Crossfilter (many dimensions)</li>
<li>Cohon-sutherland clipping - for line clipping</li>
<li>Sutherland-hodgemann algorithm for polygon clipping</li>
<li>Douglas-Peucker simplification &amp; distance based simplification </li>
<li>Simplification line/polyline library <a href="http://mourner.github.io/simplify-js/">http://mourner.github.io/simplify-js/</a></li>
<li>Clustering - grouping of the objects and increase performance used hierarchical clustering used in Leaflet</li>
<li>Data loading and processing - UI-js-UI(browser), freezes on large data so solution is to use web worker js.</li>
<li>Loading and sending to Worker using multi-thread</li>
<li>Used in transferable objects in Chrome and Firefox - data is sent as an array buffer in the browser to prevent freeze</li>
<li>asm.js soon to be implemented in Chrome and now Firefox - allows the computational intense to relieve bottleneck (Didn't quite understood this web worker js methodology)</li>
<li>Rendering SVG uses low number of objects- ltos of stuff to draw use Canvas (if you want to render lots of objects)</li>
</ul>
</li>
</ul>
<hr />
<p><strong>CartoCSS for Styling Maps - Tom MacWright, MapBox</strong></p>
<ul>
<li>Slide Presentation :<a href="http://macwright.org/presentations/carto-foss4g/#0">http://macwright.org/presentations/carto-foss4g/#0</a></li>
<li>Developed for styling language for TileMill</li>
<li>Labeling and anti-aliasing etc for easy and beautiful maps</li>
<li>CartoDB uses cartoCSS styling language</li>
<li>Copy and paste is very important</li>
<li>Stylesheet Language Ph.D thesis <a href="http://people.opera.com/howcome/2006/phd/">http://people.opera.com/howcome/2006/phd/</a></li>
<li>Not designed for inter-operable but for mapnik only</li>
<li>Has variables, nesting selectors</li>
<li>Written in javascript and run in node.js</li>
<li>Make assumption to use in spherical projection (WGS 84)</li>
<li>
What's important about CartoCSS
<ul>
<li>very fast to render</li>
<li>very friendly, gives nice error reporting with flag</li>
<li>design to show part of the properties and push tab, it'll show up different options.</li>
<li>it has very good in-line help</li>
</ul>
</li>
</ul>
<hr />
<p><strong>ESRI and Large Data: Andrew Turner, ESRI</strong></p>
<ul>
<li>Lots of open source projects in github/esri</li>
<li>Using hadoop service to process large data and analysis capabilities</li>
<li><a href="http://esri.github.io/#JavaScript">http://esri.github.io/#JavaScript</a></li>
</ul>
<hr />
<h3>Day 2</h3>
<p>Keynote speaker - Eric Gundersen, MapBox (CEO of MapBox).</p>
<p>It was very inspirational and positive keynote speech.</p>
<ul>
<li>MapBox goal - make easy maps for people, be a canvas for everything location</li>
<li>Moving to open source that can be made into money business (using open source tools and open data) - &quot;dog food&quot; company of 30 folks.</li>
<li>Building in the open makes better product</li>
<li>The value is in the packing</li>
<li>100% Development Seed is going into MapBox</li>
<li>Wants to go against Google, Bing, ESRI, MapQuest, TomTom, Nokia</li>
<li>Using open source and open data gives very large leverage that go against the giants</li>
<li>The global geo service industry is valued at  up to $270 Billion, 30% increase every year</li>
<li>Keep building as fast as possible</li>
<li>Amazon &amp; Node.js, backbone for MapBox (infrastructure availability)</li>
<li>Using Amazon web services as distributor</li>
<li>Open Street Map as data to be used</li>
<li>Find a tool to fix the errors very fast and constantly, that's the key to success</li>
<li>Released MapBox satellite recently</li>
<li>TileMill design studio- to create basemap and other maps using CartoCSS style sheet language</li>
<li>Feb 2011, lunched TileMill</li>
<li>Find the way to iterative and keep building</li>
<li>Create more opportunity instead of competitive</li>
<li>Blog constantly but do repetitively and recursively</li>
<li>Started the business w/ consulting and use that as seed to develop and open products</li>
<li>Future of making better software is to open method and share with others</li>
<li>Created vector tiles</li>
<li>Map is going to be very central focus in lot of things</li>
<li>Value is not in the code but the value around it (hence importance of open source) packaging</li>
<li>Invest heavily in design, developing the best design not necessary.</li>
<li><strong>&quot;How are you ever going to create anything interesting if you are terrified of cannibalizing your own work?&quot;</strong></li>
<li>&quot;the value is not in the code(data), it's in the service around the code&quot;</li>
<li>&quot;be consistently open and communicate repetitively&quot; </li>
<li><strong>&quot;foss4g crowd&quot; resurgent of spatial&quot;</strong></li>
</ul>
<hr />
<p><strong>Mobile, Offline Maps -Justin Miller, MapBox</strong></p>
<ul>
<li>justin@mapbox.com / @incanus77</li>
<li>MapBox 115 repo at github</li>
<li>TileMill desktop app for making maps</li>
<li>MapBox iOS SDK - rebuild of apple's mapkit</li>
<li>Works w/ MapBox, OSM and various other tiles</li>
<li>Add map tile then add point/polyline overlays</li>
<li>15k line of codes</li>
<li>
Problems w/ off-line mapping
<ul>
<li>very large number of tiles </li>
<li>transferility of tiles over network or USB painful</li>
<li>maintaining data integrity</li>
</ul>
</li>
<li>Traditionally file storage system (x,y coordinate)</li>
<li>Better ways to manage the tiles, hence created MbTile (SQLite, self contained and server-less database), simple and easy to grok, fast and light weight --&gt; MbTiles</li>
<li>MbTile is open standard tile storage, one SQLite contains all the necessary tiles in the directory</li>
<li>Place tiles into database associate with x and y and binary png file then insert into database in SQLite - MbTile</li>
<li>Building the stack - TileMill exports, iOS off line, WhirlyGlobe/Maply</li>
<li>Preview content for MbTile</li>
<li>MapProxy/Arc2Earth export out to web</li>
<li>
Futher benefits
-made to file size smaller, 3GB to 1GB to 300 MB
-de-duplication, blue ocean tiles, light sand tiles ect, can get in vector 
-Future plan - vector tiles (efficient storing data client-side) and rendering at client side, style on-the fly, overzooming
</li>
</ul>
<hr />
<p><strong>GeoJSON is Spectacularly Wrong - Sean Gillies</strong></p>
<ul>
<li>Slide Presentation: <a href="http://sgillies.github.io/foss4gna-2013-geojson-is-spectacularly-wrong/#/">http://sgillies.github.io/foss4gna-2013-geojson-is-spectacularly-wrong/#/</a></li>
<li>GeoJSON is very flexible and evolable</li>
<li>Likes json, minimal, portable and textual, self-describing, subset of javascript</li>
<li>Order of coordinates is wrong, lat/long not long/lat</li>
<li>It doesn't confirm to ISO 191***</li>
<li>Good for programmers</li>
<li>It's flexible (tillable)</li>
<li>Some things not correct but very useful</li>
</ul>
<hr />
<p><strong>Moving up to an Enterprise open source geospatial plaform - Nancy Read, Metro Mosquito Control District, MN.</strong></p>
<ul>
<li>Efficiency, accuracy and transparency of data to control mosquito</li>
<li>Issue (want to create common view to take various spatially reference data) and make into the table</li>
<li>
How to build business case for making enterprise open source
-identify immediate ROI based efficiency (document the open source)
-money for license ersi product, they can use that fund to make customization of OS tools
</li>
<li>field data entry: all collected data go to same location</li>
<li>due to turn ovver staff, customization software vs training for new people. Decided to go w/ customization with minimal training</li>
<li>
Business case
<ul>
<li>powerful tools</li>
<li>easy access for manager, pilot, public</li>
<li>custom software and can share development w/ other agencies</li>
<li>avoided per-seat licenses fees</li>
<li>treat it as capital expenses (w/ cycle of maintenance and operation)</li>
<li>more money for development in first year, no additional cost to scale the application other than cloud server, allowed for great flexibility for custom development</li>
</ul>
</li>
</ul>
<hr />
<p><strong>Automatically geotagging unstructured text with open source tools- Charlie Greenbacker, Berico Technology</strong></p>
<ul>
<li>Ingest unstrctured text</li>
<li>Extract place names - geo entity extraction </li>
<li>Diambiguate names - geo entity resolution</li>
<li>Named entity recognition</li>
<li>Using open source tools, named entity recognition - standford natural language process to pull out names from the content. </li>
<li>Using GeoName.org to show names of the places</li>
<li>Intelligent context-based heuristic - rank by population</li>
<li>Use CLAVIN - location resolver <a href="http://clavin.bericotechnologies.com/">http://clavin.bericotechnologies.com/</a></li>
</ul>
<hr />
<p><strong>Leaflet - Past, Present and Future - Vladimir Agafonkin</strong>
He was very positive and excited about the project.</p>
<ul>
<li>
<p>Leaflet History</p>
<ul>
<li>started CloudMade April 2008</li>
<li>first slippy map w/ 200 line of codes then built full-feature API</li>
<li>came w/ very minimal geographic knowledge</li>
<li>first product: &quot;Web Maps Lite&quot; turned into Leaflet</li>
<li>very light but for two years, he was only person to maintain and became too much work</li>
<li>Open sourced it on Sept 2010</li>
<li>Rewrote the libraries from scratch and made it better</li>
<li>2.5 years of development, 6531 lines of code, with over 129 contributors</li>
<li>plugins 63 plugins (examples: vector editing, clustering)</li>
</ul>
</li>
<li>
<p>Future of Leaflet</p>
<ul>
<li>Simplicity very important </li>
<li>number of features will be reduced</li>
<li>just basic features </li>
<li>focus on quality of features instead of quantity of features</li>
<li>keep API as simple as possible</li>
<li>convention over configuration/ simple inside and outside</li>
<li>complexity limits contribution and github has revolutionized the code contribution</li>
<li>need to be not just open but TRANSPARENT</li>
</ul>
</li>
<li>
<p>Suggestions for foss4g software developers</p>
<ul>
<li>make it simple, refractoring for flexibility </li>
<li>improving performance
-improving usability
-improving plugin infrastructure
-better web site, 
-more tutorial sites
-&quot;get excited, build cool stuff, believe in yourself&quot;</li>
</ul>
</li>
</ul>
