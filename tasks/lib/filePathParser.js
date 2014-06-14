var path = require('path'),
  setComponent = require('./setComponent');

function requirePath (fp) {
  return fp.slice(0, fp.length - 3);
}

function kind (fp) {
  var fpSplit = fp.split('/'),
    parentFolder = fpSplit[fpSplit.length - 2];

  return setComponent(parentFolder);
}

module.exports = function (filepath, options) {
  var fp = path.relative(options.cwd, filepath);

  return {
    path: fp,
    kind: kind(fp),
    require: requirePath(fp)
  };
};
