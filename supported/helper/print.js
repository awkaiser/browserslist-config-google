var browserslist = require('browserslist');

module.exports = function(preset, browsers) {
  console.log(
    '"extends browserlist-config-google' +
      (preset ? '/' + preset : '') +
      '"\n\n' +
      browserslist(browsers).join('\n') +
      '\n\nhttp://browserl.ist/?q=' +
      encodeURIComponent(browsers.join(', '))
  );
};
