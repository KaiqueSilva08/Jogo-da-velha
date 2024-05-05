var board = ["", "", "", "", "", "", "", "", ""];
var player = 0;
var gameOver = false;
var symbols = ['x', 'o'];

function insertBoard(id){
    if(board[id] === ""){
        board[id] = symbols[player];

        if(player === 0){
            player = 1;
        } else{
            player = 0;
        }
    }
    isWin();
}

var win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function isWin(){
    for(let line of win){
        let pos1 = line[0];
        let pos2 = line[1];
        let pos3 = line[2];

        if( board[pos1] === board[pos2] && 
            board[pos1] === board[pos3] &&
            board[pos1] !== ""){

            gameOver = true;
        }
    }
}

function reset(){
    board = ["", "", "", "", "", "", "", "", ""];
    player = 0;
    gameOver = false;
}