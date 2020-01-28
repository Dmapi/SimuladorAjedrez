pieces = [wR, wP, wP, wP, wP, wP, wP, wP, wP];
squares = create_squares();

// can this exercise be solved if 8 pawns are all put randomly and can't move?
// or add method to randomPositions so that only creates solvable exercises
rnd_start = randomPositions(pieces, squares);

var Chess = require('./chess').Chess;
var chess = new Chess(rnd_start);

// how to code for rook taking all 8 in a row? 
function game_over() { // no game over for half moves, insufficient material or threefold repetition
 /* use fila & columna method
 while (!fila_y_columna()) {
    move rook internally to next position and pop that pawn
    but if there's multiple possible pawns, we need to do some DFS/BFS to calculate all possible paths
    if (pawns == 0){
        return true
    }
    return false
    */
   /* or use attacked(color, square) method
   need to read docu on this method
   */
 }

}
// runs game until rook can take all 8 pawns consecutively
while (!game_over()) { 
  // play versus person or computer
}
console.log(chess.pgn());