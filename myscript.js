$(document).ready(function() {

$('form').submit(function() {
			event.preventDefault();
			var startNumber = +$("#number").val();
			fizzBuzz(startNumber);
				/*if (startNumber != Math.floor(startNumber)) {
					alert=("Whole numbers only");
				} */
			});		

var fizzBuzz= function(number) {
	
	for (var i = 0 ; i <= number; i++) {
			if (i % 3 === 0 && i % 5 == 0) {
				$(".result").append("<span> fizzbuzz!! </span>");
			} else if (i % 5 === 0) {
				$(".result").append("<span> buzz!! </span>");
			} else if (i % 3 == 0 ) {
				 $(".result").append("<span> fizz!! </span>");
			} else {
				$(".result").append("<span>  " + i + " </span>");
				}		
	}
}


    
});