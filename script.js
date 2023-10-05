// getComputerChoice will randomly return rock, paper, or scissors. 

const rockPaperScissors = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    let computerChoice = rockPaperScissors[Math.floor(Math.random()*rockPaperScissors.length)]
    console.log('Computer chooses ' + computerChoice);
    return computerChoice
}

