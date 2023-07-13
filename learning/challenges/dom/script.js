'use strict';

let randomValue =  Math.floor(Math.random() * 20);
let recordScoreCounter = 0
let scoreCounter = 20
let highCounter = 20
console.log(randomValue)

document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    if (scoreCounter == 1) {
        document.querySelector('.message').textContent = "⛔️ You lost!"
        document.querySelector('.guess').value = ""
        document.querySelector('.score').textContent = 0
    }
    else if (guess > randomValue){
        scoreCounter -= 1
        highCounter -= 1
        document.querySelector('.message').textContent = "Less than the secret!"
        document.querySelector('.score').textContent = scoreCounter
    }
    else if (guess < randomValue) {
        scoreCounter -= 1
        highCounter -= 1
        document.querySelector('.message').textContent = "Bigger than the secret!"
        document.querySelector('.score').textContent = scoreCounter
    }
    else if (guess == randomValue){
        scoreCounter -= 1
        highCounter -= 1
        
        document.querySelector('.score').textContent = scoreCounter
        document.querySelector('.highscore').textContent = highCounter

        highCounter > recordScoreCounter ? recordScoreCounter = highCounter :
        document.querySelector('.highscore').textContent = recordScoreCounter
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
    scoreCounter = 20
    highCounter = 20
    randomValue =  Math.floor(Math.random() * 20);
    document.querySelector('.score').textContent = scoreCounter
    console.log(randomValue)
})
