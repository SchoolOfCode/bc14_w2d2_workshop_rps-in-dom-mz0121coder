/* Bonus (to do) - Add validation
Create a username input field and use the username the player inputs in the game so that a player can see their name on the page when looking at where the scores are displayed.

To make it more uniform, restrict the number of characters a username can be to 10 or fewer.

This will be deemed as complete when the users cannot enter a username longer than 10 characters.

🌟 BONUS: Make it so that valid usernames should only start with letters, not numbers or symbols.
🌟 EXTRA BONUS: Make it so that the first letter of the username should be capitalised.
*/

let isStarted = false;
let userScore = 0;
let compScore = 0;
// select + display user and comp scores in a span within the cards
const player = document.querySelector('h2');
const showUserScore = document.querySelector('#score-a');
const showCompScore = document.querySelector('#score-b');

// Get the username input element
const usernameInput = document.querySelector('#username');

// Get the start button element
const startButton = document.querySelector('.start');

// Add an event listener to the start button
startButton.addEventListener('click', () => {
	// Get the username entered by the user
	const username = usernameInput.value.trim();

	// Check if the username is valid
	if (/^[A-Z][a-z]{1,9}$/.test(username)) {
		// The username is valid, so start the game
		alert(`Welcome, ${username}! Let's start the game.`);
		player.textContent = `${username}`;
	} else {
		// The username is invalid, so display an error message
		alert(
			'Please enter a valid username (2-10 letters, starting with a capital letter).'
		);
	}
});

// Get the game choices buttons and the result element
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const resultEl = document.querySelector('.result');

// Add click event listeners to the game choices buttons
rockBtn.addEventListener('click', () => playGame('rock'));
paperBtn.addEventListener('click', () => playGame('paper'));
scissorsBtn.addEventListener('click', () => playGame('scissors'));

// Function to play the game
function playGame(userChoice) {
	// Generate a random computer choice
	const choices = ['rock', 'paper', 'scissors'];
	const computerChoice = choices[Math.floor(Math.random() * choices.length)];

	// Determine the winner of each round
	// Update user and computer scores, show them in the cards
	let result;
	if (
		(userChoice === 'rock' && computerChoice === 'scissors') ||
		(userChoice === 'paper' && computerChoice === 'rock') ||
		(userChoice === 'scissors' && computerChoice === 'paper')
	) {
		userScore += 1;
		result = `You Win!`;
		showUserScore.textContent = `${userScore}`;
		showCompScore.textContent = `${compScore}`;
	} else if (userChoice === computerChoice) {
		result = `Tie!`;
		showUserScore.textContent = `${userScore}`;
		showCompScore.textContent = `${compScore}`;
	} else {
		compScore += 1;
		result = `Computer Wins!`;
		showUserScore.textContent = `${userScore}`;
		showCompScore.textContent = `${compScore}`;
	}

	// Show the result and play again button
	resultEl.textContent = `You chose ${userChoice}, 
	the computer chose ${computerChoice}. 
	${result}`;
	resultEl.parentElement.style.display = 'block';
}

// Add click event listener to the play again button that resets the score
const playAgainBtn = document.querySelector('.play-again');
playAgainBtn.addEventListener('click', () => {
	resultEl.parentElement.style.display = 'none';
	userScore = 0;
	compScore = 0;
	showUserScore.textContent = `${userScore}`;
	showCompScore.textContent = `${compScore}`;
	player.textContent = `User`;
});
