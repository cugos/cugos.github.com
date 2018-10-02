---
layout: meeting
title: September 19th 2018, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: September 19 2018 CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---


## Agenda

**[@powersa](https://github.com/powersa)** will walk through how to use [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation) to understand PostGIS query performance and scalability in the pursuit of faster spatial operations. 

**[@cliffordsnow](https://github.com/cliffordsnow)** will give a Summary of State of the Map Milano.

**[@mccombsp-kingco](https://github.com/mccombsp-kingco)** will catch us up on what they've been talking about at the [Puget Sound QGIS Meetup](http://psqgis.org/).

**[@you](http://cugos.org/people/)** tell us about something cool you are working on

## UW Event Wifi

```
UW NetID:      TBD
Password:      TBD

## Meeting Notes

## Andrew Powers - Self-Intersecting Alluvials: the Plight of Self-Swimming Salmon
* Andrew works for a company that makes software for self driving cars where he needs to clean up the street data to keep the AI as unconfused as possible. He will illustrate an approach to the problem of self-intersecting line features using the example of streams in King County.

The method uses a lengthy SQL query in PostGIS to find the errors. First it breaks the line into segments. Then for each non-connecting segment combination with in a line, it checks if they are intersecting. If it finds and intersection the two intersecting segments are returned in a new table. Andrew was impressed to find only four such errors in the King County Streams data set.

Andrew made a video to illustrate the algorithm. He used FFmpeg to assemble frames that were rendered from the line segment geometries. In this exercise, Andrew gained insight that [Big O notation](https://en.wikipedia.org/wiki/Big_O_notation] notation is applicable to SQL execution. Specifically that the above algorithm is quadratic or N^2 Big O, which is susceptible to approaching infinite time to reach completion as the data set increases in size.

There was a brief discussion of parallelism as a solution to the N^2 Andrew thinks PostgreSQL is a single threaded process so multi-threading is not a factor to solving this.  Riley Love shared that parallelism is introduced in version 9.6 but it isn't by default you need to invoke it somehow. No one present had any experience using it.

## Clifford Snow - [State of the Map Milano](https://2018.stateofthemap.org/)
State of the Map is the annual world-wide conference for the [OpenStreetMap Foundation](https://wiki.osmfoundation.org/wiki/Main_Page). For 2018 it was hosted by an Italian organization that is part of both Wikimedia and OSMF. Presentations are available on YouTube in English, look near the bottom of the page linked above for details.

Clifford described a few highlights from the conferences and described how nice it is to spend time in Milan. He recommended a talk on using OpenMapTiles to start using vector tiles in your web mapping projects. He shared some information about vandalism of the map. There was recently a high profile incident where the name for New York City was edited to be an racist phrase, and happened to get published by Mapbox before the change was corrected. Currently Mapbox's OSM Quality Check process finds twenty incidents of graffiti daily.

## Paul McCombs - What's Up with the [Puget Sound QGIS](http://psqgis.org/) Meetup Group?
Paul discussed what happens at PSQGIS meetups and some of the information that is available online: [web site](http://psqgis.org/), [Mailing List](https://groups.google.com/forum/?hl=en#!forum/psqgis), and [Meetup.com page](https://www.meetup.com/Puget-Sound-QGIS-Users-Group).

Paul called attention to a [worthwhile effort to purchase additional computers for low-income QGIS students in Vietnam](https://www.gofundme.com/learning-gis-by-students-in-vietnam). Last year the class only had 7 computers among 23 students.

## Allison Bailey - [Geohackweek 2018](https://geohackweek.github.io/)
Allison lead a review of the 5-day session held by the University of Washington eScience Institute. She found the experience to be valuable in updating her remote sensing education from decades past. Three other attendees, all new to CUGOS, also shared their experiences.

Geohackweek used [Jupyter Notebook](http://jupyter.org/) as the platform to collaborate and share data. There was a strong AI element to the proceedings.
