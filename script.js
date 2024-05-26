const players = [
    { name: "Roberto Dinamite", decades: "1970, 1980, 1990", position: "Atacante" },
    { name: "Edmundo", decades: "1990, 2000", position: "Atacante" },
    { name: "Juninho Pernambucano", decades: "1990, 2000", position: "Meio-campo" },
    { name: "Romário", decades: "1980, 1990, 2000", position: "Atacante" },
    { name: "Felipe", decades: "1990, 2000", position: "Meio-campo" },
    { name: "Ricardo Rocha", decades: "1990", position: "Zagueiro" },
    { name: "Mazinho", decades: "1980, 1990", position: "Meio-campo" },
    { name: "Pedrinho", decades: "1990, 2000", position: "Meio-campo" },
    { name: "Vagner", decades: "1990", position: "Meio-campo" },
    { name: "Ramon Menezes", decades: "1990, 2000", position: "Meio-campo" },
    { name: "Carlos Alberto", decades: "2000, 2010", position: "Meio-campo" },
    { name: "Diego Souza", decades: "2010", position: "Meio-campo" },
    { name: "Nenê", decades: "2010, 2020", position: "Meio-campo" },
    { name: "Evander", decades: "2010", position: "Meio-campo" },
    { name: "Bruno César", decades: "2010", position: "Meio-campo" },
    { name: "Benítez", decades: "2020", position: "Meio-campo" },
    { name: "Morato", decades: "2020", position: "Atacante" },
    { name: "Andrada", decades: "1960, 1970", position: "Goleiro" },
    { name: "Ramón Rafagnelli", decades: "1940", position: "Zagueiro" },
    { name: "Pablo Guiñazú", decades: "2010", position: "Meio-campo" },
    { name: "Maxi López", decades: "2010", position: "Atacante" },
    { name: "Darío Conca", decades: "2000", position: "Meio-campo" },
    { name: "Dener", decades: "1990", position: "Atacante" },
    { name: "Bismarck", decades: "1990", position: "Meio-campo" },
    { name: "William", decades: "1990", position: "Meio-campo" },
    { name: "Gian", decades: "1990", position: "Meio-campo" },
    { name: "Válber", decades: "1990", position: "Meio-campo" },
    { name: "Assis", decades: "1990", position: "Meio-campo" },
    { name: "Juninho Paulista", decades: "2000", position: "Meio-campo" },
    { name: "Léo Lima", decades: "2000", position: "Meio-campo" },
    { name: "Petkovic", decades: "2000", position: "Meio-campo" },
    { name: "Morais", decades: "2000", position: "Meio-campo" },
    { name: "Perdigão", decades: "2000", position: "Meio-campo" },
    { name: "Dodô", decades: "2000", position: "Atacante" },
    { name: "Zé Roberto", decades: "2000", position: "Meio-campo" },
    { name: "Pedro Ken", decades: "2000", position: "Meio-campo" },
    { name: "Douglas", decades: "2010", position: "Meio-campo" },
    { name: "Marcinho", decades: "2010", position: "Meio-campo" },
    { name: "Jhon Cley", decades: "2010", position: "Meio-campo" },
    { name: "Allan Delon", decades: "2000", position: "Meio-campo" },
    { name: "Marco Brito", decades: "2000", position: "Atacante" },
    { name: "Fernandinho", decades: "2000", position: "Meio-campo" },
    { name: "Tostão", decades: "1970", position: "Meio-campo" },
    { name: "Germán Cano", decades: "2020", position: "Atacante" },
    { name: "Thiago Galhardo", decades: "2010", position: "Atacante" },
    { name: "Tita", decades: "1980", position: "Meio-campo" },
    { name: "Sorato", decades: "1990", position: "Atacante" },
    { name: "Giovani", decades: "1990", position: "Meio-campo" },
    { name: "Rômulo", decades: "2010", position: "Meio-campo" },
    { name: "Leandro Amaral", decades: "2000", position: "Atacante" },
    { name: "Aloísio", decades: "1990", position: "Atacante" },
    { name: "William Matheus", decades: "2010", position: "Lateral-esquerdo" },
    { name: "Fagner", decades: "2000, 2010", position: "Lateral-direito" },
    { name: "Alan Kardec", decades: "2000", position: "Atacante" },
    { name: "Edmílson", decades: "1990, 2000", position: "Zagueiro" },
    { name: "Júnior Baiano", decades: "1990", position: "Zagueiro" },
    { name: "Leandro Ávila", decades: "1990", position: "Volante" },
    { name: "Odvan", decades: "1990", position: "Zagueiro" },
    { name: "Felipe Bastos", decades: "2010", position: "Meio-campo" },
    { name: "Élton", decades: "2010", position: "Atacante" },
    { name: "Euller", decades: "1990", position: "Atacante" },
    { name: "Luizão", decades: "1990", position: "Atacante" },
    { name: "Antonio Lopes", decades: "1970, 1980", position: "Treinador" },
    { name: "Acácio", decades: "1980", position: "Goleiro" },
    { name: "Donizete Pantera", decades: "1990", position: "Atacante" },
    { name: "Geovani", decades: "1980", position: "Meio-campo" },
    { name: "Mazola", decades: "1970", position: "Atacante" },
    { name: "Roberto", decades: "1980", position: "Atacante" },
    { name: "Zandonaide", decades: "1970", position: "Meio-campo" },
    { name: "Ricardo", decades: "1980", position: "Meio-campo" },
    { name: "Célio Silva", decades: "1990", position: "Zagueiro" },
    { name: "Rodrigo Caetano", decades: "2000", position: "Meio-campo" },
    { name: "Leandro Castan", decades: "2020", position: "Zagueiro" },
    { name: "Pikachu", decades: "2010, 2020", position: "Lateral-direito" },
    { name: "Riascos", decades: "2010", position: "Atacante" },
    { name: "Guarín", decades: "2010", position: "Meio-campo" },
    { name: "Wagner", decades: "2000, 2010", position: "Meio-campo" },
    { name: "Gilberto", decades: "2000", position: "Atacante" },
    { name: "Leandro", decades: "2000", position: "Meio-campo" },
    { name: "Róbson", decades: "1990", position: "Atacante" },
    { name: "Chico", decades: "1960", position: "Meio-campo" },
    { name: "Dudu", decades: "1960", position: "Meio-campo" },
    { name: "João Carlos", decades: "1980", position: "Goleiro" },
    { name: "Paulinho", decades: "2010, 2020", position: "Atacante" },
    { name: "Thalles", decades: "2010", position: "Atacante" },
    { name: "Marrony", decades: "2020", position: "Atacante" },
    { name: "Caio Monteiro", decades: "2020", position: "Atacante" },
    { name: "Marcos Júnior", decades: "2010", position: "Meio-campo" },
    { name: "Luan", decades: "2010", position: "Zagueiro" },
    { name: "Rafael Silva", decades: "2010", position: "Atacante" },
    { name: "Yago Pikachu", decades: "2010, 2020", position: "Lateral-direito" },
    { name: "Martín Silva", decades: "2010", position: "Goleiro" },
    { name: "Fernando Prass", decades: "2010", position: "Goleiro" },
    { name: "Hélton", decades: "2000", position: "Goleiro" },
    { name: "Carlos Germano", decades: "1990, 2000", position: "Goleiro" },
    { name: "Madson", decades: "2010", position: "Lateral-direito" },
    { name: "Jorginho", decades: "1980, 1990", position: "Meio-campo" },
    { name: "William Barbio", decades: "2010", position: "Atacante" },
    { name: "Rildo", decades: "2010", position: "Atacante" },
    { name: "Ribamar", decades: "2010, 2020", position: "Atacante" }
];

