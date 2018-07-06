---
layout: meeting
title: December 13th, 2017, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: December 13 2017 CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---


## Agenda
- **[Board Election 2017](http://cugos.org/election/2017/)**
- [Christy Heaton](https://twitter.com/christytoes) and [Caileigh Shoot](https://twitter.com/caileighshoot) will give an update on [Maptime Seattle](http://maptimesea.github.io/)
- [Jason Taylor](https://github.com/JMT2080AD) will do a quick presentation on [Shiny Apps](https://shiny.rstudio.com/gallery/) and some notes from the Seattle useR Group 'Shiny Lightning' meetup.
- [Kate L](https://github.com/kateler) presents a summary of NACIS 2017 chock full of highlights and enticing maps.
- **[@you](http://cugos.org/people/)** tell us about what you're trying to solve.

## UW Event Wifi

```
event0212
R9x2+U4r4+S6f8
```

## Notes

**Elections**

Jacob Lesser has been nominated in person, which brings our nominated numbers up to 4.

Aaron Racicot nominates all four members - 19 "aye" votes in favor. 0 "nay" votes not in favor.

That's it folks! Your 2018 board:

- Andrew Powers
- Debbie Bull
- Ryan Small
- Jacob Lesser

**Maptime Seattle - 2017 year in review**

Christy and Caileigh run Maptime Seattle!

Events
* every month "Mappy Hours"
* GeoJava coffee hours, but accidentally resulted in Java folks showing up, so it's now called Cup O' Geo
* Project night at Miir in Fremont
* February: Introduction to GeoPandas - mapping wtih python
* March: Using Tableau to make maps
* March: GeoLadies brought together women mappers together as a chance to network
* April: Mapping with D3.js
* May: led out a Missing Maps event (every May)
* May: CUGOS Spring Fling workshops - GIS python and R workshops
* June: Intro to Turf.js
* July: Google Earth Engine tutorial
* August: Introduction to field mapping and orientering
* September: Introduction to GIS
* October: Cartography with QGIS
* November: Web mapping with vector tiles
* December: Hand drawn maps - mental map drawing

Stats
* 771 members
* 11 workshops
* 12 mappy hours
* 1 Cup O Geo
* 1 Geoladies night

Sponsors
* King County (space)
* Galvanize (space)
* SGSI (meetup page)
* Rooftop Brewery (mappy hour)
* CUGOS! (meetup page 2018)

Next year
* More social events, more workshops.
* What would you like to learn?


**[Jason Taylor](https://github.com/JMT2080AD)**

Shiny is an application framework for the programming language R. It's easy to use and packs a lot of features.

There are two components that make up the app. ui.R and server.R. ui.R defines how you want the users to interact with the app. server.R handles variables and functions that power the app.

The work flow is basically, create a visualization. People use R to generate static plots from data. So if you already do that, then you're done with your first step. You can wrap Shiny components around that visualization.

You can start with really simple visualizations. Once you gain some experience, you can get into some really fancy web apps.

Jason built a really cool Bureau of Labor Statistics app, that uses a county map selector to filter labor statistics. Very neat.

Shiny works really well with maps and all that. We'll be seeing more of this.

Thanks, Jason!


**[Kate L](https://github.com/kateler) -- [Slides](bit.ly/kate-nacis2017)**

Kate went to NACIS this year. It's a very approachable and intimate conference.

The conference was in Quebec this year, an added bonus. They even had a poutine bar.

There was a map gallery. Students and professionals.

Jeffery Mandel was the keynote. He creates maps for movie and TV. He's done a lot of really cool scifi works. Also created the map of Pawnee from Parks and Rec (based off of Chistchurch, New Zealand)

Kate gave a talk about making a vector tile basemap for the City of Seattle (or was it King County)

Vendor updates (esri and mapbox).

Tools... Mapshaper has added a lot of tools. mR-V is a new technique for line simplification that works really well for cartography. Illustrator keyboard shortcuts. Shp escape converts .shp files to other formats in the browser.

Data + resources... New version of Natural Earth, they've added more languages/current politcal data. Tom Patterson gave a talk about park maps, they make a lot of free data available. Who's on First -- gazateer (list of places), covers the world (mapzen). gistbok.ucgis.org is the GIS&T Body of Knowledge, wikipedia for geography knowledge. Free images.

Cartographic Techniques... Flow mapping -- shows movement through time and space. Cartographic perspectives, North at the top doesn't always make sense. Fake/Real landscapes -- adventuresinmapping.com. Color and contrast. Navigation UX (save a diverse list of geographies to check when you design a map). Multilingual maps.

Tips + Tricks... Does the 3 act narrative structure apply to story maps? Yes. Trust your initial sketches - Alan McConchie. Save pdfs of webmaps, cuase they won't work in 3 years -- Kelso.

Other things... spacetime.nypl.org. 3D printing vector tiles.

bit.ly/kate-nacis2017

Thanks, Kate!
