// 1 create function getComputerChoice
// 2 creat function determineWinner

// function one

function getComputerChoice() {
    const choices = ["Rock","Paper","Scissor"];
    randomIndex = Math.floor(Math.random()*choices.length);
    return choices[randomIndex];
}

// function two

function determineWinner(playerChoice, computerChoice) {

    if (playerChoice === computerChoice) {
        return "It's tie";
    }else if (
        (playerChoice === "Rock" && computerChoice === "Scissor") ||
        (playerChoice === "Paper" && computerChoice === "Rock") ||
        (playerChoice === "Scissor" && computerChoice === "Paper")   
    ) {
        return `Congratulations you win! ${playerChoice} beats ${computerChoice}`;
    }else {
        return `Ooh sorry try again! ${computerChoice} beats ${playerChoice}`;
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);
    console.log(`playerChoice ${playerChoice}`);
    console.log(`computerChoice ${computerChoice}`)
    return result;
}
 
const playerChoice = "Scissor";

console.log(playGame(playerChoice));