
// how to include blue king?
var pieces = [wK, wK, wK, wK, wK, bK, bK, bK, bK, bK];
function create_squares(){ // creates square objects with color
    var squares = []; 

    for (i=0; i<5; i++){
        for (j=0; j<5; j++){
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

// put kings on right places in board

function game_over(){
    // return true if blue king on row 1 or 5
}
while (!game_over()){
    // play versus person or computer, also offer two moves per go (one normal, other blue)
}
