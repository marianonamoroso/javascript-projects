// LECTURE: let, const and var
let country = "Argentina";
let continent = "America";
let population = 400000000;
let language = "Spanish";
const isIsland = false;

// LECTURE: Data Types
console.log("LECTURE: Data Types");
console.log("Country: " + country);
console.log("Population: " + population);
console.log("Is an island?: " + isIsland);
console.log("Language: " + language);

// LECTURE: Basic Operators
population = population / 2;
console.log("LECTURE: Basic Operators");
console.log("Population (/2): " + population);
population = population + 1;
console.log("Population (+1): " + population);

// LECTURE: Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// LECTURE: Taking Decisions: if / else Statements
if (population > 33000000)
  console.log(`${country}'s population is above average`);
population = 13000000;
if (population > 33000000)
  console.log(`${country}'s population is above average`);
population = 400000000;
if (population > 33000000)
  console.log(`${country}'s population is above average`);

// LECTURE: Type Conversion and Coercion
console.log("9" - "5"); // 4
console.log("19" - "13" + "17"); // 617
console.log("19" - "13" + 17); // 23
console.log("123" < 57); // False
console.log(5 + 6 + "4" + 9 - 4 - 2); //1143

// LECTURE: Equality Operators: == vs. ===
let numNeighbours = prompt(
  "How many neighbour countries does your country have?"
);
Number(numNeighbours);
if (numNeighbours == 1) {
  console.log("Only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border!");
} else {
  console.log("No borders");
}

// LECTURE: Logical Operators
if (language == "Spanish" && population > 3000000) {
  console.log("You should live in Argentina :)");
} else {
  console.log("Argentina does not meet your criteria");
}
// LECTURE: The switch Statement
switch (language) {
  case "Chinese":
    console.log("MOST number of native speakers!");
    break;
  case "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "English":
    console.log("3rd place");
    break;
  case "Hindi":
    console.log("Number 4'");
    break;
  case "Arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}

// LECTURE: The Conditional (Ternary) Operator
console.log(
  `${country}'s poppulation is ${
    population > 33000000 ? "above" : "below"
  } average`
);
