const themes = [
    { 
        theme: "Brasileirão 2024", 
        players: [
            { name: "Léo Jardim", position: "Goleiro" },
            { name: "Léo", position: "Meio-campo" },
            // Adicionar mais jogadores do Brasileirão 2024
        ] 
    },
    { 
        theme: "Sul-Americano 1948", 
        players: [
            { name: "Ademir", position: "Atacante" },
            { name: "Barbosa", position: "Goleiro" },
            // Adicionar mais jogadores do Sul-Americano 1948
        ] 
    },
    { 
        theme: "Libertadores 1998", 
        players: [
            { name: "Carlos Germano", position: "Goleiro" },
            { name: "Romário", position: "Atacante" },
            // Adicionar mais jogadores da Libertadores 1998
        ] 
    },
];

let selectedTheme = themes[Math.floor(Math.random() * themes.length)];
let playerToGuess = selectedTheme.players[Math.floor(Math.random() * selectedTheme.players.length)];
let attempts = 0;
const maxAttempts = 5;

document.getElementById('feedback').innerText = `Tema: ${selectedTheme.theme}`;

function makeGuess() {
    let guess = document.getElementById('guessInput').value;
    attempts++;
    let feedback = "";

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
    document.getElementById('feedback').innerHTML = feedback;
}

function giveFeedback(guess, correctName) {
    let feedback = "";
    for (let i = 0; i < guess.length; i++) {
        if (correctName.toLowerCase().includes(guess[i].toLowerCase())) {
            feedback += `<span style="color: green">${guess[i]}</span>`;
        } else {
            feedback += `<span>${guess[i]}</span>`;
        }
    }
    return feedback;
}

function endGame(success) {
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
}
