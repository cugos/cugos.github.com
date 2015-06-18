---
layout: meeting
title: June 17th, 2015, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: June 17th CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---

Loose agenda:
=============
- **@cliffordsnow** Alana Kim and Isabel Shaw - and everyone else that attend the OSM State Of The Map in NYC will provide their highlights of the conference.
- **@davefisher**, from the Natural Capital Project, will talk about 1) InVEST -- a suite of ecosystem service models 2) pygeoprocessing -- the open source geoprocessing library powering InVEST and 3) Modeling patterns of recreation with geotagged social media.
- **[@kellydunn](https://github.com/kellydunn)** - [golang-geo](https://github.com/kellydunn/golang-geo): An open-source library of convenience functions for translating, geocoding, and calculating distances between geographical points in golang
- **[@you!](http://github.com/cugos/cugos.github.com)** - we encourage anybody and everybody to participate and speak about geo-related projects they're working on or interested in.

Notes:
======

SOTMUS Updates:

Over 800 attendees at the UN in NYC from 41 countries

It was a very professional conference. The best State of the Map that you could go to, the only thing it was missing was drones. Lots of security. Three tracks with 63 presentation, panels or lightning talks. Great Seattle representation. Conversations have started on a joint OSM/Wikipedia conference in Seattle in 2016. Large conference 1000+. They have a lot of resources. Clifford is very enthused about the idea. He's making a call.

Videos from the conference are at their [website](www.stateofthemap.us).

Sam Matthews took really good notes at the event see them here: [MapSam] (http://mapsam.com/posts/sotm2015/)

Isabel focused on how maps can help community health organizations. There was a lot of representation from government bodies. There was a lot of focus on humanitarian and disaster response space. Not a lot in the development and health space. The Global Development Lab was really exciting to hear about. Their job is geo-analysis for development programming. Quality and completeness of data is a challenge across the board. Let's work to solve that. Wherever the conference is next year, you can volunteer and go for free. Which is amazing. There are a lot resources for first time contributors (mapgive.gov). The Red Cross + Spatial Dev are building Open Map Kit, which lowers barriers to contributions from the field. Really exciting way to engage/fill in the map.

Alana went to the conference to hear about projects across industries and groups. Found conversations around community really interesting. Small cities struggle to get contributors. One talk looked at contributors in these places for patterns that provide insight into the community. Alana is thinking about how she can contribute to the community in Seoul. She was surprised the conference was so international in focus. Map tag visualization tool... need a link from Alana. She saw a talk about cadmapper that users OSM data (including height). She spent a few hours trying to create 3d maps around the world. Maptime-Summit - Mostly US organizers plus a few Europeans. More and more Maptimes starting around the world. Now Alana is thinking about starting a Maptime in Seoul South Korea later this year. She got a lot of info on how to start one at the Maptime Summit.

Peter went to the conference in PDX 3 years ago, 130 people then. As a government employee, Peter was thinking about how he can integrate that data. This data is about more than just streets. This is an open data set of and for the world, empower people to grow their data. Peter can tell that this is only going to grow bigger. The trend is clear. Peter owes links to projects he thinks are great.

[Open Street Map next Saturday](http://www.meetup.com/OpenStreetMap-Seattle/events/223214528/) in White Center to map the area.

-------------------------------------------------

Dave Fisher

GIS analyst for the Natural Capital Project at the University of Washington. They are a big ecology research group (2 UNIs and NGOs). NatCap is about understanding the true value of natural environments. The market price for resources leaves a lot out of the valuation. There are a lot of benefits we get from nature that aren't captured when you look at the value of a single resource. Their goal is to use science in real-world decision making.

Maps are a great way to communicate science and dense info. NatCap developed a suite of ecosystem models in the tool InVest. Takes a bunch of biophysical inputs and then quanitifies ecosystem services at the pixel level. Developed originally as ArcGIS toolboxes but there were issues with that. It's now a standalone platform built with Python. Open source libraries do all the processing. The core engine is packaged in a lib called pygeoprocessing. Provides a Python API for scripting with InVest. Very memory efficient. pip install it.

Dave works on recreation and tourism as an ecoservice. Their interested in knowing where people go to recreate and what attracts them to those areas. They do this by grabbing geo-tagged flickr photos. They've found this is actually an incredibly accurate way to measure use of natural areas. The metric is **Photo User Days** - unique users per day. What features of the natural environment attract the most people? How do patterns of visitation change when you alter the environment.

Measuring value of place by distance traveled to get there. Travel cost modeling is a method used by economists. They leverage with geotagged social data. Some people write on their Flickr profile where they live. So you geocode their home, then get the distance between there and the photo. If someone doesn't have their home on their profile they use k-means to cluster photo locations then select the center of the largest cluster as their home. This actually works pretty well. For each beach, they know the average distance traveled to get there. They then look to see what variables are positively or negatively related to distance.

---------------------------------------------------

**[@kellydunn](https://github.com/kellydunn)**

Kelly wrote golang-geo, a tool kit for processing geographic points. Geographic functions in Go. Transposing Points, Haversine, bearing delta between points, midpoints between points. Uses a lot of the logic from moveable type. He also added functionality to query for points within a radius in a SQL database. Geocoding is supported in the library. The library also does polygon math. It has a healthy contributor base. Health Near Me uses the tool to power parts of their service. Shelter Connect connects people looking for shelters and soup kitchens find services.
Some big changes coming in the next couple of months. Indexing interfaces - RTrees, NoSQL and in memory stores. Moving on from the wild wild west of Go.

Kelly didn't wrap any existing libraries. Go is a compiled language. So there is a tranlation latency to go between an interpreted langauge. It's kind of nasty to plug into C libraries from Go. The Go community likes to do things natively.
