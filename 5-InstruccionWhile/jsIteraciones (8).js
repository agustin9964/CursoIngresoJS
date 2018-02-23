function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;

	var respuesta='si';

	

	while(respuesta=="si")
		{
			contador++;
			numero=prompt("elija un numero");
			numero=parseInt(numero);

			while(isNaN(numero))
			{
				break;
			}

		}
respuesta=prompt("desea continuar?");
	if (numero>=0)
		{
			positivo=positivo+numero;
		}
	else 
		{
			negativo=negativo*numero;
		}
	
	



document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN