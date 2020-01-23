// Google browser support policies last checked: January 2020

// NOTE: CanIUse doesn't maintain data on older versions of ChromeAndroid
//       However, in recent years, Google aims to preserve feature parity with desktop Chrome

// "Supported browsers for G Suite"
// https://support.google.com/a/answer/33864
var gSuiteDesktop = [
  'last 3 Chrome major versions', // Coverage for desktop & mobile Chrome
  'last 2 Firefox major versions',
  'last 2 Safari major versions',
  'last 2 Edge major versions',
  'last 1 IE major versions' // https://www.microsoft.com/en-us/windowsforbusiness/end-of-ie-support
];

// "Updates to G Suite mobile apps"
// https://support.google.com/a/answer/6288871
var gSuiteMobile = [
  'last 3 ChromeAndroid major versions',
  'last 2 iOS major versions'
];

var supportedBrowsers = gSuiteDesktop.concat(gSuiteMobile);

module.exports = supportedBrowsers;
