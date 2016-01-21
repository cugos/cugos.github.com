---
layout: meeting
title: January 20th, 2016, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: January CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---

Loose agenda:
=============
- **[@christyheaton](https://github.com/christyheaton)** will talk about her experience using Python to extract Open Street Map data and the challenges that come with using free, user-contributed data.
- **[@jsheedy](http://github.com/jsheedy/)** will present his work on **[d3-grid-map](http://vulcantechnologies.github.io/d3-grid-map/)**, a package for presenting regularly gridded datasets.
- **[@cliffordsnow](http://github.com/cliffordsnow/)** Bid for 2016 OSM State of the Map US
- **[@aaronr](http://github.com/aaronr/)** Quick demo of [bboxfinder.com](http://bboxfinder.com) and [projfinder.com](http://projfinder.com) as possible ideas for Spring Fling 2016. Also talk about migrating both tools under the cugos github account. 
- **[@foundatron](https://github.com/foundatron)** will give us an update on this year's CUGOS Spring Fling and let you know how you can get involved!
- **[@you](http://cugos.org/people/)** tell us about what you're trying to solve.


Notes:
======

# [Christy Heaton](https://github.com/christyheaton)

Works at SGSI - woop!

Worked on a world wide basemap using Spectrum Spatial, but needed all data in TAB format. They had some data but needed everything else from the world. Therefore, they went with OpenStreetMap for non-US data! 

The plan: download OSM data into some kind of database > convert into TAB format > add to serverside repository > style the maps as they needed. They decided to use PostGIS databases and split up per country to keep things small. Used python to extract data from databases and added to repository.

Christy helped collect the data and wrote the python to extract it. The python uses QGIS and requires the scripts to be run within the python window in QGIS. This was tough because QGIS module documentation is super limited. 

The first python script was simple - it went into each DB and extracted info from each table and turned it into a shapefile. This didn't do everything they needed, so she wrote a [second version](https://github.com/christyheaton/PostGIS_Tab_Convert) that takes specific information based on the columns they need and puts them into a useful structure. It picks out specific columns to minimize file size.

#### Initially, there were some problems. **and fixes**

* Tranlation to tab format was unsuccessful. Some data were missing some huge chunks of data. There were no errors in the script, but data showed no roads. This was due to memory errors because Germany has HUGE amounts of data and the CPU couldn't handle it. **broke these datasets into smaller tables to reduce the load**.
* Tags were a huge issue. OSM tagging is unstructured, which means you could be searching for one tag but the data you actually need exist as another tag. Requires a lot of tag searching. **tag queries just got really long and included all potential tag names to get all needed features**
* Points of interest were way too vague, and didn't return expected results
* Large rivers were missing since they didn't get tags for those
* needed place names in English, but most places in OSM were in local language. **obtained english names from an external database**

#### Lessons

* Tags can be all over the place
* Files sizes are HUGE, watch out!
* Consider your output projection and make sure it is projected properly
* Be flexible, if things don't go right the first time - consider some alternative workflows


