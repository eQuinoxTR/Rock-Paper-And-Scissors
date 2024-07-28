function getComputerChoice(computerChoice) {
    computerChoice = Math.floor(Math.random()*3)+1;
    return computerChoice
}

function getHumanChoice() {
    let userInput = prompt("Rock Paper and Scissors, choose your weapon! it will be 5 rounds");
    let humanChoice; 
    if (userInput === "rock") {
        humanChoice = 1;
    } else if (userInput === "paper") {
        humanChoice = 2;
    } else if (userInput === "scissors") {
        humanChoice  = 3;
    } else {
        alert("That is not a proper weapon");
    }

    return humanChoice;
}

    let humanScore = 0,
    computerScore = 0; 

    while (computerScore < 5 && humanScore < 5) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }

    function playRound(humanChoice, computerChoice) {
    switch (humanChoice) {
    case 1: 
    if (computerChoice === 1) {
        console.log("Computer chose rock, and you chose rock, its a draw!");
        console.log(computerScore, humanScore);
    } else if (computerChoice === 2) {
        console.log("Computer chose paper, and you chose rock, you loose!");

        computerScore++;
        console.log(computerScore, humanScore);
    } else if (computerChoice === 3) {
        console.log("Computer chose scissors, and you chose rock, you win!");

        humanScore++;
        console.log(computerScore, humanScore);
    }
    break;

    case 2: 
    if (computerChoice === 1) {
        console.log("Computer chose rock, and you chose paper, you win!");

        humanScore++;
        console.log(computerScore, humanScore);
    } else if (computerChoice === 2) {
        console.log("Computer chose paper, and you chose paper, its a draw!");
        console.log(computerScore, humanScore);
    } else if (computerChoice === 3) {
        console.log("Computer chose scissors, and you chose paper, you loose!");

        computerScore++;
        console.log(computerScore, humanScore);
    }
    break;

    case 3: 
    if (computerChoice === 1) {
        console.log("Computer chose rock, and you chose scissors, you loose!");

        computerScore++;
        console.log(computerScore, humanScore);
    } else if (computerChoice === 2) {
        console.log("Computer chose paper, and you chose scissors, you win!");

        humanScore++;
        console.log(computerScore, humanScore);
    } else if (computerChoice === 3) {
        console.log("Computer chose scissors, and you chose scissors, its a draw!");
        console.log(computerScore, humanScore);
    }
    break;
    
    }
    return { humanScore, computerScore };
}

if (humanScore === 5) {

    console.log('HUMANITY WINS!!!');

} else if (computerScore === 5) {

    console.log('COMPUTER WINS');

}

