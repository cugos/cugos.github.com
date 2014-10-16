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

- KC cloud pilot project challenge and would like CUGOS members for feedback. (Peter, Paul & Debbie)

- **[you!](http://github.com/cugos/cugos.github.com)** - we encourage anybody and everybody to participate and speak about geo-related projects they're working on or interested in.

##NOTES: 

**[Broad Street Maps](http://broadstreetmaps.org)** showcased a really neat project that they worked on with the Global Post that showed Public-Private Partnership data around the world. It essentially showed money from recognizeable corporations that had been donated or put towards international aid projects. Their map is built on d3 and many topojson data files, hosted on Amazon S3 servers, and eventually pulled into Global Post's information graphic, which can been [viewed on their site](http://www.globalpost.com/special-reports/branding-health-public-private-partnerships-global-health#slide-1)! The project opens up an interesting discussion about *motives* and if these companies are doing these projects because of their concern of the communities or their concern with their business appearance and continued existence in these areas.

**[@hallahan](http://github.com/hallahan)** introduced and explained vector tiles. They currently exist in google map and apple maps, but is not a standard by any means. He elegantly described the value of vector-based data instead of the current standard of .PNG, image-based, slippy maps. 

He introduced SpatialDev's work with Leaflet and Vector tiles ([Leaflet.MapboxVectorTile](https://github.com/SpatialServer/Leaflet.MapboxVectorTile)) - it effectively renders each tile in parallel, which is really fast! He then showed some sweet experiments with gradients and border treatment. *How does it relate to MapboxGL*, you ask? Well, mapboxGL is more advanced than Leaflet's library, but renders in OpenGL / WebGL instead of HTML5. It is more performant, but less reliable and doesn't work in IE.

He showed some interesting trick with making these in Mapbox Studio, but what if you want to render these bad boys on the fly? **You can use [SpatialServer](https://gist.github.com/hallahan/60c956987bde4a02b6be)**, which looks at PostGIS tables and cuts you tiles on the fly! [Here](http://spatialserver.github.io/Leaflet.MapboxVectorTile/examples/basic.html) are [some](http://spatialserver.github.io/Leaflet.MapboxVectorTile/examples/static-label.html) [examples](http://spatialserver.github.io/Leaflet.MapboxVectorTile/examples/confetti.html)! Killin it, Nick.