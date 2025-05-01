    userInput = "";
   
    const scissors = document.querySelector(".scissors");
    const paper = document.querySelector(".paper");
    const rock = document.querySelector(".rock");

    scissors.addEventListener("click", () => {userInput  = "scissors"; startgame();});
    paper.addEventListener("click", () => {userInput = "paper"; startgame();});
    rock.addEventListener("click", () => {userInput = "rock"; startgame();});

    function getHumanChoice() {
        return userInput;
    }

    function getComputerChoice(computerChoice) {
        computerChoice = Math.floor(Math.random()*3)+1;

    switch(computerChoice) {
        case 1: return "rock";
        case 2: return "paper";
        case 3: return "scissors";
    }
}
    let infoQuery = document.querySelector(".infoText");

    let humanScore = 0, computerScore = 0; 

    function startgame() {
        while (computerScore < 5 && humanScore < 5) {
            let userInput = getHumanChoice();
            let computerChoice = getComputerChoice();
            playRound(userInput, computerChoice);
         
             if (humanScore === 5) {
                infoQuery.textContent = "HUMANITY WINS!!!";
            } else if (computerScore === 5) {
                infoQuery.textContent = "COMPUTER WINS!!!";
            } else {
                return;
            }
        }
    }

    function playRound(userInput, computerChoice) {
    let humanQuery = document.querySelector(".scoreHuman");
    let computerQuery = document.querySelector(".scoreComputer");

    if (userInput === computerChoice){
    infoQuery.textContent = "draw"
    } else if (userInput === "rock" && computerChoice === "scissors" ||
              userInput === "paper" && computerChoice === "rock"     ||
              userInput === "scissors" && computerChoice === "paper") {
                 infoQuery.textContent = "You win!";
                 humanScore++;
                 humanQuery.textContent = `${humanScore}`;
    } else if (userInput === "scissors" && computerChoice === "rock" ||
               userInput === "rock" && computerChoice === "paper"    ||
               userInput === "paper" && computerChoice === "scissors") {
                 infoQuery.textContent = "You lose!";
                 computerScore++;
                 computerQuery.textContent = `${computerScore}`;
    }
    return {computerScore, humanScore};
}

