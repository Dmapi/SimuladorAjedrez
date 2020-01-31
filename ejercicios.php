<?php
if(isset($_SESSION['nombre'])){
  header("Location: index.php");
  exit();
}
  session_start();
?>
<!DOCTYPE html>
<html lang="en" >
  <head>
    <title>Ejercicios</title>
    <base href="./" />
    <link href='https://fonts.googleapis.com/css?family=Montserrat+Alternates:700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css'>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://unpkg.com/@chrisoakman/chessboardjs@1.0.0/dist/chessboard-1.0.0.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css'>
    <link rel="stylesheet" type="text/css" href="css/jvsj.css">
  </head>
  <body>
    <div class="container">
      <center class="tituloJuego">Ejercicios</center>
      <center>
        <img src="img/construccion2.gif" width="700" height="550">
      </center>
      <br>
      <center>
        <button class="btn btn-danger salir">Salir</button>
      </center>
    </div>
    <!--<div class="hamb">
      <a href="#"><i class="fa fa-bars"></i></a>
    </div>
    <div class="hero">
        <div class="heading">
            <center><br> Ejercicios </center>
        </div>
        <div class="listE">
          <center>
            <button id="myButtonE1" class="button" type="submit">Ejercicio 1</button>
            <button id="myButtonE3" class="button" type="submit">Ejercicio 2</button>
            <button id="myButtonE2" class="button" type="submit">Ejercicio 3</button>
            <button id="myButtonE2" class="button" type="submit">Ejercicio 4</button>
            <button id="myButtonE2" class="button" type="submit">Ejercicio 5</button>
            <button id="myButtonE2" class="button" type="submit">Ejercicio 6</button>
          </center>
        </div>
    </div>-->

    <!-- Canvas -->
    <canvas id="bubble"></canvas>
    <!-- Footer -->
    <footer class="footer">
      <img src="img/pilares.jpg" width="25%" height="20%">
      <img src="img/ibero.png" width="25%" height="20%">
      <img src="img/mit.png" width="25%" height="20%">
    </footer>
    <!-- Scripts -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
    <script src='https://code.jquery.com/ui/1.10.3/jquery-ui.js'></script>
    <script  src="js/ejercicios.js"></script>
  </body>
</html>
