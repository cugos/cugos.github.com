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


**Luke Swart, Duwamish River**

Luke is here to talk to us about efforts to map the Duwamish River, just south of downtown. This area is heavily industrialized and it's one of the country's most poluted rivers. 

The Duwamish Tribe used to reside in the area, they were displaced many years ago. In 2003 the EPA declared the area a super fund site. The cleanup is underway. The cleanup has been very top down, and the voices of people who live near by aren't really heard.

Luke is part of a group that's working to help those voices be heard. Information transparency and open data enables the project to map these stories. The project involves a lot of outreach to involve the local communities.

THe project is all open source and they are looking for contributors! The map displays the status of the river restoration project, the original river path, community reports, local dialogue.The have an incredible demo at [heyduwamish.org](http://heyduwamish.org)

They are open to assitance from people who want to help with the backend map tools, bring in additional data layers. It's all on [github](https://github.com/smartercleanup/duwamish) and they have issues. Jump in!


**John Tuthill, Remote sensing with Python**

John works with Planet Labs to provide ground tests for sensor calibration. John works in remote sensing but he doesn't want to actually look at any imagery.

Planet Labs' api is very beautiful and easy to work with. For anyone who wants apikey for non comercial purposes, you can probably get one by just reaching out to them.

THe paradigm is shifting. The industry wants people to keep the data within the system rather than taking delivery of the raw data.

John has been using data from the api to look at how Planet Labs can tune their collection methods. What does the collection actually look like. Not so much the scenes themselves, but the scene metadata. What data quality is required to have a viable product?

A lot of the issues come down to a time series on an area, the picture isn't as helpful as the analysis.

John is running Star Cluster, some scripts to configure amazon ec2 instances, then he has some python that starts machines and sets spot prices. John likes Star Cluster because it's relatively simple and integrates really well with Python. Once the cluster is up and running he puts Disco on top, a Python map reduce project from Nokia.The iPython notebook does a lot of this for you.


**Roger Andre, GDAL & Mr Sid**

In Roger's quest to de-evolve, he's figuring out what he can do with a chrome book.

MrSid is an image format that allows you to pull out specific resolution from a very large dataset. If you have the right software, it's pretty easy, but if you don't it is a huge headache.

Roger and a friend tried to use MrSid with Tilemill and they ran into some major problems. MrSid is a proprietary format, though there is an SDK that you can use.

GDAL is an open source toolset behind a lot of FOSS4G. It does not have MrSid support out of the box but you can get them to work together.

The goal: use GDAL to extract data from MrSid and convert it to a format you can actually use. 

LizardTech (MrSid creator) has a developer page that let's you download the SDK as long as you agree not to reverse engineer the format. So Roger agreed and got the SDK and started to set it up. He found the SDK to be sort of a mess. He removed all the symbolic junk and moved some things around. Talk to Roger. Copy them into you LD library path. Roger's gonna try to make the docs better.

Roger used Chromebrew to tell his GDAL to install with MrSid. So he did that, and it built successfully. Then you go and check if it works, and... it works.

If you are willing to compile GDAL yourself, and jump through some hoops, this isn't actually so difficult. But there are a lot of places where this can go wrong. OSGEO4W (if you're on Windows) has MrSid installed.


**Ryan Small, Stupid Human CLI Tricks**

For his day job, Ryan glues machines together with shell scripting, AKA bash. Ryan argues that people should start with bash first when learning to program. It's everywhere and you can do a lot with it.

So why do this? Well you can do all types of things with this built in tool set. 

It's great until somebody else has to read it. If you find it hard to describe what your script does, it's probably time to stop bash scripting.

Use tab complete. Just do it, it's great. Hit tab and it will tell you where you can go.

```ls -la```

*Watch for live updates during the meeting.*
