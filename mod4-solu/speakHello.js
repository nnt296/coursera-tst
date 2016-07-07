(function (window){
	var notJpeople = {};
	var speakWord = "Hello";
	notJpeople.speak = function(name) {
	  console.log(speakWord + " " + name);
	}
	window.notJpeople = notJpeople;
})(window);