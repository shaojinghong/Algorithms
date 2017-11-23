const {basename, dirname, extname} = require('path');

const filePath = '/usr/local/bin/no.txt';

console.log(basename(filePath)); // base name  'no.txt'
console.log(dirname(filePath));  // 所在文件夹 '/usr/local/bin'
console.log(extname(filePath)); // 拓展名  '.txt'
