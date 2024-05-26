const players = [
    "Roberto Dinamite", "Edmundo", "Juninho Pernambucano", "Romário", 
    "Vagner Love", "Felipe", "Ricardo Rocha", "Tita", "Mazinho", "Pedrinho"
];

let chosenPlayer = players[Math.floor(Math.random() * players.length)].toUpperCase();
let attempts = 6;

document.addEventListener("DOMContentLoaded", () => {
    createBoard();
});

function createBoard() {
    const board = document.getElementById("board");
    for (let i = 0; i < 5 * attempts; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        board.appendChild(tile);
    }
}

function checkGuess() {
    const input = document.getElementById("player-input");
    const guess = input.value.toUpperCase();
    const message = document.getElementById("message");
    
    if (guess.length !== 5) {
        message.textContent = "O nome deve ter 5 letras.";
        return;
    }

    const board = document.getElementById("board");
    const tiles = board.children;
    const currentRow = Math.floor((attempts - 6) * 5);

    let correctCount = 0;
    for (let i = 0; i < 5; i++) {
        const tile = tiles[currentRow + i];
        tile.textContent = guess[i];
        if (guess[i] === chosenPlayer[i]) {
            tile.classList.add("correct");
            correctCount++;
        } else if (chosenPlayer.includes(guess[i])) {
            tile.classList.add("present");
        } else {
            tile.classList.add("absent");
        }
    }

    if (correctCount === 5) {
        message.textContent = "Parabéns! Você acertou!";
        return;
    }

    attempts--;
    if (attempts === 0) {
        message.textContent = `Fim de jogo! O jogador era ${chosenPlayer}.`;
    } else {
        message.textContent = `Você tem ${attempts} tentativas restantes.`;
    }

    input.value = "";
}
