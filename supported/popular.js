var browserslist = require('browserslist');

var browsers = require('../popular')

console.log('"extends browserlist-config-google/popular"\n')
console.log(browserslist(browsers).join('\n'))
console.log('\nhttp://browserl.ist/?q=' + encodeURIComponent(browsers.join(', ')))
