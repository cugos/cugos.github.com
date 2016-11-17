---
layout: meeting
title: November 16th, 2016, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: November 16th 2016 CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---

## Agenda

- [Aaron Racicot](http://github.com/aaronr) - Update on CUGOS business including our push toward an Annual Business Meeting in December 2016 which will also include CUGOS board elections.  We will look at the new information on the [About](/about) page as well as go over the process for the [2016 election](/election/2016)

- [Ben Hudson](http://github.com/bdhudson) - UW's first [GeoHackWeek](https://geohackweek.github.io/) is in progress! It is a mix of tutorials and [unconference](https://en.wikipedia.org/wiki/Unconference). I will give an update on what we are doing, highlight new tutorial content that is already [online](https://geohackweek.github.io/nDarrays/), in progress (just [ipython notebooks](https://github.com/geohackweek/visualization/blob/gh-pages/docker/notebooks/index.ipynb)) and share some early lessons learned.

- [Nick Peihl](http://github.com/nickpeihl) - Loading Your Web Maps _Almost_ Instantly Using Service Workers. How and why we're using Service Workers with San Juan County's homegrown [Polaris](http://github.com/sjcgis/polarisjs) web appliccation. [Slides](http://npeihl.com/service-worker-presentation).

- [Ryan Small](http://www.foundatron.com/about/) - "Serverless" geospatial processing with [AWS Lambda](https://aws.amazon.com/lambda/)

- [Jacob Lesser](http://github.com/lesserj) - Toxic Trends Mapper.  Large point display for environmental justice advocacy.

- [Hey Duwamish!](http://heyduwamish.org) - Project update: Mapping environmental health for the Duwamish Valley and beyond. Telling stories through collective cartography!

- Benson Funk Wilder - OSM at the State Department - Benson, a new arrival to the Pacific Northwest, will discuss the ways the State Department and other U.S. Government agencies use open data.

- [David Shean](http://github.com/dshean) - If time allows, I'll offer a long-overdue update on some projects with colorful figures and poorly documented code.

- You! Interested in helping with the website, elections, future event planning? Add yourself to [this meeting page on github](https://github.com/cugos/cugos.github.com/edit/master/meetings/_posts/2016-10-19-cugos_monthly.markdown) or hit us up at <hello@cugos.org>.

## Wireless Info

UW NetID: event0153

Password: Ut42=Vq79=Dc27

## Notes

**Aaron Racicot**

Aaron tossing up some organizational energy around the board elections. We will be having elections next month on December 14th! You can learn more at the [2016 election page](/election/2016), plus voting by email is allowed! As we grow in membership size, we need to be more legit. Speaking of legit, have you seen all of our new legal documents and annual reports at the [about page](/about)?

**Ben Hudson**

Ben has been coordinating [GeoHackWeek](https://geohackweek.github.io/) at UW this week. It's a collection of a number of departments on campus bringing together professionals, students, and academics around geospatial sciences. Take a look at the awesome tutorials on [GitHub](https://github.com/geohackweek). The whole event is open to anyone and costs $75, which essentially covers food and fun. Make sure to look out for this event again next year!

**Nick Peihl**

Web map loading depends on a lot of different things. He builds web maps for San Juan County. Makes a lot web maps for computers and mobile phones. Performance matters, very slow internet up there. Even cell connectivity is sparse once you leave town. Polaris, the county map portal, serves many functions. Nick used a lot of Open Source when building it, so he released as an Open Source Project, [PolarisJS](https://github.com/SJCGIS/PolarisJS). It's big though, and not very responsive on mobile. He's used [The Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/) to optimize for use in San Juan County. For the base website, he got everything into the browser cache, so even if you're offline, you have a site. He demos offline and on a 2G connection and it works pretty darn well. Good work Nick! [Slides](http://npeihl.com/service-worker-presentation).

**Ryan Small**

Lambda is event driven, serverless computing. Ryan points out that it's not serverless. It's great when it works, but there's a lot of AWS hardness that comes along (aka job security). You only pay by the tenth of a second, and scales really well. Can be very efficient and cost effective if you use if for the right cases. Geo Spatial Processing won't be available out of the box. You need to compile your code, zip it into a file, then push it up to lambda (even though you aren't supposed to interact with the filesystem). Use GDAL, import the Python GDAL, use it in a function and then push it on out. Takes the DevOps out of queues. GOTCHA: it's hard to get Lamda set up with the binaries necessary for running things like GDAL, especially because you have to set things like `$PATH` to work properly.

**Jacob Lesser**

Jacob has been working on a web map called "Toxic Trends Mapper" over at [toxictrends.org](http://toxictrends.org). He's been grabbing information from the Toxic release inventory program from the EPA, reprocessing it, and tossing it on a map using vector tiles created with [Tippecanoe](https://github.com/mapbox/tippecanoe) and hosted on Amazon s3. It's about 50,000 points that include information about released chemicals from facilities, health risks, and types of industry the chemicals are coming from.

**Hey Duwamish!**

[Hey Duwamish!](http://heyduwamish.org/page/about) is a project focused on mapping the toxic waste around the superfund site of the Duwamish River. It's important to know _where_ pollution is, especially if the Duwamish has nearly 40 chemicals above the safe limit throughout the site. The app allows you to add pollution reports to the site and those reports are collected and visible on their site. There is a story feature now that provides a narrative to help understand the surrounding community's priorities. This whole tool is [open source](https://github.com/smartercleanup/platform) and they are welcoming contributions all the time!

**Benson Funk Wilder**

Worked for the State Dept in Humanitarian Information Unit for 8 years. He's a human geographer, that became a data-broker at the State Department. Why OSM? Their partners (Peace Corp, USAID) in the field are using the data, so it's in their interest to support it. It's not tactical or field level. His unit helped source better imagery where coverage is suboptimal. Also fit very well with the open gov directives of the Obama Administration. Public diplomacy through mapping.

**David Shean (Iceman)**

He's alive! David has emerged from the dark world of writing his dissertation and is now working on cleaning up the code he used for his work, making it more organized and useable for everyone else! He's going to show us WAIT THE PROJECTOR ISN'T WORKING OKAY WE ARE BACK some awesome photos. 

Previously on The Adventures of Iceman: Imagery of Antarctica has increased dramatically over the past few years, David has been processing it to look at ice shelf movement over time. 

On this episode of The Adventures of Iceman: he's fully funded to do similar work on all of the glaciers in the USA! There are a lot of glaciers. One of the open projects he's working on takes timestamped imagery and downloads snow depth models of the area as well as a composite percent snowcover image. He can use these images to find exposed rock to use as static points in imagery, which are useful for measuring movement over time.

Check out some of his [recent work on GitHub](https://github.com/dshean?tab=repositories).