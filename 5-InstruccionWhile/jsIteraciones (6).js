function Mostrar()
{
	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
		{
			
			contador++;

			numero=prompt("siga sumando");

			numero=parseInt(numero);
			
			while(isNaN(numero))
				{
					numero=prompt("ingrese 5 numeros"); 
				    numero=parseInt(numero);
				
				}

			acumulador=acumulador+numero;
		}

		

		alert(acumulador);
		alert(acumulador/contador);


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN