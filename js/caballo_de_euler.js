var Chess = require('./chess').Chess;
var chess = new Chess();
chess.clear();
chess.put(wN, 'a8');

var squares = create_squares();

var counter = 0
//edit moves algorithm so that only squares that have not been visited are allowed
while (chess.moves().length > 0){
    // play versus player or computer
    counter += 1
  }

if (counter < 64){
    //message about how many steps completed
}
else{
    //message about successful exercise
}

console.log(chess.pgn());