---
layout: meeting
title: December 14th, 2016, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: December 14th 2016 CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---

## The December 2016 monthly meeting will act as the 2016 CUGOS Annual Business Meeting

## Agenda

- [Aaron Racicot](http://github.com/aaronr) - We will be holding the CUGOS Board of Directors election for the first 15 minutes of the meeting.  The process for the election is documented here: [2016 election](/election/2016).  CUGOS business information is now being archived on the [About](/about) page if you would like to review the guiding documents.

- [Allison Bailey](http://github.com/cybersea) - Will talk about how to go from zero to web app in nine months. Essential components include:
  - Coursework: [New Maps Plus](http://newmapsplus.uky.edu/)
  - Friends, colleagues, and instructors: [Sam](https://github.com/mapsam), [Matt](https://github.com/mattmakesmaps), [Rich](https://github.com/rgdonohue)
  - Purpose:  [Review of West Coast Groundfish Essential Fish Habitat Conservation Areas](http://www.pcouncil.org/groundfish/groundfish-essential-fish-habitat/)
  - **Result**: [New Tool to see proposed Essential Fish Habitat area modifications](http://www.pcouncil.org/2016/11/44904/new-tool-available-to-see-proposed-essential-fish-habitat-trawl-rockfish-conservation-area-modifications/)
  
- [Jacob Lesser](http://github.com/lesserj) - Will briefly present his work on a new campus map for Western Washington University

- [Seth Fitzsimmons](https://github.com/mojodna) - Will show off some OpenStreetMap ETL and analytics using AWS Athena. See also:
  - [AWS Athena](https://aws.amazon.com/athena/)
  - [Apache ORC](http://orc.apache.org/)
  - [osm2orc](https://github.com/mojodna/osm2orc)
  - [Presto](https://prestodb.io/)
  - [OSM Full History](https://wiki.openstreetmap.org/wiki/Planet.osm/full)

- [Emilio Mayorga](https://github.com/emiliom) - "Vector data in Python with GeoPandas"

- PIZZA and DRINKS.  We will spend the last hour of the meeting with some quality end of the year social time.  We are ordering up some pizza's and will have an assortment of drinks on hand.  Please feel free to hang out and chat with your fellow CUGOSians!!!!

- You! Interested in helping with the website, elections, future event planning? Add yourself to [this meeting page on github](https://github.com/cugos/cugos.github.com/edit/master/meetings/_posts/2016-12-14-cugos_monthly.markdown) or hit us up at <hello@cugos.org>.

## Wireless Info

UW NetID: **event0308**

Password: **9Q4B_9S4E_8R3X**

Expires: **12/15/2016**

## Notes

**Aaron Racicot** is holding the first Annual board election happening tonight! We've got four people running for four board positions ... quite the nail biter.

[drum roll please]

Give it up for your 2017 CUGOS Board members:

- Andrew Powers
- Debbie Bull
- Ryan Small
- Sam Matthews

You can hit them up at board@cugos.org.

**Allison Bailey**

Lesson one: prepare your AV beforehand   
Lesson two: don't use Power Point   

Allison is taking us on a journey of self-doubt, technical challenges, and the work she put into creating a web mapping application from the ground up in 9 months. Some challenges and barriers:

* high standards and aspirations of some existing projects out there
* coding in "spare" time
* digging through the insane amounts of web application frameworks
* going from analysis to programming
* just do it - not worrying about optimizing and making things perfect

Coursework - she took a class with [New Maps Plus](http://newmapsplus.uky.edu/) based out of the University of Kentucky

* 10 week session, time to absorb and repeat
* starts with the basics of programming on the web, dives into some classic mapping tools like Leaflet
* great instructors who are patient
* has grades (which are motivating!)
* built around a final project that integrates a lot of the tools and techniques learned throughout the class
* everything is through GitHub, which is itself a useful skill to know

Final project - [source code](https://github.com/cybersea/efh2016-metrics) - [view it live](http://cybersea.github.io/efh2016-metrics/) - Allison put together a write-up about the project which included information about users, user interface, content, data, and the tools to build it. Built on GitHub with leaflet, jquery, turf.js, ESRI-Leaflet and some other tools.

The tool is used by the *Pacific Fishery Management Council* to make decisions about conservation areas on the Pacific coastline of the US. It allows them to select different habitat areas and gather statistics about each one of them separately and together to make decisions about which to open up and close.

**Jacob Lesser**

Presenting a web-based campus map for Western Washington University. 

Project started 6 years ago, but has grown out of date. Students have moved on, the real world has changed. 

The focus of the map is floor plans. First day of each quarter, the map gets several thousand visits. The current map has buildings. 

But the update includes floor plans. It's all vector tiles, so it's very easy to zoom between floors. Each room is linkable. Those links are now embedded in the class schedule. Everything is now searchable and linkable. Anything with a location is integrated into the map.

Floor plans were originally in CAD. Diverse quality and detail. They hired 6 full time students for a quarter to update the floorplans and import them in GIS.

The focus is accessibility and safety. Plus you can navigate to other campuses.

The map isn't live yet. They're tuning design and interactivity. If you missed this, find Jacob, ya gotta see this.

**Seth Fitzsimmons**

Seth has been working with Amazon Athena which is a recently announced tool that allows for large scale distributed queries, with a friendly cost model. He's been experimenting with queries to OSM data.

Some questions he's been asking the three tables he has (full planet, changesets, historical osm planet):

* "how many things are there in the planet?" - took about 6 seconds, there are about 4 billion entities
* "how many 'ways' are there in the planet?" - there are about 380 million ways
* "how many things have been edited by user 'glassman'?" - too many to admit, but it's over 1 million. Nice work Cliff!

Since OSM is based on ways, we can't do anything truly spatial yet, but Seth has put some queries together that aggregate lat/lng based on attributes and exist within bounding boxes. Very neat.

Here's where you can learn a lot more about the queries he's put together: [github table](https://github.com/mojodna/osm2orc)

Now he's writing SQL live - he's taking query requests!

**Emilio Mayorga**

Check out the whole tutorial here from Geohackweek: https://geohackweek.github.io/vector/

[Geopandas](http://geopandas.org/) puts together a bunch of great spatial python libraries - it introduces a datastructure called a dataframe that is like a relational database table. The library deals with coordinate reference systems.

GeoDataFrames are the real power tool, though. This allows you to work with a geospatial column with a Pandas data frame. This gives you special tools similar to that of PostGIS. It allows you to get to what you want quickly - reads a shapefile in one line and plot it with a second line. You can even run queries on a PostGIS database from within GeoPandas using the `from_postgis` method.

Check out the [intro tutorial](https://geohackweek.github.io/vector/04-geopandas-intro/) and the [advanced tutorial](https://geohackweek.github.io/vector/06-geopandas-advanced/0) for an in-depth dive into GeoPandas and spatial data processing.

---

That's a wrap. Have an excellent holiday season, CUGOSians. See you in 2017!
