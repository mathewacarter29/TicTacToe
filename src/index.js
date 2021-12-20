let marks = ['X', 'O'];
let currentPlayer = 0;
let currentBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
let canPlay = true;

onClick = (id) => {
    if (canPlay && currentBoard[id] === ' ') {
        currentBoard[id] = marks[currentPlayer];
        drawBoard();
        changePlayer();
    }
    checkForWinner();
}

changePlayer = () => {
    currentPlayer = currentPlayer === 0 ? 1 : 0;
}

clickReset = () => {
    currentPlayer = 0;
    currentBoard = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '];
    drawBoard();
    document.getElementById('winnerText').textContent = "Game is in progress...";
    document.getElementById('winnerText').style.color = "black";
    canPlay = true;
}

drawBoard = () => {
    for (let i = 0; i < currentBoard.length; i++) {
        document.getElementById(i).textContent = currentBoard[i];
    }
}

checkForWinner = () => {
    const winner = check(0, 1, 2) + check(3, 4, 5) + check(6, 7, 8) + check(0, 3, 6) + check(1, 4, 7)
        + check(2, 5, 8) + check(0, 4, 8) + check(2, 4, 6);
    if (winner != '') {
        document.getElementById('winnerText').textContent = "Winner is " + winner[0] + "!"
            + "\nPress restart to play again";
        document.getElementById('winnerText').style.color = "green";
        canPlay = false;
    }
    else if (!currentBoard.includes(' ')) {
        document.getElementById('winnerText').textContent = "Tie game!\nPress restart to play again"
        document.getElementById('winnerText').style.color = "red";
        canPlay = false;
    }
}

check = (id1, id2, id3) => {
    return (currentBoard[id1] != ' ' && currentBoard[id1] === currentBoard[id2]
        && currentBoard[id2] === currentBoard[id3]) ? currentBoard[id1] : '';
}