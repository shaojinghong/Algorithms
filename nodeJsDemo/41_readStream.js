const fs = require('fs');

const rs = fs.createReadStream('./41_readStream.js');

rs.pipe(process.stdout);