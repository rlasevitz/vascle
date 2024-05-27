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

// Define a fixed epoch start date
const EPOCH_START = new Date('2023-01-01T00:00:00Z');

function daysSinceEpoch() {
    const now = new Date();
    const diff = now - EPOCH_START;
    return Math.floor(diff / (1000 * 60 * 60 * 24));
}

function getDailyPlayer() {
    const days = daysSinceEpoch();
    const themeIndex = days % themes.length;
    const selectedTheme = themes[themeIndex];
    const playerIndex = days % selectedTheme.players.length;
    return { theme: selectedTheme, player: selectedTheme.players[playerIndex] };
}

const { theme: selectedTheme, player: playerToGuess } = getDailyPlayer();
let attempts = 0;
const maxAttempts = 5;
let gameOver = false;

window.onload = function() {
    document.getElementById('theme').innerText = `Tema: ${selectedTheme.theme}`;
    document.getElementById('attemptsLabel').innerText = "Tentativas:";
}

function makeGuess() {
    if (gameOver) return;

    let guess = document.getElementById('guessInput').value;
    attempts++;
    let feedback = "";
    let history = document.getElementById('history');

    if (normalizeString(guess) === normalizeString(playerToGuess.name)) {
        feedback = `Parabéns, você acertou! O jogador é ${playerToGuess.name}.`;
        history.innerHTML += `<div>${feedback}</div>`;
        endGame(true);
    } else {
        feedback = giveFeedback(guess, playerToGuess.name);
        if (attempts === 3) {
            document.getElementById('hint').innerText = `Dica: A posição do jogador é ${playerToGuess.position}.`;
        }
        if (attempts >= maxAttempts) {
            feedback = `Você perdeu! O jogador correto era ${playerToGuess.name}.`;
            history.innerHTML += `<div>${feedback}</div>`;
            endGame(false);
        } else {
            history.innerHTML += `<div>${feedback}</div>`;
        }
    }
    document.getElementById('guessInput').value = '';
}

function giveFeedback(guess, correctName) {
    let feedback = "";
    let nameLower = normalizeString(correctName);
    let guessLower = normalizeString(guess);
    for (let i = 0; i < guess.length; i++) {
        if (nameLower.includes(guessLower[i])) {
            feedback += `<span class="green">${guess[i]}</span>`;
        } else {
            feedback += `<span class="black">${guess[i]}</span>`;
        }
    }
    return feedback;
}

function normalizeString(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function endGame(success) {
    gameOver = true;
    document.getElementById('guessInput').disabled = true;
    document.querySelector('button').disabled = true;
    document.getElementById('share-container').style.display = 'block';

    const shareContainer = document.getElementById('share-container');
    if (success) {
        shareContainer.dataset.result = `Eu acertei o jogador do dia do Vascracudo hoje em ${attempts} tentativas!`;
    } else {
        shareContainer.dataset.result = "Eu não acertei o jogador de hoje do Vascracudo.";
    }

    updateShareLinks();
}

function updateShareLinks() {
    const result = document.getElementById('share-container').dataset.result;
    const twitterShareButton = document.getElementById('twitter-share-button');
    const facebookShareButton = document.getElementById('facebook-share-button');

    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(result)}`;
    twitterShareButton.href = twitterUrl;

    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=&quote=${encodeURIComponent(result)}`;
    facebookShareButton.href = facebookUrl;
}
