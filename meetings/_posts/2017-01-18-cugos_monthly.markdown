---
layout: meeting
title: January 18th, 2017, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: January 18th 2017 CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---

## Agenda

- CUGOS Board Update - newly minted officials will provide an update about their first board meeting of 2017!

- [@mapsam](https://github.com/mapsam) will walk us through the fix for [an issue on cugos.org](https://github.com/cugos/cugos.github.com/issues/176), which broke our Google Feed. This could turn into either an introduction on building a JSON API with Heroku, or how we use Jekyll/GitHub to host cugos.org - up to you! Choose your own adventure style.

- [@eldang](https://github.com/eldang) will talk briefly about some half-baked ideas to compare different regions' relative OSM coverage completeness, and ask for feedback. Could be very quick, could be a long discussion if people are interested.

- [@sarahbat](https://github.com/sarahbat) will give a short report from the National Geospatial Advisory Committee (NGAC).  Be prepared for thrilling adventures in the Federal Geographic Data Committee (FGDC), National Address Database (NAD), a new batch of committee advisory white papers (freshly approved in December!), and lots of acronyms that I'll explain.  

- [@brandonrobertz](https://github.com/brandonrobertz) will give a short presentation about his work with the New Zealand Department of Conservation and their attempts to replace an expensive & proprietary internal reporting tool with an open-source browser-based soltion.

- [@dshean](https://github.com/dshean) will provide an update on newly released and partially documented repos:
  - [pygeotools](https://github.com/dshean/pygeotools): Command-line tools and Python function libraries for raster (and some vector) geospatial data processing
  - [imview](https://github.com/dshean/imview): Simple, interactive viewer for raster geospatial data
  - [demcoreg](https://github.com/dshean/demcoreg): Tools for automated masking and aligning raster data

- You! Interested in helping with the website, elections, future event planning? Add yourself to [this meeting page on github](https://github.com/cugos/cugos.github.com/edit/master/meetings/_posts/2017-01-18-cugos_monthly.markdown) or hit us up at <hello@cugos.org>.

## Wireless Info

UW NetID: event0721
Password: X6u9-K6k5-Y4y7


## Notes

---

**[@eldang](https://github.com/eldang)** - wants to show the *completeness* of OSM. Can we determine the amount of *expected* data in OSM (i.e. road density) based on outside resources like population density and other economic factors?

Can we us Missing Maps to determine what incomplete/complete looks like? [Missing Maps recently partnered with Facebook](http://www.redcross.org/news/article/Data-from-Facebook-helps-Red-Cross-make-better-maps) to get population information to determine which places aren't mapped.

What kind of economic and demographic data would be helpful?

* Lights at night dataset from NOAA could be helpful: https://sos.noaa.gov/Datasets/dataset.php?id=100
* Worldpop: http://www.worldpop.org.uk/
* LandScan: http://web.ornl.gov/sci/landscan/index.shtml (proprietary, but higher resolution than Worldpop)
* Pascal Neis's work on inferring unmapped areas: http://neis-one.org/2016/06/unmapped-places-osm/

**[@sarahbat](https://github.com/sarahbat)** is a member of the National Geospatial Advisory Committee (NGAC), a federal advisory committee. What do they do? Trying to provide adivce and recommendations to the federal government about management of geospatial programs, development of the NSDI, and other recommendations of spatial dataset implementations.

They are under the authority of the Secretary of the Interior. They provide advice to the Secretary of the Interior. NGAC is a mixture of government, private sector, academia, and non-profit representatives. They are about 30 representatives.

Mission: To help the federal government do a better job maintaining, protecting, preparing, procuring, and sharing geospatial data.

Some example works:
* series on changing geospatial landscape (cloud distributions, drones)
* feedback on 3DEP, the 3D Elevation Program
* how can NGAP train a more flexible geospatial workforce?
* Input on intiatives like: National Spatial Data Initiative
* National Address Database Pilot project: [slides](http://bit.ly/2j6VwpH)

Work groups:
* Emerging technologies (Sarah is actively involved with this group) - talk about data collection, data analytics, infrastructure, access, and the workforce.
* Policy framework
* Standards coordination
* Landsat advisory group
* Transition activities (preparing for new administration)

**[@brandonrobertz](https://github.com/brandonrobertz)** - Contractor working with New Zealand Department of Conservation on a project to help flightless birds.
 - Many flightless birds in New Zealand, they only had one predator for thousands of years but then humans (western settlers?) destroyed the habitat
 - The government counts birds by counting droppings. But they don't have a great way to count it all.
 - They settled on open source because it's fast, cheap, maintains itself and you don't have to install anything. Right? After all, D3 is open source.
 - Tool #1 is a map with an associated graph. Map shows locations of bird data collection sites.
 - An issue they ran into with the complicated stack is that you have to download all the dependencies to recompile even for a tiny change.
 - Tool #2. Do rat traps decrease rat population and increase indigenous bird population? A map with a timeslider, 40 years of data on rats and birds. This tool took a fraction of the time to make because they didn't over-extend the stack
 - People paid for the development, they own it, so they should have access to the source code.

 **[@dshean](https://github.com/dshean)** - has been documenting a lot of the code he wrote and used for his PhD. He's going to go through three repositories that help him work through a ton of raster data.

 * [_pygeotools_](https://github.com/dshean/pygeotools) - A collection of libraries and utilities for geospatial data processing/analysis
 * [_demcoreg_](https://github.com/dshean/demcoreg) - Utilities for DEM co-registration
 * [_imview_](https://github.com/dshean/imview) - Matplotlib Image viewers for geospatial data

 Contributions are most welcome!

 *Live demo time! ...*

**Kevin Tavog** - working on a personal project surrounding software and photography. He has built a tool called "Find Photo" that allows him to search his personal photos by keywords. He carries a GPS device and pairs his photo timestamps with the GPS to be able to search photos on a map.

Built with Leaflet and Angular. Draws tiles from OSM. He reverse geocodes photo locations using MapQuest's geocoder to gather search terms for photos. He's got a Dockerfile for the web app, the elastic search, redis, and the geo/placenames cache from the geocoder. Uses ExifTool for extracting/inserting metadata. GPSBabel for converting to GPX files, and ffmpeg/vips-tools for thumbnail generation.
