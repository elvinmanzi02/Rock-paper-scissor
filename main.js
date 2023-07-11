// 1. Create a function to get the computer's choice

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// 2. Create a function to determine the winner

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

// 3. Create a function to update the score display

function updateScoreDisplay() {
    const playerScoreDisplay = document.getElementById("playerScoreDisplay");
    const computerScoreDisplay = document.getElementById("computerScoreDisplay");
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;
}

// 4. Create a function to play the game

function playGame(playerChoice) {
    const validChoice = ["Rock", "Scissor", "Paper"];
    if (!validChoice.includes(playerChoice)) {
        const winnerDisplay = document.querySelector(".winner");
        winnerDisplay.textContent = "Invalid input. Please enter Rock, Paper, or Scissor!";
        return;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    const winnerDisplay = document.querySelector(".winner");
    winnerDisplay.textContent = result;

    updateScoreDisplay();

    if (playerScore === 5 || computerScore === 5) {
        endGame();
    }
}

// 5. Create a function to end the game

function endGame() {
    const resultDisplay = document.getElementById("resultsDisplay");
    if (playerScore === computerScore) {
        resultDisplay.textContent = "Game over, it's a draw";
    } else if (playerScore > computerScore) {
        resultDisplay.textContent = "Congratulations! You win the game!";
    } else {
        resultDisplay.textContent = "Sorry, you lose the game!";
    }

    // Disable the buttons to prevent further gameplay
    const buttons = document.querySelectorAll(".imgContainer button");
    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Event Listeners

const rockBtn = document.querySelector("#rockBtn");
rockBtn.addEventListener("click", () => {
    playGame("Rock");
});

const paperBtn = document.querySelector("#paperBtn");
paperBtn.addEventListener("click", () => {
    playGame("Paper");
});

const scissorBtn = document.querySelector("#scissorBtn");
scissorBtn.addEventListener("click", () => {
    playGame("Scissor");
});

// Wait for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function() {
    // Event Listeners
    const rockBtn = document.querySelector("#rockBtn");
    rockBtn.addEventListener("click", () => {
        playGame("Rock");
    });
  
    const paperBtn = document.querySelector("#paperBtn");
    paperBtn.addEventListener("click", () => {
        playGame("Paper");
    });
  
    const scissorBtn = document.querySelector("#scissorBtn");
    scissorBtn.addEventListener("click", () => {
        playGame("Scissor");
    });
  });
  