'use strict'

//PROYECTO SERVICIO DE CARRERAS DE KARTINGS 


alert("Bienvenido a Kartodromo Buenos Aires")
let valor = 1200;
alert("El valor de la inscripcion es " + valor);
let corredores = parseInt(prompt("Introduce cuantos corredores van a participar"));
let nombre = "";
let edad = 0;
let circuitos = "";
let circuitoCerrado = 1;
let circuitoChico = 2;
let circuitoGrande = 3;
let corredoresDisponibles = 0;



//CANTIDAD DE CORREDORES DISPONIBLES


	for(let i = 1; i <= corredores; i++){
		let nombre = prompt("Introduzca el nombre de los corredores");
		let edad = parseInt(prompt("Introduzca su edad")); 
		console.log("El nombre del corredor es " + nombre + " y tiene " + edad + " años");

		if(edad >= 18){
			corredoresDisponibles ++;
			console.log("Puedes inscribirte en la carrera");
	}else{
		console.log("Eres menor, no puedes ingresar")
	}


	}
	alert("Son " + corredoresDisponibles + " participantes en la carrera " );

	//ELECCION DE CIRCUITOS Y CAPACIDAD

	function elegirCircuito(corredoresDisponibles){

		if(corredoresDisponibles <= 5){
		alert("Pueden correr en cualquiera de los 3 circuitos");
			circuitos = prompt("Introduce el numero del circuito, 1 = circuitoCerrado, 2 = circuitoChico y 3 = circuitoGrande ");

		while(circuitos != 1 && circuitos != 2 && circuitos != 3){	
			
			switch(circuitos){
				case "1":
					console.log("Elegiste circuitoCerrado");
					break;

				case "2":
					console.log("Elegiste circuitoChico");
					break;
				case "3":
				console.log("Elegiste circuitoGrande");
					break;
				default:
					alert("Elegiste una opcion no valida");	
				}
				circuitos = prompt("Introduce el numero del circuito, 1 = circuitoCerrado, 2 = circuitoChico y 3 = circuitoGrande ");
			}
			console.log("Elegiste el circuito numero " + circuitos);
				
			


		}else if(corredoresDisponibles > 5 && corredoresDisponibles <= 10){
			alert("Pueden correr en el circuito chico o circuito grande");
				circuitos = prompt("Introduce el numero del circuito, 2 = circuitoChico y 3 = circuitoGrande ");
					console.log("Elegiste el circuito numero " + circuitos);
			while(circuitos != 2 && circuitos != 3){	
				
				switch(circuitos){


					case "2":
						console.log("Elegiste circuitoChico");
						break;
					case "3":
					console.log("Elegiste circuitoGrande");
						break;
					default:
						alert("Elegiste una opcion no valida");	
					}
					circuitos = prompt("Introduce el numero del circuito, 2 = circuitoChico y 3 = circuitoGrande ");

				}



		}else if(corredoresDisponibles > 10 && corredoresDisponibles < 15){
			alert("Solamente pueden correr en el circuito grande")


		}else if(corredoresDisponibles > 15){
			alert("Son demasiados corredores");

		}

	}

	elegirCircuito(corredoresDisponibles);
	

		//VALOR TOTAL DE LAS INSCRIPCIONES

		
let valorTotal = corredoresDisponibles * valor;
alert("Son " + corredoresDisponibles + " corredores disponibles, el valor total es : " +valorTotal);



