function Spy(target, method) {
	var originalFunction = target[method],
		result = {
			count: 0
		};

	target[method] = function() {
		result.count++;
		return originalFunction.apply(this, arguments);
	};

	return result;
}

module.exports = Spy;