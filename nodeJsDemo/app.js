const http = require('http');
const chalk = require('chalk');
const path = require('path');
const conf = require('./config/defaultConfig');
const fs = require('fs');


const server =  http.createServer((req, res) => {
    // 将相对路径拼接成本地路径
    const filePath = path.join(conf.root, req.url);
    fs.stat(filePath, (err, status) => {
        if (err) {
            res.statusCode = 404;
            res.setHeader('Content-Type', 'text/plain');
            res.end(`${filePath} is not a directory or file`);
            return;
        }
        if (status.isFile()){
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            // 以stream的方式读取文件
            fs.createReadStream(filePath).pipe(res);
        } else if (status.isDirectory()) {
            // 读取文件夹
            fs.readdir(filePath, (err, files) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end(files.join(','));
            })
        }
    });
    
});
server.listen(conf.port, conf.hostname, () => {
   const addr = `http://${conf.hostname}:${conf.port}`;
   console.info(`server started at ${chalk.green(addr)}`);
});