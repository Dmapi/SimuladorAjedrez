var pieces = [wK, wK];
var squares = create_squares();

// change so that kings are at least four spots separated
var rnd_start = randomPositions(pieces, squares);

var Chess = require('./chess').Chess; 
var chess = new Chess(rnd_start);


