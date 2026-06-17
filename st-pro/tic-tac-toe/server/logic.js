/**
 * Takes a single board object, computes the perfect move for the computer ('X'),
 * modifies the object in place, and returns it.
 * @param {Object} boardObj - Object with keys 0-8 holding 'X', 'O', or null
 * @returns {Object} - The modified board object
 */
function getNextBestMove(boardObj) {
    const aiPlayer = 'X';
    const humanPlayer = 'O';

    function checkWin(b, player) {
        const winPatterns = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
            [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
            [0, 4, 8], [2, 4, 6]             // Diagonals
        ];
        return winPatterns.some(pattern => pattern.every(i => b[i] === player));
    }

    function isFull(b) {
        for (let i = 0; i < 9; i++) {
            if (b[i] === null || b[i] === undefined) return false;
        }
        return true;
    }

    function minimax(tempBoard, depth, isMaximizing) {
        if (checkWin(tempBoard, aiPlayer)) return 10 - depth;
        if (checkWin(tempBoard, humanPlayer)) return depth - 10;
        if (isFull(tempBoard)) return 0;

        let bestScore = isMaximizing ? -Infinity : Infinity;

        for (let i = 0; i < 9; i++) {
            if (tempBoard[i] === null || tempBoard[i] === undefined) {
                tempBoard[i] = isMaximizing ? aiPlayer : humanPlayer;
                let score = minimax(tempBoard, depth + 1, !isMaximizing);
                tempBoard[i] = null; 

                bestScore = isMaximizing 
                    ? Math.max(score, bestScore) 
                    : Math.min(score, bestScore);
            }
        }
        return bestScore;
    }
    if (checkWin(boardObj, humanPlayer) || isFull(boardObj)) {
        return boardObj;
    }

    let bestScore = -Infinity;
    let bestMoveIndex = -1;
    for (let i = 0; i < 9; i++) {
        if (boardObj[i] === null || boardObj[i] === undefined) {
            boardObj[i] = aiPlayer; // Try placing 'X'
            let score = minimax(boardObj, 0, false);
            boardObj[i] = null; // Reset

            if (score > bestScore) {
                bestScore = score;
                bestMoveIndex = i;
            }
        }
    }
    if (bestMoveIndex !== -1) {
        boardObj[bestMoveIndex] = aiPlayer;
    }

    return boardObj;
}