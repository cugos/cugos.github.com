# Adding Your Profile

* Create a GitHub Account
![join github](image/join_github.png)

* Find the `cugos.github.com` repository
![cugos](image/cugos.png)

* Fork the `cugos.github.com` repository
![fork it](image/fork_it.png)

* When prompted, fork it to you
![fork it to you](image/fork_it_to_you.png)

* You will be brought back to your forked repository page
![forked](image/forked_repo.png)

* We want to add our profile to the `people` directory
![people](image/people.png)

* Clone your forked repository
![clone_repo](image/clone_repo.png)

```bash
$ Git clone git@github.com:thebigspoon/cugos.github.com.git
Cloning into 'cugos.github.com'...
remote: Counting objects: 4148, done.
remote: Compressing objects: 100% (64/64), done.
remote: Total 4148 (delta 29), reused 0 (delta 0), pack-reused 4084
Receiving objects: 100% (4148/4148), 35.26 MiB | 4.93 MiB/s, done.
Resolving deltas: 100% (2337/2337), done.
Checking connectivity... done.
```

* Create a new branch to add your profile

```bash
$ cd cugos.github.com/
$ git checkout -b add_my_profile
Switched to a new branch 'add_my_profile'
```bash

* Go find the `people/_posts/` directory
```bash
$ cd people/_posts/
```

* Copy the last persons profile and swap it out with your information. Use [bboxfinder](http://bboxfinder.com) to find your coordinates if necessary.
```bash
$ cp 2015-06-19-aaron-racicot.markdown 2015-06-20-first-last.mardown
---
 
title: < your name >
category: people
lng: < your lng >
lat: < your lat >
image:  < your img >
github: < your github username >
twitter: < your twitter username >
permalink: /people/< your name >
excerpt: < your description >
---
```

* `git` add the file to staging
```bash
$ git add 2015-06-20-first-last.mardown
```

* `git` commit the file with a commit message
```bash
$ git commit -m "adding myself, because CUGOS rocks"
```

* `git` push the change to your branch
```bash
$ git push origin add_my_profile # or whatever your branch name is 
```

* Then go to GitHub and perform a PullRequest
```bash
$ git push origin add_my_profile # or whatever your branch name is 
```

* Go drink a beer, you did a good job. And read up on the [git workflow](http://rogerdudler.github.io/git-guide/)
