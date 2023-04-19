const prompt = require('prompt-sync')();
let wordToGuess = 'citrine';
let wordToGuessArray = wordToGuess.split("");
let displayedArray = [];
let incorrectLettersArray = [];
let guessCounter = 6;
let currentGuess;

//[A,E,T] === [E,A,T]

initializeDisplayedArray();
updateDisplayedArray();
//While loop with conditions to end game - inside While loop will be our gameplay
while (guessCounter > 0 && displayedArray !== wordToGuessArray) {
  //prompt user for a letter to guess
  console.log('Guesses remaining:', guessCounter);
  console.log('Guess this word', displayedArray);
   currentGuess = prompt('What letter do you guess? :');
   for (let i = 0; i < wordToGuessArray.length; i++) {
    if (currentGuess === wordToGuessArray[i]) {
      updateDisplayedArray();
     }
     else {
      guessCounter--;
     }
   }
}

guessCounter = 6;

//logs and tests
console.log('This is the word you should have guessed -->', wordToGuess);


function updateDisplayedArray() {
  
  for (let i = 0; i < wordToGuessArray.length; i++) {
    if (displayedArray[i] === '_'){
      if (currentGuess ===  wordToGuessArray[i]) {
      // add the guess letter to the array
      displayedArray[i]=currentGuess;
      }
      else{
        displayedArray[i]='_';
      }
  }}
}

function initializeDisplayedArray() {
  for (let i = 0; i < wordToGuessArray.length; i++) {
    displayedArray[i]='_';
  }
}