---
layout: meeting
title: March 21st, 2018, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: March 21 2018 CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---


## Agenda
- **[Mike Rosen](https://github.com/mrosen)** Toward Machine Learning of Lidar Classifications.  When you look at a Lidar point cloud it's clear to you what you're looking at:  trees, cars, wires, etc. Sadly, the best the industry can do right now to tag those points is have human operators
do that manually.  I've been working on this problem for while and will show you a bit about what I've learned and how far we have to go.
- **[@Kate Leroux](https://github.com/kateler)** I'll talk about how I recently dug into how to improve performance in a Mapbox stylesheet.
- **[Jason Taylor](https://github.com/jmt2080ad)** Base Objects and Functional Programming in R - Caileigh Shoot and I have been putting together a workshop for WAURISA. I would like to share this introductory section with you all. This is more or less how I wish I was taught R when I first was learning the basics. This material along with exercises and a geospatial component will be presented at a Maptime in April.
- **[Peter Keum](https://github.com/keum)** Quick highlight of QGIS 3.0 and Paul MCcombs has nice [summary note](http://psqgis.org/blog/2018/03/19/Mar-Minutes) from our last [PugetSound QGIS User group](http://psqgis.org/).
- **[@you](http://cugos.org/people/)** tell us about something cool you are working on



## UW Event Wifi

```
UW NetID:   event0963
Password:   eURj=oYZd=eENj
```

## Meeting Notes 

Kate Leroux - Kate has learned some interesting undocumented tips for Mapbox map styles.  She has a style with 15000 lines of JSON and 164 layers.  It runs a little slow, especially on slower Android devices.  Kate had many theories about what might be slowing it down.  According to some tips in the Mapbox documentation, it suggested to many layers, or layers with too many verticies could cause problems, but which layers were causing problems in her style.  She used the Chrome developer tools to benchmark her existing stylesheet.  She picked several landmarks in her perforance profile and tracked them in an excel spreadsheet for several runs.  She then created stylesheets that tested some of her initial theories and ran the same performance tests.  She used conditional formatting in excel to quickly identify components that were faster and slower in different iterations of her stylesheets.  One surprise was that her hillshade layer did not have significant performance impacts.  She then ran a memory profile.  She started exploring the memory output and noticing lots of spikes.  Things that stood out were POI labels and the line features from buildings.  Pedestrian paths were also standing out.  These were not supposed to display at the zoom level she had set and were not visible on the page, but they were still impacting performance.  She has several lessons.  
- 1. Lots of olittle things add up.  Point of interest labels while small, took a lot of memory as a group.  
- 2. Always set the mi zome for every layer.  Even if opacity is set to 0, it's not display, but still loaded into memory.  
- 3. Bring in building lines later so other components render first.  

She had big improvements.  The map was between 26 and 31 percent faster and used between 42 and 51% less memory.  
