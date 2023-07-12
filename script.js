// 1 function for computer to randomly choose

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissor"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// declaration of variables that will be needed

let playerScore = 0;
let computerScore = 0;

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

// function 2 for determining winner

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

// functon 3 reset function 

function resetScores() {
    playerScore = 0;
    computerScore = 0;
}

// function 4, update score

function updateScore() {
    playerScoreDisplay.textContent = `Player Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer Score: ${computerScore}`;  
}

// function 5 playGame function

function playGame(playerChoice) {

    const computerChoice = getComputerChoice();
    determineWinner(playerChoice, computerChoice);
    updateScore();


    if (playerScore === 5 || computerScore ===5) {
        
        if (playerScore>computerScore) {
            roundWinner.textContent = `***Congratulations, you win the game!***`;
        }else if (playerScore<computerScore) {
            roundWinner.textContent = `***Ooh sorry, you lose the game!***`;
        }else {
            roundWinner.textContent = `***It's a draw***`;
        }

        resetScores();
        return;
    }
    roundWinner.textContent = '';
}

playGame(playerChoice); 