var Chess = require('./chess').Chess;

rnd_start = rnd_fen(12 caballos) // waiting for rnd_fen method that can pass in 12 caballos
var chess = new Chess(rnd_start);
chess.ascii(); // show board

solns = ['8/5N2/1NN1NN2/2N5/5N2/2NN1NN1/2N5/8'] // only one soln
while (!solns.includes(chess.fen().slice(0,24))) { // runs until current fen string is a soln
  var moves = chess.moves();
  var move = moves[Math.floor(Math.random() * moves.length)]; // need to change from random to user input
  chess.move(move);
}
console.log(chess.pgn());