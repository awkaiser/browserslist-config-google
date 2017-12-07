var browserslist = require('browserslist');

var browsers = require('../gdocs')

console.log('"extends browserlist-config-google/gdocs"\n')
console.log(browserslist(browsers).join('\n'))
