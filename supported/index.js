var browserslist = require('browserslist');

var browsers = require('../index')

console.log('"extends browserlist-config-google"\n')
console.log(browserslist(browsers).join('\n'))
