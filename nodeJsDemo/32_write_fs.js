const fs = require('fs');

const content = Buffer.from('this is a goodboy');
fs.writeFile('./text', content, 'utf8', {
    encoding: 'utf8'
}, (err) => {
    if (err) throw err;

    console.log('done');
})