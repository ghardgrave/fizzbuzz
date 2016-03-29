$(document).ready(function(){

var printedNumber = 1;

for (var printedNumber = 1; printedNumber <= 100; printedNumber++) {

		if (printedNumber % 15 === 0){
  		$(".container").append("<li>fizzbuzz</li>");
		}

  		else if (printedNumber % 3 === 0){
  		$(".container").append("<li>fizz</li>");
		}

 		else if (printedNumber % 5 === 0){
	   	$(".container").append("<li>buzz</li>");
		}

		else {
		$(".container").append("<li>" +  printedNumber + "</li>");
		}

	};

});
