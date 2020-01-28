
pieces = [wB, wB, wB, wB, wB, wB, wB, wB, wB, wB, wB, wB, wB, wB];
squares = create_squares();
rnd_start = randomPositions(pieces, squares);

var Chess = require('./chess').Chess; 
var chess = new Chess(rnd_start);

solns = ['BBBBBBB1/8/8/8/8/8/8/BBBBBBB1', '1BBBBBBB/8/8/8/8/8/8/1BBBBBBB',
        'B6B/B6B/B6B/B6B/B6B/B6B/B6B/8',  '8/B6B/B6B/B6B/B6B/B6B/B6B/B6B']; // only 4 solns
while (!solns.includes(chess.fen().slice(0,29))) { // runs until current fen string is a soln
    // play versus person or computer
}
console.log(chess.pgn());

// include chessboard
