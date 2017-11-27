const fs = require('fs');
const util = require('util');

// 将fs中的readFile方法Promise化
const read = util.promisify(fs.readFile);

read('./promisefiy.js').then(data => {
    console.log(data.toString());
}).catch(ex => {
    console.log(ex);
})
