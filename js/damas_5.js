var Chess = require('./chess').Chess;

rnd_start = rnd_fen(5 damas) // waiting for rnd_fen method that can pass in 5 damas
var chess = new Chess(rnd_start);
chess.ascii(); // show board

solns = ['8/1Q6/8/3Q4/4Q3/5Q2/8/7Q', '7Q/8/5Q2/4Q3/3Q4/8/1Q6/8',
        'Q7/8/2Q5/3Q4/4Q3/8/6Q1/8', '8/6Q1/8/4Q3/3Q4/2Q5/8/Q7'] // are there only 4 solns?
while (!solns.includes(chess.fen().slice(0,24))) { // runs until current fen string is a soln
  var moves = chess.moves();
  var move = moves[Math.floor(Math.random() * moves.length)]; // need to change from random to user input
  chess.move(move);
}
console.log(chess.pgn());