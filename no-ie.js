var supportedBrowsers = require('./index');

module.exports = supportedBrowsers.filter(function(browser) {
  return !/ ie /i.test(browser);
});
