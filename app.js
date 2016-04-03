$(document).ready(function() {

 	var finalnumber = prompt("Please enter a number:");
	var parsed = parseInt(finalnumber, 10);	


function counter(){

	var printedNumber = 1;

	for (var printedNumber = 1; printedNumber <= parsed; printedNumber++) {

		if (printedNumber % 15 === 0) {
			$(".container").append("<li>fizzbuzz</li>");
		} else if (printedNumber % 3 === 0) {
			$(".container").append("<li>fizz</li>");
		} else if (printedNumber % 5 === 0) {
			$(".container").append("<li>buzz</li>");
		} else {
			$(".container").append("<li>" + printedNumber + "</li>");
		}

	};
}

counter('parsed');





	})