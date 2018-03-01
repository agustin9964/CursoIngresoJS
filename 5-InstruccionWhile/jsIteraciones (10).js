function Mostrar()
{	// promedios afuera de while;
	var numero;
	var contador=0;
	var numerosPositivos=0;
	var numerosNegativos=0;
	var numerosCero=0;
	var negativos=0;
	var positivos=0;
	var numerosPares=0;
	var promedioNegativos;
	var promedioPositivos;
	var diferencia;

	//declarar contadores y variables 
	
	var respuesta="si";

	while(respuesta!="no")
	{
		contador++;
		numero=prompt("ingrese un numero");
		numero=parseInt(numero);

		if(numero<0)
			{
				numerosNegativos++;
				negativos=negativos+numero;
				
				
				
			}//lave if	
	
		else if (numero>0)
		{
	 		numerosPositivos++;
	 		positivos=positivos+numero;	
			

		}//llave de else if

		else // como el unico valor restante es 0, se suman los 0
			{
				numerosCero++;
			}

		if(numero%2==0&&numero!=0)
			{
				numerosPares++;
			}//lave if (numero%2==0)

		respuesta=prompt("Si quiere salir, ingresar no");		
		
	}//while(respuesta!=no)
	promedioNegativos=negativos/numerosNegativos;
	
	promedioPositivos=positivos/numerosPositivos;

	diferencia=positivos-negativos;


document.write(" la suma de negativos que hay es " + negativos + "<br>");
document.write(" la suma de positivos que hay es " + positivos + "<br>");
document.write(" la cantidad de negativos que hay es " + numerosNegativos + "<br>");
document.write(" la cantidad de positivos que hay es " + numerosPositivos + "<br>");
document.write(" la cantidad de numeros pares que hay es " + numerosPares + "<br>");
document.write(" la cantidad de ceros (0) que hay es "+ numerosCero + "<br>");
document.write(" el promedio de positivos es de "+promedioPositivos + "<br>");
document.write(" el promedio de negativos es de "+promedioNegativos + "<br>");
document.write(" la diferencia entre positivos y negativos es " + diferencia + "<br>");

}//FIN DE LA FUNCIÓN