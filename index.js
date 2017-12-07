// Last updated: December 2017

// "Supported browsers for G Suite"
// https://support.google.com/a/answer/33864
var gSuiteDesktop = [
  'last 1 Chrome versions',
  'last 2 Firefox versions',
  'last 2 Safari versions',
  'last 2 Edge versions',
  'last 1 IE versions' // https://www.microsoft.com/en-us/windowsforbusiness/end-of-ie-support
];

// "Updates to G Suite mobile apps"
// https://support.google.com/a/answer/6288871
var gSuiteMobile = [
  'last 3 ChromeAndroid versions',
  'last 2 iOS versions'
];

var supportedBrowsers = gSuiteDesktop.concat(gSuiteMobile);

module.exports = supportedBrowsers;
