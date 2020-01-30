var board            = null
var game             = new Chess();
var $status          = $('#status')
var $fen             = $('#fen')
var $pgn             = $('#pgn')
var whiteSquareGrey  = '#a9a9a9'
var blackSquareGrey  = '#696969'
let whiteEatenPieces = 0;
let blackEatenPieces = 0;
let whiteMovedPieces = 0;
let blackMovedPieces = 0;
let nombre           = $("#nombre").val();
let discapacidad     = $("#discapacidad").val();

// Función para salir del juego en partida actual
$(".salir").click(function(){
  let piezasBlancasComidas = $("#PiezasCapturadasBlanco").text();
  let piezasNegrasComidas  = $("#PiezasCapturadasNegro").text();
  if(piezasBlancasComidas > piezasNegrasComidas){
    alert(""+nombre+" gana. Felicidades, tu información será almacenada.");
    //ajax
    location.replace("main.php");
  }
  if(piezasNegrasComidas > piezasBlancasComidas){
    alert("Jugador 2 gana. Felicidades!");
    //ajax
    location.replace("main.php");
  }
  if(piezasBlancasComidas == piezasNegrasComidas){
    alert("Hay un empate. Gracias por jugar!");
    location.replace("main.php");
  }
});

function removeGreySquares ()
{
  $('#myBoard .square-55d63').css('background', '')
}

function greySquare (square)
{
  var $square = $('#myBoard .square-' + square)

  var background = whiteSquareGrey
  if ($square.hasClass('black-3c85d'))
  {
    background = blackSquareGrey
  }

  $square.css('background', background)
}

function onDragStart (source, piece)
{
  // do not pick up pieces if the game is over
  if (game.game_over())
  {
    return false
  }

  // or if it's not that side's turn
  if ((game.turn() === 'w' && piece.search(/^b/) !== -1) || (game.turn() === 'b' && piece.search(/^w/) !== -1))
  {
    return false
  }
}

var last =  function(array, n)
{
  if (array == null)
  return void 0;
  if (n == null)
  return array[array.length - 1];
  return array.slice(Math.max(array.length - n, 0));
};

function onDrop (source, target) {
  removeGreySquares()

  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q'
  })

  // illegal move
  if (move === null) return 'snapback'

  updateStatus()
}

