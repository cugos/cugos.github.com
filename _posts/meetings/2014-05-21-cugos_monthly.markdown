---
layout: meeting
title: May 21st 2014, 6pm -  ClipCard
category: meetings

excerpt: May 21st CUGOS Monthly Meeting at ClipCard (6pm)
---

**Location** -  ClipCard, **New office address**: 14th Floor, 720 Olive *Way*  ([map](http://www.openstreetmap.org/?mlat=47.6141&mlon=-122.3349#map=16/47.6141/-122.3349)) 

The main entrance is on Olive, between 7th and 8th Street. Just take the elevators up to the 14th Floor. Call 206-595-2567 or 206-395-5541 if you get lost.

__Loose agenda:__

- [@hallahan](https://github.com/hallahan) will do a presentation on PostGIS as well as lead a discussion regarding creating a recurring PostGIS Workshop segment at the monthly meetings. This first session will be short, primarily involving an overview of the general architecture of PostGIS and how it extents PostgreSQL to allow spatial thought.
- [@licyeus](https://github.com/licyeus) will present briefly on angular-mapbox, a project that aims to let users embed Mapbox maps using markup only (i.e., without writing any Javascript).
- [@aaronr](https://github.com/aaronr) would like to propose CUGOS host a [MapTime](http://lyzidiamond.com/posts/why-maptime/) event here in Seattle in the next couple of months.  It looks to be a great model to help bridge the gap in learning, as well as a way that CUGOS can contribute materials etc back to the MapTime community.  It has also been raised as a posibility that we could coordinate this with OSM's 10th birthday. Tentatively the local OSM community has scheduled an event for August 9th, so Cliff will be on-hand to talk about the possibility to make this a bigger joint event between MapTime and OSM.  Sounds like a "summer fling" to me...
- Revenge on Daylight Savings: Part II. To be discussed: evenly distributed spherical point set, daylight calculation hacks, d3 transitions, and more... Presented by [@powersa](https://github.com/powersa)
- Jason Taylor will present a workflow that preforms raster math using Python dictionaries. A write-up of the workflow and his script can be found [at this repo.](https://github.com/JMT2080AD/Raster-Calc)


### Possible PostGIS Workshop Topics

- Architecture of the PostGIS extension to PostgreSQL and How it Relates.
- Simplifying Adjacent Polygons Using [PostGIS Topology](http://postgis.net/docs/Topology.html).
- The Basics of SQL in the World of Postgres (Not GIS Per Se)
- Creating a Portable PostGIS on a USB Stick
- Putting OSM on PostGIS and Actually Creating Tiles
- Step By Step Guide: PostGIS -> Vector Tiles -> CartoCSS -> Map
- Useful Data Sources for PostGIS (Not Just OSM)
- PostGIS Raster
- Sanitizing Data for PostGIS


##NOTES::

---

###[@hallahan](https://github.com/hallahan)

- Wants to set up a monthly [PostGIS](http://postgis.net) presentation/tutorial series. 
- It's old, which means it's well tested and massively used in production that works great underneath modern software stacks.
- Why not just use files? Because the whole file must be read to do something - only a single user to access at a time
- Consists of **indexable geometry types** and **spatial functions**
- R-Tree Spatial Index allows you to narrow down your search and indexes data based on bounding rectangles
- Spatial SQL Queries extend standard SQL and includes popular spatial functions

```SQL
ON ST_Contains(
	census.geom,
	customers.geom
)
```
- something about geometry_columns ...
- Installation: get the Open Geo Suite (recommended by @hallahan!) go to [boundlessgeo](http://boundlessgeo.com) - includes QGIS, pgAdmin3, pgShapeLoader, GeoServer, and more ...
- he set up a postGIS DB at **postgis.cugos.org** - email him for some access!
- get link for site that allows you to find the projection code
- links to his slides that show an introduction to postGIS with some queries and how-to's for connecting to a database
- possible workshop topics
  - architecture of the postgis extention to postgressql and how it relates
  - simplifying adjacent polygons using postgis topology (MATT KENNY IS DOING THIS)
  - basics of sql in the world of postgres
  - creating a portable posgis on a USB stick
  - putting OSM on postgis and creating tiles
  - step by step guide: postgis -> vector tiles -> cartocss -> map
  - useful data sources for postgis (not just OSM)
  - postgis raster
  - sanitizing data for postgis

![Nick introducing postgis like a madman!](/image/base/hallahan-postgis.jpg)

---

###[@licyeus](https://github.com/licyeus)

- Making an AngularJS extention to bring Mapbox maps into the web without having to write javascript like you do currently.
- Gives you MVC functionality with your data and removes an extra element of JS
- wants to extend it to the entire mapbox/leaflet API to expose all possibilities
- Roadmap
  - new elements for simplicity
  - make it work with leaflet
  - making it easy for people who do not
- check it out at [github](github.com/licyeus/angular-mapbox)

---

###OSM / Maptime / Themed Hacks

- talking about hosting a maptime session to work on OSM stuff and say happy birthday to OSM.
- maybe even get a hack going with a special theme to work on a specific project

---

###[@powersa](https://github.com/powersa)

- Started a map in pure spite of Daylight Savings time
- wants to calculate hours of daylight on different locations on earth, which leads to many complications! (i.e. where on earth? or what sample of data?)
- decided to generate evenly distributed points on earth - distance between points is spiraling from the axis
- how to calculate minutes of daylight based on latitude? THAT's more complicated too!
- so now he's got some badass points on a sphere with a color scheme that corrosponds to daylight time
- check out the example at [his github](http://powersa.github.io/solstice)

---

![Look at the globe with points!](/image/base/powersa-daylight-points.jpg)
