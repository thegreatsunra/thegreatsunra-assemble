# thegreatsunra.com

Source code for [thegreatsunra.com](http://thegreatsunra.com), written using [Assemble](http://assemble.io), [Grunt](http://gruntjs.com), [LESS](http://lesscss.org) and [Bower](http://bower.io).

## Getting Started

* Install [Node](http://nodejs.org)

* Globally install [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/) by typing `sudo npm install -g grunt-cli bower` at the command line

* Fork, clone or download this repository

``` bash
git clone https://github.com/thegreatsunra/thegreatsunra-assemble.git
```

* Install the project's Node and Bower dependencies

``` bash
git clone https://github.com/thegreatsunra/thegreatsunra-assemble.git
cd thegreatsunra-assemble
npm install && bower install
```

* Type `grunt server` to generate the static site and start a local development server

* Open [http://localhost:9000](http://localhost:9000) in your web browser to view the static site (minus the content images, which are not included in the repository)

* Start hacking away by modifying the contents of the `src` directory

* With `grunt server` running, changes to any files (including layouts, templates, pages and LESS files) will be detected, and the static site will be automatically regenerated

* To understand what's going on behind the scenes, take a look at the `Gruntfile.js` file