// Google browser support policies last checked: March 2021

// NOTE: CanIUse doesn't maintain data on older versions of ChromeAndroid
//       However, in recent years, Google aims to preserve feature parity
//       with desktop Chrome

// "Supported browsers for Google Workspace"
// https://support.google.com/a/answer/33864
var desktop = [
  'last 1 Chrome major versions',
  'last 2 Firefox major versions',
  'last 2 Safari major versions',
  'last 2 Edge major versions',
];

// "Updates to Google Workspace mobile apps"
// https://support.google.com/a/answer/6288871
var mobile = [
  'last 3 Android major versions',
  'last 3 ChromeAndroid major versions',
  'last 2 iOS major versions',
];

var supportedBrowsers = desktop.concat(mobile);

module.exports = supportedBrowsers;
