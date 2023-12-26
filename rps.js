const rpsButtons = document.querySelectorAll('.rps-button');
const playAgainButton = document.querySelector('.play-again');
const resultField = document.querySelector('.main-game-result');
const rpsButtonsHover = document.querySelector('.rps-button:hover');
let playerChoice = '';
let botChoice = '';


function makeActive() {

    rpsButtons.forEach(button => {
        button.style.display = 'flex';
        button.addEventListener('click', e => {
            buttonClick(button);
        });
    })
    
}

function buttonClick(button) {
    playerChoice = button.textContent.toString().toLowerCase().trim();
    gameLoop();
}

function makeInactive() {

    rpsButtons.forEach(button => {
        button.style.display ='none';
        button.removeEventListener('click', buttonClick);
        })
}
    

function getBotResult() {
    let resultNum = Math.floor(Math.random() * 3) + 1
    switch (resultNum) {
        case 1:
            botChoice = 'rock'
            break;

        case 2: 
            botChoice = 'paper'
            break;

        case 3:
            botChoice = 'scissors'
            break;
    }
}

function getWinner(playerResult, botResult){
    
    if (playerResult === botResult) {
        return 'tie';
    }

    if (playerResult === 'rock') {
        if(botResult === 'scissors') {
            return 'player';
        }

    }

    if (playerResult === 'paper'){
        if(botResult === 'rock') {
            return 'player';
        }
    }

    if (playerResult === 'scissors') {
        if (botResult === 'paper') {
            return "player";
        }
    }

    return 'bot'

}

function resolvegame(winner) {
    resultField.textContent = `You chose ${playerChoice} and I chose ${botChoice}! `
    switch (winner) {

        case 'player':
            resultField.textContent += 'You win!';
            break;
        
        case 'bot':
            resultField.textContent += 'You lose!';
            break;

        case 'tie':
            resultField.textContent += 'It\'s a tie!';
            break;

        
    }

    makeInactive();
    showPlayAgain();


}

function hidePlayAgain() {
    playAgainButton.removeEventListener('click', resetGame);
    playAgainButton.style.display = 'none';
}

function showPlayAgain() {
    playAgainButton.style.display = 'block';
    playAgainButton.addEventListener('click', resetGame);
}

function resetGame() {
    hidePlayAgain();
    makeActive();
    botChoice = '';
    playerChoice = '';
}

function gameLoop() {

    getBotResult();
    winner = getWinner(playerChoice, botChoice);
    resolvegame(winner);
}

makeActive();