function Mostrar()
{
// se declaran las variables

//se puede usar la variable bandera para notar la primer llegada, como el acumulador
// se le da un valor, se usa por primera vez con ese valor y luego se le cambia el valor

// cuando la respuesta sea distinta a no, el contador va a sumar, y pedir por prompt y parsearlos

// cuando el contador sea el primero, el numero va a ser el maximo y el minimo a la vez

// cuando el contador ya no es uno,si el numero es mayor al maximo, el maximo va a ser ese numero

//si el numero es menor al minimo, ese numero va a ser el minimo

// se pide por prompt si quiere continuar, y cuando ya no se quiere, se muestra el minimo y maximo por ID
	var contador=0;
	var maximo;
	var minimo;

	var numero;
	// declarar variables
	
	var respuesta='si';

	while(respuesta!='no')
	{
		contador++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);

		if(contador==1)
			{
				maximo=numero;
				minimo=numero;
			}
		else
		{	

			if(numero>maximo)
			{
				maximo=numero;


			}
			if(numero<minimo)
			{
				minimo=numero;


		}

		respuesta=prompt("para salir, ingresar no");
		}
	}

	document.getElementById("maximo").value=maximo;

	document.getElementById("minimo").value=minimo;




}//FIN DE LA FUNCIÓN