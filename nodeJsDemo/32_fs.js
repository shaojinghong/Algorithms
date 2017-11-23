const fs = require('fs');

// 异步读取操作
// fs.readFile('./32_fs.js', 'utf8', (err, data) => {
//     if (err) throw err;

//     console.log(data);
// })

// 同步读取操作
const data = fs.readFileSync('./32_fs.js', 'utf8');
console.log(data);