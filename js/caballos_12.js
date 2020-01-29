var pieces = [wN, wN, wN, wN, wN, wN, wN, wN, wN, wN, wN, wN];
var squares = create_squares();
var rnd_start = randomPositions(pieces, squares);

var Chess = require('./chess').Chess;
var chess = new Chess(rnd_start);

var solns = ['8/5N2/1NN1NN2/2N5/5N2/2NN1NN1/2N5/8']; // only one soln
while (!solns.includes(chess.fen().slice(0,24))) { // runs until current fen string is a soln
  // play versus player or computer
}
console.log(chess.pgn());