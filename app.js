const console = require("console");
const prompt = require("prompt-sync")();
const axios = require("axios");
require('dotenv').config()


let gameCompletion = true
let count = 0
let word = ""
// let wordGuessed
function getWord() {
    let options = {
        method: 'GET',
        url: 'https://random-words5.p.rapidapi.com/getMultipleRandom',
        params: { count: '1', wordLength: '5' },
        headers: {
            'X-RapidAPI-Host': 'random-words5.p.rapidapi.com',
            'X-RapidAPI-Key': process.env.API_KEY
        }
    };

    axios.request(options).then(function (response) {
        word = response.data.toString();
        playGame()
    }).catch(function (error) {
        console.error(error);
    });
    return word
}
// function wordCheck(userGuess) {
//     const options = {
//         method: 'GET',
//         url: 'https://twinword-word-associations-v1.p.rapidapi.com/associations/',
//         params: { entry: userGuess },
//         headers: {
//             'X-RapidAPI-Host': 'twinword-word-associations-v1.p.rapidapi.com',
//             'X-RapidAPI-Key': 'bff8343113mshe3e1922fdda1688p1d520bjsnd766e35cc67a'
//         }
//     };

//     axios.request(options).then(function (response) {
//         response = response.data.result_msg
//         if (response == "Success") {
//             wordGuessed = true
//         } if (wordGuessed !== true) {
//             console.log(`${userGuess} is not a word.`)
//         }

//     }).catch(function (error) {
//         console.error(error);
//     });

// }

function wordGuess() {
    while (true) {
        userGuess = prompt("Please Guess a Word: ")
        if (userGuess.length == 5) {
            break
        } else if (userGuess.length != 5) {
            console.log("Please enter a word with 5 letters")
        }
    }

    return userGuess
}

function wordComparison(wordle, userGuess) {
    let wordCompare = ""
    if (wordle == userGuess) {
        console.log("YOU WIN!!!")
        gameCompletion = false
    } else {
        for (let letter = 0; letter < 5; letter++) {
            if (wordle[letter] == userGuess[letter]) {
                wordCompare += userGuess[letter].toUpperCase()
            } else if (wordle.includes(userGuess[letter])) {
                wordCompare += userGuess[letter].toLowerCase()
            } else {
                wordCompare += "_"
            }
        }
    }
    if (wordCompare.length != 0) {
        console.log(wordCompare)
    }
}

function playGame() {
    let wordle = word

    while (gameCompletion && count < 5) {
        userGuess = wordGuess()
        wordComparison(wordle, userGuess)
        count += 1
    }
    if (count == 5) {
        wordle = word.charAt(0).toUpperCase() + word.slice(1)
        console.log(`You LOST, the correct word was ${wordle}!`)
    }

}

getWord()
