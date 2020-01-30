<?php
if(isset($_SESSION['nombre'])){
  header("Location: index.php");
  exit();
}
  session_start();
?>
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <link rel='icon' href='img/favicon.ico' type='image/x-icon'/ >
    <title><?=$_SESSION['nombre'];?> VS J2</title>
    <base href="./" />
    <link href='https://fonts.googleapis.com/css?family=Montserrat+Alternates:700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.css">
    <link rel="stylesheet" href="css/jvsj.css">
  </head>
  <body>
    <div class="container">
      <center class="tituloJuego">Jugador 1 vs Jugador 2</center>
      <div>
        <div class="row partida">
        <input type="hidden" id="nombre" value="<?=$_SESSION['nombre'];?>">
        <input type="hidden" id="discapacidad" value="<?=$_SESSION['discapacidad'];?>">
          <!--Avatar jugador 1-->
          <div class="col-sm"  align="center">
            <div class="card" style="width: 10rem;" id="jugador1">
              <img class="card-img-top" src="img/avatar2.png" alt="Jugador 1">
              <div class="card-body">
                <p class="card-text"><?=$_SESSION['nombre'];?></p>
              </div>
            </div>
            <!--Estadisticas jugador 1-->
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <p class="card-text" id="PiezasCapturadasBlanco">Piezas Capturadas: <span></span></p>
              </div>
              <div class="card-body">
                <p class="card-text" id="MovimientosRealizadosBlanco">Movimientos Realizados: <span></span></p>
              </div>
            </div>
          </div>
          <div class="col-sm" align="center">
            <!-- Ajedrez Jugador vs Jugador -->
            <div id="myBoard" style="width: 400px"></div>
            <br>
            <button class="btn btn-danger salir">Terminar</button>
            <br>
            <br>
            <div id="audioBox">
              <audio controls preload="auto" id="audioMove"><source src="sounds/dropPiece.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioCheck"><source src="sounds/check.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioCapture"><source src="sounds/capturePiece.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioCastling"><source src="sounds/castling.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioMate"><source src="sounds/mate.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioJaque"><source src="sounds/jaque.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioDe"><source src="sounds/de.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioE"><source src="sounds/e.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audio1"><source src="sounds/1.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audio2"><source src="sounds/2.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audio3"><source src="sounds/3.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audio4"><source src="sounds/4.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audio5"><source src="sounds/5.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audio6"><source src="sounds/6.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audio7"><source src="sounds/7.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audio8"><source src="sounds/8.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioA"><source src="sounds/a.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioB"><source src="sounds/b.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioC"><source src="sounds/c.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioD"><source src="sounds/d.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioE"><source src="sounds/e.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioF"><source src="sounds/f.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioG"><source src="sounds/g.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioH"><source src="sounds/h.mp3" type="audio/mpeg">
              </audio>
              <audio controls preload="none" id="audioX"><source src="sounds/x.mp3" type="audio/mpeg">
              </audio>
            </div>
            <div id="audioInvidentes">
            </div>
          </div>
          <!--Avatar jugador 2 -->
          <div class="col-sm" align="center">
            <div class="card" style="width: 10rem;" id="jugador2">
              <img class="card-img-top" src="img/avatar1.png" alt="Jugador 2">
              <div class="card-body">
                <p class="card-text">Jugador 2</p>
              </div>
            </div>
            <!-- Estadísticas jugador 2 -->
            <div class="card" style="width: 18rem;">
              <div class="card-body">
                <p class="card-text" id="PiezasCapturadasNegro">Piezas Capturadas: <span></span></p>
              </div>
              <div class="card-body">
                <p class="card-text" id="MovimientosRealizadosNegro">Movimientos Realizados: <span></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer -->
      <footer class="footer">
        <img src="img/pilares.jpg" width="25%" height="20%">
        <img src="img/ibero.png" width="25%" height="20%">
        <img src="img/mit.png" width="25%" height="20%">
      </footer>
    <!-- Scripts -->
    <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/chess.js/0.10.2/chess.js"></script>
    <script src="js/jvsj.js"></script>
  </body>
</html>
