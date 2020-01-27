var Chess = require('./chess').Chess;

rnd_start = rnd_fen(14 alfiles) // waiting for rnd_fen method that can pass in 14 alfiles
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
