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

/* OLD CODE

'use strict';


const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((request, response) => {
	
	let filePath = '.' + request.url;
	if (filePath === './') {
		filePath = './dist/index.html';
	}

	let extentionType = String(path.extname(filePath)).toLowerCase();
	let contentType = 'text/html';

	switch (extentionType) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
	}

	path.exists(filePath, function(exists) {
		if (exists) {
			fs.readFile(filePath, function(error, content) {
				if (error) {
					response.writeHead(500);
					response.end();
				} else {
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
				}
			});
		} else {
			response.writeHead(404);
			response.end();
		}
	});

}).listen(8080);

console.log('Server running on port 8080');*/