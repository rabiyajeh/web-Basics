let player1Letter;
let challengerLetter;
let startingPlayer;
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = '✓'; // Change 'X' to '✓'
let gameRound = 1;
let player1Score = 0;
let challengerScore = 0;

function initializeGame() {
    createGameBoard();
    updateScoreboard();
}

function createGameBoard() {
    const table = document.createElement('table');
    table.id = 'gameBoard';
    document.querySelector('.container').appendChild(table);

    for (let i = 0; i < 3; i++) {
        let row = table.insertRow(i);
        for (let j = 0; j < 3; j++) {
            let cell = row.insertCell(j);
            cell.innerHTML = `<div class="cell" onclick="makeMove(${3 * i + j})"></div>`;
        }
    }
}

function makeMove(index) {
    if (gameBoard[index] === '' && currentPlayer === '✓') {
        gameBoard[index] = currentPlayer;
        document.getElementsByClassName('cell')[index].innerText = currentPlayer;

        if (checkWin()) {
            alert(`Player ${currentPlayer} wins the round!`);
            updateScore();
            resetGame();
        } else if (checkDraw()) {
            alert('It\'s a draw!');
            resetGame();
        } else {
            currentPlayer = 'O';
            // Bot's turn
            setTimeout(() => botMove(), 500); // Add a delay for a more natural feel
        }
    }
}

function botMove() {
    // Simple bot: Randomly choose an empty cell
    const emptyCells = gameBoard.reduce((acc, cell, index) => {
        if (cell === '') {
            acc.push(index);
        }
        return acc;
    }, []);

    if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const botIndex = emptyCells[randomIndex];

        gameBoard[botIndex] = 'O';
        document.getElementsByClassName('cell')[botIndex].innerText = 'O';

        if (checkWin()) {
            alert('Challenger wins the round!');
            updateScore();
            resetGame();
        } else if (checkDraw()) {
            alert('It\'s a draw!');
            resetGame();
        } else {
            currentPlayer = '✓';
        }
    }
}

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winPatterns.some(pattern =>
        pattern.every(index => gameBoard[index] === currentPlayer)
    );
}

function checkDraw() {
    return gameBoard.every(cell => cell !== '');
}

function resetGame() {
    currentPlayer = '✓'; // Reset to '✓'
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    document.querySelectorAll('.cell').forEach(cell => cell.innerText = '');
    gameRound++;

    if (gameRound > 6) {
        declareChampion();
    }
}

function updateScore() {
    if (currentPlayer === '✓') {
        player1Score++;
    } else {
        challengerScore++;
    }

    updateScoreboard();
}

function updateScoreboard() {
    document.getElementById('scoreboard').innerHTML = `
        <h4>Scoreboard</h4>
        <p>Player 1: ${player1Score} Wins | Challenger: ${challengerScore} Wins</p>
        <p>Round: ${gameRound}</p>
    `;
}

function continueGame() {
    resetGame();
}

function declareChampion() {
    let champion = '';
    if (player1Score > challengerScore) {
        champion = 'Player 1';
    } else if (challengerScore > player1Score) {
        champion = 'Challenger';
    } else {
        champion = 'It\'s a tie!';
    }

    alert(`Overall Champion 🏆: ${champion}`);
    resetScores();
    gameRound = 1;
}

function resetScores() {
    player1Score = 0;
    challengerScore = 0;
}

function startGame() {
    $('#playerModal').modal('show');
}

function initGameSettings() {
    player1Letter = $('input[name="playerLetter"]:checked').val();
    startingPlayer = $('input[name="firstPlayer"]:checked').val();

    if (player1Letter && startingPlayer) {
        challengerLetter = (player1Letter === 'X') ? 'O' : 'X';
        currentPlayer = (startingPlayer === '1') ? player1Letter : challengerLetter;

        initializeGame();
        $('#playerModal').modal('hide');

        if (currentPlayer === 'O') {
            setTimeout(() => botMove(), 500); // Add a delay for a more natural feel
        }
    } else {
        alert('Please select both letter and starting player.');
    }
}

initializeGame();
