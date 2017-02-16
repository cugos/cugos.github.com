---
layout: meeting
title: February 15th, 2017, 6pm - Anderson Hall, UW
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

- [Matt Stevenson](https://github.com/coregis) & [Eldan Goldenberg](https://github.com/eldang) - **How do you build a spreadsheet-powered map?**  Last fall the Sightline Institute presented us with a challenge:  build an interactive map out of a spreadsheet that is being continuously updated and edited by multiple people, includes 14 categories of data, and features popups that contain text, photos, videos, links, etc. Using a modified version of Sam Matthews' GUS, mapbox.js, HTML, and CSS, we did!
- [@powersa](https://github.com/powersa) dives into Spring Fling details and wants your help!
- **You!** Interested in helping with the website, elections, future event planning? Add yourself to [this meeting page on github](https://github.com/cugos/cugos.github.com/edit/master/meetings/_posts/2017-02-15-cugos_monthly.markdown) or hit us up at **hello@cugos.org**.

## Wireless Info

UW NetID: event0533   
Password: 38LC:66MJ:95DN

## Notes

**Matt Stevenson & Eldan Goldenberg** - [map](https://coregis.github.io/alternative-voting/) - [slides](https://coregis.github.io/cugos_2017_02_15/#/)

Looking at Alternative Voting Systems, a mapping system driven by spreadsheets. This was produced for the Sightline Institute.

Some background:

Sightline Institute is a thinktank in Seattle that focus on all issues related to sustainability and communities, and champion public policies. They approached Matt with a project that promotes "alternative voting systems" than plurality voting (i.e. the USA's current system).

Map requirements:

* Dynamically updating map
* Data stored in a Google sheet
* Clearly distinguish 14 categories of data
* Include popups containing images, videos, text, links
* Branded to match Sightline's website

Seeking help & iterating:

* Found some folks to help him out, and that led him to a project called ["GUS"](https://github.com/mapsam/gus) which allows you to create a map from a spreadsheet - here's the project on GitHub. This left Matt with a map that had points, but didn't fulfill the rest of the requirements.
* He reached out to Eldan to help take GUS to a more sustainable project specifically for Sightline. Eldan was able to work with the data from the spreadsheet to categorize into Leaflet using `featureLayers`, which led to being able to work with the 14 classes of data.
* The classes of data started, originally, at three. There are three categories of data: ranked choice, cumulative choice, or limited choice - these themes varied depending on more specific categories like "school districts" or "state systems".


What's gone wrong?

* first, when you're using a spreadsheet to drive a map and someone is working on it, they sometimes do things that you can't anticipate. Things like: transpose coordinates, change the column names, etc. Matt was able to come up with a versioning system with the client to enforce any changes BEFORE publishing the map.
* The order of layers is entirely dependent on the order of the layers in the GeoJSON, so they had to build in a column to the spreadsheet

So once they had this complete, Matt started making more maps with the same project - such as [a map for his AirBnb renters](https://coregis.github.io/crowsnest/) that shows good restaurants and sight seeing!

**Andrew Powers**





---
