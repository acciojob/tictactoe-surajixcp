//your JS code here. If required.
let currentPlayer = 'X';
let player1, player2;
let board = ['', '', '', '', '', '', '', '', ''];
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

document.getElementById('submit').addEventListener('click', function() {
    player1 = document.getElementById('player-1').value;
    player2 = document.getElementById('player-2').value;
    document.getElementById('player-names').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    document.querySelector('.message').innerText = `${player1}, you're up!`;
});

document.querySelectorAll('.cell').forEach(cell => {
    cell.addEventListener('click', function() {
        const cellIndex = this.id - 1;
        if (board[cellIndex] === '') {
            board[cellIndex] = currentPlayer;
            this.innerText = currentPlayer;
            if (checkWin()) {
                document.querySelector('.message').innerText = `${currentPlayer === 'X' ? player1 : player2}, congratulations you won!`;
                document.querySelectorAll('.cell').forEach(cell => cell.style.pointerEvents = 'none');
            } else if (board.every(cell => cell !== '')) {
                document.querySelector('.message').innerText = 'It\'s a draw!';
            } else {
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                document.querySelector('.message').innerText = `${currentPlayer === 'X' ? player1 : player2}, you're up!`;
            }
        }
    });
});

function checkWin() {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return board[index] === currentPlayer;
        });
    });
}

