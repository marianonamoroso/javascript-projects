// Coding Challenge #1
/*
JavaScript in the Browser: DOM and Events
Coding Challenge #1
Implement a game rest functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input
fields
4. Also restore the original background color (#222) and number width (15rem)
*/
'use strict';

// Variables
let tries = 20
let score = tries
let highScore = 0
let randomValue = 0

// Core Functions
const resetScore = function() {
    return score = tries
}

const calcRandomValue = function (number) {
     randomValue =  Math.floor(Math.random() * number)
}

const decreaseScoreCounter = function () {score -= 1}

// DOM Functions
const displayMessage = (message) => {
    document.querySelector('.message').textContent = message
}

const displayNumber = (numberText) => {
    document.querySelector('.number').textContent = numberText
}

const changeGuessValue = (guessText) => {
    document.querySelector('.guess').value = guessText
}
const displayHighscore = (highscoreText) => {
    document.querySelector('.highscore').textContent = highscoreText
}

const changeBackgroundColor = (color) => {
    document.querySelector('body').style.backgroundColor = color
}

const changeScore = (score) => {
    document.querySelector('.score').textContent = score
}

const changeNumberWidth = (width) => {
    document.querySelector('.number').style.width = width

}

const returnGuessValue = function () {
    return Number(document.querySelector('.guess').value)
}

// Executing Random Value
calcRandomValue(20)

console.log(randomValue)

// Guess
document.querySelector('.check').addEventListener('click', function(){
    const guess = returnGuessValue()
    if (guess == randomValue){
        decreaseScoreCounter()
        if (score > highScore) {
            highScore = score
            displayHighscore(highScore)
        }
        
        changeScore(score)
        displayHighscore(highScore)
        displayMessage("You win! 🏆")

        changeBackgroundColor("#60b347")
        displayNumber(randomValue)
        changeNumberWidth("30rem")
    }
    else if (score == 1) {
        decreaseScoreCounter()
        displayMessage("⛔️ You lost!")
        changeGuessValue("")
        changeScore(0)
    }
    else if (guess !== randomValue){
        decreaseScoreCounter()
        displayMessage(`${guess > randomValue ? "Less than the secret!" : "Bigger than the secret!" }`)
        changeScore(score)
    }

})
// Again
document.querySelector('.again').addEventListener('click', function(){
    changeNumberWidth("15rem")
    changeBackgroundColor('#222')
    changeGuessValue("")
    displayNumber("?")
    resetScore()
    changeScore(score)
    calcRandomValue(20)
})
