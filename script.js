<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vascracudo</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <h1>Vascracudo</h1>
    <p>Você tem 5 tentativas para acertar</p>
    <div class="input-container">
        <input type="text" id="guessInput" placeholder="Digite sua adivinhação">
        <button onclick="makeGuess()">Adivinhar</button>
    </div>
    <div class="theme" id="theme"></div>
    <div class="attempts-label" id="attemptsLabel">Tentativas:</div>
    <div class="history" id="history"></div>
    <div class="hint" id="hint"></div>
    <div id="share-container" style="display: none;">
        <button onclick="shareOnTwitter()">Compartilhar no X</button>
        <button onclick="shareOnFacebook()">Compartilhar no Facebook</button>
    </div>
    <script src="script.js"></script>
</body>
</html>
