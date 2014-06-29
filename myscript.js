$(document).ready(function() {
	
	// Event handler for submitting the form (e.g. clicking the submit button).
	$('#form').submit(function() {
		// By default form submission refreshes the page.
		event.preventDefault();
		// Grab the starting number from the form input.
		var startNumber = +$("#number").val();
		fizzBuzz(startNumber);
	});

	// Function to determine how to treat each number.
	var fizzBuzz= function(number) {

		// Send an alert fizzBuzz is called with a number over 100.
		// Does this error checking belong inside this function?
		// If so, looks like we may want an else clause here.
		if (number >100) {
			alert("You must enter a number between 1 and 100");
		}
		
		// The meat of the fizzBuzz function.
		// Looks good, but you might notice that the game always prints "fizzbuzz"
		// for the first number.  Why do you think that is?
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

	// Event handler for clicking the reset button.
	// This function removes *all* spans from the document.  Is that what you want?
	$(document).on("click", "#reset", function() {
		$("span").remove();
	});
});