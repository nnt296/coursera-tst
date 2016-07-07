
(function (window){
	var Jpeople = {};
	var speakWord = "Good Bye";
	Jpeople.speak = function (name) {
	  console.log(speakWord + " " + name);
	}
	window.Jpeople = Jpeople;
})(window);