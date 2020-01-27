var Chess = require('./chess').Chess;

rnd_start = rnd_fen(8 torres) // waiting for rnd_fen method that can pass in 8 torres
var chess = new Chess(rnd_start);
chess.ascii(); // show board

function create_squares(){
    var squares = []
    var letters = ['a', 'b', 'c', 'd', 'e', 'f','g']
    var numbers = ['1','2','3','4','5', '6', '7', '8']
    for (i=0; i<8; i++){
        for (j=0; j<8; j++){
            sq = i+j
        }
        squares.push(sq)
    }
    return squares
}
function full_squares(){
    var squares = create_squares()
    var full_squares = []
    for (i=0; i<64; i++){
        if (chess.get(squares[i]) != null){
            full_squares.push(squares[i])
        }
    }
    return full_squares
}
function won_check(){
    var full_squares = full_squares()
    var letras = []
    var numeros = []

    for (i=0; i<8; i++){ 
        letter = full_squares[i].slice(0,1)
        number = full_squares[i].slice(1,2)
        if (!letras.includes(letter) & !numeros.includes(number)){ // checks that each letter and number is unique
            letras.push(letter)
            numeros.push(number)
        }
        else{
            return false
        }
        return true
    }
}
while (!won_check()) { // runs until current fen string is a soln
  var moves = chess.moves();
  var move = moves[Math.floor(Math.random() * moves.length)]; // need to change from random to user input
  chess.move(move);
}
console.log(chess.pgn());