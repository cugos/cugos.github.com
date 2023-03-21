---
layout: event-2023
title: "2023 Spring Fling"
event_date: "Friday, April 21st (main conference) and Saturday, April 22nd (OSM Hackathon-OpenSidewalks Project) 2023"
event_time: "8:30 AM - 4:00 PM"
event_description: "Please join CUGOS, the UW Taskar Center for Accessible Technology and local OpenStreetMap community for an exciting two-day meeting on Open Source Geospatial tools, data, and analysis in and beyond the Puget Sound region.
  This is the first post-pandemic CUGOS Fling, and will provide unprecedented opportunities for learning about open geospatial software and open data collaboration. The Spring Fling is designed for anyone with an interest in maps, open source software, or open data.
  This conference is a great opportunity to:
  <ul>
    <li>Learn about new mapping software</li> 
    <li>Find out how open geospatial tools can be used to solve a wide-range of real world problems</li> 
    <li>Discover how companies are integrating location into their products</li> 
    <li>Meet like-minded individuals using maps and data in new and exciting ways</li> 
  </ul>
  We welcome all students, professionals, map lovers, coders, and anyone with a passion for learning about spatial information. This page is describing the CUGOS part of the conference, note that the Spring Fling is jointly held in the same building and time with the <em>2023 Open the Paths Conference</em>."
event_location: "Univ. of Washington, Seattle, WA. Bill & Melinda Gates Center for CS & Engineering(CSE2)"
event_register_soon: "Mark your calendars ! Registration will open on March 21st 2023"
markers:
 -
    name: Univ. of Washington, Seattle. Bill & Melina Gates Center for CS & Engineering(CSE2)
    lat: 47.653033
    lng: -122.305169
    icon: star
    color: "#659948"
