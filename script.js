// getComputerChoice will randomly return rock, paper, or scissors. 

const rockPaperScissors = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let computerChoice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)]
    console.log('Computer chooses ' + computerChoice);
    return computerChoice
}

//Write a function that plays a single round of Rock Paper Scissors. 
//The function should take the two parameters and then return a string that declares the winner of the round

function getPlayerChoice() {
    let playerChoice = prompt('Choose rock, paper, or scissors.');
    console.log('Player chooses ' + playerChoice);
}

getPlayerChoice();
