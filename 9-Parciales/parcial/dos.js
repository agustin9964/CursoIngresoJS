function Mostrar()
{
	//se buscan las variables;

	// se le pone el valor del prompt;

	// se las hace numeros con parseInt;

	// se le da valor al iva;

	// el resultado con iva es mostrado por Id;


	/*var importe;
	var iva;

	importe= prompt("Coloque su importe");

	importe= parseInt(importe);

	iva=importe*1.21;


	document.getElementById('importeFinal').value=iva;*/ //MOD OCTAVIO


	var importe;
	
	var importeFinal;

	importe=prompt("ingrese su importe ");

	importe=parseInt(importe);

	

	importeFinal=importe*1.21;


	document.getElementById("importeFinal").value=importeFinal;






  
}
