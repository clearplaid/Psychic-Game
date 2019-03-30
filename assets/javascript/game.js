
//creates an array that lists all options
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

//creating variables to hold wins, losses, remaining guesses
var wins = 0;
var losses = 0;
var remainingGuesses = 15;
var userGuessesSoFar = " ";


// Assignment Instructions
// ---wins must increase when user guesses right
// ---losses must increase when user guesses wrong
// ---remaining guesses must decrease when wrong
// already guessed must output what user typed and remain on screen until win or lose
// when user wins increase win counter and restart game without refresh
// when user loses increase losses counter and restart game without refresh

var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("begin " + computerGuess);
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
            remainingGuesses = 15;
            userGuessesSoFar = "";
            computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
            console.log("compguesswins " + computerGuess);
        }
        else
        {
            //decrement remaining guesses and add userguesses guessed
            remainingGuesses--;
            //needs to append the string for userguess
            userGuessesSoFar += userGuess;

            if(remainingGuesses === 0)
            {
                losses++;
                remainingGuesses = 15;
                userGuessesSoFar = "";
                computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
                console.log("compguessloss " + computerGuess);
            }
            
        }

        //create function to output to html
        function output()
        {
            document.getElementById("userchoice-text").innerHTML = "You chose: " + userGuess;

            document.getElementById("wins-text").innerHTML = "Wins: " + wins;

            document.getElementById("losses-text").innerHTML = "Losses: " + losses;

            document.getElementById("guessesSoFar").innerHTML = "Your Guesses so far: " + userGuessesSoFar;

            document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + remainingGuesses;
        }
        output();
        
    }