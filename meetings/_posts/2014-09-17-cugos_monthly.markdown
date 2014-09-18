---

layout: meeting
title: September 17th 2014, 6pm -  Anderson Hall, UW
location: UW Geography
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: September 17th CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes:

---

**Location** - University of Washington, Anderson Hall, Forest Club room 207

__Loose agenda:__

- **[@svmatthews](http://github.com/svmatthews)** recaps a week of FOSS4G down in Portland and shares a story on search and rescue efforts and how organizing them spatially should be simple for anybody, not just someone who can make a map.

- **daan Strebe** presents *Map Projection as Mirror, Nostrum, Villain*. Map projections: Shine a light through a globe. What could go wrong, eh? Quite a lot, it turns out. What is a map projection, really? Why so many? For that matter, how many are there? Which is the best? How do they affect people and society? What do the cool kids do with them? And, yeah. The Mercator. Wait. What? Wait, what was Google thinking!?

- **[@erinlhamilton](https://github.com/erinlhamilton)** presents *Geoprocessing in the Web Browser*. Is it viable? What are the limitations? How does it compare to geoprocessing on the server? Who is this person? All will be answered!

- **[@JMT2080AD](https://github.com/JMT2080AD)** will present how to use R as a data munging command center! He will be giving a brief overview of how to process tabular data in R and what tools are available in R for geoprocessing when your data is spatially relevant.

- **Ben Rainbow** is a former GIS Field Analyst now operating [Back Alley Bike Repair](http://www.backalleybikerepair.com/) in Pioneer Square . As a shop owner and avid cyclist, he receives a lot of interest from locals and visitors requesting route information for short and long trips. He is interested in ideas/methods of displaying dynamic content for presentations, as well as for generating a trip map database.

- **David A. Howes** will lead a quick discussion on the potential for CUGOS to participate in the upcoming [NW GIS Conference](http://nwgis.org/event/nwgis-2014-lynnwood-wa) through an open source panel session.

---

##NOTES:

### daan Strebe - *Map Projection as Mirror, Nostrum, Villain*

**slides?**

Large scale and small scale projections (he's more of a small-scale guy). Small scale projections are the world maps, large land areas. Large scales are a mess because of the lack of standardization and immense number of them for how much area is covered. Large-scale are also a mess but mostly because they have to be!

daan talked about our historical learning of projections. The range of possibilities is immense and represented mathematically. You need and X, Y (f & g) - which make up every projection. They are all a mess, some work for reasons where they would be useless elsewhere. Most of the time, these projections are about aesthetics, egos, or social political statements. Here are some videos and posts relating to context and dialogue about projections:

* National geographic video on mapping the oceans [video](http://www.youtube.com/watch?v=OQCoWAbOKfg)
* West wing cartography about eurocentric map projections in classrooms [video](http://www.youtube.com/watch?v=vVX-PrBRtTY)
* XKCD map projections [article](http://xkcd.com/977/)

Talked about the conspiracy to create Mercator the modern map of the world, which has been criticized for its potential racist and imperialistic representation of the world. He also mentioned a different rendition of the mercator that Google could use but it would cost a significant more in computational power and adding a correct small-scale projection, which would drastically effect the renderer on the large-scale side of things. *Final conclusion:* they (Google and other web maps) certainly are using the correct projection but it should be taken with a grain of salt.

### [Erin Hamilton](https://github.com/erinlhamilton) - *Geoprocessing in the web browser*

**[slides](/image/slides/CUGOS_20140915.pdf)**

Erin talked about taking geospatial data and producing an output (like Buffering, and unions, etc) - but on the web! Traditionally requests would be sent to servers and returned, but she is exploring **in browser** processing. Focusing on javascript rendering engines and how their improvement has allowed us to use the web to process data on the fly (OMG!). She is exploring if web browsers can compare with server-side processing.

[JSTS](https://github.com/bjornharrtell/jsts) is the most robust web processing library, based on the JTS topology suite.

Tested specific browsers, with common geoprocessing operations, in a suite of data sizes. Turned data in to WKT for storage purposes. On the client side, she used microajax, async, and boomerang to build her pipeline for testing all of these data and processes. Used an Amazon EC2 and stored into a SQL DB.

**Results compared to server** - the servers were an order of magnitude faster than web browsers (>100,000 in under 4s), where client platforms couldn't process beyond 50,000 vertices. It seems web browsers are quite limited to vertices data, compared to the servers.

### [Jason Taylor](https://github.com/JMT2080AD) - *R: a tabular data command center with spatial tools*

He uses R for basically everything at work, and wanted to pull it into his geoprocessing workflow. Showed us a bunch fo sweet maps made in R that look pretty and hold some robust data.

*Let's talk about R* - built on vector data (array vectors), data frames, lists (combination of objects), and class objects thus rendering it an OOO language.

(non spatial) Example time! Making windroses from Wunderground data - only available in daily values instead of larger date ranges, needed to pull general time frames, so he found a sweet awesome function that does it for him! Did this in [open air](http://www.openair-project.org/)

**BIG TASK!** emboyments and population vs. sediment contaminents in Puget Sound. Wrote some sick nasty functions to parse all this data from 300,000+ records but now he has to add some spatial components (i.e. buffering for coasts and known locations) to remove data. Typically they'd use ArcGIS, but it was screwing things up (typical) so he researched some geo in R - used [RGEOS](http://cran.at.r-project.org/web/packages/rgeos/index.html), which takes coordinates and turns them into spatial objects.

It took an hour and half (what?!) - what else could you use? [R.gdal](http://cran.r-project.org/web/packages/rgdal/index.html). Can you automate this process at all? He thinks you can!


[@geoglrb](https://github.com/geoglrb) comments: I haven't been using R much, but you might find these resources helpful for spatial things:

* Mailing list: [R-sig-Geo -- R Special Interest Group on using Geographical data and Mapping](https://stat.ethz.ch/mailman/listinfo/r-sig-geo)
* R-Bloggers.com [Search for blog entries about 'maps'](http://www.r-bloggers.com/?s=maps) (801+ as of 2014-09-18)
* [CRAN Task View: Analysis of Spatial Data](http://cran.r-project.org/web/views/Spatial.html): a really great overview of R packages that are spatial-related.
* Spatial.ly on [R Spatial Tips](http://spatial.ly/r/) and [R Spatial Data Hints](http://spatial.ly/category/r-spatial-data-hints/)
* [Get training in R + OSGeo](http://geostat-course.org/getTraining)


### Ben Rainbow - *talkin bikes and geo!*

Traditionally a field GIS analyst and now bike shop owner! Has many people asking him about having and archiving bike trips and having presentations ready to go for groups planning on some bike trips. There's a real need for institutions and tourists to see what these routes are like so they can plan and take home their trip. This is relatively created with [Strava](http://www.strava.com/running-app), but the data are not rich enough. He's asking for a call to action and is looking for help/insight with it! There's a lot of power in spatial data and its influence on the bike community and bicycle policy in the city.

### [David Howes](http://www.dhowes.com/)

Call for participation in the upcoming [NW GIS Conference](http://nwgis.org/event/nwgis-2014-lynnwood-wa)!!!! Wants CUGOS to help put together a space for OS at a commonly ESRI-centric conference to foster mutually beneficial interactions and help GIS professionals help each other as best they can.

---
