const teams = {
    "Libertadores 1998": [
        { name: "Carlos Germano", position: "Goleiro" },
        { name: "Maricá", position: "Lateral-direito" },
        { name: "Mauro Galvão", position: "Zagueiro" },
        { name: "Odvan", position: "Zagueiro" },
        { name: "Felipe", position: "Lateral-esquerdo" },
        { name: "Nasa", position: "Volante" },
        { name: "Luisinho", position: "Meio-campo" },
        { name: "Juninho Pernambucano", position: "Meio-campo" },
        { name: "Donizete", position: "Atacante" },
        { name: "Luizão", position: "Atacante" },
        { name: "Edmundo", position: "Atacante" }
    ],
    "Sul-Americano 1948": [
        { name: "Barbosa", position: "Goleiro" },
        { name: "Augusto", position: "Lateral-direito" },
        { name: "Ely", position: "Zagueiro" },
        { name: "Rafagnelli", position: "Zagueiro" },
        { name: "Jorge", position: "Lateral-esquerdo" },
        { name: "Danilo", position: "Meio-campo" },
        { name: "Eli", position: "Meio-campo" },
        { name: "Maneca", position: "Meio-campo" },
        { name: "Ademir", position: "Atacante" },
        { name: "Lelé", position: "Atacante" },
        { name: "Chico", position: "Atacante" }
    ],
    "Brasileirão 2024": [
        { name: "Leo Jardim", position: "Goleiro" },
        { name: "Puma Rodríguez", position: "Lateral-direito" },
        { name: "Léo", position: "Zagueiro" },
        { name: "Robson Bambu", position: "Zagueiro" },
        { name: "Lucas Piton", position: "Lateral-esquerdo" },
        { name: "Jair", position: "Volante" },
        { name: "Praxedes", position: "Meio-campo" },
        { name: "Galarza", position: "Meio-campo" },
        { name: "Payet", position: "Atacante" },
        { name: "Pedro Raul", position: "Atacante" },
        { name: "Rossi", position: "Atacante" }
    ]
};

let themes = Object.keys(teams);
let selectedTheme = themes[Math.floor(Math.random() * themes.length)];
let players = teams[selectedTheme];
let chosenPlayer = players[Math.floor(Math.random() * players.length)];
let attempts = 6;

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("theme").textContent = `Tema: ${selectedTheme}`;
    createBoard();
});

function createBoard() {
    const board = document.getElementById("board");
    board.innerHTML = '';
    for (let attempt = 0; attempt < attempts; attempt++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.dataset.rowIndex = attempt;
        const cell = document.createElement("div");
        cell.classList.add("cell");
        row.appendChild(cell);
        board.appendChild(row);
    }
}

function checkGuess() {
    const input = document.getElementById("player-input");
    const guess = input.value.trim();
    const message = document.getElementById("message");

    if (guess.length === 0) {
        message.textContent = "Digite o nome de um jogador.";
        return;
    }

    const board = document.getElementById("board");
    const currentRow = board.querySelector(`[data-row-index="${6 - attempts}"] .cell`);

    let correctCount = 0;
    for (let i = 0; i < guess.length; i++) {
        const letter = document.createElement("span");
        letter.textContent = guess[i];
        if (i < chosenPlayer.name.length && guess[i].toUpperCase() === chosenPlayer.name[i].toUpperCase()) {
            letter.classList.add("correct");
            correctCount++;
        } else if (chosenPlayer.name.toUpperCase().includes(guess[i].toUpperCase())) {
            letter.classList.add("present");
        } else {
            letter.classList.add("absent");
        }
        currentRow.appendChild(letter);
    }

    if (correctCount === chosenPlayer.name.length && guess.length === chosenPlayer.name.length) {
        message.textContent = "Parabéns! Você acertou!";
        return;
    }

    attempts--;
    if (attempts === 0) {
        message.textContent = `Fim de jogo! O jogador era ${chosenPlayer.name}.`;
    } else if (attempts === 3) {
        message.textContent = `Dica: O jogador jogou na posição: ${chosenPlayer.position}.`;
    } else {
        message.textContent = `Você tem ${attempts} tentativas restantes.`;
    }

    input.value = "";
    input.focus();
}
