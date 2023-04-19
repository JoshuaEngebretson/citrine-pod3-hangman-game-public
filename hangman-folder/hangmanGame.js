const prompt = require('prompt-sync')({sigint: true});

let wordToGuess = 'citrine';
let wordToGuessArray = wordToGuess.split("");
let displayedArray = [];
let incorrectLettersArray = [];
let guessCounter = 6;
let currentGuess;
let wordsForGame = [
  'quokka', 'potato', 'citrine',
  'unicorn', 'jquery', 'tangerine',
  'prime', 'harasymiw', 'express',
  'database'
];


gameReset();


function playHangman() {
  //While loop with conditions to end game - inside While loop will be our gameplay
  while (guessCounter !== 0 && displayedArray.toString() !== wordToGuessArray.toString()) {
    // put some space in between each guess:
    clearSmallerScreen();
    console.log('Guess this word', displayedArray);


    console.log('Here are the incorrect letters you have guessed so far \n', incorrectLettersArray);
    //prompt user for a letter to guess & show them the updated display:
    currentGuess = prompt('What letter do you guess? --> ').toLowerCase();
    updateDisplayedArray();

    if (wordToGuessArray.includes(currentGuess)) {
      console.log('\n\tCORRECT...dang you smart');
    } else {
      console.log('\n\tWRONG TRY AGAIN');
      incorrectLettersArray.push(currentGuess);
      guessCounter--;
    }
    console.log('\tGuesses remaining:', guessCounter);

  }

  if (displayedArray.toString() === wordToGuessArray.toString()) {
    //Win or Lose console logs
    console.log(`
    Big Winner YAY!
    You guessed --> [${displayedArray}]
    The word was --> ${wordToGuess}`);
    gameReset();
    // playHangman();
  }
  else {
    //Lose message
    console.log('This was the secret word -->', wordToGuess);
    console.log('Better luck next time 🥲');
    gameReset();
    // playHangman();
  }
}


function gameReset() {
  
  //randomize the new word
  wordToGuess = wordsForGame[randomNum()];

  // Adjust the word into an array for means of looping
  wordToGuessArray = wordToGuess.split("");

  //Clear out the displayedArray
  displayedArray = [];
  
  //
  incorrectLettersArray = [];
  guessCounter = 6;
  currentGuess = "";

  initializeDisplayedArray();
  // updateDisplayedArray();
  wantToPlay();

}


function updateDisplayedArray() {
  // currentGuess = currentGuess.toLowerCase();
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


function clearSmallerScreen() {
  console.log('\n\n');
}


function clearScreen() {
  console.log('\n\n\n\n');
  // console.log('\t\t Game Reset \n \t 👾👾👾👾👾👾👾👾👾👾👾');
  console.log(`
    👾👾👾👾👾👾👾👾👾👾👾
    👾    Game Reset    👾
    👾👾👾👾👾👾👾👾👾👾👾`)
}


function randomNum(){
  let min = 0;
  let max = wordsForGame.length;
  
  return Math.floor(Math.random() * max); 
}


function wantToPlay() {
  
  clearSmallerScreen();
  
  let userWantToPlay = prompt('Do you want to play Hangman? - Enter "yes" or "no": ');
  userWantToPlay = userWantToPlay.toLowerCase()

  if (userWantToPlay === 'yes' || userWantToPlay === 'y') {
    console.log(`Let's play Hangman!`);
    clearScreen();
    playHangman();
  }
  else if (userWantToPlay === 'no'|| userWantToPlay === 'n') {
    console.log('\nCool, thanks for running the application.');
    clearSmallerScreen();
  } else {
    console.log('Hey... please choose "yes" or "no" \n 😡');
    wantToPlay();
  }
}