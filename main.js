// Game is going to play against computer
// 1 getComputerChoice() function return roundomly 'Rock', 'paper or scissor
// 2 function(parameter1, parameter2) with player selection and computer selection and will return "You lose! paper beats Rock"
// 2 game function

// function one that let computer selects 

function getComputerChoice(min = 1, max = 3) {
    const result = Math.floor(Math.random()*(max-min + 1)) + min;
    if (result === 1) {
        return "Rock";
    } else if ( result === 2) {
        return "Paper";
    }else {
        return "Scissor";
    }
}
const computerSelector = getComputerChoice();

// function two that that decide who wins

function roundSeletor(playerSelector, computerSelector) {
    if (playerSelector === "rock") {
        if(computerSelector === "Scissor") {
            return "You win! Rock beats scissor";
        }else if (computerSelector === "Rock") {
            return "Draw!";
        }else {
            return "You lose! Paper beats rock";
        }
    } else if(playerSelector === "scissor") {
        if(computerSelector === "Scissor") {
            return "Draw!";
        }else if (computerSelector === "Rock") {
            return "You lose! Rock beats scissor";
        }else {
            return "You win! Scissor beats paper";
        }
    }

    else {
        if(computerSelector === "Scissor") {
            return "You lose!, Scissor beats paper";
        }else if (computerSelector === "Rock") {
            return "You win! Paper beats rock";
        }else {
            return "Draw!";
        }
    }
}

const playerChoice = "Rock";
const playerSelector = playerChoice.toLowerCase();
console.log (roundSeletor(playerSelector, computerSelector));