let chosenPlayer = players[Math.floor(Math.random() * players.length)];
let attempts = 6;

document.addEventListener("DOMContentLoaded", () => {
    createBoard();
});

function createBoard() {
    const board = document.getElementById("board");
    board.innerHTML = '';
    for (let attempt = 0; attempt < attempts; attempt++) {
        const row = document.createElement("div");
        row.classList.add("row");
        row.dataset.rowIndex = attempt;
        for (let i = 0; i < chosenPlayer.name.length; i++) {
            const tile = document.createElement("div");
            tile.classList.add("tile");
            row.appendChild(tile);
        }
        board.appendChild(row);
    }
}

function checkGuess() {
    const input = document.getElementById("player-input");
    const guess = input.value.toUpperCase();
    const message = document.getElementById("message");

    if (guess.length === 0) {
        message.textContent = "Digite o nome de um jogador.";
        return;
    }

    const board = document.getElementById("board");
    const currentRow = board.querySelector(`[data-row-index="${6 - attempts}"]`);
    const tiles = currentRow.children;

    let correctCount = 0;
    for (let i = 0; i < chosenPlayer.name.length; i++) {
        const tile = tiles[i];
        if (i < guess.length) {
            tile.textContent = guess[i];
            if (guess[i] === chosenPlayer.name[i]) {
                tile.classList.add("correct");
                correctCount++;
            } else if (chosenPlayer.name.includes(guess[i])) {
                tile.classList.add("present");
            } else {
                tile.classList.add("absent");
            }
        } else {
            tile.classList.add("absent");
        }
    }

    if (correctCount === chosenPlayer.name.length && guess.length === chosenPlayer.name.length) {
        message.textContent = "Parabéns! Você acertou!";
        return;
    }

    attempts--;
    if (attempts === 0) {
        message.textContent = `Fim de jogo! O jogador era ${chosenPlayer.name}.`;
    } else if (attempts === 3) {
        message.textContent = `Dica: O jogador jogou nas décadas: ${chosenPlayer.decades}.`;
    } else if (attempts === 2) {
        message.textContent = `Dica: O jogador jogou na posição: ${chosenPlayer.position}.`;
    } else {
        message.textContent = `Você tem ${attempts} tentativas restantes.`;
    }

    input.value = "";
    input.focus();
}
