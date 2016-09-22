---
layout: meeting
title: September 21st, 2016, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: August 19th CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---

CUGOS is back after a summer break! Anderson hall was under some construction, but now the Elk is back and we're ready to hit the Fall CUGOS season fast and furious. Bring your C++ game!

## Agenda

- **Elisabeth Leaf** who is a recent graduate from UW Tacoma of MS in Geospatial Technologies program. She is going to talk about her capstone project that originated from [Husky Line Reserch](http://faculty.washington.edu/bricker0/greenseed.html) incorporating mobile technology, especially sensors with traditional forms of surveys. Title of her talk is Husky Line Mobile App: Adapting transportation studies to our changing technologies.

- **Jess Hamilton, Nick Bolton, Anat Caspi**: The [OpenSidewalks](https://opensidewalks.com/) project ([@opensidewalks](https://twitter.com/opensidewalks)) is working to jumpstart an effort to generate an OSM-based pedestrian network with global coverage. This project emerged as an effort to scale AccessMap which provides routing for people with limited mobility, but we believe this is just one way in which the data can be utilized.  After engaging with the OSM community and drafting a sidewalk schema, our team developed tools to facilitate the import of openly available municipal data.  We are currently working to complete the import of Seattle's sidewalk data and have been documenting the process so that other cities may follow suit.

- **[Andrew Powers](https://github.com/powersa)**: Does your spatial timeseries data exceed size limits in CartoDB or needlessly gobble up your free data allotment? Andrew will walk you through simple tools to decrease your record count without compromising cartographic display in the final product.

- **[Sam Matthews](https://github.com/mapsam)** will provide the *State of the Vector Tile* explaining current tools and techniques for encoding & decoding them and briefly describe his research around optimizing vector tiles at Mapbox.

- **[Aaron Racicot](https://github.com/aaronr)**: CUGOS business update. Financial status and officer elections this fall.

- You! Interested in speaking? Hit us up at hello@cugos.org.

## Wireless Info

User: event0895   
Password: 38nh/75ks/32aj


## Notes

### Elisabeth Leaf - Husky Line Research Project

Husky Line Research Project that looks at:

1. transit options for UW Tacoma Campus
1. student perceptions of transit
1. ways to incorporate tech and GIS into transit studies

Started taking a different stance on how to collect data to collect information to create travel demand models and estimate changes in transportation activity over time. 

Some questions/thesis: How can we use mobile technology to improve transportation studies? How can we use mobile sensors to improve mobile transit studies? How can that estimate a user's mode of transportation?

Built a proof-of-concept application that works with Apple's ResearchKit and interacts with the accelerometer to collect user data.

### OpenSidewalks & AccessMap

Standard mapping tools are not great at routing for accessibility needs. In the USA alone, 55m are classified as having "limited mobility", 10/20% of any develped country that is not being served by our mapping applications.

What kind of resources are currently available? Typically static maps that are cluttered, complex, out of date, and non-routable. There's a huge diversity of needs for individuals (i.e. can't use stairs) so static maps don't show the route for any individual user.

**AccessMapSeattle.com** - [github.com/AccessMap](https://github.com/AccessMap)

This project aggregates data from municipal partners to local sidewalks, curb ramps, sidewalk conditions. Inclines are determined by USGS elevation models. 

Data that currently exist in open resources don't connect, are missing sidewalks, and basically don't allow for routing at all. The grant for this project provides the funds to write the necessary algorithms for connecting this data. 

**OpenSidewalks**

Looks into OpenStreetMap annotations for sidewalks, which are typically mapped as attributes to streets, not as their own individual data source. OpenSidewalks is researching a data schema for incorporating sidewalks as their own first-class citizen in OSM. 