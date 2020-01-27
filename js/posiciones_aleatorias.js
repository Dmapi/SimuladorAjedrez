//define pieces as objects
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

//function to generate array of all pieces
function allPieces() {
    pieces = [wK, wQ, bK, bQ]

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
    return pieces    
}


//place pieces with random squares and pieces
function randomPositions(pieces, squares) {
    positionsArray = []
    for (i = 0; i < pieces.length; i++) {
        // find random piece and square by index
        var pieceIndex = math.floor(math.random() * pieces.length)
        var squareIndex = math.foor(math.random() * squares.length)
    
        chess.put(pieces[pieceIndex], squares[squareIndex]) //places piece in random position
    
        //add square and piece pair to positionsArray
        newPosition = [pieces[pieceIndex], squares[squareIndex]]
        positionsArray.push(newPosition)

        squares.splice(squareIndex, 1) //removes selected square
        pieces.splice(pieceIndex, 1) //removes selected piece
    
    return positionsArray
    }
}