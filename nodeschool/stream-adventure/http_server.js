if (process.argv[2]) {
	var through = require('through2'),
		http = require('http'),
		stream = through(function write(buffer, encoding, next) {
			this.push(buffer.toString().toUpperCase());
			next();
		}),
		server = http.createServer(function(request, response) {
			if (request.method === 'POST') {
				request
					.pipe(stream)
					.pipe(response)
			}
		});

	server.listen(process.argv[2]);
}

// hit echo hack the planet | curl -d@- http://localhost:3000 and see the response. it should be same string transformed to uppercase