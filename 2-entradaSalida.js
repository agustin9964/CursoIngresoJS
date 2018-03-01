//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var iva ;

	importe=prompt("Ingrese su importe");

	importe=parseInt(importe);


	iva=importe*1.21;

	iva=parseInt(iva);

	document.getElementById("importe").value=iva;


	

	
	
}

