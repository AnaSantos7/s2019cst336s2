var randomNumber = Math.floor(Math.random() * 99) + 1;
var guesses = document.querySelector('#guesses');
var lastResult = document.querySelector('#lastResult');
var lowOrHi = document.querySelector('#lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var won = document.querySelector('#won');
var lost = document.querySelector('#lost');
var wins = 0;
var losses = 0;
var resetButton = document.querySelector('#reset');
resetButton.style.display = 'none';
guessField.focus();

function checkGuess() {
    var userGuess = Number(guessField.value);
    
    if (!isNaN(userGuess) && userGuess <= 99) {
        if (guessCount == 1) {
        guesses.innerHTML = 'Previous guesses: ';
        won.innerHTML = 'Won: ' + wins;
        lost.innerHTML = 'Lost: ' + losses;
        }

        guesses.innerHTML += userGuess + ' ';
        if (userGuess === randomNumber) {
            won.innerHTML = 'Won: ' + wins;
            wins += 1;
            lastResult.innerHTML = 'Congratulations! You got it right!';
            lastResult.style.backgroundColor = 'green';
            lowOrHi.innerHTML = '';
            setGameOver();
        } else if (guessCount == 7) {
            losses += 1;
            lost.innerHTML = 'Lost: ' + losses;
            lastResult.innerHTML = 'Sorry, you lost!';
            setGameOver();
        } else {
            lastResult.innerHTML = 'Wrong!';
            lastResult.style.backgroundColor = 'red';
            if (userGuess < randomNumber) {
                lowOrHi.innerHTML = 'Last guess was too low!';
            } else if (userGuess > randomNumber) {
                lowOrHi.innerHTML = 'Last guess was too high!';
            }   
        }  
        guessCount++;
    }
    else {
        lastResult.innerHTML = 'Try Again! Invalid guess!';
        lastResult.style.backgroundColor = 'red';
    }
    
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton.style.display = 'inline';
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    guessCount = 1;
    
    var resetParas = document.querySelectorAll('.resultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
    
    resetButton.style.display = 'none';
    
    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();
    
    lastResult.style.backgroundColor = 'white';
    
    randomNumber = Math.floor(Math.random() * 99) + 1;
 }