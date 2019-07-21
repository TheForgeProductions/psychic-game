var guesses = 10;
var wins = 0;
var losses = 0;
var guess = "";
var winLose = "";
const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var nope = ["Nope...", "Not it...", "Keep Trying...", "Uh Uh"];
var guessDisp; //pick random letter
nopeIndex = 0;
function pickLetter() {
    letter = letters[Math.floor(Math.random() * 26)];
    console.log(letter);
};
pickLetter();
window.onload = function(){
document.getElementById("guesses-left").innerHTML = 10;
document.getElementById("wins").innerHTML = 0;
document.getElementById("losses").innerHTML = 0;
document.getElementById("guesses-made").innerHTML = 0;
document.onkeypress = function (event) {
    console.log(guess);
    if (event.key === letter) {
        wins++;
        winLose = "You Win!";
        guesses = 10;
    }
    else if (guess !== letter && guesses > 1) {
        guesses--;
        if (nopeIndex < 3){
            nopeIndex++;
        }
        else {
            nopeIndex = 0;};
        winLose = nope[nopeIndex];
    }
    else {
        losses++;
        winLose = "You Lose! Try Again!";
        guesses = 10;
    }
    document.getElementById("win-lose").innerHTML = winLose;
    document.getElementById("guesses-left").innerHTML = guesses;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("losses").innerHTML = losses;
    document.getElementById("guesses-made").innerHTML = (10 - guesses);
}
}

//