# SETP Wordle

A game inspired by the popular Wordle word game - played via the command line. I was aiming to create a game with the same logic and rules as Wordle. The program runs but its not perfect and doesn't run 100% to Wordle's logic yet.

### Needed Updates 
- [ ] Fix bugs 
- [ ] Improve the Logic
- [ ] Function to check if user's guess is an acutal word in the dictionary. - I was working with a word dicitionary [API]  (https://rapidapi.com/twinword/api/word-dictionary/) but the program ran too fast and I couldn't figure out how to make it slow down and wait for the API's response before continuing.  

### Built With

* JavaScript
* [Random Words API](https://rapidapi.com/sheharyar566/api/random-words5) - Pulls a random 5 letter word 
* [prompt-sync](https://www.npmjs.com/package/prompt-sync) - needed for user input into command line


### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/dmccoy1/wordle-ish.git
   ```
2. Inside the cloned repo - Install NPM packages
   ```sh
   npm install
   ```
3. Inside the cloned directory - Run App
   ```sh
   node app.js
   ```
Open to all feedback on how to make this better! 
