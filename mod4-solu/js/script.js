(function (window){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var i=0; i<names.length;i++) {
		var firstLetter = names[i][0];
	  if (firstLetter === "J" || firstLetter.toLowerCase() === "j") {
	    Jpeople.speak(names[i]);
	  } else {
	    notJpeople.speak(names[i]);
	  }
	}
})(window);