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

let randomValue =  Math.floor(Math.random() * 20);
let score = 20
let highScore = 0

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    if (score == 1) {
        score -= 1
        document.querySelector('.message').textContent = "⛔️ You lost!"
        document.querySelector('.guess').value = ""
        document.querySelector('.score').textContent = 0
    }
    else if (guess > randomValue){
        score -= 1
        document.querySelector('.message').textContent = "Less than the secret!"
        document.querySelector('.score').textContent = score
    }
    else if (guess < randomValue) {
        score -= 1
        document.querySelector('.message').textContent = "Bigger than the secret!"
        document.querySelector('.score').textContent = score
    }
    else if (guess == randomValue){
        score -= 1    
        if (score > highScore) {
            highScore = score
            document.querySelector('.highscore').textContent = highScore
        }
        document.querySelector('.score').textContent = score
        document.querySelector('.highscore').textContent = highScore
        document.querySelector('.message').textContent = "You win! 🏆"
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').textContent = randomValue
        document.querySelector('.number').style.width = '30rem'
    }
})
document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.guess').value = ""

    score = 20
    randomValue =  Math.floor(Math.random() * 20);

    document.querySelector('.score').textContent = score
})
