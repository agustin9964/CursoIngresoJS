function Mostrar()
{	// promedios afuera de while;
	
	var diferencia;
	var promedioNegativos
	var promedioPositivos
	var contadorDePares=0;
	var contadorCeros=0;
	var acumuladorPositivo=0
	var contadorPositivo=0
	var acumuladorNegativo=0
	var contadorNegativo=0
	var negativo=0;
	var contador=0;
	var numero;
	var positivo=0;
	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);

		if(numero%2==0&&numero!=0)
			{
				contadorDePares++;
			}//lave if (numero%2==0)

		if(numero<0)
			{
				
				acumuladorNegativo=acumuladorNegativo+numero;
				contadorNegativo++;
				
			}//lave if	
	
		else
		{
	 		if (numero>0)
			{	//llave if
				acumuladorPositivo=acumuladorPositivo+numero;
				contadorPositivo++;		
			}
		}//llave de else

		respuesta=prompt("si quiere salir, ingresar no");		
		
	}//while(respuesta!=no)
	promedioNegativos=acumuladorNegativo/contadorNegativo;
	promedioPositivos=acumuladorPositivo/contadorPositivo;
	diferencia=acumuladorPositivo-acumuladorNegativo;


document.write(negativo);
document.write(positivo);

document.write("el contador de ceros es de "+ contadorCeros);
document.write("el promedio de positivos es de "+promedioPositivos);
document.write("el promedio de negativos es de "+promedioNegativos);

}//FIN DE LA FUNCIÓN