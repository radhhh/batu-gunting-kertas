function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    switch(choice){
        case 1:
            return "rock";
        case 2:
            return "scissor";
        case 3:
            return "paper";
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "DRAW";
    }
    if(playerSelection == "rock" && computerSelection == "scissor" ||
    playerSelection == "scissor" && computerSelection == "paper" ||
    playerSelection == "paper" && computerSelection == "rock"){
        return "WIN";
    }
    else return "LOSE";
}

function playGame(indexSelection){
        const computerSelection = getComputerChoice();
        let playerSelection;
        if(indexSelection == 0) playerSelection = "rock";
        else if(indexSelection == 1) playerSelection = "paper";
        else playerSelection = "scissor";
        console.log(`Player chose ${playerSelection}, computer chose ${computerSelection}`)
        console.log(`The result is ${playRound(playerSelection, computerSelection)}`);
}

function monitorButton(currentButton, index){
    currentButton.addEventListener('click', () => playGame(index));
}

const allButtons = document.querySelectorAll(".choice");
allButtons.forEach(monitorButton)