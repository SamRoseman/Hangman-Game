		var user;
		var comp;
		var math;
		var wins = 0;
		var losses = 0;
		var guessesLeft = 10;
		var words = ["cats","claw","meow","paws","soft","yarn","play","milk"];
		var compAnswer = document.getElementById("comp-text");
		var userA = document.getElementById("user-a");
		var userB = document.getElementById("user-b");
		var userC = document.getElementById("user-c");
		var userD = document.getElementById("user-d");
		var userGuess = document.getElementById("user-text");
		var winsText = document.getElementById("wins-text");
		var lossesText = document.getElementById("losses-text");
		var guessesText = document.getElementById("guesses-text");
		var userArray = [];
		var idx;


		// creating a function that chooses a random string from my words array
		function getWord() {
			math = Math.floor(Math.random() * words.length);
			comp = words[math];
			// console.log(comp);
		}

		// start over function
		function start() {
			guessesLeft = 10;
			getWord();
			userArray = [];	
			userA.textContent = " _ "
			userB.textContent = " _ "	
			userC.textContent = " _ "	
			userD.textContent = " _ "			
		}

		function waitWin(){
			alert("Winner!");
		}

		function waitLose(){
			alert("You Lost :(");
		}

		// call the start function
		start();
		// sets comp to the word the random generator picked
		
		
		


		// listens for user key press
		document.onkeyup = function(push) {
		
		// set variable use to whatever key the user pressed	
		var user = push.key;

		// set idx to the index of the user's key in the comps string
			idx = comp.indexOf(user) 
				if (idx !== -1) {
				
					if (idx === 0){
						userA.textContent = user;
					}
					else if (idx === 1){
						
						userB.textContent = user;
					}
					else if (idx === 2){
						
						userC.textContent = user;
					}
					else if (idx === 3){
						
						userD.textContent = user;
					}

				}
				else {
					guessesLeft--
					userArray.push(" " + user);
					// console.log("Guesses:" + userArray);
					// console.log("Guesses Left:" + guessesLeft);
				}


				if (guessesLeft === 0) {
					losses++;
					alert("You lost :(");
					start();

				}
				
				if (userA.textContent !== " _ " && userB.textContent !== " _ " && userC.textContent !== " _ " && userD.textContent !== " _ "){
					setTimeout(waitWin, 250);
					setTimeout (wins++, 500);
					setTimeout(start(), 500);
				}


				userGuess.textContent = userArray;
				guessesText.textContent = guessesLeft;
				winsText.textContent = wins;
				lossesText.textContent = losses;


			
	

		};

	