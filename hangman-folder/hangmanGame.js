const prompt = require('prompt-sync')({sigint: true});
let wordToGuess = 'citrine';
let wordToGuessArray = wordToGuess.split("");
let displayedArray = [];
let incorrectLettersArray = [];
let guessCounter = 6;
let currentGuess;

//[A,E,T] === [E,A,T]
//[E,A,T] !== [E,A,T] when objects
initializeDisplayedArray();
updateDisplayedArray();
//While loop with conditions to end game - inside While loop will be our gameplay
while (guessCounter !== 0 && displayedArray.toString() !== wordToGuessArray.toString()) {
  //prompt user for a letter to guess

  console.log('Guess this word', displayedArray);

  currentGuess = prompt('What letter do you guess? :');

  updateDisplayedArray();

  if (wordToGuessArray.includes(currentGuess)) {
    console.log('CORRECT...dang you smart');
  } else {
    console.log('WRONG TRY AGAIN');
    incorrectLettersArray.push(currentGuess);
    guessCounter--;
  }
  console.log('Guesses remaining:', guessCounter);
}



//logs and tests
console.log('This is the word you should have guessed -->', wordToGuess);


function updateDisplayedArray() {
  for (let i = 0; i < wordToGuessArray.length; i++) {
    if (currentGuess ===  wordToGuessArray[i]) {
      // add the guess letter to the array
      displayedArray[i] = currentGuess;
    }
  }
}

function initializeDisplayedArray() {
  for (let i = 0; i < wordToGuessArray.length; i++) {
    displayedArray[i]='_';
  }
}