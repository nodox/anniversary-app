// Gruntfile.js
module.exports = function(grunt) {


  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);


  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['public/js/**/*.js']
    },

    // configure nodemon
    nodemon: {
      dev: {
        script: 'server.js',
      }
    },
    wiredep: {
      task: {
        src: ['public/index.html']
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      gruntfile: {
        files: ['Gruntfile.js']
      },
      css: {
        files: ['public/css/*.css'],
        tasks: [],
      },
      js: {
        files: ['public/**/*.js'],
        tasks: ['jshint']
      },
      html: {
        files: ['public/*.html', 'public/views/*.html'],
        tasks: []
      }
    },

    // run watch and nodemon at the same time
    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      tasks: ['nodemon', 'watch']
    }   

  });



  grunt.registerTask('default', [ 
    'concurrent'
  ]);  

};