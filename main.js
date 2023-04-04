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

function playGame(){
    for(let i = 0; i < 5; i++){
        let playerSelection= prompt("Pick your choice", "");
        const computerSelection = getComputerChoice();
        playerSelection = playerSelection.toLowerCase();

        console.log(`Player chose ${playerSelection}, computer chose ${computerSelection}`)
        console.log(`The result is ${playRound(playerSelection, computerSelection)}`);
    }
}

playGame();