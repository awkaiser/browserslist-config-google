// Last updated: December 2017

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
//
// Android:
// To download the Google Drive, Docs, Sheets, and Slides apps, you'll need Android version 4.4 or up.
//
// iPhone & iPad:
// To use the latest Google Drive, Docs, Sheets, and Slides apps, you'll need iOS 9.0 or up.
//
// Google Maps JavaScript API has a similar policy:
// https://developers.google.com/maps/documentation/javascript/browsersupport

var supportedBrowsers = require('./index')

var gDocs = supportedBrowsers.filter(function (browser) {
  return !(/( ChromeAndroid | iOS )/i.test(browser))
}).map(function (browser) {
  return browser.replace(' 1 ', ' 2 ')
});

// https://developer.chrome.com/multidevice/webview/overview
// Android 4.4 = Chromium 30
gDocs.push('ChromeAndroid >= 30');

// iOS 9.0+
gDocs.push('iOS >= 9');

module.exports = gDocs
