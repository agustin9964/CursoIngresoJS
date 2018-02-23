function Mostrar()
{

	// se pide un numero que sea menor a 0 o mayor a 9 para hacer el loop 

	// se va a pedir numeros hasta que el valor del while sea false y ahi se muestra por ID 

	var numero;

	numero = prompt("ingrese un número entre 0 y 10.");


	while(numero<0||numero>9)
		{
			alert("el numero insertado no es el solicitado");


			numero=prompt("ingrese un numero entre 0 y 10 por favor");

		}

	document.getElementById("Numero").value=numero
	


}//FIN DE LA FUNCIÓN