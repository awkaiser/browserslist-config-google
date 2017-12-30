// Last updated: December 2017

var supportedBrowsers = require('./no-ie')

module.exports = supportedBrowsers.map(function (browser) {
  return browser.replace(/\d/, 2)
});
