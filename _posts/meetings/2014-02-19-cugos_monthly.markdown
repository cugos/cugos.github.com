---
layout: meeting
title: Feb 19th 2014, 6pm - ClipCard
location: ClipCard
address: 2201 Sixth Avenue, Suite 1102, Seattle WA 98121
time: 6:00pm
excerpt: February 2014 CUGOS Monthly Meeting at ClipCard (6pm)
lat: 47.616105
lng: -122.341777
category: meetings
notes: If the front doors are locked, call Ryan Small @ 206-395-5541
---

__Location -  ClipCard (formerly OneOcean), 2201 Sixth Avenue Suite 1102 Seattle, WA 98121 USA __

If the front doors are locked, call Ryan Small @ 206-395-5541 .

__Loose agenda:__

- [@aaronr](https://github.com/aaronr) will bring his Phantom quadcopter (if he has not crashed it yet) and talk how far he got in 1.5 weeks of getting the new copter.
- [@cliffordsnow](https://github.com/cliffordsnow) Update on importing the rest of King County Addresses into OSM using HOTs Tasking Manager.
- Everyone ([@cugos](https://github.com/cugos)) - Let's talk about FOSS4G 2014 in PDX and how we can help and what presentations people might do
- [@mrosen] just got back from two weeks in Guatemala check up on some humanitarian projects with which he's involved..  Among other things, he mapped a rural water system supply line using a GPS and Google Earth.  He'll talk about his trip.
- [@mpgerlek](https://www.example.com/) Report from the Strata Conference: what's the big deal with data science, what are predictive analytics, and what open source tools the k00l kidz are using
- [@jericks](https://github.com/jericks) Using GeoScript Groovy. How to use GeoScript Groovy on the command line, in a shell, in uDig, in GeoServer, and as a library to write apps.
- [@geodesy99](https://yoururl.com/) Qgis - OCD Insurance Claim. Using Open Source GIS and Open Data to illustrate an accident scene. 

__Maybe:__

- [@githubuser](https://yoururl.com/) add your item and description here...

__Meeting Notes:__

- Aaron got a sweet quadcopter after an inspiring presentation at the previous CUGOS meeting. In a couple weeks he's been recording video and images of his place and gathering photos to import into VisualFSM, which generates 3D model spaces based purely on imagery and shared objects within the images. ![Aaron showing us his quadcopter, so to speak](/image/base/aaron-quad-photo.jpg)
- Cliff moved into a new house so he's been busy. Was talking with NYC about address imports - city gov is promising to update addresses for regular updates into OSM, but nothing is coming out. Did some research on King County, which is generating address imports semi-regularly - they are looking good! He's to upload new data into OSM as well as work on documentation for address imports (specifically what errors to look for and how to fix them). Some issues with duplicate addresses within the database (most are simple fixes, but some are complex and would be difficult to automate a fix). OSM Import meetup on **Saturday the 22nd, Northgate Library @ 10:00am**.
- Code for Seattle meetup on **Saturday the 22nd in Fremont at the [Google office](https://goo.gl/maps/iN8NX) @ 10:00am** for coming up with civic apps (i.e. food truck wiki via OSM data; Seattle neighborhoods wiki; classical music venues and performances web scraper for performance information; Seattle City Parks crowd source project to track assets, trail locations, etc.; pet license app to figure out how to license your pet depending on jurisdictional boundaries).
- Chase is building thing to connect OSM updates via email addresses - can sign up to learn about changes. **more info please!**
- @mrosen went to Guatemala with Rotary club for two weeks. Had GPS on his belt the entire trip and tracked his movement from beginning to end. Import into Google Earth to show us a sweet visualization of his trip through the country visiting microfinance groups and other NGOs. Used Google Earth Pro to drape over geo referenced imagery and traced the location of a water pipe across a specific region. Created an elevation profile of the pipe as well to see it's rise and fall over the land.
- Jared Erickson talked about [GeoScript Groovy](http://geoscript.org/groovy/), a "geospatial swiss army knife" that uses one scripting API for many languages that run on the Java virtual machine. Groovy is a dynamic JVM language with strong Java integration, which makes it easy for java users to learn. Adds 'closures', 'meta programming', and you can use it for 'scripting'. Can create *inline scripts* that would, for instance, take a shapefile and push it to Mapfart. You could grab the bounds of a shapefile and convert it to a different geometry or even render images. Something about piping a bunch of processes together (yay UNIX!) and interacting with other command line tools. ![Jared showing us some python server scripting using Groovy, or something](/image/base/jared-groovy.jpg)
- Michael Gerlek attended the Oreilly Strata Conference for big data and predictive analytics. Michael defines analytics as gaining insights from large bodies of data in order to make better business decisions. He used the cugos website (this one!) to gather data to analyze, despite it being a relatively small database. Looking at the data, he asks first, *"Who commits after dinner, and who commits on Saturdays?"* but that's simple one-way answers. He continues to use these data to then ask, *"Which committers are 'similar' to which other committers? That is, what 'kind' of people commit after dinner on Saturdays?"* - this leads to finding similarities and "clusters" between the data to make decisions. The final word, data can be dirty and requires some major cleaning before you can really play around with it. You have to have the right questions, the right technology, and the right data.
- Mike got in a car accident last month, which started a conversation with the insurance company about reality and what they see in terms of the intersection the crash occured in. Used QGIS and open data to build a GIS model of the accident scene with building footprints and road data. Used inkscape to build the graphics from the spatial crash data, and generated a layered PDF sequence of the crash scene.

**CUGOS will be at a new location next month!** Stay tuned for more updates.
