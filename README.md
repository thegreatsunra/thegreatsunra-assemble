# thegreatsunra.com

Source code for [thegreatsunra.com](http://thegreatsunra.com), written using [Propeller](http://propellerjs.cpm).

* * *

# Propeller

Static site generator in [Assemble](http://assemble.io) and [Bootstrap 3](http://getbootstrap.com) using [Handlebars](http://handlebarsjs.com) templates, with additional support for [RequireJS](http://requirejs.org), [Knockout](http://knockoutjs.com), [Moment.js](http://momentjs.com), [D3](http://d3js.org) and CSV parsing.

## Quick Start

1. Download and install [Node](http://nodejs.org)
1. At the command line install [Bower](http://bower.io) and [Grunt](http://gruntjs.com)  globally by typing `sudo npm install -g bower grunt-cli`
1. Download and unzip (or clone) Propeller
1. Open the unzipped folder at the command line
1. Type `npm install && bower install` to install all dependencies
1. Type `grunt build` to generate the static site
1. Type `grunt` to start the development server and watch for changes
1. Open [http://localhost:9000](http://localhost:9000) in your web browser to view the site

## Additional Information

* Propeller uses [Assemble](http://assemble.io) and [Handlebars](http://handlebarsjs.com) as its templating engine
* When the server is running it monitors for file updates, and automatically regenerates the static files
* The server also monitors for changes to [LESS](http://lesscss.org) files, and automatically compiles them into static CSS files when updated
