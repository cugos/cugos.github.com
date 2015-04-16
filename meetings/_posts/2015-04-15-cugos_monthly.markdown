---
layout: meeting
title: April 15, 2015, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: April 15th CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---

Loose agenda:
=============

- **[@powersa](https://github.com/powersa)** - will provide an update on the [Spring Fling](http://cugos.org/2015-spring-fling/), seek feedback/input on the proposed schedule, suggest ways to get invovled and shoot fictional t-shirts from an imaginary cannon.
- **[Jacques Tardie](https://twitter.com/jqtrde)** - On building **Snapsat**, a webapp that lets anyone create fullsize custom Landsat band composites in their browser. It's pretty sweet.
- **[Fred Lott](https://github.com/flott)** - will talk about vertical datums, working with [VERTCON](http://www.ngs.noaa.gov/TOOLS/Vertcon/vertcon.html), and making a [webmap interface](https://github.com/flott/vertcon-web) for elevation adjustments.
- **[@you!](http://github.com/cugos/cugos.github.com)** - we encourage anybody and everybody to participate and speak about geo-related projects they're working on or interested in.

Notes:
======

Tune in for live updates during the meeting.

[@powersa](https://github.com/powersa) is presenting from [this presentation](https://powersa.github.io/spring-fling-2015-plan/#/2). Goal for Spring Fling is to have something for everyone. Schedule right now is detailed on the [Spring Fling site](http://cugos.org/2015-spring-fling/).  Proposed tracks are:

  * Drop-N-Chop: A javascript based project for working on geoprocessing in the browser. Project page is [here](https://github.com/cugos/drop-n-chop).
  * Web Cartography with MapBox Studio, an application that lets you design maptiles with an easy to use desktop app.
  * QGIS for desktop GIS and cartography.

Ways to help:

  * Find a sponser
  * Volunteer
  * Send feedback to hello@cugos.org
  * Spread the word. Tell your friends. Tell your Grandma!
  

--------------------------------------------

[Jacques Tardie](https://twitter.com/jqtrde) is now talking about [Snapsat](http://snapsat.org/).  A lot of cool projects involve Landsat data.  Last month Amazon started hosting Landsat8 data on S3. 

Enter Snapsat: An easy way to make a Landsat combination image/dataset. 
Snapsat process:
  1. Choose the location. Use the slippy map or do a text search.
  2. Chose what you want to make.
  3. Click a button.
  4. See your cool new image.

Use Snapsat to create near infrared images. 
Jacques is doing a pretty impressive live demo right now. Ooohs and Ahhhs all around.  If you want to volunteer on the project, Jacques will buy you a beer or coffee.

Also, checkout [Landsat-util](https://github.com/developmentseed/landsat-util), a sweet tool from MapBox. 

Fred Lott is up next

----------------------------------

Fred is now talking about vertical datums. [This](https://twitter.com/foundatron/status/588521507279622144) is what it's like to be Fred.

History Lesson: The National Geodetic Vertical Datum of 1929 use to be called the "Mean Sea Level Datum"...but that was a lie so they changed the name in the 70's. The more you know. Since 1929, people started thinking that we should start using something other than sea level for zero level. 

The 1983 vertical datum is a reference datum that is based on the earth geoid, rather than sea level. This datum uses a single reference point in quebec. A very stable place that is unlikely to move because of crust activity. Cool stuff. Datum was updated in 1988.

VERTCON allows you to convert between the NAVD 88 datum, and the NGVD 29 Datum...the executable doesn't run on any windows computer after XP. Luckily they gave us the fortran source code and a basic website for converting these values. Go team! 

The City of Auburn, WA still uses NGVD 29. This makes Fred unhappy. 

Fred's goal: use [GDAL](gdal.org) to do these conversions for him...and he has a prototype! 

-----------------------------------

Special guest, Jay is up now! Jay is a student at the University of Washington.  He's been looking at crime data in Seattle.

 
