'use strict';

var path = require('path');

module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      all: {
        src: ['js/*.js']
      }
    },
    jshint: {
      files: ['js/*.js']
    },
    browserify: {
      dist: {
        src: ['js/*.js'],
        dest: '../js/<%= pkg.name%>-<%= pkg.version%>.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> v<%= pkg.version%> */\n'
      },
      dist: {
        files: {
          'js/<%= pkg.name %>-<%= pkg.version%>.min.js': ['js/<%= pkg.name%>-<%= pkg.version%>.js']
        }
      }
    },
    less: {
        options: {
          paths: ["less"]
        },
        src: {
            expand: true,
            cwd:    "less",
            src:    "main.less",
            dest:   "../css",
            ext:    ".css"
        }
    },
    watch: {
      scripts: {
        files: 'less/*.less',
        tasks: ['build-css'],
        options: {
          event: [ 'changed', 'added', 'deleted'],
        },
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  grunt.registerTask('lint', ['jshint']);
  grunt.registerTask('build-css',['less']);
  grunt.registerTask('build', ['clean','uglify','less']);
  grunt.registerTask('package', ['build']);
  grunt.registerTask('default', ['build-css']);
  grunt.registerTask('watcher', ['watch']);

};
