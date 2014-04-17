cugos.github.com version 2.0
============================

This is the development version of the to-be CUGOS updated site. If you are looking for the current, live version of the site you can take a look at the [master branch](https://github.com/cugos/cugos.github.com/tree/master).

If you would like to contribute to the development of the new site, you'll have to do a few things:

### Clone locally

`cd` to your working directory and `git clone -b cugos2.0 https://github.com/cugos/cugos.github.com.git`. This will clone the `cugos2.0` branch specifically!

Move into that directory via `cd cugos.github.com`

### Install necessary npm packages

Once you clone the site, you'll have to install the necessary npm package dependencies. Change to the `src` directory and run `npm install`, which will create the needed `node_modules` directory.

These packages will allow you to develop in the LESScss environment via the `*.less` files within the `src/less` directory. In order to compile any changes you can either run `grunt`, `grunt build-css`, or set a watcher to look for changes via `grunt watcher`

### Serve jekyll to view site

Within the `cugos.github.com` directory you can `jekyll serve` to view the compiled site at `localhost:4000` - you can also run `jekyll serve --watch` to make changes to files on the fly. If you add a new file you need ot re-run jekyll serve in order to recompile.

Boomsauce. Fork and be happy.

### TODO

* ~~Add newest version of bootstrap 3.1.1~~
* Remove uncessary scripts and styles that are most likely @sudobangbang hacks :)
* Branding
* Content architecture - mostly the same, but highlight active and show innactive (i.e. meetings vs. projects)
* Use github API to show recent projects from members
* Update 'people' page
* Showcase upcoming meeting more prominently
* develop meeting notes space a bit more systematically
