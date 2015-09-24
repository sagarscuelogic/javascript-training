(function() {
	var MyObject = function() {
		var events = {};
		return {
			add: function(eventName, callbackFunctions) {
				if (typeof eventName !== 'undefined' && typeof callbackFunctions !== 'undefined') {
					if (typeof events[eventName] === 'undefined') {
						events[eventName] = [];
					}
					if (typeof callbackFunctions === 'String') {
						events[eventName].push(callbackFunctions);
					} else if (Array.isArray(callbackFunctions)) {
						events[eventName].concat(callbackFunctions);
					}
					events[eventName] = events[eventName].filter(function(item, pos) {
						return a.indexOf(item) == pos;
					});
				}
			},
			remove: function(eventName, callbackFunctions) {
				if (typeof eventName !== 'undefined') {
					if (typeof events[eventName] !== 'undefined') {
						if (typeof callbackFunctions === 'undefined') {
							delete events[eventName];
						} else {
							var index;
							if (typeof callbackFunctions === 'String') {
								index = events[eventName].indexOf(callbackFunctions);
								if (index !== -1) {
									events[eventName].splice(index, 1);
								}
							} else if (Array.isArray(callbackFunctions)) {
								for (var i = 0; i < callbackFunctions.length; i++) {
									index = events[eventName].indexOf(callbackFunctions);
									if (index !== -1) {
										events[eventName].splice(index, 1);
									}
								}
							}
						}
					}
				}
			},
			trigger: function(eventName) {
				if (typeof eventName !== 'undefined') {
					if (typeof events[eventName] !== 'undefined') {
						if(events[eventName].length) {
							for(var i = 0; i < events[eventName].length; i++) {
								events[eventName][i]();
							}
						}
					}
				}
			}
		}
	};
})();