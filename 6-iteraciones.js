//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe=1
	var minimo;
	var maximo;
	var diaMaximo;
	var diaMinimo;
	var contador=0;
	var bandera=true;

	importe=prompt("Ingrese su importe");

	while(contador<7)
	{
		contador++;

		while(importe<0)//para validar algo se pone que es menor
		{
			importe=prompt("ingrese un importe mayor a 0");
			importe=parseInt(importe);
			}
	

		if(bandera)
		{
			bandera=false;
			maximo=importe;
			minimo=importe;
		}
		else 
		{
			if(importe>maximo)
			{
					maximo=importe;
					diaMaximo=contador;
			}
			if (importe<minimo)
			{
				minimo=importe;
				diaMinimo=contador;
			}
		}
	}
	
}

	
	
	


