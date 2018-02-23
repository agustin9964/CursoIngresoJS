function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while(true)
		{
			contador++;

			numero=prompt("ingrese un numero");

			numero=parseInt(numero);

			if (isNaN(numero)||numero==null)
				{
					break;

				}
		acumulador=acumulador+numero;		

		}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN