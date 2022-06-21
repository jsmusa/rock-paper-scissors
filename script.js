const playBox = document.getElementById('player-box');
const rpsButton = document.getElementsByClassName('rps-button');
const scoreBox = document.getElementById('score-box');
const playerScoreBox = document.querySelector('.player-score-box');
const computerScoreBox = document.querySelector('.computer-score-box');
const resultBox = document.getElementById('result-box');
const playerResult = document.createElement('div');
const computerResult = document.createElement('div');
const roundResult = document.createElement('div');
const restart = document.createElement('button');
let pScore = document.createElement('div');
let cScore = document.createElement('div');
let playerScore = 0;
let computerScore = 0;
// console.log(playerScoreBox,computerScoreBox);

pScore.className = 'player-score';
cScore.className = 'computer-score';

// use loop since rpsButton is a node list
for (button of rpsButton) {
    button.addEventListener('click',playGame);
    button.addEventListener('mouseenter',(e) => {
        e.target.classList.add('hover');
    });
    button.addEventListener('mouseleave',(e) => {
        e.target.classList.remove('hover');
    })
}

restart.addEventListener('click',() => {
    playerScore = 0;
    computerScore = 0;
    scoreTally(playerScore,computerScore);
    restart.setAttribute('style','display:none');
});

// plays game of rps
function playGame(e) {
    if (playerScore < 5 && computerScore < 5) {
        let move = e.target.id;
        let computerMove = computerPlay();
        let result = compare(move,computerMove);
        console.log(move, computerMove, result);
        if (result === 'victory') {
            playerScore++;
            scoreTally(playerScore,computerScore);
        } else if (result === 'defeat') {
            computerScore++;
            scoreTally(playerScore,computerScore);
        }
        showResult(move,computerMove,result);
        console.log(playerScore,computerScore);
    } 
        // playBox.setAttribute ('style','display:none');
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
    if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock") {
        return("defeat");//`Defeat! Your ${playerSelection} is no match against ${computerSelection}.`;
    } 
    else if (computerSelection === "rock" && playerSelection === "paper" || computerSelection === "paper" && playerSelection === "scissors" || computerSelection === "scissors" && playerSelection === "rock") {
        return("victory");//`Victory! ${playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase()} destroys ${computerSelection}.`;
    }
    else if (playerSelection === computerSelection){
        return("tie");//`No winner! You've both used ${playerSelection}.`;
    }
    else {
    return("hmm"); //"Please enter your move.";
    }
}

// appends playerMove and computerMove onto resultBox
function showResult(playerMove,computerMove,result) {
        playerResult.textContent = 'You play ' + playerMove + '.';
        computerResult.textContent = 'Opponent plays '+ computerMove + '.';
        roundResult.textContent = result;
        resultBox.append(playerResult,computerResult,roundResult);
        if (playerScore === 5 || computerScore === 5) {
            addReset();
        }
}

// appends score of both player and computer onto scoreBox 
function scoreTally(playerScore, computerScore) {
    pScore.textContent = `${playerScore}`;
    playerScoreBox.appendChild(pScore);
    cScore.textContent = `${computerScore}`;
    computerScoreBox.appendChild(cScore); 
}

// adds reset button
function addReset() {
    restart.textContent = 'Restart game';
    resultBox.appendChild(restart);
}
