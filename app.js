let score = 0;
// Get the game choices buttons and the result element
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resultEl = document.querySelector('.result');

// Add click event listeners to the game choices buttons
rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));

// rockBtn.addEventListener('click', function () {
// 	return playGame('rock');
// });

// paperBtn.addEventListener('click', function () {
// 	return playGame('paper');
// });

// scissorsBtn.addEventListener('click', function () {
// 	return playGame('scissors');
// });

// // function add() {
// // 	return 1 + 2;
// // }
// // const add = () => 1 + 2;

// Function to play the game
function playGame(userChoice) {
	// Generate a random computer choice
	const choices = ['rock', 'paper', 'scissors'];
	const computerChoice = choices[Math.floor(Math.random() * choices.length)];

	// Determine the winner
	let result;
	if (
		(userChoice === 'rock' && computerChoice === 'scissors') ||
		(userChoice === 'paper' && computerChoice === 'rock') ||
		(userChoice === 'scissors' && computerChoice === 'paper')
	) {
		score += 1;
		result = `You Win! Score: ${score}`;
	} else if (userChoice === computerChoice) {
		result = `Tie! Score: ${score}`;
	} else {
		score -= 1;
		result = `Computer Wins! Score: ${score}`;
	}

	// Show the result and play again button
	resultEl.textContent = `You chose ${userChoice}, the computer chose ${computerChoice}. ${result}`;
	resultEl.parentElement.style.display = 'block';
}

// Add click event listener to the play again button
const playAgainBtn = document.querySelector('.play-again');
playAgainBtn.addEventListener('click', () => {
	resultEl.parentElement.style.display = 'none';
	score = 0;
});

/*Add validation
Create a username input field and use the username the player inputs in the game so that a player can see their name on the page when looking at where the scores are displayed.

To make it more uniform, restrict the number of characters a username can be to 10 or fewer.

This will be deemed as complete when the users cannot enter a username longer than 10 characters.

🌟 BONUS: Make it so that valid usernames should only start with letters, not numbers or symbols.
🌟 EXTRA BONUS: Make it so that the first letter of the username should be capitalised.
*/
