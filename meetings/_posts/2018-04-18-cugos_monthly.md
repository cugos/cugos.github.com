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

## Ryan Small -- Using a Chromebook for Real Stuff

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

## Sam Matthews -- Making a tile server

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
