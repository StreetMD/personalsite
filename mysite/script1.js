function checkAnswer(id,trueAnswer){

	var userAnswer = document.getElementById(id).value
		if(userAnswer.toLowerCase()==trueAnswer)
			return true;
		else 
			return false;
}

function checkAnswers(){

	var score = 0;

	if(checkAnswer ("puzzles1","зима"))
		score++;
	
	if(checkAnswer("puzzles2", "ножницы"))
		score++;
	
	if(checkAnswer("puzzles3", "крапива"))
		score++;
	
	
	if(checkAnswer("puzzles4", "морковь")){
		score++;
	} else if(checkAnswer("puzzles4", "морковка")){
		score++;
	}
	

	if(score == 0)
		alert("К сожалению, вы ничего не угадали");
	else
		alert("Вы отгадали " + score + " загадки(-у)");
}