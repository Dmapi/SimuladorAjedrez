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
	  <title>AJEDREZ IBERO-MIT-PILARES</title>
	  <!--Logo pilares -->
	  <link href='https://fonts.googleapis.com/css?family=Montserrat+Alternates:700' rel='stylesheet' type='text/css'>
	  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css">
	  <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.0.3/css/font-awesome.min.css'>
	  <link rel="stylesheet" href="css/main.css">
	</head>
	<body>
		<!-- Menú de opciones -->
		<nav role='navigation' id="mainnav">
		  <ul>
		    <li id="inicio">
		    	<a href="main.php">Inicio</a>
		    </li>
		    <li id="jugar">Jugar</li>
		    <li id="perfil">Perfil</li>
		    <li id="equipoDesarrollo">Equipo de Desarrollo</li>
		    <li>
		    	<a href="logout.php">Salir</a>
		    </li>
		  </ul>
		</nav>
		<!-- Menú hamburguesa -->
		<div class="hamb">
		  <a href="#"><i class="fa fa-bars"></i></a>
		</div>
		<!-- Vista principal -->
		<div class="hero">
		    <div class="welcome"><br><br>Bienvenido<br><?=$_SESSION['nombre'];?>
		      <img src="img/chess_pieces.jpg">
		      <button id="myButton" class="button button-success">Comenzar</button> <br>
		      <h2>Reglas del Ajedrez</h2>
		      <p><br>Este juego se basa en estrategia, realiza los mejores movimientos para<br>capturar al rey</p>
		    </div>
		</div>
		<!-- Footer -->
		<footer class="footer">
		  <img src="img/pilares.jpg" width="25%" height="20%">
		  <img src="img/ibero.png" width="25%" height="20%">
		  <img src="img/mit.png" width="25%" height="20%">
		</footer>
		<!-- Canvas -->
		<canvas id="bubble"></canvas>
		<!-- Scripts -->
		<script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
		<script src='https://code.jquery.com/ui/1.10.3/jquery-ui.js'></script>
		<script  src="js/main.js"></script>
	</body>
</html>

