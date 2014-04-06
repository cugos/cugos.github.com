cugos.github.com
================

The CUGOS website hosted on GitHub via Jekyll and GitPages

### Adding content

Check out [the wiki](https://github.com/cugos/cugos.github.com/wiki/Editing-The-Website) for details on how the website works and how to edit or add content.

### Running locally

The site can be run and previewed locally.

First cloning the repo using git:

    git clone git@github.com:cugos/cugos.github.com.git cugos_website

Then move into the newly created directory:

    cd cugos_website

You need `jekyll` and `rdiscount` installed to launch the site:

    sudo gem install jekyll rdiscount

Finally, run Jekyll's built-in server:

    jekyll serve

Now, open `http://localhost:4000` in your web browser and you should see a local version of the CUGOS site.