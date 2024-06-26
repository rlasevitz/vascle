const themes = [
    { 
        theme: "Brasileirão 2024", 
        players: [
            { name: "Léo Jardim", position: "Goleiro" },
            { name: "Gary Medel", position: "Zagueiro" },
            { name: "Lucas Piton", position: "Lateral-Esquerdo" },
            { name: "Dimitri Payet", position: "Meio-Campo" },
            { name: "Pablo Vegetti", position: "Atacante" },
        ] 
    },
    { 
        theme: "Sul-Americano 1948", 
        players: [
            { name: "Ademir", position: "Atacante" },
            { name: "Barbosa", position: "Goleiro" },
            { name: "Augusto", position: "Zagueiro" },
            { name: "Jair Rosa Pinto", position: "Meio-Campo" },
            { name: "Friaça", position: "Atacante" },
        ] 
    },
    { 
        theme: "Libertadores 1998", 
        players: [
            { name: "Carlos Germano", position: "Goleiro" },
            { name: "Mauro Galvão", position: "Zagueiro" },
            { name: "Felipe", position: "Lateral-Esquerdo" },
            { name: "Juninho Pernambucano", position: "Meio-Campo" },
            { name: "Donizete", position: "Atacante" },
        ] 
    },
];

let selectedTheme = themes[Math.floor(Math.random() * themes.length)];
let playerToGuess = selectedTheme.players[Math.floor(Math.random() * selectedTheme.players.length)];
let attempts = 0;
const maxAttempts = 5;

window.onload = function() {
    document.getElementById('feedback').innerText = `Tema: ${selectedTheme.theme}`;
}

function makeGuess() {
    let guess = document.getElementById('guessInput').value;
    attempts++;
    let feedback = "";
    let history = document.getElementById('history');

    if (guess.toLowerCase() === playerToGuess.name.toLowerCase()) {
        feedback = `Parabéns, você acertou! O jogador é ${playerToGuess.name}.`;
        endGame(true);
    } else {
        feedback = giveFeedback(guess, playerToGuess.name);
        if (attempts === 3) {
            document.getElementById('hint').innerText = `Dica: A posição do jogador é ${playerToGuess.position}.`;
        }
        if (attempts >= maxAttempts) {
            feedback = `Você perdeu! O jogador correto era ${playerToGuess.name}.`;
            endGame(false);
        }
    }
    history.innerHTML += `<div>${feedback}</div>`;
    document.getElementById('guessInput').value = '';
}

function giveFeedback(guess, correctName) {
    let feedback = "";
    let nameLower = correctName.toLowerCase();
    let guessLower = guess.toLowerCase();
    for (let i = 0; i < guess.length; i++) {
        if (nameLower.includes(guessLower[i])) {
            feedback += `<span class="green">${guess[i]}</span>`;
        } else {
            feedback += `<span class="black">${guess[i]}</span>`;
        }
    }
    return feedback;
}

function endGame(success) {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}
