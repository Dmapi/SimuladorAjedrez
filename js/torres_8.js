pieces = [wR, wR, wR, wR, wR, wR, wR, wR];
squares = create_squares();
rnd_start = randomPositions(pieces, squares);

var Chess = require('./chess').Chess;
var chess = new Chess(rnd_start);

while (!fila_y_columna()) { // runs until all rooks on different row and column
  // play versus person or computer
}
console.log(chess.pgn());