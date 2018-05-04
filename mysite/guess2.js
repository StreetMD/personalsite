
function play()
{
	var answer = parseInt(Math.random() * 100);
	var playerNum = 1;
	
	while(true){

		do {
			var number = prompt("Угадывает игрок " + playerNum + ". Введите ваш вариант ответа.");

			if (number == null){
				alert("Куда собрался с поля боя, а ну еще раз!");
				number = "wump";
			} else if (number.toLowerCase() == "exit") {
				break;
			} else if ( +number >= 0 && +number <=100) {
				break;
			} else {
				alert("Необходимо вбить число от 0 до 100.");
			}

		} while (number != "exit" || number == null);

		if(number.toLowerCase() == "exit") {
			alert("Загаданное число " + answer);
			break;
		}

		if(number == answer) {
			alert("Молодец! Вы угадали." + "\n--------------------------------------------- "+ "\nВыиграл игрок " + playerNum + "\nЗагаданное число " + answer);
			break;
		} else if(number < answer) {
			alert("Ваше число меньше загаданного.");
		} else if(number > answer) {
			alert("Ваше число больше загаданного.");
		} else {
			alert("Необходимо вбить число!");
		}

		if(playerNum == 1)
			playerNum = 2;
		else
			playerNum = 1;
	}
}
