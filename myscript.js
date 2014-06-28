$(document).ready(function() {

for (var i = 0 ; i <= 100; i++) {
	$(".result").append("<span> the number " + i + "</span><br>");
	console.log(i);
	if (i % 3 === 0) {
			console.log("fizz!");
			$(".result").append("<span> fizz!! </span>");
		}
		if (i % 5 === 0) {
			console.log("buzz!");
			$(".result").append("<span> buzz!! </span>");
	}
		if (i % 3 === 0) {
			if (i % 5 === 0) {
				console.log("fizzbuzz!");
			$(".result").append("<span> fizzbuzz!! </span>")
			}
		}
	}
		
});