function imprimirFicha(nombre, apellido, dni, direccion){

	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");
	var dni = document.getElementById("dni");
	var direccion = document.getElementById("direccion");
	var record = document.getElementById("records");

	if((nombre.value.length == 0) || (apellido.value.length == 0) || (dni.value.length == 0) || (direccion.value.length == 0)){
		return alert("Rellene todos los campos");
	}

	if(dni.value.length == 8){
	records.innerHTML = "<li> Nombre: " + nombre.value + "<br>" +
           "<li> Apellido: " + apellido.value + "<br>" +
           "<li> DNI: " + dni.value + "<br>" +
           "<li> Dirección: " + direccion.value + "<br>"
	}else{
		return alert("Ingrese un número de ocho dígitos")
	}

};
