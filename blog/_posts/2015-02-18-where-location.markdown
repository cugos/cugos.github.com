---
title: "Where's my Location (Data)"
layout: post
tag: project
---

These notes were prepared for CUGOS meeting 02/18/2015 and were not peer reviewed by the author.

## Question
*Where am I when applications access my mobile location?*

## Data
* **who**: *which app*
* **when**: *timestamp*
* **what**: *location accessed*
* **where**: *known location*

## Possible Approaches

### Packet Sniffing
*tools*: [tcpdump](http://www.tcpdump.org/), [wireshark](https://www.wireshark.org/)

Root Android device and run tcpdump in the background to capture all data entering and leaving device. Isolate traffic with location data for analysis.

This is tcpdump running on my computer:
![tcpdump](/blog/images/tcpdump_output.png)

Long story short, one could capture a lot of data through this method, but it's messy and a lot of it is probably unreadable.

### System Logs
*breadcrumbs*: [logcat](http://developer.android.com/tools/help/logcat.html), [read and write logs](http://developer.android.com/tools/debugging/debugging-log.html), [log question](http://stackoverflow.com/questions/24475437/is-there-a-way-to-get-android-history-system-log)

Does Android's location manager log access events in the system log? I haven't been able to find a difiniive answer to this question yet and it requires a rooted device to find out what is actually there.

Seems really unlikely that the location manager would store all the information I want, even temporarily.

### Location API Hacking
*documentation*: [Location APIs](https://developer.android.com/google/play-services/location.html), [location and maps](http://developer.android.com/guide/topics/location/index.html), [com.google.android.gms.location](http://developer.android.com/reference/com/google/android/gms/location/package-summary.html)

Initial thought here: hack the OS (steep learning curve) to log required data when accessed. If this is possible, it seems like a clean way to capture the data points. 

After an informal conversation with a friend, this does not seem possible. [Google Services](https://developer.android.com/google/index.html), which is where Google puts its latest and greatest, is proprietary, not open source.

This could be easier if I switch to a version of Android that is open, but then I'd no longer be centered under Google's umbrella.

### Straight from the source
*portal*: [Location History](https://maps.google.com/locationhistory/b/1/?redirect=ulfe)

Now this is (kinda) what I'm talking about! If you have location reporting enabled on your device, Google collects lots of data and it's pretty accessible through this portal.

![location history](/blog/images/location_history.png)

I downloaded the last 30 days. The KML file had 17,470 timestamped points.

## Wrap Up
I'll probably run with the data from the portal for now to develop the questions/maps I can answer/make before getting deeper into collecting the full dataset. 

Open to suggestions.