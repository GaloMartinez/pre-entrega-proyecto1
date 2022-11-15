'use strict'
//PROYECTO SERVICIO DE CARRERAS DE KARTINGS 
let valor;
let valorCasco;
let alertMenor;

datosIniciales();

setTimeout(() => Swal.fire({
	title: 'Bienvenido',
	text: `El valor de la inscripcion es $ ${valor}`,
	icon: 'info',
	confirmButtonText: 'Ok'
}), 1000)


let arrayCorredores = [];
let corredoresDisponibles = 0;
const arrayCircuitos = ["Cerrado", "Chico", "Grande"];



//LISTADO DE PERSONAS

class Corredor {
	constructor(nombre, edad, casco) {
		this.nombre = nombre;
		this.edad = edad;
		this.casco = casco;

	}

}
let arrayCorredoresStorage = localStorage.getItem("arrayCorredores");

if (arrayCorredoresStorage !== null && arrayCorredoresStorage !== "null") {
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

		Swal.fire({
			title: 'Denegado',
			text: alertMenor,
			icon: 'error',
			confirmButtonText: 'Ok'
		});
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
	Swal.fire({
		title: 'Cantidad de corredores',
		text: "Son " + corredoresDisponibles + " participantes en la carrera ",
		icon: 'info',
		confirmButtonText: 'Ok'
	});

	localStorage.removeItem("arrayCorredores");
	elegirCircuito(corredoresDisponibles);


})






//ELECCION DE CIRCUITOS Y CAPACIDAD



function elegirCircuito(corredoresDisponibles) {

	const select = document.getElementById("seleccionCircuitos");
	let arrayCircuitos = [];
	if (corredoresDisponibles <= 5) {

		Swal.fire("Pueden correr en cualquiera de los 3 circuitos")

		arrayCircuitos = ["Cerrado", "Chico", "Grande"];







	} else if (corredoresDisponibles > 5 && corredoresDisponibles <= 10) {
		Swal.fire("Pueden correr en el circuito chico o circuito grande")

		arrayCircuitos = ["Chico", "Grande"];





	} else if (corredoresDisponibles > 10 && corredoresDisponibles < 15) {
		Swal.fire("Solamente pueden correr en el circuito grande")
		arrayCircuitos = ["Grande"];

	} else if (corredoresDisponibles > 15) {
		Swal.fire("Son demasiados corredores")


	}

	for (let i = 0; i < arrayCircuitos.length; i++) {
		let opt = document.createElement('option');
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
	Swal.fire({
		title: 'Confirmacion de reserva',
		icon: 'warning',
		text: `Son  ${corredoresDisponibles} corredores disponibles.
		${resultadoFiltro.length}  cascos adicionales. 
		El valor total es : $${calcularValor()}`,
		confirmButtonText: 'Si',
		showDenyButton: true,
		denyButtonText: 'No',
	}).then((result) => {
		if (result.isConfirmed) {
			console.log("Se confirmo la reserva");

		}
		if (result.isDenied) {
			console.log("Se cancelo la reserva");


		}
	})
	limpiarDatos();
}

function limpiarDatos() {
	localStorage.removeItem("arrayCorredores");
	//Vacio select y se agrega la opcion por defecto
	const select = document.getElementById("seleccionCircuitos");
	select.innerHTML = "";
	let opt = document.createElement('option');
	opt.value = "";
	opt.innerHTML = "Seleccione un circuito";
	select.appendChild(opt);
	arrayCorredoresStorage = [];
	corredoresDisponibles = 0;
	arrayCorredores = [];
	renderizarTabla();
}









//CREAMOS TABLA
function renderizarTabla() {
	const tbodyDatosCorredores = document.getElementById("tbodyDatosCorredores");
	tbodyDatosCorredores.innerHTML = "";

	for (const corredor of arrayCorredores) {

		const tr = document.createElement("tr");

		const td1 = document.createElement("td");
		td1.innerText = corredor.nombre;

		const td2 = document.createElement("td");
		td2.innerText = corredor.edad;

		const td3 = document.createElement("td");
		corredor.casco == true ? td3.innerText = "Si" : td3.innerText = "No"



		tr.appendChild(td1);
		tr.appendChild(td2);
		tr.appendChild(td3);

		tbodyDatosCorredores.appendChild(tr);
	}
}



async function datosIniciales() {
	const response = await fetch('https://api.npoint.io/bb344c92519db368616e');
	const datos = await response.json();


	valor = datos.valor;
	valorCasco = datos.valorCasco;
	alertMenor = datos.alertMenor;

}	
