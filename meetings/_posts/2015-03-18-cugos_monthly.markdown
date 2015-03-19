---
layout: meeting
title: March 18, 2015, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: March 18th CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---

##Loose agenda:
- **[FOSS 4G NA 2015](https://2015.foss4g-na.org/)** update from folks who made it to the conference.
- **[@foundatron](https://github.com/foundatron)** Using Google Cloud Platform to power geospatial web apps
- **[@daan Strebe](http://www.mapthematics.com/Essentials.php)** of [mapthematics](http://www.mapthematics.com/Essentials.php) will discuss how map projections work under the hood
- **[@aaronr](https://github.com/aaronr)** will chat about the latest experiments with quadcopters, Structure From Motion (SFM), and using [GeoSync](https://github.com/aaronr/geosync) to help generate geo products from the SFM outputs. [Here are some examples](https://www.flickr.com/photos/racicot/sets/72157650778573910/) from a recent trip that we will talk about.
- **[@cugos](https://github.com/cugos)!** let's talk about the Spring Fling, a full day, hands-on event tentatively on the calendar in May
- **[@you!](http://github.com/cugos/cugos.github.com)** - we encourage anybody and everybody to participate and speak about geo-related projects they're working on or interested in.

##NOTES:
**[FOSS 4G NA 2015](https://2015.foss4g-na.org/)**



**[@foundatron](https://github.com/foundatron)** - Google Cloud Platform

Right now is a great time to use the cloud because it is all relatively cheap.

Ryan has been using this a lot for side projects. Azure and AWS are also great but not enough time to talk about them all.

The biggest reason to use this infrastructure is usability. You can go from 1 to 1,000 in no time. If you don't have any money, you aren't worried about how big it can get but rather how small it can be. You want to keep it cheap if aren't using it.

There are a lot of tools you can plug into that scale really easily, you can just plug them in, they are pre-built and easy to use, saving you time. No need to reinvent the wheel.

console.developers.google.com is really cool, it gives you insight into your app as you are running it, all for free.

It may not be for you... The Google SQL offering is only so-so. Scalability with app engine comes with some freedom costs, especially with Python. For example you can't really install third party libraries that aren't pure Python. Support is a bit expensive.

People often lose sight of the importance of scaling down.

Managed VMs have combine a lot of the advantages of App Engine and Compute Engine.

Ryan put together a demo app: [Hardiness.club](hardiness.club). It's a cool app that let's you hang out with fellow chillers in your USDA zone. It pretty much taps a totally unmet market for USDA zone hangouts.

These Managed VMs look pretty easy to use, they come preloaded with a lot of tools that you don't have to build and it removes a lot from your plate as you manage your app and all that.


**[@daan Strebe](http://www.mapthematics.com/Essentials.php)** - Elements of Map Projection Programming

daan is totally switching it up and recycling a previous talk.

At the most basic level all that you need is a black box map projection, a function that you can feed data to that does some math on it and returns data. You need boundary descriptions. Numerical libraries. Scan-line conversion of arbitrary curves - imaging a curve description (how do you convert curves into pixels). Raster projection (where do you put the pixels?).

For each map projection you need the mathematical formula of the projection. You supply a latitude,longitude and get back x,y.

When you talk about the algorithm to express the formulae, you're talking about numeric programming which is actually pretty difficult to get right. The challenge is to get your algorithm to behave consistently across the entire range, actually pretty difficult when dealing with computers. You have to analyze the math to get the algorithm to behave under all the conditions you care about.

Be wary of arbitrary precision packages, they can be very slow and encourage bad habits by misleading you (they don't solve all your challenges).

Map projection boundaries... as I understand it, it's basically where you stop drawing data. On a map there is always an edge.

How do you represent 180 degs west and east on the same map (same line)? You use a small "perturbation" that makes each unique...

Map projections. Spherical coordinate transformation. Scan-conversion of arbitrary curves. Raster projection.

Scan-conversion - convert a mathematical path to pixels. How do you build all this knowledge of interruptions into your programs? You can't easily (and cheaply) approximate with easy curves.

Raster projection is the process of taking a rectangular image and transforming it into something else. This area is not well researched. You can be relatively simple about it but you wind up with some really bad artifacts that are suboptimal. Doing it right involves understanding what the distortion is in the source and destination (+ a lot of math) to apply the right techniques to project the raster data.

daan wants to know what we'd like to hear about next, so post questions/topic suggestions.




Tune in for live updates during the meeting.
