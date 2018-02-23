function Mostrar()
{
// se pide que el contador 5 veces sume la var numero, y en caso de no ser un numero, se pide  que ingrese un numero

// a los numeros insertados por prompt se los va sumando entre cada uno  luego aparecen por id 

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5&&contador!=null)
		{
			contador++;

			numero=prompt("Ingrese 5 numeros");

			numero=parseInt(numero);

			while (isNaN(numero))
				{
					numero=prompt("ingresa 5 NUMEROS");

					numero=parseInt(numero);
				}

			acumulador=acumulador+numero;	
		}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN