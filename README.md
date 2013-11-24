# thegreatsunra.com

Source code for [thegreatsunra.com](http://thegreatsunra.com), written using [Assemble](http://assemble.io), [Grunt](http://gruntjs.com), [LESS](http://lesscss.org) and [Bower](http://bower.io).

## Getting Started

1. Install [Node](http://nodejs.org)

1. Globally install [Grunt](http://gruntjs.com/) and [Bower](http://bower.io/) by typing `sudo npm install -g grunt-cli bower` at the command line

1. Fork, clone or download this repository

``` bash
git clone https://github.com/thegreatsunra/thegreatsunra-assemble.git
```

1. Install the project's Node and Bower dependencies

``` bash
git clone https://github.com/thegreatsunra/thegreatsunra-assemble.git
cd thegreatsunra-assemble
npm install && bower install
```

1. Type `grunt server` to generate the static site and start a local development server

1. [Open http://localhost:9000](http://localhost:9000) in your web browser to view the static site (minus the content images, which are not included in the repository)

1. Start hacking away by modifying the contents of the `src` directory. With `grunt server` running, changes to any files (including layouts, templates, pages and LESS files) will be detected, and the static site will be automatically regenerated.

1. To understand what's going on behind the scenes, take a look at the `Gruntfile.js` file