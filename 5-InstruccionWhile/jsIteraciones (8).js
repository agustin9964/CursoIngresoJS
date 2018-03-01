function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;

	var respuesta='si';

	

	while(true)// siempre que sea verdadero (bucle infinito)
		{
			numero=prompt("ingrese un numero"); //se pide un numero por prompt

			if(numero==null)// si se presiona cancelar, se rompe el bucle.
				{
					break;
				}

			else // sigue el programa si no se cumple lo del if
				{	numero=parseInt(numero);

					if(isNaN(numero)) //en caso de que no sea un numero lo que se ingrese, se muestra un alert 
						{
							alert("ingrese un numero para continuar");

							continue;// se vuelve a iniciar el while
						}
					
				} 

				if (numero>0)// si el numero es mayor a 0 se suma
					{
						positivo+=numero;
					}	

				else // si el numero es menor a 0 se multiplica
					{ 
						if(numero<0)
							{
								negativo*=numero;
							}


					}		
		}


	



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN