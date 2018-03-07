function Mostrar()
{

	var importe;
	var contador=0;
	var maximoImporte;
	var minimoImporte;
	var bandera=0;


	while(contador<24)
		{
			contador++;
			importe=prompt("Ingrese su importe");
			importe = parseInt(importe);

			while(isNaN(importe) || importe<=0)
				{
					importe=prompt("Ingrese su importe, tiene que ser un numero mayor a 0 y sin letras");
					importe = parseInt(importe);
				}
		if(bandera==0)
			{
				maximoImporte=importe;
				minimoImporte=importe;
				bandera++;
			}	
		else
			{
				if(importe>maximoImporte)
					{
						maximoImporte=importe;
					}
				else
					{
						if(importe<maximoImporte&&importe<minimoImporte)
						{
							minimoImporte=importe;
						}	
						
					}	
			}		
		}

	document.write(" El maximo importe fue de " + maximoImporte+"<br>");
	document.write(" El minimo importe fue de " + minimoImporte+"<br>")
}
