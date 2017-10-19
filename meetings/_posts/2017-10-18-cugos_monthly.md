---
layout: meeting
title: October 18th, 2017, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: Octover 18th 2017 CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---


## Agenda
- **[@powersa](https://github.com/powersa)** walks through some scripts he wrote over the summer to import [GTFS](https://developers.google.com/transit/gtfs/reference/) (Google Transit Feed Specification) data into a graph database ([neo4j](https://neo4j.com/)) to analyze accessibility to the [Rainier Valley Food Bank](http://www.rvfb.org/) via public transit. He'll discuss some pros and cons of modeling transit networks as graphs and an optimization or two that helped along the way.
- **[Ethan Sorrelgreen](https://www.linkedin.com/in/ethansorrelgreen/)** will talk about how Seattle startup [CARMERA](http://www.carmera.com/) is leveraging delivery fleets to create real-time maps of urban environments. He will cover everything CARMERA's data collection methodologies, and how to use machine vision pipelines to extract street-level intelligence and build living maps to power Autonomous Vehicles.
- **[Ariel Kadouri](https://github.com/akadouri)** pitches early stage planning of a geospatial hackathon. With support of the UW Geography department (and hopefully you), he's begining to organize a geo-themed hackathaton aimed at placing undergrads in the wonderful world of geospatial (and open) software.
- **[@you](http://cugos.org/people/)** tell us about what you're trying to solve.


## Notes

### UW Event Wifi

UW NetID: event0216   
Password: AYLW=AEDK=AAPW

### Ariel Kadouri

Working on putting together a geospatial hackathon. Looking for mentors and volunteers! Target hacker is someone who is early on in their geo career. The goal is to get people setting up geospatial tools on their computer and running them to get a sense of what tools are available and how to use them.

Reach out to akadouri@uw.edu if you are interested in being a part of this as a volunteer or attendee. Will be sending out a survey to get a sense of what people want to learn.

### Andrew Powers

Check out Andrew's notes in this [gist](https://gist.github.com/powersa/e4867404bf5669043c58056e38292f31).

### Ethan Sorrelgreen

Carmera is building an autonomous map to power autonomous vehicles. Focused on the data being real-time. Need to know how the data exists right now. They approach it in two ways:

1. Mapping vehicile (think google maps street view vehicles) - these collect lidar data and scan streets.
1. Partner with delivery fleets and provide them with video monitoring and safetey analytics and mount a device that captures video while the car drives. All video is uploaded to understand what changes on the road.

Have a web interface for analyzing video of vehicles. Carmera uses YOLO for video image recognition like bicycles, lights, cars, fire hydrants, in order to classify what's in each image for what matters for driving. Then they take lidar data to attach RGB values to the lidar point clouds.

Coverage: 1 month == all of manhattan covered. They can scale!

**Pedestrian traffic data**: there's a pedestrian analysis page to get a sense of pedestrian in specific locations - derived from the multiple passes of driving on the road. This shows where and when people are over time. They can use imagery to compare one place to another, plus they can refer back to video to ask "what is like to actually drive down this street" for agencies needing a visual indicator of what a street is like.

**How to deal with inaccurate GPS traces?** First step is to identify the street you are on and know _where_ you are going. They do this using Open Source Routing Enging (OSRM) to give us where a likely center point is for a particular road. They also use TIGER line database for dealing with road segments. This gives a guess for street names, longitude, and latitude and they match with their own database. At this point they have segment level accuracy ("this gps trace is on this road segment").

Next they use an image training method using stop signs and parking signs to discern the distance away from the sign (using focal distance and height of signs).
