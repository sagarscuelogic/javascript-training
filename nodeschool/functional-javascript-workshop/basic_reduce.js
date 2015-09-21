function countWords (inputWords) {
	return inputWords.reduce(function(wordCountObject, word) {
		wordCountObject[word] = ++wordCountObject[word] || 1;
		return wordCountObject;
	}, {});
}

module.exports = countWords;