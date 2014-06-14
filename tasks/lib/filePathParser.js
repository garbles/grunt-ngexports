var path = require('path'),
  setComponent = require('./setComponent');

module.exports = function (filepath, options) {
  var fp = path.relative(options.cwd, filepath);

  function requirePath () {
    return fp.slice(0, fp.length - 3);
  }

  function kind () {
    var fpSplit = fp.split('/'),
      parentFolder = fpSplit[fpSplit.length - 2];

    return setComponent(parentFolder, options);
  }

  return {
    path: fp,
    kind: kind(),
    require: requirePath()
  };
};
