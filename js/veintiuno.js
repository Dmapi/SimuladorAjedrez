var Chess = require('./chess').Chess;

//initializes board w/o kings
var chess = new Chess('rnbq1bnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQ1BNR w - - 0 1') 

var w_counter = 0
var b_counter = 0

// should this method be here or in chess.js and rename for veintiuno game?
function game_over() { // no game over for half moves, insufficient material or threefold repetition
    return (
      w_counter >= 21 ||
      b_counter >= 21
    )
}

while (!chess.game_over()) {
    // play versus person or computer
}


