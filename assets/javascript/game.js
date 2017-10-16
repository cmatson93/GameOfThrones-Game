$(document).ready(function() {
	
	var johnSnow = {

		HpPoints : 100,
		attackPower : 10,
		counterAttackPower : 8
	}

	var jamieLaniseter = {

		HpPoints : 90,
		attackPower : 8,
		counterAttackPower : 6,
	}

	var theHound = {

		HpPoints : 120,
		attackPower : 12, 
		counterAttackPower : 6,
	}

	var Kahlessi = {

		HpPoints : 75,
		attackPower : 5,
		counterAttackPower : 5,
	}

	var breaneOfTarth = {

		HpPoints : 80,
		attackPower : 9, 
		counterAttackPower : 9, 
	}

	var firstClick = true; 
	var secondClick = false; 
	var thirdClick = false;
	var yourCharacter = "";
	var opponent = "";



	$(".characters").on("click", function() {

		if (firstClick == true) {
			console.log("firstClick, "+ firstClick);
			firstClick = false; 
			console.log("firstClick, "+ firstClick);
			secondClick = true;
			// console.log(this);
			$("#battle-row").html(this);
			$(this).css("display", "inline");
			yourCharacter = $(this).val();
			console.log(yourCharacter);
			console.log($(this).val());

		}
		else if (secondClick == true) {
			console.log("secondClick, "+ secondClick);
			secondClick = false;
			console.log("secondClick, "+ secondClick);
			$("#battle-row").append(this);
			$(this).css("display", "inline");
			thirdClick = true;
		}

		

	})

	$("button").on("click", function () {
		if (thirdClick == true) {
			console.log("Attack time");

		}
	})


});