// getComputerChoice will randomly return rock, paper, or scissors. 

const rockPaperScissors = ['rock', 'paper', 'scissors'];
let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

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
    if (playerChoice == computerChoice) {
        alert(`It\'s a tie! ${playerChoice} is the same as ${computerChoice}.`)
    } else if (playerChoice == 'rock' && computerChoice == 'scissors') {
        alert(`You win! ${playerChoice} beats ${computerChoice}.`)
        playerScore = playerScore + 1;
        return playerScore;
    } else if (playerChoice == 'paper' && computerChoice == 'rock') {
        alert(`You win! ${playerChoice} beats ${computerChoice}.`)
        playerScore = playerScore + 1;
        return playerScore;
    } else if (playerChoice == 'scissors' && computerChoice == 'paper') {
        alert(`You win! ${playerChoice} beats ${computerChoice}.`)
        playerScore = playerScore + 1;
        return playerScore;
    } else {
        alert(`You lose! ${computerChoice} beats ${playerChoice}.`)
        computerScore = computerScore + 1;
        return computerScore;
    }
}

//I'm learning loops in the next lesson so for now will run the game five times and total up scores to determine winner

function fiveGameWinner () {
    if (computerScore > playerScore) {
        alert('Sorry pal, you lost the tournament to this computer with a final score of :' + computerScore + ' - ' + playerScore);
    } else if (playerScore > computerScore) {
        alert('Humans rule, you won the tournament against this computer with a final score of ' + playerScore + ' - ' + computerScore);
    } else {
        alert('What are the odds?? It\'s a tie :D ' + playerScore + ' - ' + computerScore);
    }
}

function gameToFive () {
    playOneGame();
    alert(computerScore + ' point for Computer and ' + playerScore + ' point for Player.');
    playOneGame();
    alert(computerScore + ' point for Computer and ' + playerScore + ' point for Player.');
    playOneGame();
    alert(computerScore + ' point for Computer and ' + playerScore + ' point for Player.');
    playOneGame();
    alert(computerScore + ' point for Computer and ' + playerScore + ' point for Player.');
    playOneGame();
    fiveGameWinner();
}

gameToFive();