schedule:
 -
    type: title
    title: Geo-floodgates aka doors open, come hell or high water
    time: 8:30 - 9:00 AM
    room: Zillow
    speaker:
    slides: 
    Description: |
        Get a name tag, meet old and new friends, drink a coffee
 -
    type: title
    title: Welcome
    time: 9:00 - 9:10 AM
    room: Zillow
    speaker: CUGOS volunteers
    slides: 
    Description: |
        Welcome to the 2023 Spring Fling!
 -
    type: Talk
    slides: 
    title: I, For One, Welcome our New Overlords
    time: 9:10 - 9:40 AM
    room: Zillow
    speaker: Paul Ramsey, <a href="http://blog.cleverelephant.ca">Crunchy Data</a>
    bio: |
      Paul Ramsey is an open source programmer and educator. He co-founded the PostGIS spatial database project in 2001, and is currently an active developer and member of the project steering committee. 
    description: |
      The tension between the capital cost of acquiring open source software ($0) and the operational cost of producing it (larger than zero) has been a topic of discussion almost from the start of the movement. Each era of open source has generated new canonical examples of how production is to be supported (selling magnetic tapes! consulting! open core, closed core, apple core!) and the story continues to unfold. Is open source doomed? Is it the future? What should users do? Predictions are hard, particularly about the future, but this talk will attempt the feat.
 -
    type: Talk
    slides: 
    title: Embarrassingly parallel large-scale geospatial analysis with Nearest Neighbor Gaussian Processes using the BRISC R-package
    time: 9:40 - 10:00 AM
    room: Zillow
    speaker: Arkajyoti Saha, <a href="https://stat.uw.edu/">Department of Statistics, University of Washington</a>
    bio: |
      I am a UW data science postdoctoral fellow in the Department of Statistics at University of Washington, with Daniela Witten and Jacob Bien. I am also affiliated with the Simons Collaboration on Computational Biogeochemical Modeling of Marine Ecosystems. I received my Ph.D. from the Department of Biostatistics at Johns Hopkins Bloomberg School of Public Health advised by Nilanjan Chatterjee and Abhirup Datta. I completed my M.Stat & B.Stat from Indian Statistical Institute, Kolkata prior to that.
    description: |
      Among a plethora of methods that aim to develop scalable Gaussian Process (GP) based analysis of geospatial data, Nearest neighbor Gaussian Process (NNGP) has established itself as one of the front runners with its multifaceted applications. Following Vecchia's approximation, NNGP likelihood is decomposed into product of lower dimensional likelihoods with fixed number of nearest neighbors for each location. This product form facilitates embarrassingly parallel implementation of NNGP, that is responsible for its widespread uptake. We present the R package BRISC, that has been tailored to harness the power of parallelizability of NNGP in multicore setup. BRISC utilizes the NNGP formulation to obtain a sparse approximation of the Cholesky factor of the precision matrix of the full GP. BRISC exploits this sparsity structure for parallelizable implementation of estimation, prediction, bootstrap-based inference of spatial parameters, simulation of large spatial data from GP, and prediction in spatial probit models. BRISC is also utilized in spatial machine learning for non-linear estimation of means in GP with Random Forests. We conclude with an application of BRISC in Transcriptomic Data.
        
 -
    type: Talk
    slides: 
    title: Mapping 15-minute neighborhoods within Seattle
    time: 10:00 - 10:20 AM
    room: Bezos
    speaker: Nathaniel Henry, <a href="https://www.healthdata.org/">Institute for Health Metrics and Evaluation</a>
    bio: |
     I am a geographer and public health researcher who uses spatial analysis to illuminate health inequalities. As a member of the Institute for Health Metrics and Evaluation (IHME) at the University of Washington, I serve as a research lead for international mapping studies of maternal and child health. My current work is split between (1) understanding the spatial determinants of health outcomes within cities, and (2) developing open-source software for spatial statistical modeling.
    description: |
      I developed an interactive map of walking time to city amenities across every block of Seattle. In this talk, I will walk through a tutorial for creating a walking access map using FOSS and open data, then describe the public reaction to the map and its larger context in debates over the "15-minute city."

 -
 
    type: title
    slides: 
    title: "Break"
    time: 10:20 - 10:30 AM
    room:  Zillow
    speaker: 
    description: Short break, icebreakers with seatmates
 
 -
    type: Talk
    slides: 
    title: The Allen Coral Atlas - monitoring coral reefs from space
    time: 10:30 - 10:50 AM
    room: Bezos
    speaker: Eldan Goldenberg, <a href="https://www.allencoralatlas.org/">Allen Coral Atlas</a>
    bio: |
     Eldan is a GIS consultant who mostly works on data processing and management pipelines using Python, PostGIS, GDAL and whatever else does the job.  He prioritises work with a clear positive social contribution, and his longest running project has been data ingestion and APIs for the Allen Coral Atlas.  Born in Istanbul, he spent many years in Southeastern England and Seattle, and now lives on Vancouver Island among the fishing grounds of the Songhees & Esquimalt First Nations.
    description: |
      The Allen Coral Atlas maps the world’s coral reefs and monitors their threats to provide actionable data and a shared understanding of coastal ecosystems.  Eldan will talk about the data inputs, how we process them and work with local researchers all over the world for QA, what we publish, and how it's used to serve real world conservation goals.
 -
 
    type: Lightning Talk
    slides: 
    title: A Spatiotemporal Analysis of Environmental and Social Conditions in Parks Prioritized by Million Trees Los Angeles
    time: 10:50 - 10:55 AM
    room: Bezos
    speaker: Diana Bonnarens, <a href="https://gis.usc.edu/online-programs/masters-geographic-information-science-and-technology/">University of Southern California</a>
    bio: |
     I am currently a Master’s Student in the Geographic Information Science and Technology (GIST) Program at the University of Southern California’s Spatial Science Institute. I am interested in all things spatial, but I am particularly excited about cartography and remote sensing.
    description: |
      This thesis quantifies tree canopy loss and socio-economic changes within parks and park walksheds, respectively, before and after Million Trees Los Angeles (MTLA). Since MTLA began, at least thirteen other cities worldwide have adopted similar million tree planting goals. Now that MTLA has ended, it is important to evaluate how shifting environmental and demographic baselines within proximity to parks could have affected its success and to consider what may strengthen future tree planting initiatives in Los Angeles or elsewhere. This thesis builds upon existing literature by analyzing changes among tree canopy and socio-economic conditions together. The author evaluates tree canopy coverage data in parks within Los Angeles City Council District 7 (Study Area) between 2006 and 2016. To better understand if MTLA-targeted parks effectively addressed environmental inequity, the author also explores socio-economic conditions within 0.25-mile park walksheds. Results show tree canopy losses in 19 out of 20 parks analyzed, with an average of 44% established canopy loss between 2006 and 2016. In areas targeted by MTLA, an average of 42% canopy loss occurred. Park walksheds showed an average decrease of 2.6% Median Household Income and an average decrease of 11.6% in Non-White Population. Within MTLA-targeted park walksheds, Median Household Income and Non-White Population decreased by 3.2% and 8.6%, respectively. Further studies can apply this workflow to understand how these changes may vary in parks across Los Angeles’ remaining city council districts.
 -
 
    type: Talk
    slides: 
    title: iSeaTree - Quantifying & Tracking Urban Forestry Benefits with Open Data and Open Software
    time: 10:55 AM - 11:15 AM
    room: Bezos
    speaker: Stephen Clemmer, <a href="https://www.democracylab.org/projects/502">iSeaTree / Democracy:Lab</a>
    bio: |
     Stephen Clemmer is a software developer and recent graduate of Code Fellows' program in Advanced Full-Stack Software Development with JavaScript. His professional experience includes project management, product management, and team leadership. Stephen is one of the MANY contributors working on DemocracyLab's 'iSeaTree' project.
    description: |
     iSeaTree' is a React-Native open source mobile application for helping new users identify, record, and track urban trees. It works with USFS’s iTree API to calculate the CO2, H2O, and air pollution benefits of USA & Canadian trees. In this presentation, Stephen will be introducing the recently released V4 app features which includes: a location-aware AI tool for identifying tree species, integration with the USFS iTreeAPI (which calculates tree benefits based on species, size, and location), and various game play features. 
  
 -
   
    type: Talk
    slides: 
    title: An interactive web based geo-spatial tool for Integration of urban Green and Blue Infrastructure
    time: 11:15 - 11:35 AM
    room: Bezos
    speaker: Karsten Vennemann, <a href="https://www.terragis.net/">TerraGIS</a>
    bio: |
     Karsten Vennemann is a GIS professional with a background in Geography and Soil Science. His work mostly focuses on GIS in the context of natural resources, sustainable development and social justice. In 2007 he started his own company, Terra GIS based in Seattle. He teaches classes in Open Source GIS and a good portion of this consulting work involves creating and supporting Open Source based Web GIS solutions. Karsten has been a frequent speaker at GIS conferences.
    description: |
      For the city of Stuttgart/Germany (and as a contribution to the nationally funded project INTERESS-I), a web-based tool has been developed that balances rain- and gray water drainage on the one hand, and vegetation water demand on the other. The tool combines GIS-balances of rain- and gray water harvest in a catchment area and a day-by-day calculation of water demand from different vegetation structures respective of local weather history, shading situation and soil water conditions. The tool shows the drought period length a specific water storage volume can bridge. Technically the tool implementation is based on OpenLayers, MapServer, GDAL, PHP, Python, R, and PostGIS.
 -
    type: title
    title: "Lunch"
    time: 11:35 AM - 12:15 PM
    speaker:
    description:
 
 -
 
    type: Talk
    slides: 
    title: Recent Development in JTS and GEOS
    time: 12:15 - 12:35 PM
    room: Bezos
    speaker: Martin Davis, <a href="https://www.crunchydata.com/"></a>
    bio: |
     Martin Davis is a geospatial software developer based in Victoria BC.  He has a long involvement with geospatial software development.  He is the originator of the JTS Topology Suite geometry library, and continues to actively develop it.  In the past he has worked on GeoServer and OpenJUMP.  He is a current contributor to the GEOS and PostGIS projects. 
    description: |
      This talk gives a overview of the JTS Topology Suite and GEOS geometry libraries, and describes recently-added and upcoming functionality.  It discusses geometric functions such as Concave Hulls, Triangulations, and operations on Polygonal Coverages including validation, union and simplification.
 -
 
    type: Lightning Talk
    slides: 
    title: QGIS with Python - Creating repeatable spatial analyses with limited python experience
    time: 12:35 - 12:40 PM
    room: Bezos
    speaker: Lisa Enns, <a href="https://www.ennsanalytics.com/">Enns Analytics</a>
    bio: |
     I’m a certified urban planner with over 15 years of experience in data analysis and visualization, with an emphasis on spatial data. In every job I’ve held, I became the default analyst for the team. From calculating energy efficiency savings at a manufacturing plant as a mechanical engineer to creating traffic safety infographics as an urban planner, data has always been my passion.
    description: |
      QGIS has a built-in python console that can be used with limited python knowledge. No separate python installation is needed. Spatial processes can be run using QGIS's GUI interface, and then copied to a python script to create repeatable, iterative processes in QGIS. This presentation will give you the basics you need to create python code and documentation that can be run reliably when inputs change, or sent to others for additional analysis.
 -
 
    type: Talk
    slides: 
    title: Cloud-optimized geo data formats and the Python ecosystem
    time: 12:40 - 1:00 PM
    room: Bezos
    speaker: Emilio Mayorga, <a href="https://www.apl.uw.edu/">Applied Physics Laboratory, University of Washington</a>
    bio: |
     I am an environmental data scientist (or data engineer?) with a research background in oceanography and watershed science. I focus on systems, software and practices for the management and open dissemination of environmental data in marine and terrestrial applications. My work emphasizes collaborative approaches and tools (open source and open data) that engage diverse partners, and this work ranges from local (Pacific NW) to national and global applications.
    description: |
      Nowadays there are gobs of very large geospatial data of all sorts accessible in one form or another online. Many of us are both producers and consumers ourselves. But online accessibility alone doesn't necessarily translate to convenient, scalable access to data subsets; or fully leverage the potential of cloud-based processing. Also, data producers and distributors may face challenges in generating and hosting data in scalable and accessible formats, or even choosing such formats without having to adopt fully new tool sets. I will review the ecosystem of "cloud optimized" (or cloud native) geospatial formats that are gaining ground or have already done so, and discuss some of their common features that leverage web and cloud architectures. I will focus on data formats for analysis purposes rather than cartographic rendering proper, though  they're not mutually exclusive, strictly speaking. Finally, to make this much more tangible and because Python is what I do, I will discuss these formats in the context of Python libraries that support them, using live Jupyter notebook demos.
 
 -
    type: Talk
    slides: 
    title: Creating nicer hillshades for cartography using Raster Chunk Processing
    time: 1:00 - 1:20 PM
    room: Bezos
    speaker: Karsten Vennemann, <a href="https://www.terragis.net/">TerraGIS</a>
    bio: |
     Karsten Vennemann is a GIS professional with a background in Geography and Soil Science. His work mostly focuses on GIS in the context of natural resources, sustainable development and social justice. In 2007 he started his own company, Terra GIS based in Seattle. He teaches classes in Open Source GIS and a good portion of this consulting work involves creating and supporting Open Source based Web GIS solutions.
    description: |
      Karsten will share his experimental work on trying to produce better hill shades for cartography purposes using Skymodels and a python utility called Raster Chunk Processing (RCP) https://gisjake.blogspot.com/2018/10/introducing-rasterchunkprocessingpy-aka.html. This talk is based and inspired by this post on wanderingcartographer: https://wanderingcartographer.wordpress.com/tag/raster-chunk-processing/
 -
    type: title
    slides: 
    title: "Break"
    time: 1:20 - 1:35 PM
    room:  
    speaker: 
    description: Short break
 -
    type: Talk
    slides: 
    title: PostGIS Fun Functions
    time: 1:35 - 1:55 PM
    room: Bezos
    speaker: Paul Ramsey, <a href="http://blog.cleverelephant.ca">Crunchy Data</a>
    bio: |
     Paul Ramsey is an open source programmer and educator. He co-founded the PostGIS spatial database project in 2001, and is currently an active developer and member of the project steering committee.
    description: |
      There are literally hundreds of different spatial management and analysis functions in PostGIS, and it's impossible to talk about all of them, so this talk will focus on a few functions and query patterns, which you might not have seen before, but that you will definitely find useful!
 -
    type: Talk
    slides: 
    title: Vector Tiles Directly from a PostGIS Database with db2vector
    time: 1:55 - 2:15 PM
    room: Bezos
    speaker: Brendan Farrell, <a href="https://www.clockworkmicro.com/">Clockwork Micro</a>
    bio: |
     I received a PhD in Applied Math in 2008 from UC Davis and then was a researcher at TU Berlin, TU Munich and Caltech. In 2014 I started HowLoud, to build a national environmental noise map. That project was my introduction to geospatial work. In 2021 I started Clockwork Micro to offer geospatial microservices.
    description: |
      We present db2vector, a simple tool that allows users to create vector tile endpoints from PostGIS databases. The tool abstracts several layers so that a user can edit a simple sql query to extract the desired data in the desired format and publish a vector tile endpoint. The endpoint can then be used as a source for Leaflet, MapLibre, OpenLayers or MapBox. 
 -
    type: Lightning Talk
    slides: 
    title: Using GRTS in RStudio to Build a Sampling Frame for Endangered Birds
    time: 2:15 - 2:20
    room: Bezos
    speaker: Matt Stevenson, <a href="https://www.coregis.net"></a>
    bio: |
      Matt specializes in cartography, spatial analysis, web mapping, conservation planning, and GIS project management. He works primarily with government agencies and non-profits focused on conservation and restoration. Matt has twentyfive years of experience using GIS to convey complex spatial information with striking cartography and eye-catching graphics. He holds a B.S. in Public Planning from Northern Arizona University and a Masters in Urban Planning from the University of Washington.
    description: |
      The Streaked Horned Lark is a ground-nesting bird that is listed as Endangered in Washington State and Threatened by the US Fish & Wildlife Service. We are providing mapping and analytical support to ornithologists and field biologists who are working to survey larks in the Willamette Valley of Oregon. In this lighting talk we will explain how we used the grts algorithm in the spsurvey library of Rstudio to produce a spatially balanced sampling frame using unequal inclusion probabilities based on estimated habitat suitability within each 200m sampling circle.
 -
    type: Talk
    slides: 
    title: Using R Markdown to create self-documenting research reports, including geospatial analysis and tabular, graphical, and map outputs
    time: 2:20 - 2:40 PM
    room: Bezos
    speaker: Phil Hurvitz, <a href="https://csde.washington.edu/">UW CSDE</a>
    bio: |
     Phil Hurvitz is a research scientist at the UW Center for Studies in Demography and Ecology (CSDE), where he directs the UW Data Collaborative, consults for CSDE affiliates and students, and works on a variety of extramurally funded research projects. Phil hods a PhD in urban design and planning from the UW and does. research on the relationship between built environment and health-related behaviors using objective data and open-source tools, focusing on reproducibility and transparency.
    description: |
      This presentation will explain and demonstrate the use of R Markdown to create self-contained HTML files containing code and results of geospatial analyses done within R and PostGIS. We will cover the basic parts of the R Markdown RMD (source code) format and how to generate the HTML, and including tabular, graphical, and map outputs (using Leaflet). The session will include a brief lecture followed by a live demonstration. This follows on previous sessions from 2011 ("R, PostgreSQL, and PostGIS: Techniques for Processing Large Data Sets", https://bit.ly/3kBn63l) and 2012 ("R, PostGIS, and Sweave: Reproducible Research", https://bit.ly/3kygYcc).
 -
    type: Talk
    slides: 
    title: Using RStudio for Practical Geospatial Analysis
    time: 2:40 - 3:00 PM
    room: Bezos
    speaker: Roger Andre, <a href="https://posit.co/">Posit PBC</a>
    bio: |
     I am a Solutions Engineer at Posit PBC, formerly "RStudio".  My background is predominantly in code-based spatial analysis and data engineering using Python, R, PostGIS and a bunch of other Open Source tools.  I have worked in the software industry on spatial data processing toolchains since 2005.  I am inspired by what can be accomplished by working within a set of constraints.  Give me a good basic set of tools which can be chained together, over a fancy Unicorn, any day.   
    description: |
      Using publicly available data on Hospitals in the U.S., I will go over some simple analytics concepts in RStudio and then show how these can be combined into a Shiny application that is freely hosted on Shinyapps.io.
 
 -
 
    type: title
    slides: 
    title: "Break"
    time: 3:00 - 3:15 PM
    room:  
    speaker: 
    description: Short break
 
 -
    type: Talk
    slides: 
    title: Big Data Techniques for Processsing Geospatial Trips and Derived Datasets at Scale
    time: 3:15 - 3:35 PM
    room: Bezos
    speaker: Trang Nguyen, <a href="https://inrix.com/">Inrix</a>
    bio: |
     Trang Nguyen is a lead software developer at INRIX. She has worked on building data-driven analytic solutions in transportation and mobility space. In her work, she utilizes cloud-based infrastructure on AWS, OpenStreetMaps, as well as a variety of opensource geospatial tools and libraries. 
    description: |
      INRIX processes over .5 TB raw GPS points sourced by connected car providers and mobile apps into trips and vehicle trajectories. The data is used to drive downstream SaaS product tooling and data analytics sold to cities and governments along with retail businesses, who use the data to gain insights on travel demand, mobility trends, among other use cases. This talk gives an overview of some of the evolving technologies that INRIX has used over the years to process, store and retrieve data that is geospatial in nature at big data scale.
 -
    type: Lightning Talk
    slides: 
    title: From 2D to Spatial - My Data Journey and the Power of FOSS and Geospatial Technologies
    time: 3:35 - 3:40 PM
    room: Bezos
    speaker: Kristen Narcisi, <a href="https://mgn.energy/">MicroGrid Networks LLC</a>
    bio: |
     Recent grad in Biomedical Informatics. Data Product Manager for renewable energy development company in NYC. 
    description: |
      As a student studying biomedical informatics, I was taught the importance of data-driven approaches to understanding and combatting disease outbreaks. However, I found that while we were taught how to translate data into simple graphs, we were not exposed to anything beyond that visually that would really bring the analysis to life. This sparked my interest in exploring geospatial analysis in my free time using the python library folium.
      My journey into the world of GIS took off when I landed a research internship in the renewable energy sector. Here, I worked at a development company that leveraged FOSS and geospatial data to make better business decisions. This experience was eye-opening, and I found myself drawn to the power of spatial data analysis.
      I seized the opportunity to write my dissertation on the spatial correlations between rezoned districts and remediation sites, tying in the significance of leveraging spatial data to public health. This research allowed me to gain valuable insights into how FOSS and geospatial technologies can be utilized to address complex real-world issues on a public/community level.
      Today, as a data product manager at the same company, we continue to rely heavily on FOSS and geospatial technologies to monitor and understand the intricate NYC environmental/policy, real estate, and energy market. 

 -
    type: Talk
    slides: 
    title: Drone-based LiDAR and Thermography for the UW Community
    time: 3:40 - 4:00 PM
    room: Bezos
    speaker: Keenan Ganz, <a href="https://sites.uw.edu/rsgal">University of Washington RSGAL</a>
    bio: |
     Keenan Ganz (he/him) is a PhD student in the Remote Sensing and Geospatial Analysis Laboratory at UW. He studies canopy temperature in conifer forests at multiple scales: in situ thermometers, drone thermography, and satellite imagery. Keenan is interested in developing software to refine canopy temperature measurements, and in using these data to monitor forest health. 
    description: |
      Unoccupied aerial vehicle (UAV, aka drone) photography is a core technique in remote sensing: the precise measurement of environmental data to inform management decisions. However, amid growing industry demand for UAV operators, academic interest in applications of UAV photography, and growing enrollment in remote sensing courses at UW, most students do not have access to UAVs. The UW Geospatial Club, in partnership with the Precision Forestry Cooperative, has recently purchased state-of-the-art drones for use by all in the UW community. We include a heavy-lift enterprise UAV, the DJI Matrice 300, as well as a lightweight, operator-friendly UAV, the DJI Mavic 3E. We also include two specialized cameras for the Matrice 300: the FLIR Vue TZ20-R thermal camera, and the Zenmuse L1 LiDAR/RGB unit. This equipment serves a variety of use-cases, from senior researchers with prior UAV experience to undergraduate students wanting to explore UAV photography. This talk will describe the technical specs of the equipment and highlight use cases for UW practitioners. Logistical considerations for flying drones, including the FAA Part 107 license, restricted airspace, liability insurance, and flight plans will be discussed.
 -
    type: title
    title: Day 2 - Saturday April 22nd 2023, <em>Room TBD</em>
    time: 8:30 AM - 4:00 pm
    description: |
      OpenStreetMap (OSM) Hackathon with the <a href="https://tcat.cs.washington.edu/opensidewalks-2/">OpenSidewalks Project</a>. More information to be added here soon.     
 -
    type: title
    title: Saturday Event Ends
    time: 4:00 PM

event_sponsors_gold:
 -
    image: /image/2023springfling/sponsor-inrix.png
    width: 200px
    link: http://inrix.com/
 -
    image: /image/2023springfling/sponsor-mgn.png
    width: 250px
    link: https://mgn.energy/

event_sponsors_silver:
 -
    image: /image/2023springfling/sponsor-locatepress.png
    width: 160px
    link: https://locatepress.com/

event_sponsors_comm:
 -
    image: /image/2023springfling/sponsor-coregis.png
    width: 175px
    link: http://coregis.net/
 -
    image: /image/2023springfling/sponsor-terragis.png
    width: 240px
    link: http://www.terragis.net/       
 -
    image: /image/2023springfling/sponsor-clockworkmirco.png
    width: 199px
    link:  https://www.clockworkmicro.com

---
