// "System requirements and browsers"
// https://support.google.com/docs/answer/2375082
//
// Google Drive, Docs, Sheets, Slides, and Forms work with
// the 2 most recent versions of the following browsers:
//
// Chrome
// Firefox
// Windows only: Internet Explorer, Microsoft Edge
// Mac only: Safari

// "Supported browsers for G Suite"
// https://support.google.com/a/answer/33864
var gSuiteDesktop = [
  'last 2 Chrome major versions', // Increased from "latest" to "latest two"
  'last 2 Firefox major versions',
  'last 2 Safari major versions',
  'last 2 Edge major versions', // Interpreted policy as "latest two"
  'ie 11' // https://www.microsoft.com/en-us/windowsforbusiness/end-of-ie-support
];

// "Updates to G Suite mobile apps"
// https://support.google.com/a/answer/6288871
var gSuiteMobile = [
  'last 3 Android major versions',
  'last 3 ChromeAndroid major versions',
  'last 2 iOS major versions'
];

var supportedBrowsers = gSuiteDesktop.concat(gSuiteMobile);

module.exports = supportedBrowsers;
