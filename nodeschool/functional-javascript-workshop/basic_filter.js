function getShortMessages (arrayOfObjects) {
	return arrayOfObjects.filter(function(object) {
		return object.message.length < 50 ? object.message : '';
	}).map(function(object) {
		return object.message;
	});
}

module.exports = getShortMessages;