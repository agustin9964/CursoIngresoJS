//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var iva;


	importe=prompt(" Ponga su importe");

	importe=parseInt(importe);

	iva= importe*1.21

	document.getElementById("importe").value=iva;


	
	
}

