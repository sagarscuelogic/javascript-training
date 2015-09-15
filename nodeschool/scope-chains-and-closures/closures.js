function foo (argument) {
	var bar;
	quux = '123';
	function zip (argument) {
		var quux = '456';
		bar = true;
	}
	return zip;
}