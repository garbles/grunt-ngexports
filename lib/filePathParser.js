var setComponent = require('./setComponent');

module.exports = function (filepath, options) {
  var path = require('path'),
    fp = path.relative(options.cwd, filepath),
    fpSplit = fp.split('/'),
    parentFolder = fpSplit[fpSplit.length - 2],
    kind = setComponent(parentFolder),
    requirePath = fp.slice(0, fp.length - 3);

  return {
    path: fp,
    kind: kind,
    require: requirePath
  };
};
