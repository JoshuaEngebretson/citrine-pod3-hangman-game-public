const prompt = require('prompt-sync')();
let wordToGuess = 'citrine';
let wordToGuessArray = wordToGuess.split("");
let displayedArray = [];
let incorrectLettersArray = [];
let guessCounter = 6;

//[A,E,T] === [E,A,T]

//While loop with conditions to end game - inside While loop will be our gameplay
while (guessCounter !== 0 && displayedArray !== wordToGuessArray) {
  //prompt user for a letter to guess
  console.log('Guesses remaining:', guessCounter);
  let currentGuess = prompt('What letter do you guess? :')

  //adds a counter to our guess
  guessCounter--;
}


//logs and tests
console.log('This is the word you should have guessed -->', wordToGuess);

function updateDisplayedArray() {
  
  for (let i = 0; i < wordToGuessArray.length; i++) {

  if (currentGuess ===  wordToGuessArray[i]) {
    // add the guess letter to the array
    displayedArray[i]=currentGuess;
  }
  else{
    displayedArray[i]='_';
  }
  
}
}



console.log(displayedArray);