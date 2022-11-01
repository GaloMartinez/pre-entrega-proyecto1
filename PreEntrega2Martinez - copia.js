'use strict'

//PROYECTO SERVICIO DE CARRERAS DE KARTINGS 


alert("Bienvenido a Kartodromo Buenos Aires")
const valor = 1200;
alert("El valor de la inscripcion es " + valor);
let cantidadDeCorredores = parseInt(prompt("Introduce cuantos corredores van a participar"));
let nombre = "";
let edad = 0;
let circuitos = "";
let corredoresDisponibles = 0;
const arrayCircuitos = ["circuitoCerrado", "circuitoChico", "circuitoGrande"];
let casco = "";
let personas = [];
const valorCasco = 350;

//LISTADO DE PERSONAS

class Corredor {
	constructor(nombre, edad, casco) {
		this.nombre = nombre;
		this.edad = edad;
		this.casco = casco;

	}

}

//CANTIDAD DE CORREDORES DISPONIBLES


for (let i = 1; i <= cantidadDeCorredores; i++) {
	nombre = prompt("Introduzca el nombre de los corredores");
	edad = parseInt(prompt("Introduzca su edad"));
	casco = prompt("Tienes casco?");

	console.log("El nombre del corredor es " + nombre + " y tiene " + edad + " años");

	if (edad >= 18) {
		corredoresDisponibles++;
		console.log("Puedes inscribirte en la carrera");
		personas.push(new Corredor(nombre, edad, casco));
	} else {
		console.log("Eres menor, no puedes ingresar")
	}


}
alert("Son " + corredoresDisponibles + " participantes en la carrera ");

console.log(personas);








//ELECCION DE CIRCUITOS Y CAPACIDAD

function elegirCircuito(corredoresDisponibles) {

	if (corredoresDisponibles <= 5) {
		alert("Pueden correr en cualquiera de los 3 circuitos");
		circuitos = prompt("Introduce el numero del circuito, 0 = circuitoCerrado, 1 = circuitoChico y 2 = circuitoGrande ");

		while (circuitos != 0 && circuitos != 1 && circuitos != 2) {


			circuitos = prompt("Opcion incorrecta, vuelve a introducir el numero del circuito, 0 = circuitoCerrado, 1 = circuitoChico y 2 = circuitoGrande ");
		}
		console.log("Elegiste " + arrayCircuitos[circuitos] + ", numero " + circuitos);





	} else if (corredoresDisponibles > 5 && corredoresDisponibles <= 10) {
		alert("Pueden correr en el circuito chico o circuito grande");
		circuitos = prompt("Introduce el numero del circuito, 1 = circuitoChico y 2 = circuitoGrande ");

		while (circuitos != 1 && circuitos != 2) {


			circuitos = prompt("Opcion incorrecta, vuelve a introducir el numero del circuito, 1 = circuitoChico y 2 = circuitoGrande ");

		}
		console.log("Elegiste " + arrayCircuitos[circuitos] + ", numero " + circuitos);



	} else if (corredoresDisponibles > 10 && corredoresDisponibles < 15) {
		alert("Solamente pueden correr en el circuito grande")


	} else if (corredoresDisponibles > 15) {
		alert("Son demasiados corredores");

	}

}

elegirCircuito(corredoresDisponibles);





//ADICIONAL ALQUILER CASCO
const resultadoFiltro = personas.filter(corredor => corredor.casco == "no");
console.log("Los corredores que necesitan casco adicional son : ")
console.log(resultadoFiltro);


//VALOR TOTAL DE LAS INSCRIPCIONES




function calcularValor() {
	const valorTotal = (resultadoFiltro.length * valorCasco) + (corredoresDisponibles * valor);
	return valorTotal;

}

alert("Son " + corredoresDisponibles + " corredores disponibles, " + resultadoFiltro.length + " cascos adicionales,  el valor total es : " + calcularValor());


//DOM

let input1 = document.getElementById("input1");