// 1 create function getComputerChoice
// 2 creat function determineWinner
// 3 create function of 

// function one



function getComputerChoice() {
    const choices = ["Rock","Paper","Scissor"];
    let randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

// function two
let playerScore = 0;
let computerScore = 0;

function determineWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "It's tie";
    }else if (
        (playerChoice === "Rock" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")   
    ) {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }else {
        computerScore++;
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    }
}

// function 3

function game(playerChoice) {


    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    console.clear();

    console.log(`Player choice: ${playerChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(`Player score: ${playerScore}`)
    console.log(`Computer scrore: ${computerScore}`);
    console.log(result);
    console.log("--------------------");
}

let playerChoice1 = prompt("Enter ; Rock, Paper or Scissor: ");
let playerChoice = playerChoice1.charAt(0).toUpperCase() + playerChoice1.slice(1).toLowerCase();
game(playerChoice);

let round = 1;

while (playerScore < 5 && computerScore < 5) {
    let playerChoice1 = prompt("Enter Rock, Paper, or Scissor: ");
    let playerChoice = playerChoice1.charAt(0).toUpperCase() + playerChoice1.slice(1).toLowerCase();
    game(playerChoice);
    round++;
}

if (playerScore === computerScore) {
    console.log("Game over, it's a draw");
} else if (playerScore > computerScore) {
    console.log("Congratulations! You won the game! 5/5 scores");
} else {
    console.log(`Sorry, you lose the game! ${playerScore}/5 scores`);
}   