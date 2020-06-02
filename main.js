let currentPlayer = 'X';
let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

function checkForWin (winningCombinations, playerSelections) {
    for (let winningIndex = 0; winningIndex < winningCombinations.length; winningIndex += 1) {
        let matchNum = 0
        for (let numIndex = 0; numIndex < winningCombinations[winningIndex].length; numIndex += 1) {
            if (playerSelections.includes(winningCombinations[winningIndex][numIndex])) {
                matchNum += 1
            }
        }
        if (matchNum == 3) {
            return true
        }
    }
}

// write a function named `checkForWin` and accepts two arguments: `winningCombination` and `playerSelections`
//     for every combination in `winningCombination`
//         create a `matches` counter variable, which starts at 0
//         for every number in the current combination
//             if the player's selections array contains the current number
//                 increment `matches` by 1
//             if `matches` is **equal** to 3
//                 return `true`, because we found a win!
//     we got through all combinations without returning `true`, so return `false`, because no win was found

const cellElementArray = document.querySelectorAll('.grid-cell');

for (let elementIndex = 0; elementIndex < cellElementArray.length; elementIndex += 1) {
    const currentCellElement = cellElementArray[elementIndex]

    currentCellElement.addEventListener('click', function (event) {
        const clickedCellElement = event.target;
        console.log("You clicked on cell number: " + clickedCellElement.id)
        if (currentPlayer == 'X') {
            clickedCellElement.innerHTML = 'X'
            currentPlayer = 'O'
            playerXSelections.push(Number(clickedCellElement.id))
        }
        else {
            clickedCellElement.innerHTML = 'O'
            currentPlayer = 'X'
            playerOSelections.push(Number(clickedCellElement.id))
        }
        if (checkForWin (winningCombinations, playerXSelections)) {
            alert ("Player X Wins!")
            clickedCellElement.innerHTML = '';
            currentPlayer = 'X';
            cellElementArray.innerHTML = '';
            playerXSelections = [];
            playerOSelections = [];
        }
        if (checkForWin (winningCombinations, playerOSelections)) {
            alert ("Player O Wins!")
            clickedCellElement.innerHTML = '';
            currentPlayer = 'X';
            cellElementArray.innerHTML = '';
            playerXSelections = [];
            playerOSelections = [];
        }
    });
}