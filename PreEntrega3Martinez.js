'use strict'

//PROYECTO SERVICIO DE CARRERAS DE KARTINGS 



alert("Bienvenido a Kartodromo Buenos Aires")
const valor = 1200;
alert("El valor de la inscripcion es " + valor);
let arrayCorredores = [];
let corredoresDisponibles = 0;
const arrayCircuitos = ["Cerrado", "Chico", "Grande"];

const valorCasco = 350;

//LISTADO DE PERSONAS

class Corredor {
	constructor(nombre, edad, casco) {
		this.nombre = nombre;
		this.edad = edad;
		this.casco = casco;

	}

}
const arrayCorredoresStorage = localStorage.getItem("arrayCorredores");

if(arrayCorredoresStorage !== null && arrayCorredoresStorage !== "null"){
	arrayCorredores = JSON.parse(arrayCorredoresStorage);
	corredoresDisponibles = arrayCorredores.length;
	renderizarTabla()
}

console.log(arrayCorredores);
//CANTIDAD DE CORREDORES DISPONIBLES

const agregar = document.getElementById("agregar");


 

agregar.addEventListener("click", () => {
	


	let nombre = document.getElementById("nombre").value;
	let edad = parseInt(document.getElementById("edad").value);
	let casco = document.getElementById("cbox").checked;

	if (edad >= 18) {
		corredoresDisponibles++;
		arrayCorredores.push(new Corredor(nombre, edad, casco));
		

	} else {
		
		alert("Eres menor, no puedes ingresar")
	}

	localStorage.setItem("arrayCorredores", JSON.stringify(arrayCorredores));


	document.getElementById("nombre").value = " ";
	document.getElementById("edad").value = " ";
	document.getElementById("cbox").checked = false;


	renderizarTabla()

	console.log(arrayCorredores);



});


const circuitoBoton = document.getElementById("circuitoBoton");
circuitoBoton.addEventListener("click", () => {
	alert("Son " + corredoresDisponibles + " participantes en la carrera ");
	localStorage.removeItem("arrayCorredores");
	elegirCircuito(corredoresDisponibles);


})






//ELECCION DE CIRCUITOS Y CAPACIDAD



function elegirCircuito(corredoresDisponibles) {
	const select = document.getElementById("seleccionCircuitos");
	let arrayCircuitos = [];
	if (corredoresDisponibles <= 5) {
		alert("Pueden correr en cualquiera de los 3 circuitos");
		arrayCircuitos = ["Cerrado", "Chico", "Grande"];







	} else if (corredoresDisponibles > 5 && corredoresDisponibles <= 10) {
		alert("Pueden correr en el circuito chico o circuito grande");
		arrayCircuitos = ["Chico", "Grande"];





	} else if (corredoresDisponibles > 10 && corredoresDisponibles < 15) {
		alert("Solamente pueden correr en el circuito grande")
		arrayCircuitos = ["Grande"];

	} else if (corredoresDisponibles > 15) {
		alert("Son demasiados corredores");

	}
	for (let i = 0; i < arrayCircuitos.length; i++) {
		var opt = document.createElement('option');
		opt.value = i;
		opt.innerHTML = arrayCircuitos[i];
		select.appendChild(opt);
	}

}
const formularioCircuitos = document.getElementById("formularioCircuitos");

formularioCircuitos.addEventListener("submit", (event) => {
	console.log(corredoresDisponibles);
	event.preventDefault();
	seguir(corredoresDisponibles);

})








function seguir(corredoresDisponibles) {

	//ADICIONAL ALQUILER CASCO

	const resultadoFiltro = arrayCorredores.filter(corredor => corredor.casco == false);
	console.log("Los corredores que necesitan casco adicional son : ")
	console.log(resultadoFiltro);


	//VALOR TOTAL DE LAS INSCRIPCIONES

	function calcularValor() {
		const valorTotal = (resultadoFiltro.length * valorCasco) + (corredoresDisponibles * valor);
		return valorTotal;

	}

	alert("Son " + corredoresDisponibles + " corredores disponibles, " + resultadoFiltro.length + " cascos adicionales,  el valor total es : " + calcularValor());
	arrayCorredores = [];
	renderizarTabla()
}













//CREAMOS TABLA
function renderizarTabla(){
	const tbodyDatosCorredores = document.getElementById("tbodyDatosCorredores");
	tbodyDatosCorredores.innerHTML = "";
	
	for(const corredor of arrayCorredores){
		
		const tr = document.createElement("tr");
	
		const td1 = document.createElement("td");
		td1.innerText = corredor.nombre;

		const td2 = document.createElement("td");
		td2.innerText = corredor.edad;

		const td3 = document.createElement("td");
	    corredor.casco == true  ? td3.innerText = "Si" : td3.innerText = "No" 

	
		
		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);

		tbodyDatosCorredores.appendChild(tr);
	}
}

