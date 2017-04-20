---
layout: meeting
title: April 19th, 2017, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: April 19th 2017 CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---


## Agenda

- **[@julienawilson](http://github.com/julienawilson)** A talk about [GerryPy](http://github.com/gerrypy/gerrypy) - a geospatial algorithm for building congressional districts.
- **[@cliffordsnow](http://github.com/cliffordsnow)** Demonstration of the Maproulette Challenge to add food service places in King County using [Maproulette](http://maproulette.org/map/2469)
- **[@jharpster](http://github.com/jharpster)** Talk about Open Source at Microsoft the release of [building footprints](https://wiki.openstreetmap.org/wiki/Microsoft_Building_Footprint_Data) for OSM under ODbL.
- **[@mrosen](http://github.com/mrosen)** Talk about Lidar workflows using PDAL, an open source library for Lidar manipulation
- **[@you](http://cugos.org/people/)** tell us about what you're trying to solve.


## Notes

**[@julienawilson](http://github.com/julienawilson)**

Works at CBRE, previously a student at Code Fellows, before that a GIS masters student.

Wanted to build districts programmatically rather than by committee... Unbiased if possible. Problem domain is take a state/census tracts. Start with 1 tract and find nearby tracts with similar characteristics with a population margin of error.

[GerryPy](http://gerrypy.herokuapp.com/) implements the algo in a web mapping app. Allows you to weight for things like County and Compactness.

Started with a DB of tracts, turned each tract into a graph node, the borders of tracts are the edges between nodes.

Data is stored in PostGIS, the graph is built in Python.



**[@cliffordsnow](http://github.com/cliffordsnow)**

This whole thing started with the question: How well mapped is Seattle?

A comparison showed that San Francisco has better coverage than Seattle, though Clifford pointed out some flaws with the study.

In 2011 we were lucky to have connected streets. Today it is very detailed. 95% of buildings, 95% of streets, 95% of parks... Bus stops and sidewalks, not so good folks.

How bout POIs? Let's compare to real data. Peter, Paul and Debbie came up with an estimate of restaurants based on food inspection data. Clifford reckons we have 50% coverage of restaurant POIs. That's not bad. A rough guess.

How do we improve OSM? We could do an import, we could add notes, or... We could play Maproulette. Clifford went through the process of uploading the data to [Maproulette](http://maproulette.org/). Used that inspection data, cleaned it up in QGIS, then boom: [Get Mapping!](http://maproulette.org/map/2469/2154401)



**[@jharpster](http://github.com/jharpster)**
