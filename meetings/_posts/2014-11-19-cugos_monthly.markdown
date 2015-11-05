---
layout: meeting
title: November 19th 2014, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: November 19th CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---

##Loose agenda:
- **[Harrison Gill](http://aguaclara.cee.cornell.edu/)** - Harrison will give a short presentation on sustainable water treatment in developing countries using open design concept. Engineer team's goal was to create safe drinking water WHO standard with afforable plus low cost operating with zero patents (open source) water treatment plant. Talk covers the origins of the project and design philosophy then delve into some of the technical challenges. [Interactive data visualization](http://map.wash4all.org/)

- Mary Solbrig - Mary will speak on her master's thesis topic, Mathematical Aspect of Gerrymandering. Topic will probably be: Democrats tend to be clumped together in cities, Republicans are more spread out. Does this naturally bias elections towards the Republicans? How would we measure bias if this is true? Relies heavily on work by **[Jowei Chen and Jonathan Rodden](http://www-personal.umich.edu/~jowei/florida.pdf)**

- Jared Erickson and his 3rd grade daughter Claire will talk about Map Cubes.  We will teach you how to create them, where to find them, and how to make them from your custom maps.

- If there's time and interest [svmatthews](http://github.com/svmatthews) will **force** everybody to edit THIS cugos website and add themselves as a people on the cugos.org/people page. Bring your computer if you're interested!

- [aaronr](http://github.com/aaronr) will give a quick update on the "state of cugos"... i.e. banking etc.

- **[you!](http://github.com/cugos/cugos.github.com)** - we encourage anybody and everybody to participate and speak about geo-related projects they're working on or interested in.

##NOTES:

**[aaronr](http://github.com/aaronr)** non-profit/tax status is moving forward.

we switched banks, account details will not be posted here. we have a small coffer to be used for... we need to figure out how to distribute these funds.

going through first iteration of selecting officers in January or February. Aaron will drive process to elect some new people.


**[Mary Solbrig](https://github.com/msolbrig)** Detecting Gerrymandering... Mary did a masters in mathematics, switched around a bit, wound up with a great thesis advisor.

Her advisor sugested that she go for something that people could understand, gerrymandering.

How do you tell if gerrymandering has happend? That's a core question she seeks to answer. 

Gerrymandering is a standard measurement of bias in a voting population. It's in the constitution that representation is geographic. Each congressional district has to be the same number of people.

California has 53, South Dakota has 1. So how you draw the districts has a lot of influence on who actually gets elected.

You can double the number of seats you get by gerrymandering. So if dems have 30% of population they could potentially take 60% of the districts.

You can measure bias by comparing the % of the population that favors one group with the number of seats they actually win. You look at this over time.

It's not that simple though. The distribution of the population has its own patterns that reflect political preference. Does that mean you intentionally gerrymander to make things fair?

This problem is deeply rooted in the fact that districts and represntation are spatial by design.

The naive method is not perfect because geography itself has an influence on districting.

An alternative: generate randomized districts and measure the outcome based on how people in those random districts actually voted. 

Question from the audience about how the algorithm that generates random districts affects the outcome. Mary acknowledges it is complicated. Lots of questions from audience.

This is really complicated but it's pretty clear that the measure Marry suggests is more sophisticated by the alternative.

**[Jared & Claire Erickson](https://github.com/jericks)**

Claire, seven, has always wondered why Jared comes to CUGOS, which he's been doing since 2007.

So he told Claire if she helped with a project she could come. So here they are...

A while back they started making map cubes while Claire's younger sibbling slept. That seemed like a pretty great topic for the CUGOS folks.

Map Cubes are a paper craft that are a lot of fun. Gnomonic Projection shows all great circles as straight lines, which as Claire explains is why Map Cubes work.

You can do a lot of different shapes. You can do pyramids and other shapes. 

The first step is to print it on cardstock.

Then you have to cut them out... Dad says with safety scissors.

You have to fold it

Then you glue it with a glue stick. This is a hard part.

You can also do your own coloring if you use a blank template. They made a Death Star!!!

They wanted to figure out to make their own... Claire found some software from Nasa called g.projector, which makes it possible.

They found an astrogeology website that has extraterrestrial planet data. Claire chose Mercury.

Claire explains you open a file in g.projector and give it a name, then change the lat lon, then change the projection and change the background to white (so you don't waste ink)

Then you save it, change the width and height so you have space for tabs for gluing.

They wrote a groovy script to automatically add the tags. 

They then generated tiles in Tile Mill so they could create custom map styles for their Map Cube, they did this in groovy of course.

Claire likes the Stamen basemaps quite a bit.

This is a great exercise for kids because making maps is fun and you learn about projections, computers, coding, cartography, color ramps and presenting your work.

Jared is going to take Claire for ice cream tomorrow. Best co-presentation ever!

**[svmatthews](http://github.com/svmatthews)**

Sam is making a major plug for the CUGOS people page. There has been a lot of activity on that page recently, which is what we like to see.

A random audience member will potentially be added to the website at this point in time.

All of the people are in the people folder and all those  people is a post. Each individual is a single file. 

"Peter's title is his name" meaning name your file after yourself. We recommend using another person's file as a template and filling in your personal information.

For first timers, you'll have to make a pull request. Once you've made a few successful pull requests, we will add you to the repo and you can write.

We are adding Russ Frizzell Live during the meeting right now. Sam just copied Peter's content to Russ' file, now we're gonna take Peter out of the equation and throw Russ into it.

Maybe use [bboxfinder](http://bboxfinder.com/) when grabbing your coordinates.

And now, we're going to commit these changes and voila! Russ is on the people page.

Your turn.

**[aaronr](http://github.com/aaronr)** [UAV Talk](http://aaronr.github.io/uw-gisday-2014/#/)

Back on deck, woot woot.

Aaron is sharing the latest and greatest on his quadcopter, dense point cloud journey.

Aaron got started with UAVs and sfm when David Shean presented on the subject at CUGOS, so think about that right? Lot's of ideas being shared freely around here.

Everything is becoming really cheap and the processing capabilities are becoming so rich. You can do it all yourself from scratch, or you can buy really expensive fancy products, or you can grab cheap ready to fly equipment then hack it.

The lights are out now... SPUGOS!

Picked up a cheap digital camera (cannon so he can hack the firmware) to mount on the quad. He boots into the firmware, hits go and the hacked intervalometer fires an image every few seconds.

He also picked up a flytrex data logger that grabs a gps location every 250ms. You sync your camera and data logger clock and it makes sfm go way faster. The goal is to keep everything under 1000 bucks.

Battery life is a limiting factor. They essentially last for 10 minutes, so you need a lot of them. Switch em out fly back up.

He's adding a gimbal to the setup to control the pitch of the camera from the ground in flight. That way he can capture oblique images to get a more complete image set for processing. This should really increase the quality of point clouds.

Workflows: 
- panoramic image stitching. There are a few options out there for this work. Ice from microsoft and photoscan.
- Transform you panoramic image into something you can use for custom web maps. Lots of great FOSS tools in this workflow. Ultimately you create a tile set that is your data, then you can plug it into OSM or leaflet, you name it, you can do it.
- Structure from motion takes all the images and breaks the images down into distinctive features, then matches those features across images. Once matching is complete you have correlation between different images. The software then interpolates where those matches are in 3D space. Then you have your point cloud.

AgiSoft photoscan does the best stitching and point cloud creation but the professional license runs $3,500. Couple that with the fact that you can't fly UAVs for commercial use and the price is prohibitive for hobbyists.

The applications for this type of work are pretty much endless. 
 
[Open Drone Map](http://opendronemap.github.io/odm/) is a project that's focused on taking the backend of visualsfm and running it through its own pipeline on a server so you can break from running this type of thing on your personal computer.
 
Aaron shows a forward looking project done by crschmidt where he 3D printed a dense point cloud he constructed from sfm data. 
 
