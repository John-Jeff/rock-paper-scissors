//**Pseudocode**//
//When the game function is started, it will call the play function and keep track of the winner of each play call.
//During the play function, the user will be prompted to pick (and enter) Rock, Paper, or Scissors.
//The computer will be given the same options and randomly pick one.
//The play function will compare the two results and determine the winner based on the rules of Rock Paper Scissors.
//Once someone wins 5 games from the play function, the game function will end and the winner will be displayed.

let playerScore = 0;    //initalize player score
let computerScore = 0;  //initialize computer score

//Create function for computerPlay that returns Rock, Paper or Scissors.
function computerPlay() {
    const options = ['ROCK', 'PAPER', 'SCISSORS'];
    return options[Math.floor(Math.random() * 3)];
}

//Get user input and check for valid entry
function playerInput() {
    let player = prompt('Enter Rock, Paper or Scissors').toUpperCase(); //Make user input case-insensitive
    while (player !== 'ROCK' && player !== 'PAPER' && player !== 'SCISSORS') {  //Check for valid entry
        player = prompt('Not a valid option, please enter Rock, Paper or Scissors').toUpperCase();
    }
    return player;
}

//Create a function that plays a single round and takes two inputs (user input and computer input)
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'ROCK') {
        if (computerSelection === 'SCISSORS') {
            console.log('Rock beats Scissors! Player wins this round!');
            playerScore += 1;
        } else if (computerSelection === 'PAPER') {
            console.log('Paper beats Rock! Computer wins this round!');
            computerScore += 1;
        } else {
            console.log('Its a tie! No winner this round!');
        }
    } else if (playerSelection === 'PAPER') {
        if (computerSelection === 'ROCK') {
            console.log('Paper beats Rock! Player wins this round!');
            playerScore += 1;
        } else if (computerSelection === 'SCISSORS') {
            console.log('Scissors beats Paper! Computer wins this round!');
            computerScore += 1;
        } else {
            console.log('Its a tie! No winner this round!');
        }
    } else if (playerSelection === 'SCISSORS') {
        if (computerSelection === 'PAPER') {
            console.log('Scissors beats Paper! Player wins this round!');
            playerScore += 1;
        } else if (computerSelection === 'ROCK') {
            console.log('Rock beats Scissors! Computer wins this round!');
            computerScore += 1;
        } else {
            console.log('Its a tie! No winner this round!');
        }
    }
}

//Create function called game that calls play function to play 5 rounds and keeps score
function game() {
    alert('Welcome to a really cool game of Rock Paper Scissors');
    alert('First to 5 wins. Let the game begin!');
    while (playerScore !== 5 && computerScore !== 5) {
        playRound(playerInput(), computerPlay());
        console.log(`************\nScore:\nPlayer - ${playerScore} \nComputer - ${computerScore}\n************`);
    }
    if (playerScore === 5) {
        alert('Congrats! You are the winner of this really cool game!')
    } else {
        alert('Aww man, you lost. Better luck next time, loser.')
    }
}