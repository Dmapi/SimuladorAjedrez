
function create_squares(){
    var squares = []
    var letters = ['a', 'b', 'c', 'd', 'e', 'f','g']
    var numbers = ['1','2','3','4','5', '6', '7', '8']
    for (i=0; i<8; i++){
        for (j=0; j<8; j++){
            sq = i+j
        }
        squares.push(sq)
    }
    return squares
}
function full_squares(){
    var squares = create_squares()
    var full_squares = []
    for (i=0; i<64; i++){
        if (chess.get(squares[i]) != null){
            full_squares.push(squares[i])
        }
    }
    return full_squares
}
var full_squares = full_squares()

function fila_y_columna(){
    var letras = []
    var numeros = []

    for (i=0; i<8; i++){ 
        letter = full_squares[i].slice(0,1)
        number = full_squares[i].slice(1,2)
        if (!letras.includes(letter) & !numeros.includes(number)){ // checks that each letter and number is unique
            letras.push(letter)
            numeros.push(number)
        }
        else{
            return false
        }
        return true
    }
}
function diagonal(){
    lights = []
    darks = []
    for (i=0; i<8; i++){
        if 
    }
}