pieces = [wB, wB, wB, wB, wB, wB, wB, wB, wB, wB];
squares = create_squares();
rnd_start = randomPositions(pieces, squares);

var Chess = require('./chess').Chess;
var chess = new Chess(rnd_start);

solns = ['8/3BB3/8/2B2B2/2B2B2/2B2B2/3BB3/8', '8/3BB3/2B2B2/2B2B2/2B2B2/8/3BB3/8',
          '8/8/3BBB2/1B4B1/1B4B1/3BBB2/8/8', '8/8/2BBB3/1B4B1/1B4B1/2BBB3/8/8']; // 4 solns

// runs game until current fen string is a soln
while (!solns.includes(chess.fen().slice(0,33) || chess.fen().slice(0,31))) { 
  // play versus person or computer
}
console.log(chess.pgn());