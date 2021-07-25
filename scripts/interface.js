let playerScore = {
    player1: 0,
    player2: 0
}

let gamePlayed = 0;

document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        square.addEventListener('click', handleClick);
    })

})

function handleClick(event) {


    let square = event.target;
    let postion = square.id;


    if (handleMove(postion)) {
        let winner = playerTime === 0 ? 'Jogador 1' : 'Jogador 2';

        setTimeout(() => {
            alert(" O Jogo Acabou - O Vencedor foi o " + winner);
        }, 100);
        updateScore(playerTime);
    };
    updateSquare(postion);
}

function updateSquare(postion) {
    let square = document.getElementById(postion.toString());
    let symbol = board[postion];
    symbol == 'o' ?
        square.innerHTML = `<img class='${symbol}' src="Assets/loadingBall.svg" onload="SVGInject(this)" alt="">` :
        square.innerHTML = `<img  class='${symbol}' src="Assets/loadingCross.svg" onload="SVGInject(this)" alt="">`
}

function updateScore(playerThatScores) {
    playerThatScores == 0 ?
        playerScore.player1++ : playerScore.player2++;

    let p1Score = document.querySelector('.realP1Score');
    let p2Score = document.querySelector('.realP2Score');

    p1Score.innerHTML = playerScore.player1;
    p2Score.innerHTML = playerScore.player2;

}

let restartGame = document.querySelector(".restartGame");

restartGame.addEventListener("click", () => {
    let squares = document.querySelectorAll(".square");

    squares.forEach((square) => {
        let postion = square.id;
        let symbol = board[postion];

        if (symbol != '') {
            square.innerHTML = ``;
        }
    })

    board = [];
    emptyBoard.map(() => {
        board.push("");
    })
    gameOver = false;

    playerTime = Math.random(0, 1);
    playerTime >= 0.5 ? playerTime = 1 : playerTime = 0;
});

let goHome = document.querySelector('.home');

goHome.addEventListener('click', () => {
    window.location.href = './';
});