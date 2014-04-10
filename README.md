cugos.github.com version 2.0
============================

This is the development version of the to-be CUGOS updated site. If you are looking for the current, live version of the site you can take a look at the [master branch](https://github.com/cugos/cugos.github.com/tree/master).

If you would like to contribute to the development of the new site, you'll have to do a few things:

### Clone locally

`cd` to your working directory and `git clone https://github.com/svmatthews/gruntless-starter.git`

Move into that directory via `cd cugos.github.com`

### Install necessary npm packages

If you cloned the website and it came with the `src/node_modules` directory full of stuff, you're probably good, but you may need to `npm install` within the `src` directory to get them all up and running. Takes a couple minutes.

These packages will allow you to develop in the LESScss environment via the `*.less` files within the `src/less` directory. In order to compile any changes you can either run `grunt`, `grunt build-css`, or set a watcher to look for changes via `grunt watcher`

### Serve jekyll to view site

Within the `cugos.github.com` directory you can `jekyll serve` to view the compiled site at `localhost:4000` - you can also run `jekyll serve --watch` to make changes to files on the fly. If you add a new file you need ot re-run jekyll serve in order to recompile.

Boomsauce. Fork and be happy.

### TODO

* [x] Add newest version of bootstrap 3.1.1
* [ ] Remove uncessary scripts and styles that are most likely @sudobangbang hacks :)
* [ ] Branding
* [ ] Content architecture - mostly the same, but highlight active and show innactive (i.e. meetings vs. projects)
* [ ] Use github API to show recent projects from members
* [ ] Update 'people' page
* [ ] Showcase upcoming meeting more prominently
* [ ] develop meeting notes space a bit more systematically