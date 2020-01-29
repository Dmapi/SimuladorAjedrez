var Chess = require('./chess').Chess;
var chess = new Chess();
chess.clear();
chess.put(wK, 'e1');

var moves_left = 7
function game_over(){
    return moves_left == 0 
    || chess.get('e8') == wK
}
while (!game_over()){
    // play versus player or computer
    // each turn, moves_left -= 1
}
