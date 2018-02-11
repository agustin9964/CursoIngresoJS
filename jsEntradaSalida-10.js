/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarAumento()
{
	//poner las variables

	//dar valor a la variable por ID

	// hacer a la variable un entero con el parseInt

	// dar valor al descuento

	// mostrar por ID el descuento


	var importe;
	var Descuento;


	importe=document.getElementById('importe').value;
	importe=parseInt(importe);

	descuento=importe*0.75;

	document.getElementById("resultado").value=descuento;
}
