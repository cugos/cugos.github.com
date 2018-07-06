---
layout: meeting
title: July 19th, 2017, 6pm - Anderson Hall, UW
location: University of Washington
address: UW Anderson Hall, Forest Club room 207
time: 6:00pm
excerpt: July 19th 2017 CUGOS Monthly Meeting
lat: 47.651737
lng: -122.307540
category: meetings
notes: It's the room with the elk in it.
---


## Agenda

- Dirck Schou and Kelly Malone from [Taqtile](http://taqtile.com/) will join us to discuss the state of the art, and talk about what can be done on these amazing new platforms.
-"Local company Taqtile has been very active in the emerging technologies of augmented and virtual reality. As a finalist for Microsoft Public Sector Partner of the Year, Taqtile is one of the original members of the newly re-named Microsoft Mixed Reality Partner Program, and has been building applications for HoloLens, and other augmented and virtual reality (xR) platforms for over 2 years.  Taqtile's publicly available HoloMaps application for HoloLens, and the recently launched Manifest for knowledge capture, learning and doing platform, show the near future of digital transformation, and how mixed reality will impact many areas of the workplace."

- **[@you](http://cugos.org/people/)** tell us about what you're trying to solve.


## Notes

**[Dirck T. Schou Jr.](http://taqtile.com/)**

Taqtile is a company of 100 that started building mobile aps for big companies back in 2011. The whole industry has come a long way since then. Location was a focus for them early on and continues to be a critical way to engage with people. Check out TQ1.

Started working with Microsoft in 2014. A little after that, they got brought in to work on HoloLens. VR is fully immersive computer strapped to your face. Mixed reality is overlaying the world with additional information. AR is mixed reality light.

Less than 1/2 of a percent of all data is ever used or analyzed. One thing we can do with the data. HoloLens adds another dimension to data. Lots of examples of holograms in films and popular culture.

Holograms are simpler than VR in some ways because you don't have to represent to other people in the space. It can be very natural.

Bunch of examples pulled from work they did for the PGA Tour/Real Madrid. Bunch of data layers displayed on the surface. Data on a hologram, synchronized with the real world.

5 different layers in holomaps. Bing, Esri, VirtualEarth, Mapbox. They have the ability to bring in a bunch of models/map formats (if it can be read by unity). They can add a lot of custom overlays to the maps too.

They use Unity (OBJ and FBX formats) to render the data. Sounds like they do some of this on the fly.

Lots going on here, gotta get them back for a demo!

**Kellen**

Machine Learning application with a geo component. Utilize data (sat and survey data) to apply deep learning techniques.

Accurate data in developing countries is very scarce. So there's not a lot of data. Which hinders our ability to study those areas and help people.

There's a novel m/l technique that extracts economic data from satellite imagery. The approach was validated on 5 countries for which there are georeferenced survey data.

Satellite data is very unstructured, but you can collect it from space, and it can be really high resolution. Our application has a very small labeled dataset (imagery with survey data).

Transfer learning is a technique that takes an existing model (trained on some detailed and rich data set). These models have already been trained. So you can get it. See ImageNet. Keras is deep learning library.

The data in ImageNet is all object centric. So the model is better at objects than satellite imagery.

Our data. Night (NOAA) and day (Google) satellite imagery for Rwanda. Then we have survey data from an international org (DHS).

There's a bit of correlation between wealth and night lights but night lights definitely are not enough to predict wealth. Add in daylight and results get better.
