(function () {
  var component = require('./<%= require %>'),
    name = Object.keys(component)[0],
    mod = angular.module('<%= path %>', []);

  mod['<%= kind %>'](name, component[name]);
  modules.push('<%= path %>');
}());
