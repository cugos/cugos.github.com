# Adding Your Profile

0. Create a GitHub Account<br/>
![join github](image/join_github.png)

0. Find the `cugos.github.com` repository<br/>
![cugos](image/cugos.png)

0. Fork the `cugos.github.com` repository<br/>
![fork it](image/fork_it.png)

0. When prompted, fork it to you<br/>
![fork it to you](image/fork_it_to_you.png)

0. You will be brought back to your forked repository page<br/>
![forked](image/forked_repo.png)

0. We want to add our profile to the `people` directory<br/>
![people](image/people.png)

0. Clone your forked repository<br/>
![clone_repo](image/clone_repo.png)<br/>
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

0. Create a new branch to add your profile<br/>
```bash
$ cd cugos.github.com/
$ git checkout -b add_my_profile
Switched to a new branch 'add_my_profile'
```

0. Go find the `people/_posts/` directory<br/>
```bash
$ cd people/_posts/
```

0. Copy the last persons profile and swap it out with your information. Use [bboxfinder](http://bboxfinder.com) to find your coordinates if necessary<br/>
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

0. `git` add the file to staging<br/>
```bash
$ git add 2015-06-20-first-last.mardown
```

0. `git` commit the file with a commit message<br/>
```bash
$ git commit -m "adding myself, because CUGOS rocks"
```

0. `git` push the change to your branch<br/>
```bash
$ git push origin add_my_profile # or whatever your branch name is 
```

0. Then go to GitHub and perform a PullRequest<br/>
```bash
$ git push origin add_my_profile # or whatever your branch name is 
```

0. Go drink a beer, you did a good job. And read up on the [git workflow](http://rogerdudler.github.io/git-guide/)
