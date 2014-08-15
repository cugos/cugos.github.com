---
title: 'OSM 10th Birthday Party'
layout: post
tag: event
---

Presentation Notes from the OSM 10th Anniversary meetup at Tableau. 

![OSM Birthday Program](/blog/images/osm10-program.jpg)

##Chase Stephens - *Everday Mapping*

Chase gave a great introduction to OSM and the current state of the organization. It has grown greatly over the past 10 years, and is reaching a tipping point to become incredibly renouned and common. [OSM Tutorials and Resources](http://seriouser.org/)

##Sam Matthews - *Creating Web Maps with OSM Data*

[View slides](http://mapsam.com/osm10)

##Paul Norman - *OpenStreetMap-Carto and the Mapper Feedback Loop*

Talked about the transition from the original XML-based styling of OSM into the more modern, much more maintainable styles of Carto-CSS - [styles on github](https://github.com/gravitystorm/openstreetmap-carto). Required cleaning from the old stylesheet, but also has added new features such as icons for specific points. They've cleaned up borders and made styles much more consistent and systematic, which makes the map and tileset much more readible and recognizeable.

Roadmap and updates:

* *building colors* - right now in some areas you can only see buildings because of their styles, which reduces the view for other data in the area
* *multi-line highway sheilds* - better rendering of highway sheilds that are comprised of up to 7 or 8 names

*Print maps* are being worked on in accordance with OSM data to make useable prints for posters and education materials.

##Roger Andre - *Using OSM to Help People See and Understand Their Data*

Roger works at Tableau and explained how OSM is helpful to us. It's used to provide context to the user, with the basemap giving a visual relation. Tableau uses land, water, roads, road labels, parks, and railroad OSM data for their software as their basemap.

Why use OSM? Best detail at high zoom levels, more up-to-date than other commercial data sets, more selection of feature types, can be implemented flexibly with subsets and case-specific data, and it's free! :)

Implementation of Tableau's process involving OSM. They make their own basemap rather than using the OSM standard carto.

1. download planet file
1. use Imposm for parsing data
1. choose features and extract into shapefiles (fast, moving files are easy, keeping separate from commercial data)
1. render with mapserver for flexibility across different operating systems (some new ones - mapbox - are difficult to deploy on different OS's)
1. finally, hosted on AWS as a java service to process requests
1. output in standard tiles

**Next steps** - explore OSM2PGSQL and hstore, which allows more tag searching and built on a key/value storage in postgresql.

They want to figure out how to fix "broken" features (split features), which cause rendering nightmares with scale based display - as they process data, how to intelligently restore broken data? Some features get left out because of polygon splitting, which makes them smaller and "useless" to the renderer (which is not the case!).

##Pat Tressel - *Join the Hummanitarian OSM Team*

First responders to Haiti earthquake in 2010 frantically mapped the Port-au-Prince area. It was [so successful](http://wiki.openstreetmap.org/wiki/WikiProject_Haiti/Earthquake_map_resources) that OSM is now the official map of Haiti. The crowd-source mapping model proved to be so successful that Humanitarian OSM (HOTOSM) was started a year later.

HOTOSM crowd-sources data with a group of people who are available to map during emergencies. They produce tools for agencies and mappers to use as well.

She gave a sweet presentation and live example of editing data for HOTOSM in JOSM - showing us the fields and layers of data avaialble to map in specific areas.

**How to get involved**

1. Create an OSM account at [openstreetmap.org](http://openstreetmap.org)
1. get on the mailing list
1. Fire up IRC - [irc.oftc.net/hot](http://irc.oftc.net/hot) - this is where you can be assigned tasks for edits
1. HOT has put together a site called [learnOSM](http://learnosm.org) where you can use JOSM or iD - most people use JOSM because it has the "[building tools](http://wiki.openstreetmap.org/wiki/JOSM/Plugins/BuildingsTools)" plugin
1. work in JOSM - see instructions
1. go to [tasks.hotosm.org](http://tasks.hotosm.org) for the current list of tasks - gives instructions for additional data

##Paul McCombs - *Correcting Addressing is in the details*

He primarily uses iD for editing OSM and address points. There is some good documentation about editing address points on the wiki. It comes down to order. In King County it goes House Number, Directional Prefix (east/west only), Street Name, Street Type, and Directional Suffix (north/south only) - these all go into the <span>addr:streetname</span> tag in OSM.

Addresses are not incredibly systematic, so be careful adding the information - use your head and attribute as accurately as you can.

Is your data open source? Direct observations: **yes**, Existing OSM Data: **yes**, US TIGER Data: **yes**, OpenData.ArcGIS.com: **yes**, USPS: **no**, Local Gov: **depends on data policy**, Google/Bing/MapQuest: **no**

##Martijn Exel - *Quality Tools*

Martijn showed us a useful set of tools for QC and editing of OSM data. The list is below:

**OSM Inspector** - great for looking at errors and issues related to the OSM database

**Keep Right** [keepright.at](http://keepright.at) - shows common mistakes and allows you to edit in JOSM or iD - 

**Battle Grid** [battlegrid.us](http://battlegrid.us) - quality score related to TIGER data. compares geometries and makes a quantitative distribution grid across the basemap for quality of road data. Allows you to open in JOSM and make edits on the fly.

**Map Roulette** [maproulette.org](http://maproulette.org) - serves up errors on the map randomly, allowing you to accept challenges and work in specific areas by fixing road names, geometry updates, and other qualitative edits via JOSM or iD. There's a contest right now at scout.me/osmcontest to win a Tablet if you want!

**Whodidit** [simon04.dev.openstreetmap.org/whodidit](http://simon04.dev.openstreetmap.org/whodidit) - shows recent edits by who

**Overpass API** [overpass-turbo.eu](http://overpass-turbo.eu) - access to READ only OSM data great for getting data.

**Mapillary** [mapillary.com](http://mapillary.com) - open source street view

##Seth Fitzsimmons - *What We've Made Together*

Seth works at Stamen (based in San Francisco) who do a ton of cartographic work with the help of OSM data. List of some projects:

**Oakland Crime Spotting** - City of OAK used to post crime data on PDFs - Stamen compiled data and built a tool to show data on a map.

**Toner & Watercolor base maps** [maps.stamen.com/watercolor](http://maps.stamen.com/watercolor) - artistic basemaps created originally for uploading spatial data to view quickly - but the basemaps stayed with the project and are a big part of Stamen's design philosophy with OSM today.

**Terrain** [maps.stamen.com/terrain](http://maps.stamen.com/terrain) - natural basemap as part of their basemap collection

**building=yes** - data showing only buildings, which inevitably shows roads and routes and creates a piece of art of the city

##Jared Dominguez - *Georeferencing Raster Imagery*

Jared did a small live example of georeferencing in QGIS using OSM as your base map for reference. It's a good, simple process of picking points of the image and choosing where that point exists on the map in the real world - with more points you will retain more accuracy.

>Happy birthday OSM!