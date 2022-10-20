---
layout: meeting
title: October 19th 2022
location: Capitol Hill Library Branch
address: 425 Harvard Ave. E., Seattle, WA 98102
time: 6:00pm-7:30pm
excerpt: October 19th 2022 CUGOS Monthly Meeting
lat:  47.6229
lng: -122.3224
category: meetings
notes: Will find a near by bar/pub to socialize after our meeting has concluded ! Sorry no virtual access for this meeting for now, but as promised we will work hard to make this happen in the near future
---
Real in person Meeting !
 
**[Karsten Vennemann](https://www.linkedin.com/in/karstenvennemann/)** will talk about map feature styles in QGIS. E.g. how to create a style library, create legend icons/shapes, how to share styles, and will also take a brief look into the QGIS 'style generator' awsomeness.

Karsten will also share his experimental work on trying to produce better hillshades for cartography purposes [inspired by wanderingcartographer](https://wanderingcartographer.wordpress.com/tag/raster-chunk-processing/) . We can have an open discussion about tools and approaches others are taking for hillshades ...

**Anyone** interested is invited to share (their own or news about any interesting) small or large geospatial projects. As always any geo-questions are encouraged and will gladly be discussed within the group.

**We** will disucss plans for hosting a Spring Fling (mini conference) event in April 2023, and plan ahead for our next meetings .

**[@you](http://cugos.org/people/)** Introduce yourself! Or re-introduce yourself! Please tell us about something cool you are working on, playing with, or otherwise inspires or puzzles you. [Add yourself here.](https://github.com/cugos/cugos.github.com/blob/master/meetings/_posts/2022-10-19-cugos_monthly.md) or reach out to us hello@cugos.org

## Summary

We had a nice meeting and great social geobeers afterwards. This feels great that after a 2 year hiatus and despite bad air (smoke from wildfires) 10 people showed up for the meeting !

### Styles in QGIS
1. Create a style library and How to share styles 
    
   -> QGIS -> Processing Tools -> "Create style database from project" Tool , results in xml file with all styles in the project that can be imported in style manager

2. Create legend icons/shapes

   -> QGIS -> Style Manager -> Legend Patch Shapes , can add WKT as legend icon patch in WKT format 

3. QGIS 'style generator'

     This is a style that can be applied to layers and can generate and alter geometries for visual display
     
     *QGIS projects with data and examples zipped*

     [Serveral General Purpose Styles - Seattle Tracts Map](http://www.terragis.net/docs/cugos/qgis_geometry_generator/geom_gen.zip)

     [CAD Style dimensions on features](http://www.terragis.net/docs/cugos/qgis_geometry_generator/dimensions.zip)

     [Halftone Elevation Points World map](http://www.terragis.net/docs/cugos/qgis_geometry_generator/HalftoneElevationPoints.zip)

### Creation of Nicer Hill Shades
Inspired by [The Wandering Cartographer](https://wanderingcartographer.wordpress.com/tag/raster-chunk-processing/)
based on [Raster Chunk Processing](https://gisjake.blogspot.com/2018/10/introducing-rasterchunkprocessingpy-aka.html)

#### Example commands
 
##### Skymodel
`python3 raster_chunk_processing.py -m skymodel -s 1000 -o 200 -p 12 -l lum_turbid.csv --verbose /home/xy/input_dem.tif /home/skymodel_hillshade.tif`

##### Denoise
`python3 raster_chunk_processing.py -m mdenoise -s 1500 -o 20 -p 12 -n 10 -t 0.6 -v 20 --verbose /home/xy/skymodel_hillshade.tif /home/xy/skymodel_hillshade_denoised.tif`
 

## Reminder 
about some other cool open source and/or geo-related meetups in the area:

[OpenStreetMap Seattle](https://www.meetup.com/OpenStreetMap-Seattle/)  
[Puget Sound QGIS Users](https://www.meetup.com/Puget-Sound-QGIS-Users-Group/)  
[Seattle Postgres Users](https://www.meetup.com/Seattle-Postgres/)  
[Maptime Seattle](https://www.meetup.com/MaptimeSEA/)
