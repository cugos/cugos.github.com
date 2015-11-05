---
layout: meeting
title: December 17th 2014, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: December 17th CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---

##Loose agenda:
**Hackathon** - Below you will find proposed "hack" topics for the December meeting.  Since this meeting is so close to the holidays we are opting for a less formal meeting (no formal presentations) and instead are proposing a hands on "hack" session.  We will try to have "things to do" for all levels of experience, so bring your computer and a desire to learn and help others.  We will be meeting at the University of Washington in our normal meeting space which has plenty of room to break up into groups and hack in a comfortable setting.

If you have a hack idea you would like to add... please feel free to add it to this page before Wednesday!

Originally there was talk of focusing on PostGIS for this hack session, but that was not able to work out for this session.  We are still going to do a PostGIS workshop/hack session... but we are postponing that until sometime in the spring.

<hr>

** IDEA #1**

**The problem:**
There are few good/simple solutions for taking a set of images (like from a quadcopter with data logger attached) and getting an accurate geo-tagging of those photo’s in post processing.

**The specific work-flow:**
I have a FlyTrex data logger which sniffs the GPS packets from my quadcopter every 250ms and logs them into a proprietary binary file.  In order to get that data back out in something usable you have to upload the data to the FlyTrex website and download it back down as CSV. (**PROBLEM #1**… it is horrible to have to upload to their website)
After downloading that CSV you need to be able to calculate a time offset between your camera and the GPS clock. (**PROBLEM #2**… there is a work-flow for this… but it is pretty manual)
Finally once you have the GPS log, time offset and images you can march through and pull a GPS reading for each image (based on timestamp) and write the GPS data into the EXIF tags of the image. (**PROBLEM #3**… would be great if this was all integrated in one work-flow based tool)

**Goal:**
Write a single Python module that will complete this work-flow, while remaining extendable to expand to other logger formats etc.  The tool will be command line and have as few dependencies as possible.

**Where will we be starting from:**
So far I have a rough working hack to decode the binary FlyTrex format in python.  So I am close on PROBLEM #1… but it definitely needs some work.  I have not taken the step of doing things like writing EXIF data into the image files.

**Things people could learn:**

- We will set the project up on GitHub and collaborate via clone/fork... this is a great skill to learn!
- The base system has been setup using basic OptionParser for the CLI… and this could be a good thing for one sub-group to work on.
- I have started a binary decoder that is… well, interesting.  If you like looking at Hex codes and reverse engineering this would be a great thing for you to help work on!
- Writing EXIF data etc I have not done yet, but will be interesting.  It would be great if we can do it without using external libs like exiftool. Folks can dive into python, image manipulation etc.
- Writing some docs and tests
- Lots more!

So... we will probably break up into a couple of groups with specific tasks for the evening and hopefully be able to walk away as a group with a functional tool!  Again, all skill levels are welcome and bring your laptop.

If you want some things to look into before the meeting to get a head start:

- Git and GitHub: Create a github account, get comfortable cloning/branching a repo, and practice pushing changes to the repo.
- Python: Make sure your laptop has a functioning version of python and that you can open the interpreter as well as run local python scripts.

Hope to see folks on Wednesday for some fun hacking!!!

<hr>

- **2015 FOSS4G Seoul Stickers!** - Ryan Small just got a big box of stickers direct from Korea and he wants to share them with you!

- **Send Sam off to Code for America in style** - We will head out for beers after the meeting to help send off "Mappy Sam" as he heads off to Code for America in January!

- **[you!](http://github.com/cugos/cugos.github.com)** - we encourage anybody and everybody to participate and speak about geo-related projects they're working on or interested in.

##NOTES:

Notes are posted during the meeting.
