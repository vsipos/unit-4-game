$ (document).ready(function(){

// To set the first number to a random number 
let random=(Math.floor(Math.random()*101) + 19);

// Linking random number to #randomNumber id 
$('#randomNumber').text(random);

// Set Value to gems 
let num1=(Math.floor(Math.random()*12)+1);
let num2=(Math.floor(Math.random()*12)+1);
let num3=(Math.floor(Math.random()*12)+1);
let num4=(Math.floor(Math.random()*12)+1);

// Linking gems to random numbers 
$('#one').button

var userGuess = 0;
var wins = 0;
var losses = 0;

$('#numberWins').text(wins);
$('#numberLosses').text(losses);

// set reset 
function reset() {
    Random=Math.floor(Math.random()*101+19);
    console.log(Random)
    $('#randomNumber').text(Random);
}

// set up clicks for buttons and conditions when pressed 
$('#one').on('click', function (){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    $('#finalTotal').text(userTotal);
})
});