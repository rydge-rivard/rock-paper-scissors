const rockPaperScissors = ['rock', 'paper', 'scissors'];
let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    computerChoice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return computerChoice
}

function playOneGame () {
    getComputerChoice();
    const results = document.querySelector('.result');
    if (playerChoice == computerChoice) {
        results.textContent = `It\'s a tie! ${playerChoice} is the same as ${computerChoice}.`;
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        results.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScore = playerScore + 1;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        results.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScore = playerScore + 1;
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        results.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScore = playerScore + 1;
    } else {
        results.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerScore = computerScore + 1;
    }
    firstPlayerToFive(playerScore, computerScore);
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        playOneGame();

        const printPlayerChoice = document.querySelector('.return-player-choice');
        printPlayerChoice.textContent = `You chose ${playerChoice}.`;

        const scoreboard = document.querySelector('.scoreboard');
        scoreboard.textContent = `Computer: ${computerScore} -- Player: ${playerScore}`;
    }) 
});

function firstPlayerToFive (playerScore, computerScore) {
    const printWinner = document.createElement('h3');
    const results = document.querySelector('.result');
    if (playerScore === 5) {
        printWinner.textContent = 'Humans rule! You were the first to five and beat the computer.'
    } else if (computerScore === 5) {
        printWinner.textContent = 'Machines are taking over... The computer was the first to five and won.'
    } else {
        printWinner.textContent = '';
    }
    results.appendChild(printWinner);
}