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

Ryan put together a demo app: [Hardiness.club](hardiness.club).

Tune in for live updates during the meeting.
