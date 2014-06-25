---
layout: meeting
title: April 16th 2014, 6pm - ClipCard
location: ClipCard
address: 720 Olive Way 14th Floor, Seattle WA 98121
time: 6:00pm
excerpt: April 2014 CUGOS Monthly Meeting at ClipCard (6pm)
lat: 47.614116
lng: -122.334624
category: meetings
notes: The main entrance is on Olive, between 7th and 8th Street. Just take the elevators up to the 14th Floor. Call 206-595-2567 or 206-395-5541 if you get lost.
---

**Location** -  ClipCard, **New office address**: 14th Floor, 720 Olive *Way*  ([map](http://www.openstreetmap.org/?mlat=47.6141&mlon=-122.3349#map=16/47.6141/-122.3349)) 

The main entrance is on Olive, between 7th and 8th Street. Just take the elevators up to the 14th Floor. Call 206-595-2567 or 206-395-5541 if you get lost.

__Loose agenda:__

- [@springmeyer](https://github.com/springmeyer) will be in town fresh off a week working out of [Mapbox DC](https://www.mapbox.com) and attending [SOTM US](http://stateofthemap.us/). He will give a demo of the latest map making potential with [TileMill 2](https://github.com/mapbox/tm2) and [Vector Tiles](https://www.dropbox.com/s/9b15snlzu3r0z5o/sotm-us-2014-dc-springmeyer.pdf).
- [@sharierickson](http://www.apogeemapping.com), owner of Apogee Mapping, and her skilled "consultant" will be in town talking about her non-traditional tooling for creating [beautiful static cartographic products](http://www.apogeemapping.com/Products/index.htm) ( also known as paper maps ). In her own words and a preview of the fun to come:

> I am obsessed with maps and have always been enamored with the USGS topos due to their high level of detail, but got frustrated that they were so out-of-date and neglected.  I also grew tired of seeing most other map providers constantly regurgitating the same old USGS rasters and calling them "new" or "unique" which is what inspired me to start the amTopo line of truly original 7.5 Minute topos I started using MapServer in 2011 when amTopo was launched, and it has been amazing.  My developer wrote custom code (I think in C++) that fetches base DEM data and processes it for generation of contours and hillshading, and the same code also creates the navigational collars and legend info that appears on each map.

- The team from [@broadstreetmaps](http://broadstreetmaps.com/our-team) will talk about their start-up company, which makes maps for public health organizations and social enterprises working in development. They’ll be introducing their visualization work, and seeking feedback on products, tools, and strategy!

- [@svmatthews](https://github.com/svmatthews) has been jammin with [@lyzidiamond](https://github.com/lyzidiamond) on a new project about mapper groups and meetups. He wants to make the project more collaborative and start pushing in more functionality by getting the good people at CUGOS to fork and help out.

- [@jradavenport](https://github.com/jradavenport) from UW who has created [24hrs of King County Metro](http://vimeo.com/88172380) will talk about how he created this data visualization video to display metro bus movement. 

- [@dshean](https://github.com/dshean) will share some large prints (and likely some slides) of annual 2 m/px WorldView Stereo DEM mosaics for West Antarctica's "weak underbelly" - an area roughly the size of New Mexico.

- [@foundatron](https://github.com/foundatron) To stream/record CUGOS meetings on Google+ Plus Hangouts...or not?  Discuss.


NOTES::

Lots of new faces.  50+ (53 to be exact) at the meeting.

![Room full of people](/image/base/april_2014_meeting.jpg)

---

**[@springmeyer](https://github.com/springmeyer)**

- Vector tiles!!!!
- Works for Mapbox
- Same talk as from State of the Map [Talk and Video from SOTM](http://stateofthemap.us/session/processing-openstreetmap-into-vector-tiles/)
- [The vector tile spec](https://github.com/mapbox/vector-tile-spec)
- Gave a peak at TM2

![Dane](/image/base/april_2014_meeting_dane.jpg)

---

[@sharierickson](http://www.apogeemapping.com)

- High quality maps with MapServer
- Ian Erickson (in place of Sharie)
- Came from a background of MapInfo
- MapServer, GDAL/OGR, Hillshade, PROJ4 to base the workflow on
- NAIP, DEMs, GNIS, TIGER, USFS, USGS, BLM, NPS
- QuadProcessor
- Lots of time to get labels on "Straightest Segments"
- Based on re-usable mapserver templates... needs to be repeatable
- Makes PDF's (sells them on Amazon)... 

---

The team from [@broadstreetmaps](http://broadstreetmaps.com/our-team)

- Name based on [Dr. John Snow's cholera map](http://www.broadstreetmaps.org/broad-street1/)
- Mapping for public health
- Been in Seattle for 6 weeks... StartUp!!!!
- All came from middlebury college
- [Check out the team](http://broadstreetmaps.com/our-team)
- Lots of international work (Rwanda and Peru)
- May 7th pitch at the HUB
- Fledge organization at Seattle's impactHUB
- Base work is quickly making maps, but looking toward the future at products

![Broadstreet Maps](/image/base/april_2014_meeting_broadstreet.jpg)

---

[@svmatthews](https://github.com/svmatthews) 

- [The project!!](http://lyzidiamond.com/mapgroups)
- on github (lyzi's github account)
- Baby steps... just starting out... but looking for help
- Sam is re-branding the site - BOOM!!!!
- On the 2.0 branch and it is looking great
- Sam did the FOSS4G website as well... DOUBLE BOOM TIME!!!!

![Sam](/image/base/april_2014_meeting_sam.jpg)

---

[@jradavenport](https://github.com/jradavenport) 

- James Davenport
- Astro Phyisics - Star hunter
- "If We Assume" - A blog to do things not related to work
- Mapping projects based on curiousity
- 32% of people live at Starbucks (you had to be there to get the joke)
- King County Metro - Funding Shortfall
- Google Transit files where available... time to play
- Just looking at bus stop locations was VERY interesting
- Great "non gis" data vis using his tools used in his physics work
- IDL and python and ffmpeg
- Check out the [Bus Vis](http://vimeo.com/88172380)... it is KILLER

![James](/image/base/april_2014_meeting_james.jpg)

---

[@dshean](https://github.com/dshean) 

- ICE MAN!!!!!
- Digital Globe Images
- Watching 40 meter drops in glacier hight
- Ames Stereo Pipeline
- Use DG, GeoEye, Astrium data
- 5m accuracy (horiz/vert)
- 1m accuracy after correction
- "The Weak Underbelly" - thinning and velocity increasing 
- Able to derive 2m/px which is MUCH better than anything before for these areas
- Basically replacing LiDAR... very exciting

![David](/image/base/april_2014_meeting_david2.jpg)

![David](/image/base/april_2014_meeting_david.jpg)

---

[@foundatron](https://github.com/foundatron) 

- Should we stream these meetings?
- YES!!!
