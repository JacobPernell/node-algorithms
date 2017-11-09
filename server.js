'use strict';

(function() {
	const http = require('http');
	const fs = require('fs');

	http.createServer((request, response) => {
		fs.readFile('./dist/index.html', function(error, content) {
			if (error) {
				response.writeHead(500);
				response.end();
			} else {
				response.writeHead(200, {'Content-Type': 'text/plain'});
				response.end(content, 'utf-8');
			}
		})
	}).listen(8080);

	console.log('Server running on port 8080');
})();