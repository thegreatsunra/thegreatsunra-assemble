module.exports = function(grunt) {

  'use strict';
  require('time-grunt')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* define variables for Gruntfile */
    config: {
      src: 'src',
      dest: 'dist',
      assetsFolder: 'public',
      componentsFolder: 'components',
      jsFolder: 'javascripts',
      jsMainFile: 'application',
      cssFolder: 'stylesheets',
      cssMainFile: 'screen',
      imgFolder: 'images'
    },

    /* concat all javascripts into a single file */
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: ['<%= config.src %>/<%= config.jsFolder %>/**/*.js'],
        dest: '<%= config.dest %>/<%= config.jsFolder %>/<%= config.jsMainFile %>.js'
      }
    },

    /* compress concatenated javascripts */
    uglify: {
      options: {
        banner: '/*! <%= config.jsMainFile %>.js (generated <%= grunt.template.today("dd-mm-yyyy") %>) */\n'
      },
      dist: {
        files: {
          '<%= config.dest %>/<%= config.jsFolder %>/<%= config.jsMainFile %>.min.js': ['<%= concat.dist.dest %>']
        }
      }
    },

    /* run jshint against all javascripts, including Gruntfile */
    jshint: {
      files: ['Gruntfile.js', '<%= config.src %>/<%= config.jsFolder %>/**/*.js']
    },

    /* copy static assets into root of destination */
    copy: {
      assets: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/<%= config.assetsFolder %>',
            src: '**',
            dest: '<%= config.dest %>/',
            dot: true
          }
        ]
      },
      /* copy bower components as well */
      components: {
        files: [
          {
            expand: true,
            cwd: '<%= config.src %>/<%= config.componentsFolder %>',
            src: '**',
            dest: '<%= config.dest %>/<%= config.componentsFolder %>',
            dot: true
          }
        ]
      }
    },

    /* clean out destination folder by brute force */
    clean: {
      main: ["<%= config.dest %>/**/*"],
    },

    /* compile LESS manifest file into CSS */
    less: {
      development: {
        options: {
          compress: false
        },
        files: {
          "<%= config.dest %>/<%= config.cssFolder %>/<%= config.cssMainFile %>.css": "<%= config.src %>/<%= config.cssFolder %>/<%= config.cssMainFile %>.less"
        }
      },
      production: {
        options: {
          compress: true
        },
        files: {
          "<%= config.dest %>/<%= config.cssFolder %>/<%= config.cssMainFile %>.min.css": "<%= config.src %>/<%= config.cssFolder %>/<%= config.cssMainFile %>.less"
        }
      }
    },

    /* Use Assemble to generate all HTML pages */
    assemble: {
      pages: {
        options: {
          flatten: true,
          layout: '<%= config.src %>/assemble/layouts/default.hbs',
          data: '<%= config.src %>/assemble/data/*.{json,yml}',
          partials: '<%= config.src %>/assemble/partials/*.hbs'
        },
        files: {
          '<%= config.dest %>/': ['<%= config.src %>/assemble/pages/*.hbs']
        }
      },
      portfolio: {
        options: {
          flatten: true,
          layout: '<%= config.src %>/assemble/layouts/default.hbs',
          data: '<%= config.src %>/assemble/data/*.{json,yml}',
          partials: '<%= config.src %>/assemble/partials/*.hbs'
        },
        files: {
          '<%= config.dest %>/portfolio/': ['<%= config.src %>/assemble/pages/portfolio/*.hbs']
        }
      }
    },

    /* watch for file changes and run tasks in response */
    watch: {
      js: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint', 'concat', 'uglify']
      },
      assemble: {
        files: ['<%= config.src %>/assemble/**/*.{hbs,yml}'],
        tasks: ['assemble']
      },
      less: {
        files: ['<%= config.src %>/<%= cssFolder %>/**/*.{css,less}'],
        tasks: ['less']
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= config.dist %>/{,*/}*.html',
          '<%= config.dist %>/assets/{,*/}*.css',
          '<%= config.dist %>/assets/{,*/}*.js',
          '<%= config.dist %>/assets/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

  });

  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.registerTask('default', [
    'clean', 
    'less', 
    'assemble', 
    'jshint', 
    'concat', 
    'uglify', 
    'copy'
  ]);

};