function updateStatus ()
{
  var audioCheck = document.getElementById("audioCheck");
  var audioMove = document.getElementById("audioMove");
  var audioCapture = document.getElementById("audioCapture");
  var audioCastling = document.getElementById("audioCastling");
  var audioMate = document.getElementById("audioMate");
  var audioJaque = document.getElementById("audioJaque");
  var audioDe = document.getElementById("audioDe");
  var audioA = document.getElementById("audioA");
  var audioFila;
  var audioColumna;
  var audioColumna2;
  var audioPor;
  var status = ''
  var flagInvidente = discapacidad;

  var moveColor = 'Jugador 1';
  board.orientation('white')
  if (game.turn() === 'b')
  {
    //board.orientation('black')
    moveColor = 'Jugador 2';
  }

  // checkmate?
  if (game.in_checkmate())
  {
    status = 'Game over, ' + moveColor + ' is in checkmate.';
    if(moveColor == "Jugador2"){
      alert(""+nombre+" gana. Felicidades, tu información será almacenada.");
      //ajax
      location.replace("main.php");
    }
    if(moveColor == "Jugador1"){
      alert("Jugador 2 gana. Felicidades!");
      //ajax
      location.replace("main.php");
    }
    audioCheck.play();
    setTimeout(function()
    {
      audioMate.play();
    }, 100)
  }

  // draw?
  else if (game.in_draw())
  {
    status = 'Game over, drawn position'
    audioMove.play();
  }

  // game still on
  else
  {
    // Status del turno
    status =  'Turno de: '+moveColor;
    if(moveColor == 'Jugador 1'){
      $("#jugador2").removeClass("bg-primary mb-3");
      $("#jugador1").addClass("bg-primary mb-3");
      whiteMovedPieces = whiteMovedPieces + 1;
      $("#MovimientosRealizadosNegro span").text(whiteMovedPieces);

    }
    if(moveColor == 'Jugador 2'){
      $("#jugador1").removeClass("bg-primary mb-3");
      $("#jugador2").addClass("bg-primary mb-3");
      blackMovedPieces = blackMovedPieces + 1;
      $("#MovimientosRealizadosBlanco span").text(blackMovedPieces);
    }

    // check?
    if (game.in_check())
    {
      var newPgn= game.pgn().slice(-4, -1);
      status += ', ' + moveColor + ' is in check'
      audioCheck.play();
      if(isNaN(newPgn[0]) )
      {
        if(newPgn[0] == '.' || newPgn[0] == 'O')
        {
          audioMove.play();
          if(flagInvidente==1)
          {
            $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/"+newPgn[2]+".mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
            audioFila=document.getElementById("audio"+newPgn[3]);
            setTimeout(function()
            {
              audioFila.play();
            }, 500)
          }
        }
        else
        {
          if(newPgn[0] == '-')
          {
            audioCastling.play();
            $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/enroqueL.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
          }
          else
          {

            if(newPgn[0]=='x')
            {
              audioCapture.play();
              newPgn= last(game.pgn(),5);
              if (newPgn[0] == newPgn[0].toUpperCase())
              {
                $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/piezas/"+newPgn[0]+".mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
              }
              else
              {
                $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/"+newPgn[0]+".mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
              }
              audioPor=document.getElementById("audio"+newPgn[1].toUpperCase());
              audioColumna=document.getElementById("audio"+newPgn[2].toUpperCase());
              audioFila=document.getElementById("audio"+newPgn[3]);
              setTimeout(function()
              {
                audioPor.play();
              }, 500)
              setTimeout(function()
              {
                audioColumna.play();
              }, 1000)
              setTimeout(function()
              {
                audioFila.play();
              }, 1500)
            }
            else
            {
              if(newPgn[0]=='+')
              {
                audioMove.play();
                if(flagInvidente==1)
                {
                  $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/"+newPgn[2]+".mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
                  audioFila=document.getElementById("audio"+newPgn[3]);
                  setTimeout(function()
                  {
                    audioFila.play();
                  }, 500)
                }
              }
              else
              {
                audioMove.play();
                $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/piezas/"+newPgn[0]+".mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
                audioColumna=document.getElementById("audio"+newPgn[1].toUpperCase());
                setTimeout(function()
                {
                  audioColumna.play();
                }, 800)
                audioFila=document.getElementById("audio"+newPgn[2]);
                setTimeout(function()
                {
                  audioFila.play();
                }, 1300)
              }
            }
          }
        }
      }
      setTimeout(function()
      {
        audioJaque.play();
      }, 2000)
    }
    else
    {
      var newPgn= last(game.pgn(),4)
      console.log("Coordenada "+newPgn);
      if(isNaN(newPgn[0]) )
      {
        if(newPgn[0] == '.' || newPgn[0] == 'O')
        {
          audioMove.play();
          if(flagInvidente==1)
          {
            $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/"+newPgn[2]+".mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
            audioFila=document.getElementById("audio"+newPgn[3]);
            setTimeout(function()
            {
              audioFila.play();
            }, 500)
          }
        }
        else
        {
          if(newPgn[0] == '-')
          {
            audioCastling.play();
            $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/enroqueL.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
          }
          else
          {
            if(newPgn[1]=='x')
            {
              audioCapture.play();
              // Detección de piezas comidas
              // Nota: meter audio para comer
              if(moveColor == "Jugador 1"){
                blackEatenPieces = blackEatenPieces + 1;
                $("#PiezasCapturadasNegro span").text(blackEatenPieces);
                console.log("Negro ha comido "+blackEatenPieces+" piezas");
              }
              if(moveColor == "Jugador 2"){
                whiteEatenPieces = whiteEatenPieces + 1;
                $("#PiezasCapturadasBlanco span").text(whiteEatenPieces);
                console.log("Blanco ha comido "+whiteEatenPieces+" piezas");
              }

              if (newPgn[0] == newPgn[0].toUpperCase())
              {
                $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/piezas/"+newPgn[0]+".mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
              }
              else
              {
                $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/"+newPgn[0]+".mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
              }
              audioPor=document.getElementById("audio"+newPgn[1].toUpperCase());
              audioColumna=document.getElementById("audio"+newPgn[2].toUpperCase());
              audioFila=document.getElementById("audio"+newPgn[3]);
              setTimeout(function()
              {
                audioPor.play();
              }, 500)
              setTimeout(function()
              {
                audioColumna.play();
              }, 1000)
              setTimeout(function()
              {
                audioFila.play();
              }, 1500)
            }
            else
            {
              if(newPgn[0]=='+')
              {
                audioMove.play();
                if(flagInvidente==1)
                {
                  $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/"+newPgn[2]+".mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
                  audioFila=document.getElementById("audio"+newPgn[3]);
                  setTimeout(function()
                  {
                    audioFila.play();
                  }, 500)
                }
              }
              else
              {
                if(newPgn[0]=='R' || newPgn[0]=='C')
                {
                  audioMove.play();
                  console.log("Entro");
                  $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/piezas/"+newPgn[0]+".mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
                  setTimeout(function()
                  {
                    audioDe.play();
                  }, 500)
                  audioColumna=document.getElementById("audio"+newPgn[1].toUpperCase());
                  setTimeout(function()
                  {
                    audioColumna.play();
                  }, 1000)
                  setTimeout(function()
                  {
                    audioA.play();
                  }, 1500)
                  audioColumna2=document.getElementById("audio"+newPgn[2].toUpperCase());
                  setTimeout(function()
                  {
                    audioColumna2.play();
                  },2000)
                  audioFila=document.getElementById("audio"+newPgn[3].toUpperCase());
                  setTimeout(function()
                  {
                    audioFila.play();
                  }, 2500)
                }
                else
                {
                  audioMove.play();
                  $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/piezas/"+newPgn[1]+".mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
                  audioColumna=document.getElementById("audio"+newPgn[2].toUpperCase());
                  setTimeout(function()
                  {
                    audioColumna.play();
                  }, 800)
                  audioFila=document.getElementById("audio"+newPgn[3]);
                  setTimeout(function()
                  {
                    audioFila.play();
                  }, 1300)
                }
              }
            }
          }
        }
      }
      else
      {
        if(newPgn[0] == ' ')
        {
          if(newPgn[1] == 'O')
          {
            audioCastling.play();
            if(flagInvidente==1)
            {
              $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/enroqueC.mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
            }
          }
          else
          {
            audioMove.play();
            if(flagInvidente==1)
            {
              $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/piezas/"+newPgn[1]+".mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
              audioColumna=document.getElementById("audio"+newPgn[2].toUpperCase());
              setTimeout(function()
              {
                audioColumna.play();
              }, 800)
              audioFila=document.getElementById("audio"+newPgn[3]);
              setTimeout(function()
              {
                audioFila.play();
              }, 1300)
            }
          }
        }
        //If it's a number or dot, then it´s a peon.
        else
        {
          audioMove.play();
          if(flagInvidente==1)
          {
            $("#audioInvidentes").append("<audio controls autoplay><source src=\"sounds/"+newPgn[2]+".mp3\" type=\"audio/mpeg\">Your browser does not support the audio element.</audio>");
            audioFila=document.getElementById("audio"+newPgn[3]);
            setTimeout(function()
            {
              audioFila.play();
            }, 500)
          }
        }
      }
    }
  }
  $status.html(status)
  $fen.html(game.fen())
  $pgn.html(game.pgn())
}
function onMouseoverSquare (square, piece)
{
  // get list of possible moves for this square
  var moves = game.moves({
    square: square,
    verbose: true
  })

  // exit if there are no moves available for this square
  if (moves.length === 0)
  {
    return
  }

  // highlight the square they moused over
  greySquare(square)

  // highlight the possible squares for this piece
  for (var i = 0; i < moves.length; i++)
  {
    greySquare(moves[i].to)
  }
}

function onMouseoutSquare (square, piece)
{
  removeGreySquares()
}

function onSnapEnd ()
{
  board.position(game.fen())
}

var config = {
  draggable: true,
  position: 'start',
  onDragStart: onDragStart,
  onDrop: onDrop,
  onMouseoutSquare: onMouseoutSquare,
  onMouseoverSquare: onMouseoverSquare,
  onSnapEnd: onSnapEnd
}
board = Chessboard('myBoard', config)
// --- End Example JS ----------------------------------------------------------