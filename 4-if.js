//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numeroUno;
	var numeroDos;
	var multiplicacion;
	var suma;
	var resta;


	numeroUno=prompt("Ingrese un numero");
	numeroDos=prompt("Ingrese un numero por segunda vez");

	numeroUno=parseInt(numeroUno);
	numeroDos=parseInt(numeroDos);

	if(numeroUno==numeroDos)
	{
		multiplicacion=numeroUno*numeroDos;
		document.write(multiplicacion);

	}
	else 
	{	
		if(numeroUno>numeroDos)
		{
		
			resta=numeroUno-numeroDos;

			document.write(resta);
		}
		

		else
		{
			suma=numeroUno+numeroDos;

			document.write(suma);
		}

	}	

		

	
	
}

