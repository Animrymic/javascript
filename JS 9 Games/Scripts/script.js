// GLOBAL VARIABLES
const gameWinningScore = 30;
let playerOneScore = 0;
let playerTwoScore = 0;
let roundScore = 0;
let activePlayer = 0;
let isGameActive = false;

// BUTTONS
const newGameBtn = document.querySelector('.btn-new');
const rollBtn = document.querySelector('.btn-roll');
const holdBtn = document.querySelector('.btn-hold');

// SCORE ELEMENTS
const pOneTotalScoreElement = document.getElementById('score-0');
const pTwoTotalScoreElement = document.getElementById('score-1');
const pOneCurrentScoreElement = document.getElementById('current-0');
const pTwoCurrentScoreElement = document.getElementById('current-1');

// DICE ELEMENTS
const dice1 = document.querySelector('.dice');
const dice2 = document.querySelector('.dice2');

function newGame() {
    playerOneScore = 0;
    playerTwoScore = 0;
    roundScore = 0;
    activePlayer = 0;
    isGameActive = true;

    pOneTotalScoreElement.innerText = 0;
    pTwoTotalScoreElement.innerText = 0;
    pOneCurrentScoreElement.innerText = 0;
    pTwoCurrentScoreElement.innerText = 0;

    dice1.style.display = 'none';
    dice2.style.display = 'none';

    document.querySelector('.player-0-panel').classList.add('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
}
function rollDice() {
    if (!isGameActive) return;

    const diceOne = Math.floor(Math.random() * 6) + 1;
    const diceTwo = Math.floor(Math.random() * 6) + 1;

    dice1.style.display = 'block';
    dice2.style.display = 'block';
    dice1.src = `./dice/dice-${diceOne}.png`;
    dice2.src = `./dice/dice-${diceTwo}.png`;

    if (diceOne !== 1 && diceTwo !== 1) {
        roundScore += diceOne + diceTwo;

        if (activePlayer === 0) {
            pOneCurrentScoreElement.innerText = roundScore;
        } else {
            pTwoCurrentScoreElement.innerText = roundScore;
        }
    } else {
        nextPlayer();
    }
}

function holdScore() {
    if (!isGameActive) return;

    if (activePlayer === 0) {
        playerOneScore += roundScore;
        pOneTotalScoreElement.innerText = playerOneScore;
    } else {
        playerTwoScore += roundScore;
        pTwoTotalScoreElement.innerText = playerTwoScore;
    }

    checkForWinner();

    if (isGameActive) {
        nextPlayer();
    }
}

function nextPlayer() {
    roundScore = 0;

    pOneCurrentScoreElement.innerText = 0;
    pTwoCurrentScoreElement.innerText = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function checkForWinner() {
    if (playerOneScore >= gameWinningScore) {
        isGameActive = false;
        document.querySelector('.player-0-panel').classList.add('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        dice1.style.display = 'none';
        dice2.style.display = 'none';
        alert('Player 1 wins!');
    } else if (playerTwoScore >= gameWinningScore) {
        isGameActive = false;
        document.querySelector('.player-1-panel').classList.add('winner');
        document.querySelector('.player-1-panel').classList.remove('active');
        dice1.style.display = 'none';
        dice2.style.display = 'none';
        alert('Player 2 wins!');
    }
}

newGameBtn.addEventListener('click', newGame);
rollBtn.addEventListener('click', rollDice);
holdBtn.addEventListener('click', holdScore);

newGame();
