---
layout: meeting
title: May 16th, 2018, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: May 16 2018 CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---


## Agenda
- **[Peter Keum](http://pkgeo.com/)** Will share his "drone talk" and promises to drone on about his "drone" work.
- **[@cliffordsnow](http://github.com/cliffordsnow)** Previews his OpenStreetMap presentation at WAURISA.
- **[@mapsam](http://github.com/mapsam)** will present a new CUGOS project, the [GUS API](https://github.com/cugos/gus-api), which is an API to convert google spreadsheets into GeoJSON for your geo snacking needs
- **[@powersa](http://github.com/powersa)** will show you how to launch a Jupyter notebook on AWS!
- **[@sarahbat](http://github.com/sarahbat)** will talk about Tableau + PostGIS to add some extra spatial spice to a Tableau workflow
- **[@you](http://cugos.org/people/)** tell us about something cool you are working on


## UW Event Wifi

```
UW NetID:      event0468
Password:      aEMm=uAFw=eEZh
```

## Meeting Notes

## Peter Keum - [Drone Talk](http://slides.com/keump/deck-14-13-15-16-17-28-30)
Peter works for King County Wastewater Treatment Division (WTD) and shared his experience with using drones for hobby and municipal sewer utility management. This is a preview for a talk he's giving at [Washington URISA Conference](https://waurisa.wildapricot.org/Washington-GIS-Conference) next week.
* Historic perspective of drone work in the CUGOS community
    *  David "Ice Man" Shean doing glacier study in Greenland.
        * "Google Guys" presenting at CUGOS
* Drone = small Unmanned Aerial Vehicle (sUAV) < 55lbs
    * Multi-rotor = Helicopter
    * Fixed Wing = airplane
* Sensors: Infrared, Lidar, Multi-Spectral, HD photo
* Why Now?
    * Price/Performance ratio is favorable
        * 1981 - GPS $120K
        * 2013 - GPS $5-$15
        * 2017 - GPS $3
    * Easy to Use
    * Quality data collection from sensors
    * Uses much of the same tech used by cell phones
* No longer just a toy
* Benefits
    * Temporal Resolution - Fly more often
    * Spatial Resolution - more detailed than satellite or airplane platforms
* Applications
    * Civil engineering
   	○ Structural inspection
    * Utility network surveillance
    * Agriculture
* Regulations
    * In July 2016 removed need for a pilot license for sUAV
    * Lots of rules about where to fly
        * Commercial
        * Hobby/Recreation
    * King County government has adopted internal guidelines to only allow contracting with third party for drone projects
* Workflow Example
    * Langley aerial photo
    * Used QGIS to georeference individual images
    * Created one mosaicked images served out as image tiles
    * Load tiled image layer in OSM ID editor to capture vector features
* King County Wastewater Treatment Division (WTD) Proof of Concept
    * Pumps (2014)
        * 45 images - structure from motion inside with hand-held still camera
        * Produced 3D model of equipment
    * Ceder River Revetment (May, 2015)
        * 3D structure from motion
        * Capture physical geography pre- and post-flood event
* WTD Projects
    * West Point Treatment Plant Incident (March 2017)
    * Floating Willow Raft - Mitigation & Monitoring (May-Aug 2017)
    * West Point Treatment Plant Orthophoto (Oct 2017)
* Need to develop a countywide policy
* General Purpose Technology (GPT)
    * _The Second Machine Age_ - Erik Brynjolfsson, Andrew McAfee
    * Historic Examples:
        * Steam Engine
        * Electricity
        * Internet
    * Now:
        * Drone
* Alternative to Drone (Do-It-Yourself)
    * Long Pole Aerial Photography
    * Put a camera on a long stick and take pictures
    * Kite
    * Balloon
* Q & A:
    * What software can you use to control the flight plan
        * A: A lot. Hardware specific. Cloud-based
    * How big of a pole do you need?
        * A: Used a long painter's pole from Home Depot. Maybe 20'

## Clifford Snow - [penStreetMap (OSM)](https://openstreetmap.org)
Clifford is a longtime OSM organizer and advocate. This is a preview for a talk he's giving at [Washington URISA Conference](https://waurisa.wildapricot.org/Washington-GIS-Conference) next week.

* History: Started in 2004 as an alternative to expensive bad maps that were available
* Today: 4M users, 4.1B nodes, 40K active contributors/month
* Why do people contribute
    * Many reasons
    * No corporate overlord
    * Near instant gratification
* Well mapped places
    * Disneyland
    * Woodland Park Zoo
    * Kathmandu -- better maps where commercial is low
* Users of data
    * Commercial web sites
    * Commercial Apps
* Open Database License (ODbL)
    * Attribution and Share-alike
* Organizations built on top of OSM
    * Humanitarian OpenStreetmap Team (HOT)
    * Missing Maps
    * Youth Mappers
* Interesting Data
    * National Bike Routes in Washington State
    * Washington State Trails - 90k miles
* New Project: Pedestrian Routing
    * Taskar Center for Accessible Technology (TCAT)
    * Chose OSM for their data repository because of what it had to offer
    * https://accessmap.io/
* Editing OpenStreetMap
    * Multiple editors
    * Browser-based
    * Java Applications
    * Built into commercial GIS tools
* How to get OSM data
    * Multiple sources
    * https://Planet.openstreetmap.org
    * https://Overpass-turbo.eu easiest way to get data
    * http://www.Geofabrik.de by State
    * Trimble Marketplace
* Open Municipal Government data
    * Map of Washington counties with/without open data sites
    * Some problems with lack of data offered and data license terms

## [@mapsam](https://github.com/mapsam) - Described his new [GUS API](https://github.com/cugos/gus-api), a new CUGOS project, which is an API to convert google spreadsheets into GeoJSON for your geo snacking needs
* Geojson Ur Spreadsheets using an Application Programming Interface
* Original GUS project was to map data put in a google docs spreadsheet very quickly and simply with multiple contributors
* People are very attached to using spreadsheets, they know how to use spreadsheets
* Several cons related to expedient design decisions in the original project
* Goal to simplify the project to produce GeoJSON which is useful with many different tools.
* Short Description: Send a GET request to the URL with your spreadsheet ID
* Steps:
    * Open example spreadsheet
    * Add your data
    * Publish your spreadsheet
    * Use the ID to make a request
* Can break it with very large spreadsheet or weird edge cases
* Currently AWS bill is $0.26
* Will be used for a real project within a week of development (get link to HandsUp Texas from Matt Stevenson)

## [@powersa](http://github.com/powersa) - showed us how to create a cluster in [AWS EMR](https://aws.amazon.com/emr/) (_Amazon Elastic MapReduce (EMR) is a web service that uses Hadoop, an open-source framework, to quickly & cost-effectively process vast amounts of data_) to launch Jupyter notebooks on AWS!
* Wanted to run Jupyter Notebook on AWS
* Found a good tutorial from 2016 (link?)
* Need to create an AWS account
* Need to create a key pair within AWS interface
    * Needed to connect to the cluster when you set it up
* Create Cluster via commandline or from the console (web page)
* Select what hardware you want to run your cluster on
    * Machine types
    * Storage
    * Provides access to way more resources than your local machine
    * Two instance-type markets
        * On demand vs Spot
        * Spot is lower cost but less control, may disappear with little or no warning
* Bootstrap Actions
    * Script to run on your machine when it launches
    * Install software
    * Setup environment variables
    * Etc.
    * Andrew ended up removing a bunch of software to improve startup time
* Tutorial allows you to download the scripts and alter them
* Security Options
* After you start your cluster there are many Cool UIs in AWS Console to see what's happening on your cluster
* You can access your Jupyter Notebook now.
  
## [@sarahbat](http://github.com/sarahbat) will talk about Tableau + PostGIS to add some extra spatial spice to a Tableau workflow
* Created an interface to show features "Near" the feature of interest
    * Wrote a query that offers a choice among _Intersect_, _Contains_, and _Touches_ operations for the selected features
* Figured out a way to write a PostGIS query to generate a continuous point density map from polygon features and attributes
    * Made a slider to set the population represented by each dot
* Decided to make a hurricane map.
    * Using SQL Server, only because Tableau added support for SQL Server spatial data types and does not support Postgres spatial at this time. So Tableau can directly process the spatial data.
    * NOAA data
    * Census data
    * Provides metrics that change as different impact zones are selected on the map
    * Aggregated when multiple zones are selected
    * Spliting census geography at zone boundaries and then allocating the prorating attributes by area within the impact zone.

## [@akadouri](https://github.com/akadouri) - [UW MapHacks Geography Hackathon](https://maphacks.github.io/) report
* Winning project was a light rail station siting analysis
* One of the winners was present. Said it was a great event.
  * Finding food deserts in Seattle
  * Wished he had better curated data
* Hoping that the event will continue next year but the current organizers are graduating.
* Participants used to using Esri software were frustrated with their first exposure to [QGIS](https://qgis.org/en/site/).

