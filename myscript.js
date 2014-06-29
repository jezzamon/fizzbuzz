$(document).ready(function() {
	
	$('#form').submit(function() {
		event.preventDefault();
		var startNumber = +$("#number").val();
		fizzBuzz(startNumber);
	});

	var fizzBuzz= function(number) {

		if (number >100) {
			alert("You must enter a number between 1 and 100");
		}
	
		for (var i = 0 ; i <= number; i++) {
			if (i % 3 === 0 && i % 5 === 0) {
				$(".result").append("<span> fizzbuzz!! </span>");
			} else if (i % 5 === 0) {
				$(".result").append("<span> buzz!! </span>");
			} else if (i % 3 === 0 ) {
				$(".result").append("<span> fizz!! </span>");
			} else {
				$(".result").append("<span>  " + i + " </span>");
			}
		}
	};

	$(document).on("click", "#reset", function() {
		$("span").remove();
	});
});