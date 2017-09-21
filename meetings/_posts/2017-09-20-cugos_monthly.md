---
layout: meeting
title: September 20th, 2017, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: September 20th 2017 CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---


## Agenda
- Mary Solbrig will talk about the [Metric Geometry and Gerrymandering Group (MGGG)](https://sites.tufts.edu/gerrymandr/) [August Workshop](https://sites.tufts.edu/gerrymandr/about-the-august-workshop/). She will talk about: How the conference went, which of the talk recordings on the [youtube channel](https://www.youtube.com/playlist?list=PLr7G5jnVFYLiTpEiQkQB_FyQ372oSO8Au) to watch, the place of GIS and Open Source at the conference, and some Open Source GIS projects that you could contribute to.
- [Peter Keum](https://github.com/keum) will share his highlights from [FOSS4G 2017](http://2017.foss4g.org/post_conference/) with [Julie Goldberg](https://github.com/JulieGoldberg) and [Nick Peihl](https://github.com/nickpeihl). Peter's summary note from the conference is available at [PkGeo.com](http://pkgeo.com/). Nick's note is available [here](https://github.com/nickpeihl/knowledge/blob/master/conferences/Foss4g%202017%20notes.md).

- **[@you](http://cugos.org/people/)** tell us about what you're trying to solve.


## Notes

Ye olde converstaion about recording meetings. If anyone is interested in helping out - let us know!

#### Introduction from your President, Andrew Powers

* Elections are coming up in December - probably aiming for the 13th to avoid being too close to holiday breaks. Never too early to start thinking about your bid!
* Meetings don't happen on their own. If you want to hear from a certain person or want to give a talk, we'd love to hear from you.

#### Metric Geometry and Gerrymandering Group - Mary Solbrig

Mary went to a conference about gerrymandering at Tufts University. All talks are recorded on Youtube - [check them out here](https://www.youtube.com/channel/UCXhynY38HLgR8Bp6918i5lg?app=desktop). It had three components - gerrymandering from the context of:

1. Math
1. Law
1. Civil rights

Specialized tracks:

* expert witness: train people to testify in gerrymandering cases
* educators: create teaching materials about gerrymandering
* GIS/Tech track: develop a community to work on the technology challenges around gerrymandering

Talk topics covered:

* legal theory
* civil rights: race and redistricting and the legal framework surrounding it, more about how impact of racial gerrymandering and how important the Voting Rights Act was. You can't talk about political gerrymandering without talking about racial gerrymandering.
* courts: is it judicable? you can't bring things to court unless someone has actually been harmed - can't be theoretical

Technology/GIS

* Megan Gall: the quantitative anatomy of a voting rights case
* panel: how lines are actually drawn and contested
* Robert Cheetham: "District builder" open source software for collaborative redistricting - check out the [source code here](https://github.com/PublicMapping/DistrictBuilder)
* openelections.net gathering historical election data which is useful for determining "if gerrymandering happened" - here they are [on github](https://github.com/openelections)

#### FOSS4G overview

Peter's Notes: [here](http://pkgeo.com/2017-09-10-summaryFOSS4G/)

**Julie's Notes:**

MapboxGL
Everything is triangles underneath, fonts are tough
Variable colors in the same layer! Yeah!!!!!!

Most folks prefer vectors, but there are still reasons to prefer image tiles if you’re dealing with millions of points in a non-interactive way. Faraday was such a company.

Lots of interest in containers, VMs and tools like Ansible for IT management.

Foss4G was WAY too full of white guys. It needs much more diversity.

Printing Ideas:
	https://github.com/datadesk/print-map-maker
	Mapzen has talked about it a bit

Much less presence of Mapbox. They had no booth and only a few speakers. Any idea why?

Vector tile servers are getting easier and easier to create. Soon we may be able to pull vector tiles direct from Postgis!

Folks are interested in redistricting. Azavea and academics especially. Azavea has a system for it, but it has a ton of technical debt since it’s a decade old. Their model is people bringing up versions of their codebase with custom data. My approach is about loading all the data and having one national system.

**Riley** really loved Richard Stallman's talk and is going to work on some R Studio and vector tile visualization work soon!
