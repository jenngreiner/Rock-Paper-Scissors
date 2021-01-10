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