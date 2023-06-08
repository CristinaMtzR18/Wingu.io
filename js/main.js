//Ejercicio con JQuery Version 2
$(document).ready(function() {
	//funcion click, para el boton.
	//Al hacer click se valida si los input estan vacios
	$("#btnSubmit").click(function(){
		$(".error").remove();
		//Campo nombre
		if( $("#name").val() == ""){
			$("#name").focus().after('<span class="error">Ingrese su nombre</span>');
			console.log("Ingresar nombre");
			return false;
		//Campo apellido
		}else if($("#lastname").val() == ""){
			$("#lastname").focus().after('<span class="error">Ingrese su apellido</span>');
			console.log("Ingresar apellido");
			return false;
		//Campo correo
		}else if($("#input-email").val() == ""){
			$("#input-email").focus().after('<span class="error">Ingrese su correo</span>');
			console.log("Ingresar correo");
			return false;
		//Campo contraseña
      	}else if($("#input-password").val() == ""){
			$("#input-password").focus().after('<span class="error">Ingrese su contraseña</span>');
			console.log("Ingresar contraseña");
			return false;
		//Campo tipo bici
      	}else if( $("#opciones").val() == 0 ){
			$("#opciones").focus().after('<span class="error">Ingrese su tipo de bici</span>');
			console.log("Ingresar bicicleta");
			return false;
      	}
	 });
	//Validacion del campo NOMBRE
	$("#name").keyup( function(){
		console.log("Probando validacion de NOMBRE");
		//variable para nombre
		var texto = $("#name").val();
		$(".error").remove();
		//validacion de numeros
		if(/^[0-9]+$/.test(texto)){
			console.log("valor invalido");
			$("#name").focus().after('<span class="error">No ingrese numeros</span>');
			return false;
		}
		//validacion de letra mayúscula
		if(/^[a-z]$/.test(texto[0])){
			console.log("valor invalido");
			$("#name").focus().after('<span class="error">Inicia con mayúscula</span>');
			return false;
		}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
	});
	//Validacion del campo APELLIDO
	$("#lastname").keyup( function(){
		console.log("Probando validacion de Apellido");
		//variable para apellido
		var texto = $("#lastname").val();
		$(".error").remove();
		//validacion de numeros
		if(/^[0-9]+$/.test(texto)){
			console.log("valor invalido");
			$("#lastname").focus().after('<span class="error">No ingrese numeros</span>');
			return false;
		}
		//validacion de letra mayúscula
		if(/^[a-z]$/.test(texto[0])){
			console.log("valor invalido");
			$("#lastname").focus().after('<span class="error">Inicia con mayúscula</span>');
			return false;
		}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
	});
	//Validacion del campo CORREO
	//regex correo
	var regexCorreo = /^([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})$/;
	$("#input-email").keyup( function(){
		console.log("Probando validacion de correo");
		//variable para correo
		var texto = $("#input-email").val();
		$(".error").remove();
		//validacion de numeros
		if(!regexCorreo.test(texto)){
			console.log("valor invalido");
			$("#input-email").focus().after('<span class="error">Ingresa un correo valido. Ej: name@domain.com</span>');
			return false;
		}
	});
	//Validacion del campo CONTRASEÑA
	$("#input-password").keyup( function(){
		console.log("Probando validacion de contraseña");
		//variable para correo
		var texto = $("#input-password").val();
		$(".error").remove();
		//Validacion de numeros
		//Validacion de longitud de texto 
		if(texto.length < 6){
			console.log("valor invalido");
			$("#input-password").focus().after('<span class="error">Ingresa una contraseña mayor a 6 caracteres</span>');
			return false;
		}
		//Validacion para "123456" y "098754"
		if(texto == "123456" || texto == "098754"){
			console.log("valor invalido");
			$("#input-password").focus().after('<span class="error">Ingresa una contraseña diferente a 123456 o 098754</span>');
			return false;
		}
		//Validacion para "password"
		if(texto == "password"){
			console.log("valor invalido");
			$("#input-password").focus().after('<span class="error">Ingresa una contraseña diferente a password</span>');
			return false;
		}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
	});
	//Validacion del campo OPCIONES
	//obtener el valor de un campo de selección “select” despues del evento “change“
	$("#opciones").click('change', function(){
		console.log("Probando validacion de opciones");
		//variable para correo
		var texto = $("#opciones").val();
		$(".error").remove();
		//validacion de numeros
		if(texto == 0){
			console.log("valor invalido");
			$("#opciones").focus().after('<span class="error">Selecciona tipo de bici</span>');
			return false;
		}
	});

});


//Ejercicio guiado con Irving, Version 1
/*var regexNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;
$(document).ready(function (){
	console.log("Esta listo");

	$("#name").keypress(function() {
		console.log("Presiono una tecla");
		var texto = $("#name").val();
		$("span").remove();

		//var texto = $(evt.target).val();
		//trim elimina espacios en blanco
		if (texto.trim() == ""){
			console.log("Campo vacio");
			var span = $('<span class="error"> Campo Vacio </span>');
			$(".name-container").append(span);
		}

		if(!regexNombre.test(texto)){
			console.log("valor invalido");
			var span = $('<span class="error"> Campo Vacio </span>');
		}
	});

	$("#lastname").keypress(function() {
		console.log("Presiono una tecla");
	});

	$("#input-email").keypress(function() {
		console.log("Presiono una tecla");
	});

	$("#password").keypress(function() {
		console.log("Presiono una tecla");
	});
});*/


/*Carrusel
$(document).ready(function() {
	$('.carousel').carousel();
  });
*/

  function redirectToThankYou() {
	window.location.href = "thank_you.html";
  }
  
  