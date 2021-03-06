var pieces = [wQ, wQ, wQ, wQ, wQ];
var squares = create_squares();
var rnd_start = randomPositions(pieces, squares);

var Chess = require('./chess').Chess;
var chess = new Chess(rnd_start);

var solns = ['8/1Q6/8/3Q4/4Q3/5Q2/8/7Q', '7Q/8/5Q2/4Q3/3Q4/8/1Q6/8',
        'Q7/8/2Q5/3Q4/4Q3/8/6Q1/8', '8/6Q1/8/4Q3/3Q4/2Q5/8/Q7']; // only 4 solns

while (!solns.includes(chess.fen().slice(0,24))) { // runs until current fen string is a soln
  // play versus player or computer
}
console.log(chess.pgn());