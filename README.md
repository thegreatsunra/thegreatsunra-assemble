# thegreatsunra.com

Source code for [thegreatsunra.com](http://thegreatsunra.com), written using [Propeller](http://propellerjs.cpm).

* * *

# Propeller

Static site generator in [Assemble](http://assemble.io) and [Bootstrap 3](http://getbootstrap.com) using [Handlebars](http://handlebarsjs.com) templates, with additional support for [RequireJS](http://requirejs.org), [Knockout](http://knockoutjs.com), [Moment.js](http://momentjs.com), [D3](http://d3js.org) and CSV parsing.

## Getting started

1. Download and install [Node](http://nodejs.org)
1. At the command line install [Yeoman](http://yeoman.io), [Bower](http://bower.io) and [Grunt](http://gruntjs.com) globally by typing `sudo npm install -g yo bower grunt-cli`
1. Clone, download and unzip, or use [generator-propeller](http://github.com/thegreatsunra/generator-propeller) to create a new Propeller project

### Now you're ready to use Propeller

1. Open your new Propeller project at the command line
1. Type `npm install && bower install` to make sure all dependencies are installed
1. Type `grunt` at the command line to run the tasks to generate your static site, which will appear in a `/dist` folder in your project
1. Type `grunt serve` to start your development server. Propeller will monitor the files in the `/src` folder and update your static site whenever it detects changes
1. Open [http://localhost:9000](http://localhost:9000) in a web browser to view your site
1. Begin creating your site by modifying the files in the `/src` folder

## Additional Information

* Propeller uses [Assemble](http://assemble.io) and [Handlebars](http://handlebarsjs.com) as its templating engine
* When the server is running it monitors for file updates, and automatically regenerates the static files
* The server also monitors for changes to [LESS](http://lesscss.org) files, and automatically compiles them into static CSS files when updated

## Resources
* [propeller](http://propellerjs.com)
* [assemble](http://assemble.io)
* [yeoman](http://yeoman.io)
* [bower](http://bower.io)
* [grunt](http://gruntjs.com)

* * *

# License

## Attribution-NonCommercial-ShareAlike 3.0 Unported
(CC BY-NC-SA 3.0)
This is a human-readable summary of the [Legal Code (the full license)](http://creativecommons.org/licenses/by-nc-sa/3.0/legalcode).

### You are free:

* **to Share** — to copy, distribute and transmit the work
* **to Remix** — to adapt the work

### Under the following conditions:

* **Attribution** — You must attribute the work in the manner specified by the author or licensor (but not in any way that suggests that they endorse you or your use of the work).
* **Noncommercial** — You may not use this work for commercial purposes.
* **Share Alike** — If you alter, transform, or build upon this work, you may distribute the resulting work only under the same or similar license to this one.

### With the understanding that:

* **Waiver** — Any of the above conditions can be **waived** if you get permission from the copyright holder.
* Public Domain — Where the work or any of its elements is in the **public domain** under applicable law, that status is in no way affected by the license.
* Other Rights — In no way are any of the following rights affected by the license:
  * Your fair dealing or **fair use** rights, or other applicable copyright exceptions and limitations;
  * The author's **moral** rights;
  * Rights other persons may have either in the work itself or in how the work is used, such as **publicity** or privacy rights.

**Notice** — For any reuse or distribution, you must make clear to others the license terms of this work. The best way to do this is with a link to this web page.

