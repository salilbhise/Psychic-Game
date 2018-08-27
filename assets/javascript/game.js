// Setup for wins, losses, guesses left, and number of guesses so far

var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessesSoFar = [];

// Available letters in the array

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //list of letters to choose from

document.onkeypress = function (event) {

    // User's guess

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();


    // Computer's guess

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // User guess vs guesses so far

    guessesSoFar.push(userGuess); 

    // If and else if statements 

    if (userGuess === computerGuess) {
        wins++;
        alert("Correct!");
        guessesLeft = 10; 
        guessesSoFar.length = 0; 
    }

    else if (guessesLeft === 0) {
        losses++;
        alert("Try again.");
        guessesLeft = 10;
        guessesSoFar.length = 0;
    }

    
    else if (userGuess != computerGuess) {
        --guessesLeft;
    }

    var html = "<h1>The Psychic Game</h1>" + 
    "<p>Guess what letter I'm thinking of</p>" +
    "<p>Wins:" + 
    wins + 
    "</p>" +
    "<p>Losses:" + 
    losses + 
    "</p>" +
    "<p>Guesses Left:" + 
    guessesLeft + 
    "</p>" +
    "<p>Your Guesses so far:" +
    guessesSoFar +
    "</p>";

    document.querySelector("#outputGuess").innerHTML = html;

}