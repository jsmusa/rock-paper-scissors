const rpsButton = document.getElementsByClassName('rps-button');
const scoreBox = document.getElementById('score-box');

// use loop since rpsButton is a node list
for (button of rpsButton) {
    button.addEventListener('click',playOneRound);
}

// plays one round of rps
function playOneRound(e) {
    if (e.target.id !== '') {
        let move = e.target.id;
        let computerMove = computerPlay();
        compare(move,computerMove);
    }  
}
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

// get random integer
function getRandomInt (max) {
    return Math.floor(Math.random()*(max+1));
}

//compares playerSelection and computerSelection to see who wins

function compare (playerSelection,computerSelection) {
    console.log(playerSelection);
    console.log(computerSelection);
    if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        console.log("defeat");//`Defeat! Your ${playerSelection} is no match against ${computerSelection}.`;
    } 
    else if (computerSelection === "rock" && playerSelection === "paper" || computerSelection === "paper" && playerSelection === "scissors" || computerSelection === "scissors" && playerSelection === "rock") {
        console.log ("victory");//`Victory! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} destroys ${computerSelection}.`;
    }
    else if (playerSelection === computerSelection){
        console.log("tie");//`No winner! You've both used ${playerSelection}.`;
    }
    else {
    console.log("hmm"); //"Please enter your move.";
    }
}

// console.log(playOneRound(playerMove,computerMove));

// multiple rounds of rps: do a round of rps until one wins 5
// use loops

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
// console.log(game());
