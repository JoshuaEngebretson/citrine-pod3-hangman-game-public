# Hangman
​
Today, you must work on building this classic guess-the-word game! Specifically, you'll be building a version that can be played *in a terminal*.
​
##### Base Mode User Stories:
* When the game begins, a user should:
  * see a "blank" version of a random word they must guess
    * `_ _ _ _ _`
  * see how many guesses they have remaining
  * see which letters they have already guessed
  * be prompted to enter a letter to guess
* After submitting a guess, a user should:
  * see an updated version of the word they must guess
    * `_ _ _ m _`
  * see how many guesses they have remaining
  * see which letters they have already guessed
  * be prompted to enter a letter to guess
* A game ends when:
  * the user successfully guesses all letters in the word
  * the user runs out of guesses
  
* Note: Base mode only needs to be a single round of the game.