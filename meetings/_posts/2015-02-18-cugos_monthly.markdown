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

There's a lot left to do! Get involved!

**[@powersa](https://github.com/powersa)** pushed notes to the CUGOS blog

**[@mojodna](https://github.com/mojodna)** goes into chat roulette mode

As public and as open as possible with the data. [openterrain.tumblr.com](openterrain.tumblr.com).

Field papers is a tool that helps you create 1 page atlas that you can scan and upload. through the magic of computer vision, it's geo-referenced and then you can trace it. This project was started in 2009, and now Stamen is working with HotOSM to modernize it.

They are replacing the php application with ruby on rails. They've gotten rid of a ridiculous amount of code so far. It's required some reverse engineering, fortunately there are some great tools out there. They're using opencv to match images. 

They were using a tool called cairo to write out pdf, well these days you can convert your html into a pdf, so that's another short cut that makes it a lot simpler.

This project is heavily used around the world and it's worthwhile. But it needs a community to help maintain it, and it should be translated into a bunch of different languages. Good tool for editing OSM.

Intros are done, we've got a question about the openterrain project. "What's the process to get data in?"

They're starting with the best openly available data (SRTM) from a mission flown back in 2000. A lot of people have worked on filling this data set out. You can access that data here: [http://dwtkns.com/srtm/](http://dwtkns.com/srtm/).

So they get those images and then generate hillshades for each cell. This requires overlapping seams to prevent weird loss of data.

Transform hillshade and DEM into spherical mercator for slippy-map usage.

... and Seth is gone, he's dropping all kinds of deep knowledge about the stack... Basically there are a lot of technical hurdles involved with working with data at this scale. Fortunately most of the problems have been solved by other people, but putting them all together is a challenge. 

[caliparks.org](http://www.caliparks.org/) is a new project out of Stamen that showcases some of what they've been up to (in collaboration with a bunch of people). It's also open source! Check out the project at [github/stamen/parks.stamen.com](https://github.com/stamen/parks.stamen.com).

[@mojodna](https://github.com/mojodna) is full of project ideas, so get in touch if you're looking for something to do.

**[@jubal](https://github.com/spatialdev)** working to merge ODK with openstreetmap. OpenMapKit, started from a Knight Foundation Grant to build out this project. Comes from findings that there is a big gap between ground truth and OSM. This will help close some of those gaps.

[ODK](https://opendatakit.org/) (Open Data Kit) - maintained by UW team

[PyXML](https://pypi.python.org/pypi/PyXML/0.8.4) - takes ODK form from excel and converts to something Android reads

[JavaRosa](https://bitbucket.org/javarosa/javarosa/wiki/Home) - handles it on the Android device

[Mapbox Android SDK](https://www.mapbox.com/mapbox-android-sdk/) - folded in parsers into the SDK + fixed some errors

[formhub](https://formhub.org/) - making modifications to aggregation system to handle OSM surveys

Big project that taps into and tweaks a lot of existing work to improve the quality of OSM data in disaster situations.