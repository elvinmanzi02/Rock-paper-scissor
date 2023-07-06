// 1 create funtion to get computer choice
// 2 create function to determine winner
// 3 create function to play game
// 4 using while loop to iterate until score be 5 points
// 5 using if clause to determine someone who win the game 

// 1 create funtion to get computer choice

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// 2 create function to determine winner

let playerScore = 0;
let computerScore = 0;

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")
    ) {
        playerScore++;
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        return `Oops, you lose! ${computerChoice} beats ${playerChoice}`;
    }
}

// 3 create function to play game

function game(playerChoice) {

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    
    console.clear();
    
    console.log(`Player choice: ${playerChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    console.log(`Player score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
    console.log(result);
    console.log("--------------------");
}

// 4 using while loop to iterate until score be 5 points

let round = 1;

while (playerScore < 5 && computerScore < 5) {

    let playerChoice1 = prompt("Enter Rock, Paper, or Scissor: ");
    let playerChoice = playerChoice1.charAt(0).toUpperCase() + playerChoice1.slice(1).toLowerCase();
    game(playerChoice);

    round++;
}

// 5 using if clause to determine someone who win the game

if (playerScore === computerScore) {
    console.log("Game over, it's a draw");
} else if (playerScore > computerScore) {
    console.log("Congratulations! You win the game!");
} else {
    console.log("Sorry, you lose the game!");
}
