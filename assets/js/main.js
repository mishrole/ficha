/*

var ficha = document.getElementById("fichas");

var nombre    = prompt("Ingrese su nombre");
var apellido  = prompt("Ingrese su apellido");
var dni       = prompt("Ingrese su número de dni");
var direccion = prompt("Ingrese su dirección");

function imprimirFicha(nombre, apellido, dni, direccion){
  
  return "Nombre: " + nombre + "<br>" +
         "Apellido: " + apellido + "<br>" +
         "DNI: " + dni + "<br>" +
         "Dirección: " + direccion + "<br>"
};

//ficha.innerHTML = imprimirFicha(nombre, apellido, dni, direccion);

document.write(imprimirFicha(nombre, apellido, dni, direccion));

*/

function imprimirFicha(nombre, apellido, dni, direccion){

	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	var dni = document.getElementById("dni");
	var direccion = document.getElementById("direccion");
//	var enviar = document.getElementById("enviar");
	var record = document.getElementById("records");


	records.innerHTML = "<li> Nombre: " + nombre.value + "<br>" +
           "<li> Apellido: " + apellido.value + "<br>" +
           "<li> DNI: " + dni.value + "<br>" +
           "<li> Dirección: " + direccion.value + "<br>"
};

/* enviar.onclick = function(){
	records.innerHTML = imprimirFicha(nombre,apellido,dni,direccion)
}
*/