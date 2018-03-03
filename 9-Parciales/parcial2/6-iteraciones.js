//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*var importe;
	var maximo;
	var minimo;
	var bandera=0;
	var contador=0;
	var dia;
	var diaMaximo;
	var diaMinimo;

	while(contador<7)//cuando el contador sea menor a 7 va a seguir ejecutandose
		{
			contador++; // el contador se va a sumar hasta que el while se haga false 
			console.log(contador);  //muestra por console log el contador
			importe=prompt("Ingrese su importe"); //pide el importe por prompt

			while(importe<0) //cuando el importe valga 0
				{
					importe=prompt("Ingrese su importe"); //se pide que ingrese nuevamente
				}
			importe=parseInt(importe);
			
			if(bandera==0)
				{
					bandera++;
					diaMaximo=contador;
					diaMinimo=contador;
					maximo=importe;
					minimo=importe;
				}
			else 
				{
					if (importe>maximo)
						{
							maximo=importe;
							diaMaximo=contador;

						}
					else 
						{
							minimo=importe;
							diaMinimo=contador;
						}	

				}		

		}	

		console.log(" el maximo importe fue de " + maximo );
		console.log(" el minimo importe fue de " + minimo );
		console.log(" el dia de mayor importes fue de " + diaMaximo);
		console.log(" el dia de menor importes fue de " + diaMinimo);*/

	/*Realizar el algoritmo que al presionar el botón "Mostrar" pida el importe de las ventas	
	(validar que sea mayor a 0,”cero”) 
	de los 7 días de la semana por prompt (una por día)
	e informar cual fue el mayor importe y cuál fue el menor importe de venta*/
	var importe;
	var contador=0;
	var maximoImporte;
	var minimoImporte;
	var bandera=0;
	var maximoDia;
	var minimoDia;
	var dia;

	while(contador<7)
		{
			contador++;
			importe=prompt("Ingrese un numero");
			importe=parseInt(importe);

			dia=prompt("ingrese el dia");

			while(importe<=0)
				{
					importe=prompt(" ERROR!! Reingrese un numero");
					importe=parseInt(importe);
				}
				
			if(bandera==0|| importe>maximoImporte)
				{
					maximoImporte=importe;
					

				}
			if(bandera==0|importe<minimoImporte)
				{
					minimoImporte=importe;
					bandera=1;
				}	
		}	
					
		

	alert(" El maximo es: " + maximoImporte+ " y el minimo es :" + minimoImporte);





}

	
	
	


