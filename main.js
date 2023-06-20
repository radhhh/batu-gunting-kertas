let playerScore = 0;
let computerScore = 0;

function updateDocument(target, output) {
    target.innerHTML = output;
}

function updateScore() {
    const playerDisplay = document.querySelector("#player");
    const computerDisplay = document.querySelector("#computer");
    playerDisplay.textContent = playerScore.toString();
    computerDisplay.textContent = computerScore.toString();
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    switch (choice) {
        case 1:
            return "rock";
        case 2:
            return "scissor";
        case 3:
            return "paper";
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "DRAW";
    }
    if (playerSelection == "rock" && computerSelection == "scissor" ||
        playerSelection == "scissor" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        return "WIN";
    }
    else {
        computerScore++;
        return "LOSE";
    }
}

function playGame(indexSelection) {
    const computerSelection = getComputerChoice();
    let playerSelection;
    if (indexSelection == 0) playerSelection = "rock";
    else if (indexSelection == 1) playerSelection = "paper";
    else playerSelection = "scissor";
    const desc = document.querySelector("#description");
    const res = document.querySelector("#result");
    const descContent = `Player chose <strong>${playerSelection}</strong>, 
        computer chose <strong>${computerSelection}<strong>`;
    console.log(descContent);
    updateDocument(desc, descContent);
    updateDocument(res, `<strong>${playRound(playerSelection, computerSelection)}<strong>`);
    updateScore();
    setTimeout(() => {
        if(playerScore == 5){
            alert("hoki kok bisa menang");
            playerScore = 0;
            computerScore = 0;
            updateScore();
        }
        if(computerScore == 5){
            alert("goblok lu kok kalah");
            playerScore = 0;
            computerScore = 0;
            updateScore();
        }
    }, 500);
}

function monitorButton(currentButton, index) {
    currentButton.addEventListener('click', () => playGame(index));
}

function main(){
    updateScore();
    const allButtons = document.querySelectorAll(".choice");
    allButtons.forEach(monitorButton);
}

main();