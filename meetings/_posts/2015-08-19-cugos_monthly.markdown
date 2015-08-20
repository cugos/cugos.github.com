---
layout: meeting
title: August 19th, 2015, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: August 19th CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---

Loose agenda:
=============
- Luke Swart with the [Smarter Cleanup Coalition](http://smartercleanup.org) will give a talk about [Hey Duwamish](http://heyduwamish.org) - an interactive community mapping tool to help track environmental health issues. For more details, or if you want to get involved, check out [the Smarter Cleanup wiki](http://smartercleanup.org/wiki)
- Sarah Battersby shares expertise in Spatial Binning (hexagons, squares, etc.) and some of the fun and interesting problems to consider when using these cartographic techniques.
- John Tuthill has some things to say about map reduce on raster data using Python, the Planet Labs API, and Amazon Web Services.  
- [Ryan Small](https://github.com/foundatron) - Stupid Human CLI Tricks || How I learned to stop typing and use tab complete
- [@powersa](https://github.com/powersa) will update CUGOS on [MaptimeSEA](http://maptimesea.github.io/) and start a discussion about the role technology plays on the ground during natural disasters.
- Roger Andre will talk about building GDAL from source with MrSID support.  As part of this, we'll take a look at [Chromebrew](https://github.com/skycocker/chromebrew), a package manager for ChromeOS.

Notes:
======

Lots of new faces here today, so we're doing a round of introductions. Welcome to all!!!

**Sarah Battersby, Spatial Binning**

You have a lot of data, so much that you can't actually see any of it. Spatial binning helps solve this problem by aggregating that data spatially.

Generally we can aggregate based on polygons, but that might not give us the level of granularity we want. An alternative is uniform bins, it's smooth and consistent. The bins are atificial. It looks cool, hexagons, they're fun. Sarah used QGIS to generate the hex-grid.

Why hexagons? They're edgier. But really, it's probably a visual appeal thing. You avoid strong vertical and horizontal lines, your eye scans the page easier. They're also nice because they don't generally line up with human spatial feature.

As the spatial gloom and doom spreader, Sarah now dives into why they aren't so great...

Projections complicate things. We can't preserve shape and area at the same time. When you use hexagons, projections don't count.

How does it work? The bins are all the same size. They are generated from a uniform grid. Triangles, square and hexagons are the only shapes that will tesselate the plane. 

For example, if you have an even distribution of points across latitude, you should have consistent hexbin aggregations on a map (web mercator) right? No. As you move toward the poles, the bins get smaller and smaller in area, even though they look just as big. This applies to regularized polygons (bins across the map look the same).

If you try to solve this by using a regular grid in longitude and latitude, you wind up with stretched out hexagons toward the poles.

One Option looks right but is wrong, the other is looks right but is wrong. That's not a good outcome.

Sarah chooses the regular bins if she has to do something.

Suggestions:
 Try not to use hexbins for very large areas
 Tailor your bins to your projection
 Sarah's going to publish an article about how to calculate the threshold for distortion

It's easier to say if you can say "mathematically it's not that wrong" which doesn't deal with human perception. 

Always bin in Ecuador and Northern Africa. Single state is probably fine. Bin away.

*Watch for live updates during the meeting.*
