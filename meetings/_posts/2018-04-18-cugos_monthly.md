---
layout: meeting
title: April 18th, 2018, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: April 18 2018 CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---


## Agenda
- **[Roger Andre](https://lagerratrobe.github.io/blog/)** and **[Ryan Small](https://github.com/foundatron)** will show you the ins and outs of developing on a Chromebook, locally and remotely.
- **[Sam Matthews](https://github.com/mapsam)** - a quick runthrough of a small experiment generating vector tiles on the fly and saving to a cache [github.com/mapsam/get-or-tile](https://github.com/mapsam/get-or-tile)
- **[Christy Heaton](https://github.com/christyheaton)** - will talk about her adventures making maps in Jupyter Notebooks
- **[Stephen Mangum](https://github.com/maneaba)** - will present a vector tile map of King County.
- **[Peter Keum](http://pkgeo.com/)** If there's enough time at the end of this meeting, I can share my "drone talk" and I promise to drone on about my "drone" work.
- **[Ariel Kadouri](https://github.com/akadouri)** - If there's still enough time, I will solicit volunteers/mentors for the [UW MapHacks Geography Hackathon](https://maphacks.github.io/) on April 28th/29th.
- **[@you](http://cugos.org/people/)** tell us about something cool you are working on


## UW Event Wifi

```
UW NetID:     event0142
Password:     p3L7/u7C9/q8T5
```

## Meeting Notes

## [Ryan Small](https://media.giphy.com/media/AuQm5kCePSfiE/giphy.gif) -- Using a Chromebook for Real Stuff

He uses a Chromebook and also an old busted laptop. His company is based in Amsterdam, so he winds up spending most of his time working on remote machines (ie servers somewhere in the cloud). He's gonna tell us how he makes the Chromebook work for him.

Some good things... Cheap, easy to reset, security, familiar, chrome developer tools. Say you're a CIA director going to North Korea for the weekend, you can power-wash your Chromebook before you go through security and they got nothin. Google has everything though, so think about that.

Did he say cheap? Samsung + is four hundred bucks. 1080p. 200 up to 1000.

Things that Ryan does with his Chrombook...

Vanilla SSH with Secure Shell in Chrome itself. It'll setup a fs mount so you can move files on/off the remote machine. Actually, the files are linked in memory, so you can see them, but they aren't physically on your laptop.

If you need an IDE, check out AWS Cloud9. It works pretty well as an IDE. Give it a shot.

As long as your work is somewhere else, you can get a lot done. Give Ryan a nice keyboard on one that doesn't cost $1000.


## Roger Andre

Slightly different use case. Roger is taking some classes, so he likes to work locally with github access and some local files.

Roger has a Google Pixel (2015). Prices range from $34-$1000. You can probably get something pretty decent for $200-$600.

Use a Chromebook for cost. You can get a pretty good machine for cheap. Use a Chromebook for security/reliability. You can restore a machine if you wreck your environment.

Why would you develop locally? No internet, security, speed. The downside is there is very little storage.

You can do web development really easily. Python, R, Go, Jupyter notebooks. If you can run it from a commandline, you can probably use it here.

Anything that runs its own windowing application won't run on this. You can't run R natively in Jupyter. And you can't do x-forwarding or SSH. So, that's kind of a downside. You can't use VLC, Gimp or QGIS. That's a bummer but not a deal breaker.

To get Jupyter running, kick it into developer mode (escape key + refresh -- really easy to reset the machine), install Secure Shell app to run a proper terminal by connecting to your internal shell within your machine, install Chromebrew package manager with curl and the install.sh script, install R with Chromebrew. Boom.

To work with R, you can run an interactive shell. You could also try Rscript, which let's you execute a script in this environment.

Run Jupyter. Download and install Anaconda. Tell the installer to put it somewhere in your home directory. Don't let it update your path for you. It'll ruin everything. Use conda to install Jupyter. Then you can run a local service that you access through your browser.

## Sam Matthews -- [Making a tile server](https://gist.github.com/mapsam/21c5da1d14e349c0d6e026cc55be9e3a)

Sam's been a deadbeat and hasn't presented in a minute. He's gonna make it up to everyone by showing us how to build and run a basic tileserver. Three pieces. Serving. Returning. Creating. Caching. However, this isn't a suggested architecture.

Built with node.js with express.js, mapnik, local filesystem and mapbox-gl-js for map-rendering.

When you go to load a web map on a website... We want to load specific sources. Then mapbox-gl-js is going to make a request to wherever you said those tiles live. Then your browser gets a response back in the form of a buffer (data). Then your browser renders that data.

When the tile server recieves a request, it checks to see if the tile already exists. If it doesn't, then the server loads the data needed to generate the tile, then the server generates the tile, saves it to the cache and presumably sends it back to the client.

Check out the project from [mapsam](https://github.com/mapsam/get-or-tile). The repo has a nice readme that describes how to run it locally.

When you load the page, this line tells it where your tile server is running [index.html#L32](https://github.com/mapsam/get-or-tile/blob/master/viz/index.html#L32). The browser is making requests.

Meanwhile, over on the server, we're routing these requests to this codepath: [index.js#L24](https://github.com/mapsam/get-or-tile/blob/master/index.js#L24). [getTile](https://github.com/mapsam/get-or-tile/blob/master/index.js#L45-L64) checks the local file cache (z/x/y file directory structure). If we don't file the tile there, we try to generate the tile over at [generateTile](https://github.com/mapsam/get-or-tile/blob/master/index.js#L66-L92) which reads the source data and uses mapnik to generate the tile. Then we return the tile and save it to the cache.

The browser gets a tile no matter what. It gets it really fast if it's in the cache and slower if it has to generate it on the fly.

Sam added a bunch of logging, so take a look if you want a better idea of what's going on. When you refresh the page (after browsing around), the logs will contain a lot more gets, until you start looking at areas outside of the cache.

Hit http://69.91.158.123:8000/ to see this in action.

This isn't how you'd do it to scale. You'd want to use tilers (geojson-vt, postgis), caches (s3, databases) and lots of vector tile servers. For example, big data sources will crush this local server. How do we invalidate the cache? For example, you could include a version in your tile path.


## Christy Heaton --

Giving a tutorial at PyCon 2018, woot woot! Intro to Spatial Analysis and Maps with Python. Python is a general purpose programming language. It's free and open source and it can do a lot of different things. Including GIS.

Geopandas is an open source project to make using geo data in Python as easy as possible. It pulls in a lot of powerful tools.

Conda is a package management system for Python. This will save you a lot of time and energy. Comes with a lot of packages. Miniconda doesn't have any data science packages installed with it, so that's quick if you don't want a lot of bells and whistles.

Jypyter Notebooks -- an open source web application that lets you create and share documents that contain live code, equations, visualizations and narrative text. They are everywhere.

Why would we want to do GIS in a Jupyter Notebook? It's compact and reproducible. Easy to demo. Easy to customize and change. Easy to share with anyone, you don't need to be technical.

Check out Christy's presentation for Maptime -- [Maptime_20180411](https://github.com/christyheaton/Maptime_20180411). This project shows you everything you need to know to get Jupyter up and running locally.

Notebooks are composed of cells. They can be markdown or they can be code. It's super easy to execute a cell. You can also move them around. It doesn't matter what over the cells are arranged, the only thing that matters is the order in which they run. Watch out for that.

You can download notebooks into html files, or into slide shows. Did she mention the slideshow export is really awesome?

But, what can you do with maps? Turns out pretty thing you can do with Python, you can do with Jupyter. It really doesn't take a lot of code to plot with Geopandas in Jupyter. Really, everything you can do with Geopandas (coordinate reference systems anyone?) you can do in a browser with Jupyter, checkout the [DEMO](https://github.com/christyheaton/Maptime_20180411/blob/master/Notebook/01_Geopandas_Intro_Maptime_20180411.ipynb).

If you like eclipses, checkout this [notebook](https://github.com/christyheaton/Maptime_20180411/blob/master/Notebook/02_Geopandas_Advanced_Maptime_20180411.ipynb)! This notebook let's make a basemap with all of the eclipse paths. Pretty slick. You can also plot cities to figure out which cities are in the path of the eclipse. You can change the extent of your map and the styling to get a better view of the eclipse you're interested in. This is really cool.

The grand finale, you can turn your awesome eclipse map into a slippy map, all in the notebook!
