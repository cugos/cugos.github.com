---
layout: meeting
title: February 17th, 2016, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: February CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---

Loose agenda:
=============
- **[@lesserj](http://github.com/lesserj)** Talks about his thesis project to identify landscape disturbances using big data statistics
- **[@emiliom](http://github.com/emiliom)** Seeks out brilliant suggestions about his [trail mapping](http://www.friendsofcedarcreekpark.org/#!trail-map/c2385) and [related geo-volunteering](https://emayorga.cartodb.com/me) work on the [Green River](https://www.flickr.com/photos/pepescas/albums/72157639454237446)
- **[@npeihl](http://github.com/npeihl)** shares his experiments with Mapbox GL in Android and JavaScript. And a sneak peek at incorporating Mapbox GL into [Dropchop](http://dropchop.io)
- **[@lovegis](http://github.com/lovegis)** Talks about the use of open source on the Maps Team at Amazon.
- **[@powersa](http://github.com/powersa)** will lead a rally for Spring Fling 2016
- **[@cliffordsnow](http://github.com/cliffordsnow)** will announce our venue choice for 2016 SOTM-US conference. And International Women's Day Event in Bellingham.
- **[@you](http://cugos.org/people/)** tell us about what you're trying to solve.


Notes:
======

### Jacob Lesser, Satellite Imagery Change Detection Algorithms

Heard of the EROS data center? They do sweet downloads for satellite data like Landsat and Modis. Originally, if you weren't downloading data as satellites sent it in, you didn't get it. So they built some data centers to capture all of the information (I think). In the basement of EROS is the largest collection of remotely sensed images **in the world**.

He worked for the Fire Science Division that mananges USGS's fire data. Used a dataset called [**LANDFIRE**](http://www.landfire.gov/) that includes information at 30m resolution and anything that you'd need to monitor fire. These inputs are data needed for prediction models. Includes vegetation type, forest canopy cover, fuel classifications, etc. 

How do they update it? They incorporate detected changes from Landsat imagery and disturbances and incorporate them into the new models. How much data? 224 billion pixels per day. BAM.

Current methods for change detection: Real-time fire specific detections, pattern matching, and the tool he developed!

His method JUST detects fire, ignores all other changes. It uses Modis for picking up "hot spots" like fires and volcanoes. Because resolution is low it's bad for fire analysis. Looking for particular shapes and patterns you can find disturbances. These shapes are different depending on the ecosystem, which makes things complicated!

Methods & Tools:

1. extract & clean data: using python & GDAL
1. stats: run decision trees that look for patters that define output and tell you how likely the pixel is important for fire analysis with C using Cubist, QGIS for viewing/testing
1. apply the model from the Cubist model and apply it to a new scene, you get outputs with liklihood of disturbance
1. set disturbance threshold that says "anything greater than this value is likely fire"
1. validate results: compare detected fires to the fire database, compare to BARC data for the scene and year in question, and human assessment
1. results: for most scenes it looks like it works pretty well. It's dependent on the amount of training data available. Where there's a lot of training data, the model is good at predicting.

Thanks Jacob!

### emiliom

Ubunutu computer, yah never know when it's gonna project... And it does! 

Emilio, couldn't wrap his head around this idea that there was a Gorge 40 minutes outside of Seattle. The Green River Gorge is an oddity in Geology of the region. Beautiful place, really worth a visit. Trout fishing, swimming holes, great foliage.

As an environmental scientist, he wants to know his area. So he researched the gorge online. But he found online data sources (Google) to be quite misleading. There are a lot of different types of public land, but these online resources just mark them as "green".

There is a long history of locals taking down signage that helps you access these areas. It's a great area, but really hard to know what you can and can't do.

This inspired Emilio to document the area to provide better access. Text descriptions only get you so far. Especially in the area of ubiquitous maps, we can do better. Emilio and a group have started sporadic mapping while hiking the area. They start data collection when they start, but then the device (phone) just runs and doesn't require active participation. You can just hike! They're seeking the simplest possible work flow.

Over the years, they've collected a lot of hiking path data. The results are really cool. Great gpx data for many hikes. How do you put it out there? The data is messy, too messy to make a public map. Accurate and detailed geo data takes a lot of time. It's prohibitive.

How do you go from raw gpx data to something other people can actually use? He wants to get the data somewhere that people can use it... Without spending days data munging...

Seth suggests Strava. That can be a good first stop for this type of data, and makes it accessible to lots of different folks.

### npeihl

Nick is building apps with Mapbox. He's been working with TileJSON and `mapbox-gl-js` (or `mapbox-gl-native`) that allows him to add custom imagery tiles to a web map. 

He's been using [Dropchop](https://github.com/cugos/dropchop) to load in geojson files, but dropchop doesn't handle big data files because it has to draw the data every time. He's been using `mapbox-gl-js` to turn Dropchop into a vector editor so he can drag in huge geojson files and they can be rendered as tiles instantly. Check out the progress of this feature here: https://github.com/cugos/dropchop/issues/216

If you want to help, head on over to [github.com/cugos/dropchop](https://github.com/cugos/dropchop) to see what's up.

### lovegis



### powersa

### cliffordsnow



