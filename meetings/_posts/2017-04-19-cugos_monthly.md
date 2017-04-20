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

Presentation is in PowerPoint on a Surface computer, but he is talking about Open Source. He's relatively new, been spending the last 9 months figuring out where the cohort is hiding.

MS is the largest contributor to open contributor on Github as of last year. 16k contributors to MS repos. They have internal Open Source nights once a month.

[Image Classsification CNTK Machine Learning Framework](https://github.com/Azure/Embarrassingly-Parallel-Image-Classification/tree/master/tf), looks pretty cool.

Open Source in the mapping space? Not so much... but 56% of OSM change-sets have used Bing as a source. 52% of buildings are traced from Bing imagery. Last month released 9.8M building footprints that are ready to be imported to OSM. They're working on releasing several more datasets into the open system.



**[@mrosen](http://github.com/mrosen)**

Lidar Workflows with PDAL ([Point Data Abstraction Library](https://www.pdal.io/)). As a human being it's easy to look at Lidar data and say that looks like a tree, that looks like a building, but the data doesn't tell you that on its own.

Michael has been working with PDAL at a Lidar production firm in Bellevue... Same kind of thing as GDAL but it's all about point clouds. There are some key differences. You use PDAL to move things from one format to another.

Collection of readers, filters and writers. You hook them together programmatically. Means you have to piece things together yourself. It's called a pipeline.

First stage of the pipeline is a reader. Readers are essentially drivers that let you access data from different formats. The last stage is powered by writers. These let you push your data into any number of formats. Check out the spec.

In the middle, you have a lot of filters. Specify attributes based on criteria. Colorization. Filters for height. There's really a lot here, check out the spec. If you don't see one you need, write one yourself.

Here's some bad news. This library doesn't build that easily. The good news: there's a docker container. All you have to do is set that up and boom, you have pdal access from your console. Oh yeah, the whole tool is command line driven. It expresses itself in JSON. There are a lot of commands, we can't cover them all here. Check out the spec.
