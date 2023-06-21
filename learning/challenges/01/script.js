// Coding Challenge #1
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
let mass
let height
let markBMI
let johnBMI
let markHigherBMI

//Mark
mass = 78
height = 1.69
markBMI = mass / height ** 2
console.log(`Mark's BMI: ${markBMI}`)

//John
mass = 92
height = 1.95
johnBMI = mass / height ** 2
console.log(`John's BMI: ${johnBMI}`)
console.log(`Is Mark higher than John? ${markBMI > johnBMI ? markHigherBMI = true : markHigherBMI = false}`)


// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
// 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's!`)
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's!`)
}
// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score) 
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy

let arrayDolphinsScore = [96, 108, 89]
let dolphinsCounter = 0
let dolphinsHigherScoreCounter = 0

let arrayKoalasScore = [110,91,110]
let koalasCounter = 0
let koalasHigherScoreCounter = 0

for (var i = 0; i < 3; i++) {
    if (arrayDolphinsScore[i] > arrayKoalasScore[i]) {
        dolphinsCounter++
        if (arrayDolphinsScore[i] > 100) dolphinsHigherScoreCounter++
    } else {
        koalasCounter++
        if (arrayKoalasScore[i] > 100) koalasHigherScoreCounter++    
    }
}

console.log(`DolphinsCounter: ${dolphinsCounter} \nKoalasCounter: ${koalasCounter} \nDolphins100: ${dolphinsHigherScoreCounter} \nKoalas100: ${koalasHigherScoreCounter}`)
if (dolphinsCounter > koalasCounter && dolphinsHigherScoreCounter > koalasHigherScoreCounter) {
    console.log("The winner was Dolphins")
} else if (koalasCounter > dolphinsCounter && koalasHigherScoreCounter > dolphinsHigherScoreCounter) {
    console.log("The winner was Koalas")
} else {
    console.log("It was a deuce")
}

// Coding Challenge #4
// Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
bill = 430
tip = 0
console.log(`The tip is: ${bill > 30 && bill < 300 ? tip = bill * 0.15 : tip = bill * 0.2}`)
console.log(`The bill was ${bill}, the tip was ${bill > 30 && bill < 300 ? bill * 0.15 : bill * 0.2}, and the total value ${bill + tip}`)