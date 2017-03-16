---
layout: meeting
title: March 15th, 2017, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: March 15th 2017 CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---

## Agenda

- "You, Me, and JSONB" from [ARSimmons](https://github.com/ARSimmons)... I will talk (briefly) about some performance gains and optimizations that I discovered by using JSONB with PostgreSQL. I will show some (boring) legacy SQL functions that I cast into the JSONB format and created laser fast returns. Think geriatric Terminator getting a facelift and starring in (yet another) sequel. JSONB + your bad, slow code = "I WILL BE BACK".
- Amy Hutchins - [Unearth](http://www.unearthlabs.com/): Using drones to build collaboration in construction
- Carson Dietz Hartmann is a Research Analyst at the National Trust for Historic Preservation's Preservation Green Lab. The Green Lab aims to link economic, social and environmental sustainability to the work of reusing and preserving old buildings across the nation. Carson will present on the [Atlas of ReUrbanism](http://forum.savingplaces.org/act/pgl/atlas), the most recent project of the Green Lab.
- [Andrew Powers](https://github.com/powersa) took a crack at importing transportation data into [Neo4j](https://neo4j.com/) and shares the results in this informal discussion of graph databases and infrastructure.

## Wireless Info

Check back right before the meeting!

## Notes

[ARSimmons](https://github.com/ARSimmons) -- Engineer at Tableau deals with a lot of geo data in PostgreSQL. Lots of legacy code... Sometimes it can be really slow. She was looking for ways to make it faster and came across a lot of people using JSONB.

What she found is that JSONB outperforms JSON in a lot of cases. However, JSONB is slower when you get the unique keys from the data. But why? Ari went in and profiled the actions taken by PostgreSQL to perform the select to get a better sense of what takes time. This is the edge case though.

Aggregate functions and orders don't add a lot in terms of performance. Lots of literature out there about when to use JSONB and when to just use plain old JSON.

When does it work? Profiled text entry queries on Shakespeare corpus. Found that JSONB was almost 5x faster than JSON. Indexes provide an even larger performance bump.



Amy Hutchins - [Unearth](http://www.unearthlabs.com/) - Cofounder and Chief Product Officer at Unearth. Drone collaboration business.

Why do they focus on construction? Big market size. People in the field have access new tools. Construction productivity has been declining over the last 30 years. The complexity of projects have increased, and stakeholders silo information. That particularly leads to slower communication and problem solving.

Unearth breaks information silos by taking data collected and connecting with aerial imagery of the site. Context of aerial map leads to faster problem solving.

Drones provide higher resolution and higher frequency data than traditional aerial imagery. IoT is more and more ubiquitous on the site = more data to show on the map. Computer vision helps identify relevant information and facts to solve disputes.

The construction companies provide the drones, or a drone service provider flies the site.

They use Drone Deploy, and are gonna start using DJI to collect and process imagery. The scale of their business is already large enough that running their own structure from motion pipelines would be a large task + involve a lot licenses.



Carson Dietz Hartmann - Researcher, Preservation Green Lab - Research arm of National Trust for Historic Preservation's

They are working to change the perception of preservation from a freezing of the built involvement to an adaptation of existing built spaces. When Carson started, thought it was about preserving historic and "beautiful" buildings. But now he knows it's really about maximizing the use of existing built assets within cities.

They demonstrate how old buildings are valuable (why?) and how to preserve them. First research project of the lab focused on how the greenest building is the one that already exists. New buildings require a carbon footprint that takes 80 years to offset. Retrofits of older buildings are lower impact.

Their current study challenges the idea that older buildings hold a city back by preventing new construction. They broke a bunch of cities into 200x200 meter grid and calculated scores based on the buildings in those cells. Census data, county accessors. Median building age. Diversity of age. Granularity. Then they create a composite metric to represent all three.

Most of the analysis and data creation was done in PostGis... then exported into ArcGIS. Ideally, they'd like to have the database and the online maps interact with each other. Unfortunately, that didn't quite work out. Interactive maps are the main deliverable. Functionality is pretty good, but there are ways they want to make it better. They are looking for help (externally) to improve the front end of the project.
