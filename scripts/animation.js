document.addEventListener('DOMContentLoaded', () => {
    window.setTimeout(() => {
        let loadingElement = document.querySelector('.loading');
        loadingElement.style.height = 0;
    }, 5000);
    window.setTimeout(() => {
        let tacToeElements = document.querySelector('.tacToeIcons');
        tacToeElements.style.transform = "translateY(-50px)";
        tacToeElements.style.height = 0;
    }, 5800);
});


function next() {
    let inputValue = document.querySelector('#gameMode2');
    if (inputValue.checked) {
        let section1 = document.querySelector('.section1');
        let section2 = document.querySelector('.section2');

        section1.style.height = 0;
        section2.style.height = '100%';
    } else {
        alert('Escolha um modo de jogo');
    }
}

function startGame() {
    window.location = "/tictactoe/game.html";
}

let players = document.querySelectorAll('input[name="avatar"]');
console.log(players);

players.forEach((player) => {
    player.addEventListener('click', () => {
        playerSelection(player);
    });
})


function playerSelection(player) {
    if (player.id === 'avatar1') {
        localStorage.clear();
        localStorage.setItem('player1', 0);
    } else if (player.id === 'avatar2') {
        localStorage.clear();
        localStorage.setItem('player1', 1);
    }
}