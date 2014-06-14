module.exports = function (str) {
  switch (str) {
    case 'factories':
      return 'factory';
    case 'config':
      return 'config';
    case 'run':
      return 'run';
    default:
      return str.slice(0, str.length - 1);
  }
};
