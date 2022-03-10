const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {  // all buttons listen for click
    userChoice = e.target.id            // set click to userChoice
    userChoiceDisplay.innerHTML = userChoice // display userChoice in corresponding span
    generateComputerChoice()  
    getResult() 
}));

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1   //takes possibleChoices.length(amount of buttons) and selects random from set. use math.floor to round down and return integer
    console.log(randomNumber)

    if(randomNumber === 1) {
        computerChoice = 'rock'
    }

    if(randomNumber === 2) {
        computerChoice = 'paper'
    }

    if(randomNumber === 3) {
        computerChoice = 'scissors'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
    if (computerChoice === userChoice) {
        result = 'Dang, a draw! Shoot Again'
    }

    if (computerChoice === 'rock' && userChoice === 'paper') {
        result = 'Smooth cover! You WIN!'
    }

    if (computerChoice === 'rock' && userChoice === 'scissors') {
        result = 'Got Banged On! You LOSE!'
    }

    if (computerChoice === 'paper' && userChoice === 'rock') {
        result = 'Smothered! You LOSE!'
    }

    if (computerChoice === 'paper' && userChoice === 'scissors') {
        result = 'Sliced and Diced! You WIN!'
    }

    if (computerChoice === 'scissors' && userChoice === 'rock') {
        result = 'Got EMMM! You WIN!'
    }

    if (computerChoice === 'scissors' && userChoice === 'paper') {
        result = 'What was you thinking? You LOSE!'
    }
    resultDisplay.innerHTML = result
}
