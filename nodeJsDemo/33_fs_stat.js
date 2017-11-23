const fs = require('fs');

fs.stat('33_fs_stat.fjs', (err, stats) => {
    if (err) {
        console.log('the file is not exsit');
        return;
    }
    console.log(stats.isFile()); // true
    console.log(stats.isDirectory()); // false
})