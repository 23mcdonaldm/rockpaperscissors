function getComputerChoice() {
    let randNum = Math.trunc((Math.random() * 3) + 1);
    if(randNum == 1) {
        return "rock";
    }
    else if(randNum == 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection == "rock") {
        if(computerSelection == "paper") {
            return "You Lose! Paper beats Rock";
        }
        else if(computerSelection == "scissors") {
            return "You win! Rock beats Scissors";
        }
        else {
            return "It's a tie!";
        }
    }
    else if(playerSelection == "paper") {
        if(computerSelection == "scissors") {
            return "You Lose! Scissors beats Paper";
        }
        else if(computerSelection == "rock") {
            return "You win! Paper beats Rock";
        }
        else {
            return "It's a tie!";
        }
    }
    else {
        if(computerSelection == "rock") {
            return "You Lose! Rock beats Scissors";
        }
        else if(computerSelection == "paper") {
            return "You win! Scissors beats Rock";
        }
        else {
            return "It's a tie!";
        }
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        let playerChoice = prompt("Your choice! (rock, paper, scissors)");
        console.log(playRound(playerChoice, getComputerChoice()));

    }
}

game();