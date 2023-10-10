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
        return playerScore;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        results.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScore = playerScore + 1;
        return playerScore;
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        results.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
        playerScore = playerScore + 1;
        return playerScore;
    } else {
        results.textContent = `You lose! ${computerChoice} beats ${playerChoice}.`;
        computerScore = computerScore + 1;
        return computerScore;
    }
}

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        playOneGame();

        const container = document.querySelector('.return-player-choice');
        let returnPlayerChoice = document.createElement('div');
        returnPlayerChoice.textContent = `You chose ${playerChoice}.`;
        container.appendChild(returnPlayerChoice);

        const scoreboard = document.querySelector('.scoreboard');
        scoreboard.textContent = `Computer: ${computerScore} -- Player: ${playerScore}`;
    }) 
});