var Chess = require('./chess').Chess;

pieces = [wB, wB, wB, wB, wB, wB, wB, wB, wB, wB];
squares = create_squares();
rnd_start = randomPositions(pieces, squares);
var chess = new Chess(rnd_start);
chess.ascii(); // show board

solns = ['8/3BB3/8/2B2B2/2B2B2/2B2B2/3BB3/8', '8/3BB3/2B2B2/2B2B2/2B2B2/8/3BB3/8'] // are there only 2 solns?
while (!solns.includes(chess.fen().slice(0,33))) { // runs until current fen string is a soln
  var moves = chess.moves();
  var move = moves[Math.floor(Math.random() * moves.length)]; // need to change from random to user input
  chess.move(move);
}
console.log(chess.pgn());