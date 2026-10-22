---
layout: meeting
title: November 18th, 2026
location: Bloedel Hall Room 292, University of Washington
address: Seattle, WA 98195
time: 6:00pm-7:30pm
excerpt: November 18th, 2026 CUGOS Monthly Meeting
lat: 47.65137
lng: -122.30795
category: meetings
notes: The building is locked after 5pm. Someone will be there 5-10 minutes until 6pm to let us in at the entrance near the bike shelter at the northwest corner of the building. If you see nobody around and can't access, ping the CUGOS Slack to be let in. We will adjourn to a nearby pub for a happy hour after the meeting!
---

**Ask an AI how many miles of road your county maintains and you'll get one confident number. Ask a GIS professional and you'll get "well, it depends."**

[Adam Cabrera](https://www.linkedin.com/in/adam-cabrera) will share an early look at GeoProof and ProofSimple, two open-source projects in the [MapSimple](https://mapsimple.org/) suite that tackle this in a way one person can set up, deploy, and keep running.

Ask GeoProof a question in plain English and it runs real GIS operations on the data. Dig through 100 years of sales data in seconds, spot trends, and get the same answer every time you ask. Then it shows its work, attaching five things to every answer:

- **Accuracy**
- **Completeness**
- **Freshness**
- **Provenance**
- **Authority**, traced back to the data source

ProofSimple is a proof of concept showing how an LLM can work with GeoProof, stay consistent, and present the data with the proper caveats and integrity.

**Run it on your own data.** GeoProof is open source and built for you to deploy yourself. The data in the demo is a proof of concept too. Tiro, GeoProof's onboarding companion, helps get your data in. From there, GeoProof pulls your data on a schedule and rebuilds indexes, precomputed values (GeoStamps), and relationships as it changes. Set it and forget it, whether you're starting from nothing or running 100+ layers.

Bring your phone: QR codes will get you an access key to try the demo yourself.

This is a work in progress, and Adam wants your help. Poke holes in it and help plan what comes next.

**Also from MapSimple:**

- **[FuseSimple](https://github.com/MapSimple-Org/FuseSimple-Public)** drops a free PMTiles basemap underneath your existing Esri MapView. Your feature layers, widgets, popups, and auth all still work. You just stop paying for basemap tile credits. One import, one function call. Live demos: [King County parcels](https://fusesimple.mapsimple.org/demos/king-county.html), [PNW power plant clustering](https://fusesimple.mapsimple.org/demos/clustering.html), [LA Metro buses in real time](https://fusesimple.mapsimple.org/demos/la-buses.html).
- **[FeedSimple](https://github.com/MapSimple-Org/ExB-Simple-Public)** is an Experience Builder widget that connects a [live feed](https://feed-quakes.mapsimple.org/) to your map.

*Architecture docs and more details will be posted before the meeting.*

**[@you](/people/)** Introduce yourself! Or re-introduce yourself! Tell us about something cool you are working on, playing with, or otherwise inspires or puzzles you. To get on the agenda, you can [edit this page](https://github.com/cugos/cugos.github.com?tab=readme-ov-file#contributing), or send us an email: [hello@cugos.org](mailto:hello@cugos.org)
