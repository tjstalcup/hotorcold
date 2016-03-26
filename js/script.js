$(document).ready(function(){
	var count = 0;
	var secretNumber = Math.floor(Math.random()*100)+1;
	var gameOver = false;


	$('form').submit(function(e){
		e.preventDefault();
		if(gameOver == false){
		
			var guess = Math.round($('#guess').val());
			$('#guess').val('');

			count++;
			updateCount();
			displayGuess(guess);
			checkGuess(guess);

		}
	});



	function checkGuess(guess){
		if(guess == secretNumber){
			feedback('Correct! You win!');
			gameOver = true;
		} else {
			displayFeedback(Math.abs(guess - secretNumber));
		}
	}

	function displayFeedback(difference){
		if (difference >= 50) {
			feedback("Ice Ice Cold");
		}
		else if (difference >= 30 && difference <= 49) {
			feedback("Ice Cold");
		}
		else if (difference >= 20 && difference <= 29) {
			feedback("Cold");
		}
		else if (difference >= 10 && difference <= 19) {
			feedback("Warm");
		}
		else if (difference >= 5 && difference <= 9) {
			feedback("Hot");
		}
		else  {
			feedback("Very Very Hot");
		}
	}

	function feedback(feedback){
		$('#feedback').html(feedback);
	}

	function updateCount(){
		$('#count').html(count);
	}

	function displayGuess(guess){
		$('#guesses').append('<span>'+guess+'</span>');
	}

});