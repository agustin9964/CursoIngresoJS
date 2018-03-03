//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*var ancho;
	var largo;
	var perimetro;

	ancho=document.getElementById("ancho").value;
	largo=document.getElementById("largo").value;


	perimetro=ancho*2+largo*2;

	alert(" Se necesitan " + perimetro*6 + " metros de alambre para darle 6 vueltas al terreno ");*/

	var ancho;
	var largo;
	var perimetro;
	var alambre;


	ancho=document.getElementById("ancho").value;
	largo=document.getElementById("largo").value;

	//ancho=parseInt(largo);
	//largo=parseInt(ancho);


	alert(" el largo es : "+ largo+ " el ancho es : " +ancho);

	perimetro=largo*2 + ancho*2;

	alambre=perimetro*6;

	alert(" se necesitan : " + alambre + " metros de alambre ");

	//document.write("se necesitan : " + alambre + "metros de alambre");

	







	
	
}

