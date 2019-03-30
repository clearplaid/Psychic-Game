
//creates an array that lists all options
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// creating variables to hold wins, losses, remaining guesses, and an empty array to hold what the user guessed until a new round begins
var wins = 0;
var losses = 0;
var remainingGuesses = 15;
var userGuessesSoFar = [];

// create variable to hold computer's secret guess
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

    //function used when user inputs key to make guess
    document.onkeyup = function (event) {
    //determines pressed key
    var userGuess = event.key;

    //if userguess is the same as computer win if not lose and try again
    if (userGuess === computerGuess) {
        //increment wins, reset
        wins++;
        newRound();
    }
    else {
        //decrement remaining guesses and add userguesses guessed
        remainingGuesses--;
        //needs to append the string for userguess
        userGuessesSoFar.push(userGuess);

        if (remainingGuesses === 0) {
            losses++;
            newRound();
        }

    }

    //create function to start a new round of the game
    function newRound() {
        remainingGuesses = 15;
        userGuessesSoFar = [];
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    //create function to output to html
    function output() {
        document.getElementById("wins-text").innerHTML = "Wins: " + wins;

        document.getElementById("losses-text").innerHTML = "Losses: " + losses;

        document.getElementById("guessesSoFar").innerHTML = "Your Guesses so far: " + userGuessesSoFar.join(", ");

        document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + remainingGuesses;
    }
    output();

}