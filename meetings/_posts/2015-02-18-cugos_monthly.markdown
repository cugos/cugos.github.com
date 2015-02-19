---
layout: meeting
title: February 18, 2015, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: February 18th CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---

##Loose agenda:

- **[@team geosync](https://github.com/aaronr/geosync)** will status update through a live demo on real data, in real-time
- **[@powersa](https://github.com/powersa)** will muse about spatial privacy and attempts to measure it
- **[@mojodna](https://github.com/mojodna)** will talk about his work modernizing [Field Papers](http://fieldpapers.org) [GitHub](https://github.com/stamen/fieldpapers) or possibly something else (suggestions welcomed)
- **[@jubal](https://github.com/spatialdev)** nothing remotely technical but will talk through some of our more interesting open source projects.
- **[you!](http://github.com/cugos/cugos.github.com)** - we encourage anybody and everybody to participate and speak about geo-related projects they're working on or interested in.

##NOTES:

**[@aaronr](https://github.com/aaronr)** calls for elections in the next couple of months. We are a 501c6 which is basically like a chamber of commerce, we can't take tax deductible donations but people can provide sponsorships, which they might write off one way or another. 

Do we want to do some type of event this spring? We've done em in the past and they've been fun, but we need some enthusiasm (2-4 people to drive it). 

**[@team geosync](https://github.com/aaronr/geosync)** a lot of the SFM work being done around CUGOS hasn't actually been geo. At this point it's mostly just a 3D point cloud but without any actual location specific data. Geosync is a utility that takes care of adding geo-spatial data to your images so your processing and output is location aware.

We want to do it in Python (good learning language) and have no dependencies so it can run anywhere.

3 Step process:

*data logger on your quad stores where your quad is, with timestamps.
*time offset - the timestamps on your gps pings aren't the same as your camera's time
*connect the two and output it, where you have your time, image, x, y, z.

This will allow us to run SFM processing faster and pin the 3D model to the map.

Hope is to plug this tool into the Open Drone Map project. 