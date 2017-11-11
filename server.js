'use strict';

(function() {
	const http = require('http');
	const fs = require('fs');
	const path = require('path');

	http.createServer((request, response) => {
		
		let filePath = '.' + request.url;
		if (filePath === './') {
			filePath = './dist/index.html';
		}

		let extentionType = path.extname(filePath);
		let contentType = 'text/html';

		switch (extentionType) {
			case '.js':
				contentType = 'text/javascript';
				break;
			case '.css':
				contentType = 'text/css';
				break;
		}

		//path.exists(filePath, function(exists) {
			//if (exists) {
				fs.readFile(filePath, function(error, content) {
					if (error) {
						response.writeHead(500);
						response.end();
					} else {
						response.writeHead(200, { 'Content-Type': contentType });
						response.end(content, 'utf-8');
					}
				});
			/*} else {
				response.writeHead(404);
				response.end();
			}
		});*/

	}).listen(8080);

	console.log('Server running on port 8080');
})();