var Chess = require('./chess').Chess;

pieces = [wQ, wQ, wQ, wQ, wQ, wQ, wQ, wQ];
squares = create_squares();
rnd_start = randomPositions(pieces, squares);
var chess = new Chess(rnd_start);
chess.ascii(); // show board

while (!fila_y_columna() & !diagonal()) { // runs until all queens on different row, column, and diagonal
  var moves = chess.moves();
  var move = moves[Math.floor(Math.random() * moves.length)]; // need to change from random to user input
  chess.move(move);
}
console.log(chess.pgn());