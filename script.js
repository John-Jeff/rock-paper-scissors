//**Pseudocode**//
//When the game function is started, it will call the play function and keep track of the winner of each play call.
//During the play function, the user will be prompted to pick (and enter) Rock, Paper, or Scissors.
//The computer will be given the same options and randomly pick one.
//The play function will compare the two results and determine the winner based on the rules of Rock Paper Scissors.
//Once someone wins 5 games from the play function, the game function will end and the winner will be displayed.

const rock = {
    win: 'Scissors',
    lose: 'Paper',
    tie: 'Rock',
    button: document.querySelector('#rock-btn')
}

const paper = {
    win: 'Rock',
    lose: 'Scissors',
    tie: 'Paper',
    button: document.querySelector('#paper-btn')
}

const scissors = {
    win: 'Paper',
    lose: 'Rock',
    tie: 'Scissors',
    button: document.querySelector('#scissor-btn')
}

let playerScore = document.querySelector('#player-score');
let computerScore = document.querySelector('#comp-score');
let result = document.querySelector('.results');
let resetField = document.querySelector('.reset');
// let playerScore = 0;    //initalize player score
// let computerScore = 0;  //initialize computer score

rock.button.addEventListener('click', function (e) {
    decideWinner(rock);
})

paper.button.addEventListener('click', function (e) {
    decideWinner(paper);
})

scissors.button.addEventListener('click', function (e) {
    decideWinner(scissors);
})

//Create function for computerPlay that returns Rock, Paper or Scissors.
function computerPlay() {
    const options = ['Rock', 'Paper', 'Scissors'];
    return options[Math.floor(Math.random() * 3)];
}

function decideWinner(selection) {
    let comp = computerPlay();
    if (comp === selection.win) {
        result.textContent = `${selection.tie} beats ${selection.win}! Player wins this round!`;
        playerScore.textContent++;
    } else if (comp === selection.lose) {
        result.textContent = `${selection.lose} beats ${selection.tie}! Computer wins this round!`;
        computerScore.textContent++;
    } else {
        result.textContent = 'Its a tie! No winner this round!';
    }

    if (playerScore.textContent === '5' || computerScore.textContent === '5') {
        rock.button.disabled = true;
        paper.button.disabled = true;
        scissors.button.disabled = true;

        if (playerScore.textContent === '5') {
            result.textContent = 'Congrats! You beat Greg!';
        } else if (computerScore.textContent === '5') {
            result.textContent = "Congrats! You're a loser";
        }

        resetGame();
    }

}

function resetGame() {
    let resetButton = document.createElement('button');
    resetButton.textContent = 'Play Again?';
    resetButton.style.marginTop = '30px';
    resetButton.classList.add('button');
    resetField.classList.add('reset-button');
    resetField.appendChild(resetButton);

    resetButton.addEventListener('click', function (e) {
        rock.button.disabled = false;
        paper.button.disabled = false;
        scissors.button.disabled = false;
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        result.textContent = 'Make a selection to begin';
        resetField.removeChild(resetButton);
    })
}

// //Get user input and check for valid entry
// function playerInput() {
//     let player = prompt('Enter Rock, Paper or Scissors').toUpperCase(); //Make user input case-insensitive
//     while (player !== 'ROCK' && player !== 'PAPER' && player !== 'SCISSORS') {  //Check for valid entry
//         player = prompt('Not a valid option, please enter Rock, Paper or Scissors').toUpperCase();
//     }
//     return player;
// }

//Create a function that plays a single round and takes two inputs (user input and computer input)

//Create function called game that calls play function to play 5 rounds and keeps score
// function game() {
//     alert('Welcome to a really cool game of Rock Paper Scissors');
//     alert('First to 5 wins. Let the game begin!');
//     while (playerScore !== 5 && computerScore !== 5) {
//         playRound(playerInput(), computerPlay());
//         console.log(`************\nScore:\nPlayer - ${playerScore} \nComputer - ${computerScore}\n************`);
//     }
//     if (playerScore === 5) {
//         alert('Congrats! You are the winner of this really cool game!')
//     } else {
//         alert('Aww man, you lost. Better luck next time, loser.')
//     }
// }