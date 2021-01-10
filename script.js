// The completed application should meet the following criteria:
var wins = 0;
var ties = 0;
var losses = 0;

// Array of options for computer to pick from
var options = ["R", "P", "S"]

// As a user, I want to play Rock, Paper, Scissors against an automated opponent.
// R beats S, S beats P, P beats R
var playGame = function () {
    // Ask user for their choice
    var playerChoice = window.prompt("Enter R, P, or S.")

    // If user presses cancel, immediately end function
    if (!playerChoice) {
        return;
    }
    // Convert to uppercase to make comparison easier
    playerChoice = playerChoice.toUpperCase();

    // Get random index from array of options
    var optionsIndex = Math.floor(Math.random() * options.length);
    var computerChoice = options[optionsIndex];

    window.alert("The computer chose " + computerChoice);

    // If choices are the same, it's a tie
    if (playerChoice === computerChoice) {
        ties++;
        window.alert("It's a tie!");

        //Check every win condition for the player
    } else if (playerChoice === "R" && computerChoice === "S" || playerChoice === "S" && computerChoice === "P" || playerChoice === "P" && computerChoice === "R") {
        wins++
        window.alert("You won!")

        // If above conditions failed, it's a loss
    } else {
        losses++
        window.alert("You lost!")
    };

    // Display stats
    window.alert("Stats\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

    // Ask if they want to play again
    var playAgain = window.confirm("Play again?");

    if (playAgain) {
        playGame();
    }
};

// Play game for the first time
playGame();

// After each round, display the total wins, ties and losses.

// As a user, I want to see my total wins, ties, and losses after each round.






// As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.


// As a user, I expect the computer to choose R, P, or S in return.


// As a user, I want the option to play again whether I win or lose.
window.confirm("Do you want to play again?")



// Specifications
// Must use the alert(), confirm(), and prompt() methods to collect user input and display information to the user.


// The computer's selection must be random to ensure a fair game.

// Math.random https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random