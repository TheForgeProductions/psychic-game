var guesses = 10;
var wins = 0;
var wins = 0;
var letter = "";
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//pick random letter
function pickLetter() {
    letter = letters[Math.floor(Math.random() * 26)];
    console.log(letter);
};
pickLetter();
//listen for letter and make lowercase
document.onkeyup = function (event) {
    guess = prompt("Which letter is it?");
    guess = event.key;
    console.log(guess);
}
if (guess === letter) {
    wins++;
    document.getElementById("win-lose").innerHTML("You're Correct!");
    guesses = 10;
}
else if (guess !== letter && guesses >= 1) {
    guesses--;
    document.getElementById("win-lose").innerHTML("Nope!");
}
else {
    losses++;
    document.getElementById("win-lose").innerHTML("You Lose!");
    guesses = 10;
};


//