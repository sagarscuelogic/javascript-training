var through = require('through2'),
	split = require('split'),
	lineCount = 0,
	stream = through(function write(buffer, encoding, next) {
		console.log(lineCount % 2 === 0 ? buffer.toString().toLowerCase() : buffer.toString().toUpperCase());
		lineCount++;
		next();
	});

process.stdin
	.pipe(split())
	.pipe(stream)
	.pipe(process.stdout);