# ngExports

> Generates nodified-AngularJS files for your browserified-ready application

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-ngexports --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('ngExports');
```

### Overview

A Grunt plugin I wrote so that I could learn some Grunt. Save some key strokes. Add a bit of opinionation on folder structure.
Use this in conjunction with browserify and go from this:

```js
angular.module('app', ['ui.router', 'indexController', 'gabeService']);

angular.module('indexController', [])
.controller('IndexCtrl', function ($scope, gabe) {
  $scope.name = gabe.name;
});

angular.module('gabeService', [])
.service('gabe', function () {
  this.name = 'Gabe!';
});
```

to this!

```js
// main.js
var ngExports = require('./ngExports')
ngExports('app', [require('ui.router')]);

// /controllers/index.js
exports.IndexCtrl = function ($scope, gabe) {
  $scope.name = gabe.name;
};

// /services/gabe.js
exports.gabe = function () {
  this.name = 'Gabe!';
};
```

Module declaration be gone! The module names for each component are the relative file names.
For example, the module for `IndexCtrl` is then `controllers/index.js`. This makes isolated unit testing easy to setup
(though the module names now become coupled to their folder location).

### Config-ish

```js
grunt.initConfig({
  ngExports: {
    options: {
      cwd: 'public/scripts'
    },
    files: {
      'public/scripts/ngExports.js': ['public/scripts/**/*.js', '!public/scripts/main.js'],
    },
  },
})
```

## License
Copyright (c) 2014 Gabe Scholz. Licensed under the MIT license.
