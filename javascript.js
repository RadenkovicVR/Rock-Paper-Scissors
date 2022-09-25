console.log("Welcome! Type: Rock, Paper or Scissors in order to play."); 

// Computer choice
function getComputerChoice() {
    option = Math.floor(Math.random() * 3) + 1;
    switch (option) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
    }
}

// Counters

wonCounter = 0;
lostCounter = 0;
drawCounter = 0;

// Game Logic

function playRound(computerSelection, playerSelection) {

    if (playerSelection === "rock" && computerSelection === "rock") {
        return "Draw!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lost!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You won!";
    }
    else if (playerSelection === "paper" && computerSelection === "paper") {
        return "Draw!";
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lost!";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You won!";
    }
    else if (playerSelection === "scissors" && computerSelection === "scissors") {
        return "Draw!";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lost!";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You won!";
    }
}

// Counter logic

function counters(){
    if (playRound(computerSelection, playerSelection) === "Draw!"){
        drawCounter++;
        return "Draw";
    }
    else if (playRound(computerSelection, playerSelection) === "You won!"){
        wonCounter++;
        return "You won!";
    }
    else if (playRound(computerSelection, playerSelection) === "You lost!"){
        lostCounter++;
        return "You lost!";
    }
}

// Game Loop

function game(){
    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoice();
        playerSelection = String(prompt("Your choice: ")).toLowerCase();
        console.log("Round: " + (i + 1));
        playRound(computerSelection, playerSelection);
        console.log(counters());
    }
    console.log("\nWon: " + wonCounter + " \nLost: " + lostCounter + " \nDraw: " + drawCounter);
}

game();


