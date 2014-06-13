/*
 * ngExports
 *
 *
 * Copyright (c) 2014 Gabe Scholz
 * Licensed under the MIT license.
 */

'use strict';

var filePathParser = require('../lib/filePathParser');

module.exports = function (grunt) {
  var componentTpl = grunt.file.read(__dirname + '/../templates/component.js'),
    prefix = grunt.file.read(__dirname + '/../templates/prefix.js'),
    suffix = grunt.file.read(__dirname + '/../templates/suffix.js');

  grunt.registerMultiTask('ngExports',
  'Generates nodified-AngularJS files for your browserified-ready application',
  function () {
    var options = this.options({
      cwd: '/'
    });

    this.files.forEach(function (file) {

      var src = file.src
        .map(function (filepath) {
          return filePathParser(filepath, options);
        }).map(function (file) {
          return grunt.template.process(componentTpl, { data: file });
        }).join('');

      grunt.file.write(file.dest, prefix + src + suffix);
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });
};
