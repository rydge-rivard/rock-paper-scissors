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

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playerChoice = button.id;
        console.log(playerChoice);
        playOneGame();
    }) 
});