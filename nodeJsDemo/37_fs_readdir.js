const fs = require('fs');

// 读取上层目录
// fs.readdir('../', (err, files) => {
//     if (err) throw err;
//     console.log(files);
// })

// 读取当前目录
fs.readdir('./', (err, files) => {
    if (err) throw err;
    console.log(files);
})


