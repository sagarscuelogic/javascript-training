function reduce(arr, fn, initial) {

}

module.exports = reduce;

return inputWords.reduce(function(wordCountObject, word) {
	wordCountObject[word] = ++wordCountObject[word] || 1;
	return wordCountObject;
}, {});