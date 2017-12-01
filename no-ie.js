var supportedBrowsers = require('./index')

supportedBrowsers.splice(supportedBrowsers.indexOf('ie 11'), 1)

module.exports = supportedBrowsers;
