var q = require('q'),
	def = q.defer();

def.promise.then(null, function printError(err) {
	console.log(err.message);
});

setTimeout(def.reject, 300, new Error("REJECTED!"));