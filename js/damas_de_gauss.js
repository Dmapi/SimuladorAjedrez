var pieces = [wQ, wQ, wQ, wQ, wQ, wQ, wQ, wQ];
var squares = create_squares();
var rnd_start = randomPositions(pieces, squares);

var Chess = require('./chess').Chess;
var chess = new Chess(rnd_start);

while (!fila_y_columna() ||  !diagonal()) { // runs until all queens on different row, column, and diagonal
  // play versus person or computer
}

console.log(chess.pgn());