var Chess = require('./chess').Chess;

pieces = [wB, wB, wB, wB, wB, wB, wB, wB, wB, wB, wB, wB, wB, wB]
squares = create_squares()
rnd_start = randomPositions(pieces, squares)
var chess = new Chess(rnd_start);
chess.ascii(); // show board

solns = ['BBBBBBB1/8/8/8/8/8/8/BBBBBBB1', '1BBBBBBB/8/8/8/8/8/8/1BBBBBBB'] // are there only 2 solns?
while (!solns.includes(chess.fen().slice(0,29))) { // runs until current fen string is a soln
  var moves = chess.moves();
  var move = moves[Math.floor(Math.random() * moves.length)]; // need to change from random to user input
  chess.move(move);
}
console.log(chess.pgn());

// include chessboard
