/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{

	// poner las variables

	// darle valor al importe por el ID

	// hacerlo un entero por parseInt

	// definir el aumento que es del 10%=1.1

	// hacer que el ID tenga el valor del aumento




	var importe;

	var aumento;


	importe= document.getElementById('sueldo').value;
	importe=parseInt(importe);

	aumento=importe*1.1;

	document.getElementById('resultado').value=aumento;







	
}
