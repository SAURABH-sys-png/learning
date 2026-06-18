/**
 * Takes a single board object from the frontend (keys "1"-"9"), computes the perfect move 
 * for the computer ('X'), modifies the object, and returns it.
 */
export default function getNextBestMove(frontendBoardObj) {
    const aiPlayer = 'X';
    const humanPlayer = 'O';

    // 🚀 FIX 1: Convert frontend object {"1":"O", "2":""...} to a clean backend array index 0-8
    const boardObj = [];
    for (let i = 1; i <= 9; i++) {
        const val = frontendBoardObj[i.toString()];
        // If it's an empty string or whitespace, treat it as null (empty slot)
        boardObj.push(val === "" || val === undefined ? null : val);
    }

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
            if (b[i] === null) return false;
        }
        return true;
    }

    function minimax(tempBoard, depth, isMaximizing) {
        if (checkWin(tempBoard, aiPlayer)) return 10 - depth;
        if (checkWin(tempBoard, humanPlayer)) return depth - 10;
        if (isFull(tempBoard)) return 0;

        let bestScore = isMaximizing ? -Infinity : Infinity;

        for (let i = 0; i < 9; i++) {
            if (tempBoard[i] === null) {
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

    // If game over, return early
    if (checkWin(boardObj, humanPlayer) || isFull(boardObj)) {
        return frontendBoardObj;
    }

    let bestScore = -Infinity;
    let bestMoveIndex = -1;
    for (let i = 0; i < 9; i++) {
        if (boardObj[i] === null) {
            boardObj[i] = aiPlayer; 
            let score = minimax(boardObj, 0, false);
            boardObj[i] = null; 

            if (score > bestScore) {
                bestScore = score;
                bestMoveIndex = i;
            }
        }
    }

    if (bestMoveIndex !== -1) {
        boardObj[bestMoveIndex] = aiPlayer;
    }

    // 🚀 FIX 2: Map our clean array back into the original frontend object layout ("1"-"9")
    for (let i = 0; i < 9; i++) {
        const frontendKey = (i + 1).toString();
        frontendBoardObj[frontendKey] = boardObj[i] === null ? "" : boardObj[i];
    }

    return frontendBoardObj;
}