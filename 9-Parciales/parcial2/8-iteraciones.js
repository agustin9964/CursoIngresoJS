//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var numero;
	var seguir;
	var cantidadPares=0;
	var acumulador=0;
	var promedio;
	var contador=0;
	var bandera=0;
	var maximo;
	var minimo;

	while(seguir==true)
		{
			contador++;

			numero=prompt("Ingrese numero");

			numero=parseInt(numero);

			while(numero<=0)
				{
					numero=prompt("Ingrese numero");
					numero=parseInt(numero);
				}
			if(numero%2==0&&numero!=0)
				{
					cantidadPares++;
				}
			acumulador=acumulador+numero;

			if(bandera==0||numero<minimo)
				{
					minimo=numero;
					
				}
			if(bandera==0||numero>maximo)
				{
					maximo=numero;
					bandera=1
				}	

			seguir=prompt("¿desea ingresar otro?");
		}
	
	promedio=acumulador/contador;

	document.write("Promedio: " + promedio);
	document.write("Sumatoria: " + acumulador);

}

