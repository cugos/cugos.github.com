---
layout: meeting
title: March 21st, 2018, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: March 21 2018 CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---


## Agenda
- **[Mike Rosen](https://github.com/mrosen)** Toward Machine Learning of Lidar Classifications.  When you look at a Lidar point cloud it's clear to you what you're looking at:  trees, cars, wires, etc. Sadly, the best the industry can do right now to tag those points is have human operators
do that manually.  I've been working on this problem for while and will show you a bit about what I've learned and how far we have to go.
- **[@Kate Leroux](https://github.com/kateler)** I'll talk about how I recently dug into how to improve performance in a Mapbox stylesheet.
- **[Jason Taylor](https://github.com/jmt2080ad)** Base Objects and Functional Programming in R - Caileigh Shoot and I have been putting together a workshop for WAURISA. I would like to share this introductory section with you all. This is more or less how I wish I was taught R when I first was learning the basics. This material along with exercises and a geospatial component will be presented at a Maptime in April.
- **[Peter Keum](https://github.com/keum)** Quick highlight of QGIS 3.0 and Paul MCcombs has nice [summary note](http://psqgis.org/blog/2018/03/19/Mar-Minutes) from our last [PugetSound QGIS User group](http://psqgis.org/).
- **[@you](http://cugos.org/people/)** tell us about something cool you are working on



## UW Event Wifi

```
UW NetID:   event0963
Password:   eURj=oYZd=eENj
```

## Meeting Notes 

## Kate Leroux

Kate has learned some interesting undocumented tips for Mapbox map styles.  She has a style with 15000 lines of JSON and 164 layers.  It runs a little slow, especially on slower Android devices.  Kate had many theories about what might be slowing it down.  According to some tips in the Mapbox documentation, it suggested to many layers, or layers with too many verticies could cause problems, but which layers were causing problems in her style.  She used the Chrome developer tools to benchmark her existing stylesheet.  She picked several landmarks in her perforance profile and tracked them in an excel spreadsheet for several runs.  She then created stylesheets that tested some of her initial theories and ran the same performance tests.  She used conditional formatting in excel to quickly identify components that were faster and slower in different iterations of her stylesheets.  One surprise was that her hillshade layer did not have significant performance impacts.  She then ran a memory profile.  She started exploring the memory output and noticing lots of spikes.  Things that stood out were POI labels and the line features from buildings.  Pedestrian paths were also standing out.  These were not supposed to display at the zoom level she had set and were not visible on the page, but they were still impacting performance.  She has several lessons.  
- 1. Lots of olittle things add up.  Point of interest labels while small, took a lot of memory as a group.  
- 2. Always set the mi zome for every layer.  Even if opacity is set to 0, it's not display, but still loaded into memory.  
- 3. Bring in building lines later so other components render first.  

She had big improvements.  The map was between 26 and 31 percent faster and used between 42 and 51% less memory.  

## Jason Taylor

Jason gave us an introduction to his longer talk he'll be giving at WAURISA and Maptime.  R is known as being a bit of an odd language.  Jason can't talk about R without talking about functional programming.  So, he needs to talk about Base R.  R does many things out of the box that Python and other languages require add-on libraries.  Data frames in R are a compilation of lists and vectors. The main types of vectors are Numerical, character and logical.  Vector subsetting allows for abstracting away looping components to perform operations against all the items in a vector.  Matricies are two-dimensional vectors.  Lists are containers that can store objects.   They are similar to lists in other langugages.  Unlike vectors, they can have elements of any length.  Data frames are tabular data structures.  Each column is a list item that must be the same length.  Subsetting a data frame is a lot like subsetting a list.  It's very common to interact with data frames by column name.  Adding and replacing columns are fairly intuitive operations.  Removing columns is a new feature, and Jason is very excited about it.  

Functions in R.  Functions are treated like any other data.  They can be assigned as varibales, be passed into functions, and be returned by other functions.  Functions can be anonymous.  R has a reputation of being slow.  This is because R objects are immutable.  Anytime you make a change to an R object, you're actually making a copy of it.  This can be slow for very large datasets.  There are vectorized operations that are highly performant pieces of code that can be applied to datasets and can recycle vectors.  Functionals are functions that take functions as arguments.  The Base R functions are part of the apply family and can be passed in with a vector to apply that function to every element in that vector.  This is used in place of a for loop.  Some of Jason's favorite functions are lapply, which takes a list or vector as an input and applies a function to each element of the list, sapply, which is the same as lapply, but tries to simplify the results to a vector or a list when it can, and mapply (Jason's favorite Apply).  It can take functions with two or more inputs and map variables to those outputs.  All of these tools can be applied to spatial data using geospatial dataframes.


## Peter Keum

Peter gave some tips for downloading and installing the new QGIS on Mac OS, which has been problematic and talked about some of the interesting work QGIS members are doing. He introduced Bob, a member whom has been working in Vietnam to develop curriculam teaching QGIS.  He is working on updating the curriculam for 3.x.  He is looking for volunteers to help edit some of the curriculam.
