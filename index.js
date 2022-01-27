// Your Code Here

let playagain = true

function play() {
	let userName = window.prompt('what is your name: ')
	let score = 0

	for (let i = 0; i < questions.length; i++) {
		let question = questions[i]
		let userAnswer = window.prompt(question.text)

		if (userAnswer === question.correctAnswer) {
			console.log("correct")
			score += 10
		} else {
			console.log("incorrect")
		}
	}

	window.prompt("Your score is " + score)
}

while (playagain === true) {
	play()
	let choice = window.prompt("wish to play again?")

	if (choice == "Yes" || choice == "yes") {
		playagain = true
	} else {
		playagain = false
		window.alert("Thanks for playing")
	}
}
