---
layout: meeting
title: October 15th 2014, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: October 15th CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---

##Loose agenda:

- **[Broad Street Maps](http://broadstreetmaps.org)** talks about a recent project with the Global Post Special Reports: [Branding Health](http://www.globalpost.com/special-reports/branding-health-public-private-partnerships-global-health#slide-1) and shares insight into building webmap applications and scaling up for high traffic.

- **[@svmatthews](http://github.com/svmatthews)** showcases the second volume of the Atlas of Design - a collection of inspiring, beautiful cartography from around the world.

- **[@hallahan](http://github.com/hallahan)** will be talking about Vector Tiles. He will explain what they are as well as how to use them in [Leaflet.MapboxVectorTile](https://github.com/SpatialServer/Leaflet.MapboxVectorTile), a new open-source library being built at [SpatialDev](http://spatialdev.com).

- **[@powersa](https://github.com/powersa)** riffs on visualizing [path](http://www.w3.org/TR/SVG/paths.html) based [queues](http://en.wikipedia.org/wiki/Queue_(abstract_data_type) and [deques](http://en.wikipedia.org/wiki/Double-ended_queue) in [d3.js](http://d3js.org/). We'll also dive into [path transitions](http://bost.ocks.org/mike/path/) + [interpolation](https://github.com/mbostock/d3/wiki/Transitions#wiki-attrTween) for better animation.

- KC cloud pilot challenge project and would like CUGOS members for feedback. (Peter, Paul & Debbie)

- **[you!](http://github.com/cugos/cugos.github.com)** - we encourage anybody and everybody to participate and speak about geo-related projects they're working on or interested in.

##NOTES: 

**[Broad Street Maps](http://broadstreetmaps.org)** showcased a really neat project that they worked on with the Global Post that showed Public-Private Partnership data around the world. It essentially showed money from recognizeable corporations that had been donated or put towards international aid projects. Their map is built on d3 and many topojson data files, hosted on Amazon S3 servers, and eventually pulled into Global Post's information graphic, which can been [viewed on their site](http://www.globalpost.com/special-reports/branding-health-public-private-partnerships-global-health#slide-1)! The project opens up an interesting discussion about *motives* and if these companies are doing these projects because of their concern of the communities or their concern with their business appearance and continued existence in these areas.

**[@hallahan](http://github.com/hallahan)** introduced and explained vector tiles. They currently exist in google map and apple maps, but is not a standard by any means. He elegantly described the value of vector-based data instead of the current standard of .PNG, image-based, slippy maps. 

He introduced SpatialDev's work with Leaflet and Vector tiles ([Leaflet.MapboxVectorTile](https://github.com/SpatialServer/Leaflet.MapboxVectorTile)) - it effectively renders each tile in parallel, which is really fast! He then showed some sweet experiments with gradients and border treatment. *How does it relate to MapboxGL*, you ask? Well, mapboxGL is more advanced than Leaflet's library, but renders in OpenGL / WebGL instead of HTML5. It is more performant, but less reliable and doesn't work in IE.

He showed some interesting trick with making these in Mapbox Studio, but what if you want to render these bad boys on the fly? **You can use [SpatialServer](https://gist.github.com/hallahan/60c956987bde4a02b6be)**, which looks at PostGIS tables and cuts you tiles on the fly! [Here](http://spatialserver.github.io/Leaflet.MapboxVectorTile/examples/basic.html) are [some](http://spatialserver.github.io/Leaflet.MapboxVectorTile/examples/static-label.html) [examples](http://spatialserver.github.io/Leaflet.MapboxVectorTile/examples/confetti.html)! Killin it, Nick.

[View Presentation Slides](https://speakerdeck.com/hallahan/leaflet-vector-tiles).

**[@powersa](https://github.com/powersa)** works at Point Inside, an spatial interior company that focuses on purchases and products in different retail stores. He took a bunch of their data and is visualizing it to look for patterns within the purchasing spectrum. He looked at consumers trends of looking at products between locations and time, creating *usage* events with *direction* over *time*.

He used D3 to draw SVG path elements, but needed to implement FILO (first in, last out) data structures to animate the actual drawing of the path element. He used some sweet SVG transforms on the line, which can be seen on [Mike Bostock's *path* example](http://bost.ocks.org/mike/path/). He then found an awesome example to learn from [here](http://big-elephants.com/2014-06/unrolling-line-charts-d3js/). Disadvantages means it can't remove data on the browser after it goes out of view. He then rolled some [sick-nasty d3 example](http://bl.ocks.org/powersa/660a6c39e9e759535aa3) to showcase the movement of a beginning and end of a path that calculates and interpolates movement between these two points.

[His slides can be found here](https://docs.google.com/presentation/d/1Yj7ST41Mw4-H0CTrKIRV2FF02aRQBk1uPKBe79n34U4/pub?start=true&loop=false&delayms=3000)

![Powersa doing his thing](/image/meetings/powersa-20141015.JPG)

Debbie & Paul are trying to figure out how to implement Recorded Plat Lot Database into Amazon's web interface. **The issue** People create permits for parcels without the correct data, or presumptuous data, but they need a database of "preliminary parcels" or *plats* before they are put into the official dataset.

They are looking to leverage only open source software. Using PostGIS to store their data in the Amazon cloud, and want to be able to leverage those cloud resources for backup purposes and potentially tile or disaster services. *Bonus of AWS means their IT dept. doesn't have to support the entire system.*

Call to action for **browser-based editing** systems that are *very* simple, barebones, and can push into the database. They want a user to be able to input the boundaries of a *new* plat by uploading an image and georeferencing it in the browser. Effectively, this would be built to do *one* thing, keeping it simple and concise. You should email Paul - paul.mccombs@kingcounty.gov - if you want to help or have any insight!
