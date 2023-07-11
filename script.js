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

// declarations

let playerScoreDisplay = document.querySelector("#playerScoreDisplay");
let computerScoreDisplay = document.querySelector("#computerScoreDisplay");
let winner = document.querySelector(".winner");
let roundWinner = document.querySelector(".roundWinner");
const paperBtn = document.getElementById("paperBtn");
const scissorBtn = document.getElementById("scissorBtn");
const rockBtn = document.getElementById("rockBtn");
const imgItems = document.querySelectorAll("imgItem");

// adding addEvent litner to buttons

paperBtn.addEventListener("click", () => {
    playGame("Paper");
});

scissorBtn.addEventListener("click", () => {
    playGame("Scissor");
});

rockBtn.addEventListener("click", () => {
    playGame("Rock");
});

// function 1, determine winner

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        winner.textContent = "It's a tie";
    } else if (
        (playerChoice === "Rock" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")
    ) {
        playerScore++;
        winner.textContent = `You win! ${playerChoice} beats ${computerChoice}`;
    } else {
        computerScore++;
        winner.textContent =`Oops, you lose! ${computerChoice} beats ${playerChoice}`;
    }
}

// function 2, update score

function updateScore() {
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

// function 3, playGame 

function playGame(playerChoice) {

    const computerChoice = getComputerChoice();
    determineWinner(playerChoice, computerChoice);
    updateScore();
}

playGame(playerChoice); 