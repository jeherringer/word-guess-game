// First, list all of my arrays and variables I'm going to use

var wordList = [
    "spruce",
    "ash",
    "maple",
    "aspen",
    "oak",
    "almond",
    "olive",
    "pine",
    "peach",
    "fur",
]

var chosenWord = "";
var lettersInChosenWord = [];
var numBlanks = "";
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 1;
var lossCounter = 1;
var numGuesses = 10;

document.addEventListener("keypress", gameStart());

// Function to check letters 
document.onkeyup = function(event){

    var letter = event.key;
    var letterInWord = false;
    function checkLetters(letter) { // this will make the function think the letter is not in the word by default
        
        for (var i in chosenWord){ //This for loop will check if the letter chosen by the user is in the chosenWord and turn letterInWord true

            if (chosenWord[i] == letter){
                letterInWord = true;
                blanksAndSuccesses[i] = letter; // this will allow me to substitute the blank displayed on the HTML with the letter the user chose if it's correct
                break;
            }
        }
        if (chosenWord[i] != letter ) {  // This function is for things that should happen if the user chose wrong (decrease #guesses and add wrong letter to Already Guessed)
            numGuesses --; // This will decrease the number of guesses left the user has
            wrongGuesses.push(letter); //This will push the wrong letter to my wrongGuesses array
            }
        }
    

    checkLetters(letter);
    rightGuesses = document.getElementById("word-blank");
    rightGuesses.textContent = blanksAndSuccesses;
    var wrongGuessesLeft = document.getElementById("wrong-guesses");
    wrongGuessesLeft.textContent += (" " + letter);
    var numGuessesLeft = document.getElementById("guesses-left");
    numGuessesLeft.textContent = numGuesses;
    console.log(event.key);
    console.log(letterInWord);
    console.log(wrongGuesses);
    console.log(blanksAndSuccesses);
    console.log(numGuesses);
    roundComplete();

}


// Function to choose a random word, break it down into characters, replace them with _ , add them to HTML, and affect "guesses-left"

function gameStart () {
    wrongGuesses = [];
    numGuesses = 10;
    blanksAndSuccesses = [];

    chosenWord = wordList[Math.floor(Math.random() * 10)]; // This will set the chosen word to a random word in wordList
    lettersInChosenWord = chosenWord.split(""); // This will split the chosen word by each character, so I can use numBlanks to turn them to _
    numBlanks = lettersInChosenWord.length; // This will put determine the number of blanks needed to _
    console.log(chosenWord);
    console.log(numBlanks);

    for (var i=0; i < numBlanks; i++){
        blanksAndSuccesses.push("_"); //This for loop will push _ into all the characters in numBlanks which we got from splitting chosenWord and taking the length
    }

}

function gameStart2 () {
    wrongGuesses.length = 0;
    var wrongGuessesLeft = document.getElementById("wrong-guesses");
    wrongGuessesLeft.textContent = "";
    numGuesses = 10;
    blanksAndSuccesses = [];

    chosenWord = wordList[Math.floor(Math.random() * 10)]; // This will set the chosen word to a random word in wordList
    lettersInChosenWord = chosenWord.split(""); // This will split the chosen word by each character, so I can use numBlanks to turn them to _
    numBlanks = lettersInChosenWord.length; // This will put determine the number of blanks needed to _
    console.log(chosenWord);
    console.log(numBlanks);

    for (var i=0; i < numBlanks; i++){
        blanksAndSuccesses.push("_"); //This for loop will push _ into all the characters in numBlanks which we got from splitting chosenWord and taking the length
    }

}

// Functions to update the HTML on all the info it needs

function roundComplete (){ // function that will determine if the round is completed by being won or lost and reacting accordingly

    if (lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){ //this is the if statement to check if chosen letters all = letters in the random word
        var winsCounted = document.getElementById("win-counter");
        winsCounted.textContent = winCounter;
        winCounter ++; // adds +1 to the win counter
        var wrongGuessesLeft = document.getElementById("wrong-guesses");
        wrongGuessesLeft.textContent = "";
        
        gameStart(); //runs gameStart to choose a new random word and resets the empty arrays
        console.log("You win the round!")
        alert("You win!"); //alerts the user they won
    }
    else if (numGuesses == 0){ // when the number of guesses hits 0 this code will run
        var lossCounted = document.getElementById("loss-counter");
        lossCounted.textContent = lossCounter;
        lossCounter ++;
        
        gameStart2(); // this will restart the game by running the startGame function 
        console.log("You lose the round!")
        alert("You don't have any more guesses!"); // alerts the user they lost
    }

}

