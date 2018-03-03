//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*var importe;
	var iva ;

	importe=prompt("Ingrese su importe");

	importe=parseInt(importe);


	iva=importe*1.21;

	iva=parseInt(iva);

	document.getElementById("importe").value=iva;*/

	var importe;
	/*var iva;*/
	var importeFinal;

	
	importe=prompt("Ingrese el importe del producto");

	importe=parseFloat(importe); // poner el parseFloat solo si se va a usar decimal, sino NO

	//importeFinal=importe*1.21
	/*iva=importe*0.21; //(21/100)*/

	/*importeFinal=importe+iva;*/	
	

	importeFinal=importe*1.21 // otra forma de hacerlo

	/*importeFinal=importe*0.79;*/ //si te pide el importe sin iva (1-el porcentaje que quiero restar)

	document.getElementById("importe").value=importeFinal;







	

	
	
}

