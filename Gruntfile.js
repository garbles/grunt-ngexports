'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
      ],
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      }
    },

    ngExports: {
      dist: {
        options: {
          cwd: 'test/ouput'
        },
        files: {
          'test/output/ngExports.js': ['test/fixtures/**/*.js']
        }
      }
    },

  });

  grunt.loadTasks('tasks');
  grunt.registerTask('default', ['jshint', 'ngExports']);
};
