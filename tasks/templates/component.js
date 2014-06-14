(function () {
  var component = require('./<%= require %>'),
    mod = angular.module('<%= path %>', []);

  Object.keys(component).forEach(function (name) {
    mod['<%= kind %>'](name, component[name]);
  });

  modules.push('<%= path %>');
}());
