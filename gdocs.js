// Google browser support policies last checked: January 2020

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
// To download the Google Docs, Sheets, and Slides apps, you'll need Android version 5.0 or up.
//
// iPhone & iPad:
// To use the latest Google Docs, Sheets, and Slides apps, you'll need iOS 11 or up.
//
// Google Maps JavaScript API has a similar policy:
// https://developers.google.com/maps/documentation/javascript/browsersupport

var supportedBrowsers = require('./index');

var gDocs = supportedBrowsers.slice(0);

// https://developer.chrome.com/multidevice/webview/overview
// Android 5.0 = Chromium 37
gDocs.push('ChromeAndroid >= 37');

// iOS 11+
gDocs.push('iOS >= 11');

module.exports = gDocs;
