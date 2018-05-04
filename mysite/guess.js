function play()
{
	var answer = parseInt(Math.random() * 100);
	var attempt = 1;
	var attemptsCounts = 7;

		while (attempt <= attemptsCounts){
			
			do 
			{
				
				var userAnswer = prompt("Попытка № " + attempt + "\nВведите число:" + "\n--------------------------------------------- " + "\nЕсли ты сдаёшься, то вбейте слово exit.");
				
				if(userAnswer == null){
					alert("Куда собрался с поля боя, а ну еще раз!");
					userAnswer = "wimp";
				} else if (userAnswer.toLowerCase() == "exit") {
					break;
				} else if ( +userAnswer >= 0 && +userAnswer <=100) {
					break;
				} else {
					alert("Необходимо вбить число от 0 до 100.");
				}

			} while (userAnswer != "exit" || userAnswer == null );

			if (userAnswer.toLowerCase() == "exit") {
				alert("Загаданное число " + answer);
				break;
			}

			if (userAnswer > answer) {
				alert("Ваш ответ больше загаданного числа.");
			} else if (userAnswer < answer) {
				alert("Ваш ответ меньше загаданного числа");	
			} else if (userAnswer = answer) {
				alert("Вы угадали! \nЗагадонное число: " + answer);
				break;
			} else {
				alert("необходимо ввести число!");
			}

				attempt++;

			}

			if (attempt > attemptsCounts) {
				alert("К сожалению вы не угадали. Было загаданно число: " + answer);
			}
}