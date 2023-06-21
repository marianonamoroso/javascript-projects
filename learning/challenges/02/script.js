'use strict'
/* Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
A team only wins if it has at least double the average score of the other team. Otherwise, no team wins! 
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team 
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time */
const dolphinsScore = 200 + 200 + 400
const koalasScore = 50 + 100 + 200

const calcAverage = (scores) => scores / 3

function checkWinner(){
    let winner = ""
    if (calcAverage(dolphinsScore) > calcAverage(koalasScore) && calcAverage(dolphinsScore) / calcAverage(koalasScore) > 2) {
        return console.log(`The winner: Dolphins`)
    } else if (calcAverage(koalasScore) > calcAverage(dolphinsScore) && calcAverage(koalasScore) / calcAverage(dolphinsScore) > 2) {
        return console.log(`The winner: Koalas`)
    } else {
        return console.log(`No team wins`)
    }
}
console.log(`Dolphins's average: ${calcAverage(dolphinsScore)}`)
console.log(`Koalas's average: ${calcAverage(koalasScore)}`)
console.log(checkWinner())

