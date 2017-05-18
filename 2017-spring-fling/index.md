---
layout: event-2017
title: "2017 Spring Fling"
event_date: "Saturday, May 20th"
event_time: "8:30 AM - 6:00 PM"
event_description: "The CUGOS Spring Fling is a full-day event centered around open source geography. This is a great way to learn about new mapping software, hear how companies are integrating location into their products, and get some hands-on experience with important tools like Leaflet, AWS, Turf.js, and QGIS. We welcome students, professionals, map lovers, coders, and anyone with a passion for learning about spatial information. The Spring Fling is designed for anyone with an interest in maps and open source software."
event_location: "General Assembly, Downtown Seattle (Seattle Tower)"
event_register-url: "https://www.eventbrite.com/e/spring-fling-2017-tickets-33297602024"
markers:
  -
    name: General Assembly
    lat: 47.607745
    lng: -122.335473
    icon: star
    color: "#ED2B4F"
schedule:
  -
    type: title
    title: Doors Open
    time: 8:30 AM
    description: |
      Sign in, get a nametag, drink coffee, eat donuts, mingle
  -
    type: title
    title: "Opening remarks"
    time: 9:30 AM
    description: |
      Welcome to CUGOS! Let's get settled, discuss what the day looks like, and get excited for the opportunity to share a space together.
  -
    type: title
    title: "Morning talks"
    time: 9:45 AM
    speaker:
    description: |
      15-20 minute talks from all corners of the geospatial community.
  -
    type: talk
    title: Reconstructing the history of the Ebola epidemic
    speaker: Gytis Dudas
    description: |
      The 2013-2015 Ebola virus epidemic in West Africa has been unprecedented in its magnitude and duration. Advances in genetic sequencing technologies have given us complete virus genomes from over 5% of known cases and sequence data were employed for the first time to direct near real time healthcare response on the ground. On behalf of my numerous colleagues and international collaborators I will show how our team used state-of-the-art methods to reconstruct the history of the epidemic from sequence data from its inception in late 2013 to its decline and extinction in 2015. I will describe what our model told us about the drivers of the epidemic and issues of logistics and data availability we encountered along the way.
  -
    type: talk
    title: Seattle zoning and equitable school access
    speaker: Margaret Morales
    description: |
      Margaret will showcase Sightline Institute’s maps created in CARTO linking Seattle city zoning with access to the city’s public schools and parks. The maps show that highly restrictive single-family zoning segregates attendance at the city’s top public elementary schools, making the student body disproportionately white, non-poor, and English speaking. Park access is similarly unbalanced across the city. Mrs. Morales works at the Sightline Institute, Cascadia’s sustainability think tank, where she focuses on housing policy solutions that make Seattle a more walkable, welcoming, and sustainable city.
  -
    type: talk
    title: Searching for Pokemon Go
    speaker: Mike Patterson
    description: |
      Mike loves catching Pokemon. He will describe how a data structure called KD-Trees (https://en.wikipedia.org/wiki/K-d_tree) can help calculate minimum distances between sets of locations, using the example of Pokemon in Hong Kong. Then he will show how to scale these trees to billions of locations using Apache Spark.
  -
    type: talk
    title: Mobile @ Mapbox
    speaker: Justin Miller
    description: |
      Justin will share some recent additions to Mapbox's mobile SDKs as well as share some insight into developing mapbox-gl-native in the open.
  -
    type: talk
    title: A Cartographic Map of Lake Como Cycling Routes Using QGIS
    speaker: Jill Bodnar
    description: |
      What's better than maps, bikes, and Italy? Combining all 3 in QGIS! The Lombardy region of Lake Como, Italy, has a long history of professional cycling races and is a favored destination for cyclists to train and visit on holiday. Over the past two years it has become my home away from home and I found a need for a comprehensive cycling map of the area. As a personal project I have been exploring the world of QGIS to create a cartographic map of cycling routes in the area. I'll describe the background of the project, the data I've used, and what I've learned about cartography and features in QGIS.
  -
    type: talk
    title: Open Source Geo at Vulcan Technology
    speaker: Joel Masselink
    description: |
      Joel Masselink, of Vulcan Technology, will discuss the role Open Source tools play in the work of a developing software for philanthropy. Vulcan Tech develops solutions to global challenges as varied as climate change, poaching/wildlife trafficking, illegal fishing, and rural connectivity. Open source software and open data are critical to this work.
  -
    type: talk
    title: "Lunch"
    time: 12:00 PM
    speaker:
    description: Nom nom
  -
    type: workshops
    title: "Workshops A"
    time: 1:00 PM
    description: |
      There are three simultaneous workshops, A1, A2, and A3. They will be split between different rooms throughout the space.<br><br>
      <strong>Workshop A1</strong>: QGIS: for ArcGIS users<br>
      <strong>Workshop A2</strong>: Missing Maps<br>
      <strong>Workshop A3</strong>: A Simple GIS workflow in Python and R<br>
  -
    type: talk
    title: QGIS Quick Start with Tips for ArcGIS Users
    speaker: Evan Derickson
    description: |
      <strong>Audience:</strong> Beginner, new to QGIS.<br>
      <strong>Preparation:</strong> Bring your laptop and make sure to have <a href="http://qgis.org">QGIS</a> 2.16 or later installed.<br>
      <strong>Description:</strong> Get oriented to the QGIS interface and references to essential resources for QGIS. Proceed with specific functions of QGIS, with tips for users familiar with ArcGIS features: loading data, working with layers, and geoprocessing; and how to leverage the vast resource provided with QGIS as plug-ins. Plug-ins are part of the primary toolkit for QGIS, they are also the key to extending QGIS functionality. We'll explore file formats, data entry and forms, and raster processing. This workshop stands alone as an introduction to QGIS, and is also great preparation for <em>Cartography with QGIS</em> in the second workshop session.   
  -
    type: talk
    title: A Simple GIS Workflow in Python and R
    speaker: Christy Heaton and Caileigh Shoot
    description: |
      <strong>Audience:</strong> Intermediate. We will assume intermediate understanding of GIS and basic understanding of R or Python.<br>
      <strong>Preparation:</strong> We will be using R and R Studio for the R portion, and Miniconda, Geopandas, and Jupyter Notebooks for the Python portion. If you want to follow along, please come with the following installed:<br>
      <ul><li> <a href="https://cran.r-project.org/">R</a></li>
      <li> <a href="https://www.rstudio.com/products/rstudio/download2/">R Studio</a></li>
      <li> <a href="https://conda.io/miniconda.html">Miniconda</a></li>
      <li> <a href="https://github.com/christyheaton/Cugos_SpringFling_2017">This GitHub Repo</a>, and follow the Getting Started section in the README.md to get the conda environment set up.</li>
      </ul>
      <strong>Description:</strong> Python and R are programming languages commonly used to automate GIS workflows. Join us to learn the very basics of both, their strengths and weaknesses, and use them to automate a simple GIS workflow using vector data. Attendees are welcome to come to watch and learn, and will also be provided necessary code and data if they want to follow along.
      This workshop is brought to you by <a href="http://maptimesea.github.io/">Maptime Seattle</a>. Join our <a href="https://www.meetup.com/MaptimeSEA/">Meetup group</a> to be notified of our free talk and social events!
  -
    type: talk
    title: Missing Maps
    speaker: Chase Stephens
    description: |
      <strong>Audience:</strong> Beginner<br>
      <strong>Preparation:</strong> Bring a laptop, charger, and a mouse--for key presses and cursor movement a mouse makes editing tasks easier. No software installation is necessary, activities are browser based.<br>
      <strong>Description:</strong> <a href="http://www.missingmaps.org">Missing Maps</a> is an amazing humanitarian project to map the world's most vulnerable places. When natural disasters (like earthquakes/hurricanes) or epidemic disease (like Ebola/Malaria) occur, first responders such as the Red Cross and Doctors Without Borders need to know where people live, and how to get to them. However, most of the world isn't on any map! Please stop in and learn how to help save lives around the world – we'll be looking at aerial photos and drawing the roads and building outlines that we see into <a href="http://www.openstreetmap.org">OpenStreetMap</a>.
  -
    type: workshops
    title: QGIS Quick Start with Tips for ArcGIS Users
    instructor: Evan Derickson
    audience: Beginner, new to QGIS
    preparation: Bring your laptop and make sure to have QGIS 2.16 or later installed.
    description: |
      Get oriented to the QGIS interface and references to essential resources for QGIS. Proceed with specific functions of QGIS with tips for users familiar with ArcGIS features: loading data, working with layers, geoprocessing, and how to leverage the vast resource provided with QGIS as plug-ins. Plug-ins are part of the primary toolkit for QGIS, they are also the key to extending QGIS functionality. We'll explore file formats, data entry and forms, and raster processing. This workshop is stands alone as an introduction to QGIS, and is also great preparation for _Cartography with QGIS_ in the second workshop session.   
  -
    type: workshops
    title: A Simple GIS Workflow in Python and R
    instructor: Christy Heaton and Caileigh Shoot
    audience: Intermediate (we will assume intermediate understanding of GIS and basic understanding of R or Python)
    preparation: |
      We will be using R and R Studio for the R portion, and Miniconda, Geopandas, and Jupyter Notebooks for the Python portion. If you want to follow along, please come with the following installed:
      -- [R](https://cran.r-project.org/)
      -- [R Studio](https://www.rstudio.com/products/rstudio/download2/)
      -- [Miniconda](https://conda.io/miniconda.html)
      -- [This GitHub Repo](https://github.com/christyheaton/Cugos_SpringFling_2017), and follow the Getting Started section in the README.md to get the conda environment set up
    description: |
      Python and R are programming languages commonly used to automate GIS workflows. Join us to learn the very basics of both, their strengths and weaknesses, and use them to automate a simple GIS workflow using vector data. Attendees are welcome to come to watch and learn, and will also be provided necessary code and data if they want to follow along.
      This workshop is brought to you by [Maptime Seattle](http://maptimesea.github.io/). Join our [Meetup group](https://www.meetup.com/MaptimeSEA/) to be notified of our free workshops and social events!
  -
    type: workshops
    title: Missing Maps
    instructor: Chase Stephens
    audience: Beginner
    preparation: bring a laptop, charger, and a mouse--for key presses and cursor movement a mouse makes tasks easier. No software installation necessary activities are browser based.
    description: |
      [Missing Maps](http://www.missingmaps.org) is an amazing humanitarian project to map the world's most vulnerable places. When natural disasters (like earthquakes/hurricanes) or epidemic disease (like Ebola/Malaria) occur, first responders such as the Red Cross and Doctors Without Borders need to know where people live, and how to get to them. However, most of the world isn't on any map! Please stop in and learn how to help save lives around the world – we'll be looking at aerial photos and drawing in the roads and building outlines that we see into OpenStreetMap.
  -
    type: workshops
    title: "Workshops B"
    time: 2:45 PM
    description: |
      Second round of workshops. Some will build off each other, some will be completely new.<br><br>
      <strong>Workshop B1</strong>: QGIS: Cartography<br>
      <strong>Workshop B2</strong>: Map Cubes with Jared & Claire<br>
      <strong>Workshop B3</strong>: The OSGeo miscellaneous drawer<br>
  -
    type: workshops
    title: Cartography with QGIS
    instructor: Matt Stevenson
    audience: some experience with QGIS expected
    preparation: Bring your laptop and make sure to have QGIS 2.16 or later installed. Some QGIS experience is expected. 
    description: |
      Build on your newfound QGIS knowledge by exploring different cartographic techniques within QGIS. We will briefly review some important cartographic and design concepts, then delve into the Layer Styling panel, various transparency tools, labeling techniques, and layout design to make a map in real time! You can make your map with the data provided, or bring your own data and follow along.    
  -
    type: workshops
    title: Map Cubes
    instructor: Claire and Jared Erickson
    audience: beginner
    description: |
      Get crafty in this hands on workshop.  Learn how to assemble map cubes and then learn how to create your own with G.Projector and QGIS.  Bring a pair of scissors and your laptop with G.Projector and QGIS.  This workshop will be fun for kids and grownups, bring your favorite kid too (if you have one).
  -
    type: workshops
    title: The OSGeo Miscellaneous Drawer
    instructor: Rafa Gutierrez
    audience: beginner/novice
    description: |
      Everyone has that drawer at home - the **everything** drawer. Many geospatial developers have the same - but for day-to-day tools. Jump into this workshop to learn tips and tricks to expedite workflows, manage and validate spatial data, and join in the show and tell of how we all use these tools. We'll cover:
      -- geojsonio
      -- GDAL
      -- geojsonhint
      -- rasterio
      -- tippecanoe
      -- MBUtil
      -- useful console commands
      -- and as many others as we can pack in this 90-minute session
  -
    type: talk
    title: Cartography with QGIS
    speaker: Matt Stevenson
    description: |   
      <strong>Audience:</strong> Some experience with QGIS is expected.<br>
      <strong>Preparation:</strong> Bring your laptop and make sure to have <a href="http://qgis.org">QGIS</a> 2.16 or later installed.<br>
      <strong>Description:</strong> Build on your newfound QGIS knowledge by exploring different cartographic techniques within QGIS. We will briefly review some important cartographic and design concepts, then delve into the Layer Styling panel, various transparency tools, labeling techniques, and layout design to make a map in real time! You can make your map with the data provided, or bring your own data and follow along.    
  -
    type: talk
    title: Map Cubes
    speaker: Claire and Jared Erickson
    description: |
      <strong>Audience:</strong> Beginner<br>
      <strong>Preparation:</strong> None needed, some materials are provided. Bring scissors (or share what's available), a laptop with <a href="http://qgis.org">QGIS</a> and <a href="https://www.giss.nasa.gov/tools/gprojector/">G.Projector</a> if you want to create your own original map cubes.<br>
      <strong>Description:</strong> Get crafty in this hands on workshop.  Learn how to assemble map cubes and then learn how to create your own with G.Projector and QGIS.  Bring a pair of scissors and your laptop with G.Projector and QGIS.  This workshop will be fun for kids and grownups, bring your favorite kid too (if you have one).
  -
    type: talk
    title: The OSGeo Miscellaneous Drawer
    speaker: Rafa Gutierrez
    description: |
      <strong>Audience:</strong> Beginner/Novice<br>
      <strong>Preparation:</strong> None<br>
      <strong>Description:</strong> Everyone has that drawer at home - the <strong>everything</strong> drawer. Many geospatial developers have the same - but for day-to-day tools. Jump into this workshop to learn tips and tricks to expedite workflows, manage and validate spatial data, and join in the show and tell of how we all use these tools. We'll cover:
      <ul>
      <li> <a href="http://geojson.io">geojsonio</a></li>
      <li> <a href="http://www.gdal.org/">GDAL</a></li>
      <li> <a href="https://www.mapbox.com/geojsonhint/">geojsonhint</a></li>
      <li> <a href="https://mapbox.github.io/rasterio/">rasterio</a></li>
      <li> <a href="https://github.com/mapbox/tippecanoe">tippecanoe</a></li>
      <li> <a href="https://github.com/mapbox/mbutil">MBUtil</a></li>
      <li> useful console commands</li>
      <li> and as many others as we can pack in this 90-minute session</li>
      </ul>
  -
    type: talk
    title: "Closing remarks"
    time: 4:45 PM
    speaker:
    description: |
      Let's wrap up the day by discussing what we learned and how we can keep the momentum going at the next CUGOS meeting.
  -
    type: talk
    title: "Social"
    time: 5:00 PM
    speaker:
    description: |
      No better way to close out an action packed day than by cheersing your soda or beer with new friends. Location TBD.
event_sponsors_platinum:
  -
    image: /image/2017springfling/VulcanTechnology-200sq.png
    width: 250px
    link: http://www.vulcan.com/technology
event_sponsors_gold:
  -
    image: /image/2017springfling/sgsi.png
    width: 250px
    link: http://sgsi.com/
  -
    image: /image/2017springfling/integralgis.png
    width: 250px
    link: http://integralgis.com/
  -
    image: /image/2017springfling/mapbox.png
    width: 250px
    link: https://www.mapbox.com/
event_sponsors_silver:
  -
    image: https://static1.squarespace.com/static/513788d5e4b0988e47dbf980/t/5138fe25e4b0d066f2359658/1492553473728/?format=1500w
    width: 175px
    link: https://www.aspectconsulting.com/
  -
    image: /image/2017springfling/unearth-slate.png
    width: 175px
    link: http://www.unearthlabs.com/
event_sponsors_comm:
  -
    image: /image/2015springfling/sponsor-coregis.png
    width: 175px
    link: http://coregis.net/
  -
    image: /image/2015springfling/sponsor-soundgis.png
    width: 150px
    link: http://www.soundgis.com/
  -
    image: /image/2017springfling/rooftop-brewery.png
    width: 150px
    link: http://rooftopbrewco.com/
---
