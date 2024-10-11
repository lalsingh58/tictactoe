let b1 = document.querySelector(".b1");
let b2 = document.querySelector(".b2");
let b3 = document.querySelector(".b3");
let b4 = document.querySelector(".b4");
let b5 = document.querySelector(".b5");
let b6 = document.querySelector(".b6");
let b7 = document.querySelector(".b7");
let b8 = document.querySelector(".b8");
let b9 = document.querySelector(".b9");

let btnArr = [b1, b2, b3, b4, b5, b6, b7, b8, b9];
let turnO = true;
let gameOver = false;
let winnerDisplay = document.getElementById("winner-display");

const WP = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]
];

// Function to check for a winner
function checkWinner() {
    for (let pattern of WP) {
        let [a, b, c] = pattern;
        if (btnArr[a].innerText && btnArr[a].innerText === btnArr[b].innerText && btnArr[a].innerText === btnArr[c].innerText) {
            return btnArr[a].innerText;  // Return "O" or "X"
        }
    }
    return null;
}

// Function to check for a draw
function checkDraw() {
    return btnArr.every(btn => btn.innerText !== "");
}

// Add click event listeners to buttons
btnArr.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        if (gameOver || btn.innerText !== "") return;  // If game is over or button already clicked, do nothing

        if (turnO) {
            btn.innerText = "O";
        } else {
            btn.innerText = "X";
        }
        turnO = !turnO;

        // Check if someone has won
        let winner = checkWinner();
        if (winner) {
            gameOver = true;
            winnerDisplay.innerText = winner + " wins!";
            return;
        }

        // Check if it's a draw
        if (checkDraw()) {
            gameOver = true;
            winnerDisplay.innerText = "It's a draw!";
        }
    });
});

// Function to reset the game
function resetGame() {
    btnArr.forEach(btn => btn.innerText = "");
    turnO = true;
    gameOver = false;
    winnerDisplay.innerText = ""; // Clear the winner display
}
