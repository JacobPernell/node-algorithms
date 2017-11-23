'use strict';

const fs = require('fs');
const http = require('http');
const port = process.argv[2] || 3000;

const server = http.createServer((req, res) => {
    const resData = {};

    if (req.url === '/' && req.method === 'GET') {
        resData.status = 200;
        resData.contentType = 'text/html';
        resData.data = fs.readFileSync(__dirname + '/dist/index.html').toString();
    }

    if (req.url === '/css/skeleton.css' && req.method === 'GET') {
        resData.status = 200;
        resData.contentType = 'text/css';
        resData.data = fs.readFileSync(__dirname + '/dist/css/skeleton.css').toString();
    }

    if (req.url === '/css/normalize.css' && req.method === 'GET') {
        resData.status = 200;
        resData.contentType = 'text/css';
        resData.data = fs.readFileSync(__dirname + '/dist/css/normalize.css').toString();
    }

    if (req.url === '/js/app.js' && req.method === 'GET') {
        resData.status = 200;
        resData.contentType = 'text/javascript';
        resData.data = fs.readFileSync(__dirname + '/dist/js/app.js').toString();
    }

    res.writeHead(resData.status || 404, {
        'Content-Type': resData.contentType || 'text/plain'
    });

    res.write(resData.data || 'not found');
    res.end();
})

server.listen(port, () => {
    console.log(`Listening at ${port}`);
})