// 4. `isLongList.js`: prompts the user for an array then logs out a boolean indicating whether the array's length is at least 10

//Get your prompt
const prompt = require('prompt-sync')();

//Get your movie title
let movieTitle = prompt('What is your favorite movie?   ');

//Get Movie rating
const rating = (prompt("From 1 - 10 What would you rate it amoungst all your favorites?   "))

//read it back to them.
console.log(movieTitle, 'is a ', rating, ' so you say!');

//Measure it / log it out
console.log('Did you know that ', movieTitle, ' is ', movieTitle.length, ' characters long?');

//Compare it.
if (movieTitle.length > 9) {
    console.log("That's more than 10!", movieTitle.length, " sounds like a movie that is worth it in entertainment and character length. Not sure what to make of it though considering you gave it a ", rating);
} else {
    console.log("Well the character length is only ", movieTitle.length, ". At least we've got your rating of ", rating, " to trust in the end!");
}