var browserslist = require('browserslist');

var browsers = require('../no-ie')

console.log('"extends browserlist-config-google/no-ie"\n')
console.log(browserslist(browsers).join('\n'))
console.log('\nhttp://browserl.ist/?q=' + encodeURIComponent(browsers.join(', ')))
