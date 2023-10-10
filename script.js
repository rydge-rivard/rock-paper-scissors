const rockPaperScissors = ['rock', 'paper', 'scissors'];
let computerChoice;
let playerChoice;
let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
    computerChoice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)];
    return computerChoice
}

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

let buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', playOneGame)
});

//addEventListener('click', playOneGame);


/*
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
*/