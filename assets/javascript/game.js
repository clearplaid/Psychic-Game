
//creates an array that lists all options
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//creating variables to hold wins, losses, remaining guesses
var wins = 0;
var losses = 0;
var remainingGuesses = 15;



// Assignment Instructions
// wins must increase when user guesses right
// losses must increase when user guesses wrong
// remaining guesses must decrease when wrong
// already guessed must output what user typed and remain on screen until win or lose
// when user wins increase win counter and restart game without refresh
// when user loses increase losses counter and restart game without refresh

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerGuess);
    //function used when user inputs key to make guess
    document.onkeyup = function(event) 
    {
        //determines pressed key
        var userGuess = event.key;
         console.log(userGuess);
        
        //if userguess is the same as computer win if not lose and try again
        if(userGuess === computerGuess)
        {
            //increment wins
            wins++;
            console.log(wins);
        }
        else
        {
            //increment losses, decrement remaining guesses
            losses++;
            remainingGuesses--;
            console.log(losses, remainingGuesses);
           
            
        }
        //create function to output to html
        function output()
        {
            document.getElementById("userchoice-text").innerHTML = "You chose: " + userGuess;
            document.getElementById("guessesSoFar").innerHTML = "Your Guesses so far: " + userGuess;
            document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + remainingGuesses;
            document.getElementById("wins-text").innerHTML = "Wins: " + wins;;
            document.getElementById("losses-text").innerHTML = "Losses: " + losses;
        }
        output();
        
    }