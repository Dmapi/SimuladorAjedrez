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

var letters = ['a', 'b', 'c', 'd', 'e', 'f','g'];
var numbers = ['1','2','3','4','5', '6', '7', '8'];

function allPieces() { //function to generate array of all pieces
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
function create_squares(){ // creates square objects with color
    var squares = []; 

    for (i=0; i<8; i++){
        for (j=0; j<8; j++){
            var sq = letters[i]+numbers[j];
            if ((i+j)%2 == 0){
                var col = 'dark';
            }
            else{
                var col = 'light';
            }
            var obj = {square: sq, color: col};
        }
        squares.push(obj);
    }
    return squares
}
function full_squares(){ // returns squares with pieces on them
    var squares = create_squares();
    var full_squares = [];
    for (i=0; i<64; i++){
        if (chess.get(squares[i].square) != null){
            full_squares.push(squares[i]);
        }
    }
    return full_squares
}
function randomPositions(pieces, squares) { //place pieces with random squares and pieces
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
var full_squares = full_squares()
var num_squares = full_squares.length

function fila_y_columna(){ // to check if all pieces are on different rows and columns
    var letras = [];
    var numeros = [];

    for (i=0; i<num_squares; i++){ 
        letter = full_squares[i].square.slice(0,1);
        number = full_squares[i].square.slice(1,2);
        if (!letras.includes(letter) & !numeros.includes(number)){ // checks that each letter and number is unique
            letras.push(letter);
            numeros.push(number);
        }
        else{
            return false
        }
        return true
    }
}
function diag_check(sqs, len){ //helper function for diagonal()
    for (i=0; i<len - 1; i++){
        var letra = sqs[i].square.slice(0,1);
        var l_a_num = letters.indexOf(letra) + 1 //convierte letra a numero
        var numero = sqs[i].square.slice(1,2);
        for (j=1; j<len; j++){            
            var letra_2 = sqs[j].square.slice(0,1);
            var l_a_num_2 = letters.indexOf(letra_2) + 1 //convierte letra a numero
            var numero_2 = sqs[j].square.slice(1,2);
            if (Math.abs(l_a_num_2 - l_a_num) == Math.abs(numero_2 - numero){
                return false
            }
        }
    }
    return true
}
function diagonal(){ // to check if all pieces on different diagonals
    var lights = []
    var darks = []

    for (i=0; i<num_squares; i++){
        var sq = full_squares[i]
        if (sq.color == 'light'){
            lights.push(sq)
        }
        else{
            darks.push(sq)
        }
    }
    var l_len = lights.length
    var d_len = darks.length
    
    if (diag_check(lights, l_len) & diag_check(darks, d_len)){
        return true
    }
    else{
        return false
    }
}
