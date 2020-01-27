//definir piezas
var wR = {type: 'r', color:'w'}
var wB = {type:'b', color:'w'}
var wK = {type:'k', color:'w'}
var wN = {type:'n', color:'w'}
var wQ = {type:'q', color:'w'}
var wP = {type:'p', color:'w'}
var bR = {type:'r', color:'b'}
var bB = {type:'b',color:'b'}
var bK = {type:'k', color:'b'}
var bN = {type:'n', color:'b'}
var bQ = {type:'q', color:'b'}
var bP = {type:'p', color:'b'}

allPieces = [wK, wQ, bK, bQ]

for (i = 0; i < 2; i++) {
    allPieces.push(wR)
    allPieces.push(wB)
    allPieces.push(wN)
    allPieces.push(bR)
    allPieces.push(bB)
    allPieces.push(bN)
}

for (i = 0; i < 8; i++) {
    allPieces.push(wP)
    allPieces.push(bP)
}

/*now irrelevant
//define number of available pieces
var wRnum = {num: 2}
var wBnum = {num: 2}
var wKnum = {num: 1}
var wNnum = {num: 2}
var wQnum = {num: 1}
var wPnum = {num: 8}

var bRnum = {num: 2}
var bBnum = {num: 2}
var bKnum = {num: 1}
var bNnum = {num: 2}
var bQnum = {num: 1}
var bPnum = {num: 8}
*/


//define number of available squares
function create_squares(){
    var squares = [];
    var letters = ['a', 'b', 'c', 'd', 'e', 'f','g'];
    var numbers = ['1','2','3','4','5', '6', '7', '8'];

    for (i=0; i<8; i++){
        for (j=0; j<8; j++){
            var sq = letters[i]+numbers[j];
            if ((i+j)%2 == 0){
                var col = 'dark';
            }
            else{
                var col = 'light';
            }
            var obj = {square: sq, color: col}
        }
        squares.push(obj)
    }
    return squares
}


allSquares = create_squares()

//place pieces with random squares and pieces
function randomPositions(pieces, squares) {
    positionsArray = []
    for (i = 0; i < pieces.length; i++) {
        var pieceIndex = pieces[math.floor(math.random() * pieces.length)]
        var squareIndex = squares[math.foor(math.random() * squares.length)]
    
        chess.put(pieces[pieceIndex], squares[squareIndex]) //places piece in random position
    
        //add square and piece pair to positionsArray
        newPosition = [pieces[pieceIndex], squares[squareIndex]]
        positionsArray.push(newPosition)

        squares.splice(squareIndex, 1) //removes selected square
        pieces.splice(pieceIndex, 1) //removes selected piece
    
    return positionsArray
    }
}