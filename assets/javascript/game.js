$ (document).ready(function(){

// To set the first number to a random number 
let random=(Math.floor(Math.random()*101) + 19);

// Linking random number to #randomNumber id 
$('#randomNumber').text(random);

// Set Value to gems 
let gem1 = (Math.floor(Math.random()*12)+1);
let gem2 = (Math.floor(Math.random()*12)+1);
let gem3 = (Math.floor(Math.random()*12)+1);
let gem4 = (Math.floor(Math.random()*12)+1);

console.log(random);
console.log(gem1);
console.log(gem2);
console.log(gem3);
console.log(gem4);

// set wins, losses and total to 0 
var userGuess = 0;
$('#finalTotal').text(userGuess);

var wins = 0;
$('#numberWins').text(wins);

var losses = 0;
$('#numberLosses').text(losses);

 // reset game
 function reset(){
    random=(Math.floor(Math.random()*101) + 19);
    console.log(random);
    $('#randomNumber').text(random);
    gem1 = (Math.floor(Math.random()*12)+1);
    gem2 = (Math.floor(Math.random()*12)+1);
    gem3 = (Math.floor(Math.random()*12)+1);
    gem4 = (Math.floor(Math.random()*12)+1);
    userGuess = 0;
    $('#finalTotal').text(userGuess);
}

// Add wins to score
function yay() {
    wins++;
    $('#numberWins').text(wins);
    reset();
}

// Add losses to score
function nay() { 
    losses++;
    $('#numberLosses').text(losses);
    reset();
}

// create click function for gem1
$('#one').click(function(){
    userGuess = userGuess + gem1;
    console.log("User Guess: " + userGuess);
    $('#finalTotal').text(userGuess);
    if (userGuess === random) {
        yay();
    }
    else if (userGuess > random) {
        nay();
    }
})

// create click function for gem2
$('#two').click(function(){
    userGuess = userGuess + gem2;
    console.log("User Guess: " + userGuess);
    $('#finalTotal').text(userGuess);
    if (userGuess === random) {
        yay()
    }
    else if (userGuess > random) {
        nay()
    }
})

// create click function for gem3
$('#three').click(function(){
    userGuess = userGuess + gem3;
    console.log("User Guess: " + userGuess);
    $('#finalTotal').text(userGuess);
    if (userGuess === random) {
        yay()
    }
    else if (userGuess > random) {
        nay()
    }
})

// create click function for gem4
$('#four').click(function(){
    userGuess = userGuess + gem4;
    console.log("User Guess: " + userGuess);
    $('#finalTotal').text(userGuess);

    if (userGuess === random) {
        yay()
    }
    else if (userGuess > random) {
        nay()
    }
})
});
