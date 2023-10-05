// getComputerChoice will randomly return rock, paper, or scissors. 

const rockPaperScissors = ['rock', 'paper', 'scissors'];
let computerChoice;
let playerChoice;

function getComputerChoice() {
    computerChoice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return computerChoice
}

function getPlayerChoice() {
    playerChoice = prompt('Choose rock, paper, or scissors.');
    return playerChoice
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

playOneGame();