const {parse, format} = require('path');

const filePath = '/usr/local/node_modules/n/package.json';

const result = parse(filePath);

console.log(result); 
/**
* { root: '/',
dir: '/usr/local/node_modules/n',
base: 'package.json',
ext: '.json',
name: 'package' }
 */
console.log(format(result)); //   "/usr/local/node_modules/n/package.json"



