//basic rock paper scissors game

//computer move: get random integer among 0-2,
//if random int equals 0 computer move is rock, if 1 move is paper, if 2 move is scissors

function computerPlay() {
    let computerSelection = getRandomInt(2);
    switch(computerSelection) {
        case 0: computerSelection = "rock"; 
                break;
        case 1: computerSelection = "paper"; 
                break;
        case 2: computerSelection = "scissors"; 
                break;
    }
    return computerSelection;
}

function getRandomInt (max) {
    return Math.floor(Math.random()*(max+1));
}

let computerMove = computerPlay();
let playerMove;
console.log(computerMove);

//one round of rps: compare player move and computer move
//use if statements, return flavor text on defeat or victory

function playOneRound (playerSelection,computerSelection) {
    if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        return "defeat";//`Defeat! Your ${playerSelection} is no match against ${computerSelection}.`;
    } 
    else if (computerSelection === "rock" && playerSelection === "paper" || computerSelection === "paper" && playerSelection === "scissors" || computerSelection === "scissors" && playerSelection === "rock") {
        return "victory";//`Victory! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} destroys ${computerSelection}.`;
    }
    else if (playerSelection === computerSelection){
        return "tie";//`No winner! You've both used ${playerSelection}.`;
    }
    else {
    return "hmm"; //"Please enter your move.";
    }
}
console.log(playOneRound(playerMove,computerMove));

//multiple rounds of rps: do a round of rps until one wins 5
//use loops

function game () {
    let playerScore = 0,
        computerScore = 0;
    
    do {
        playerMove = prompt("Enter your move:","");
        if (playerMove === null) {
            return;
        }
        computerMove = computerPlay();
        result = playOneRound(playerMove,computerMove);
        switch (result) {
            case "victory": playerScore++;
                break;
            case "defeat": computerScore++;
                break;
            case "tie": 
        }
        console.log(computerMove,result,playerScore,computerScore);
    }
    while (playerScore<5 && computerScore<5);
    
    if (playerScore === 5) {
        return "Victory!";
    }
    else if (computerScore === 5)
        return "Defeat....";
}
console.log(game());
