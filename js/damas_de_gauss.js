var Chess = require('./chess').Chess;

rnd_start = rnd_fen(8 damas) // waiting for rnd_fen method that can pass in 8 damas
var chess = new Chess(rnd_start);
chess.ascii(); // show board

while (!fila_y_columna() & !diagonal()) { // runs until all queens on different row, column, and diagonal
  var moves = chess.moves();
  var move = moves[Math.floor(Math.random() * moves.length)]; // need to change from random to user input
  chess.move(move);
}
console.log(chess.pgn());