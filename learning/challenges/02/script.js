'use strict'
// Coding Challenge #1
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

const calcAverage = (score1, score2, score3) => {
    return (score1 + score2 + score3) / 3
}

const avgDolhins = calcAverage(100, 200, 300)
const avgKoalas = calcAverage(300, 400, 500)

console.log(`Dolphins score average: ${avgDolhins}`)
console.log(`Koalas score average: ${avgKoalas}`)

const checkWinner = function (avgA, avgB) {
    if (avgDolhins >= 2 * avgKoalas) return `The winner is: Dolphins`
    else if (avgKoalas >=2 * avgDolhins) return `The winner is: Koalas`
    else return `No team wins`
}
console.log(checkWinner(avgDolhins, avgKoalas))

// Coding Challenge #2
/* Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
*/
const calcTip = (bill) => {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15 
    } else return bill * 0.20
}

const bills = [calcTip(100), calcTip(200), calcTip(300)]
const total = [100 + calcTip(100), 200 + calcTip(200), 300 + calcTip(300)]

console.log(`Using only the arrow function calcTip: ${calcTip(100)}`)
console.log(`The bills used: 100, 200, 300`)
console.log(`Logging the array that contains the tips: ${bills}`)
console.log(`Printing the total values (bills + values): ${total}`)