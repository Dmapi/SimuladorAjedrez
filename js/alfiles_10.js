pieces = [wB, wB, wB, wB, wB, wB, wB, wB, wB, wB];
squares = create_squares();
rnd_start = randomPositions(pieces, squares);

var Chess = require('./chess').Chess;
var chess = new Chess(rnd_start);

solns = ['8/3BB3/8/2B2B2/2B2B2/2B2B2/3BB3/8', '8/3BB3/2B2B2/2B2B2/2B2B2/8/3BB3/8',
          '', '']; // 4 solns
while (!solns.includes(chess.fen().slice(0,33))) { // runs until current fen string is a soln
  // play versus person or computer
}
console.log(chess.pgn());