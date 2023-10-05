// getComputerChoice will randomly return rock, paper, or scissors. 

const rockPaperScissors = ['rock', 'paper', 'scissors'];
let computerChoice;
let playerChoice;
let computerScore;
let playerScore;

function getComputerChoice() {
    computerChoice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return computerChoice
}

//Need to add validation to prompt field so we capture only rock, paper, or scissors without case sensitivity or invalid values

function getPlayerChoice() {
    playerChoice = prompt('Choose rock, paper, or scissors.');
    if (playerChoice.toLowerCase() === 'rock' ||
    playerChoice.toLowerCase() === 'paper' ||
    playerChoice.toLowerCase() === 'scissors') {
        console.log(playerChoice);
        return playerChoice
    } else {
        alert('Invalid selection, please choose rock, paper, or scissors.');
    }
}

//If player chooses rock and computer is scissors, you win 
//If paper and comp is rock you win
//If scissors and comp is paper you win 
//If playerChoice = computerChoice it's a tie 
//Else you lose
//This function initiates a game and declares the winner with an alert

function playOneGame () {
    getPlayerChoice();
    getComputerChoice();
    console.log('Computer chooses ' + computerChoice);
    console.log('Player chooses ' + playerChoice);
    if (playerChoice == computerChoice) {
        alert(`It\'s a tie! ${playerChoice} is the same as ${computerChoice}.`)
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        alert(`You win! ${playerChoice} beats ${computerChoice}.`)
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        alert(`You win! ${playerChoice} beats ${computerChoice}.`)
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        alert(`You win! ${playerChoice} beats ${computerChoice}.`)
    } else {
        alert(`You lose! ${computerChoice} beats ${playerChoice}.`)

    }
}

//I'm learning loops in the next lesson so for now will run the game five times and total up scores to determine winner

function gameToFive () {
    playOneGame();
    playOneGame();
    playOneGame();
    playOneGame();
    playOneGame();
}

gameToFive();