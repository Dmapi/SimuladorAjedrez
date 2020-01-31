<?php
if(isset($_SESSION['nombre'])){
  header("Location: index.php");
  exit();
}
  session_start();
?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <link href='https://fonts.googleapis.com/css?family=Montserrat+Alternates:700' rel='stylesheet' type='text/css'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css'>
    <link rel="stylesheet" href="css/main.css">
  </head>
  <body>
  <div id="vistaJuego">
      <div class="headingB">
         <center>
         <button id="ejercicios" class="button"><a href="jvsj.php">Jugador vs Jugador</a></button>
         <button id="ejercicios" class="button"><a href="ejercicios.php">Ejercicios</a></button>
         <button id="jvspc" class="button"><a href="jvsPC.php">Jugador vs PC (SIMULADOR)</a></button>
        </center>
      </div>
    </div>
    <canvas id="bubble"></canvas>
  </body>
</html>
