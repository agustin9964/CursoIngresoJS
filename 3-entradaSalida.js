//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=document.getElementById("ancho").value;
	largo=document.getElementById("largo").value;


	perimetro=ancho*2+largo*2;

	alert(" Se necesitan " + perimetro*6 + " metros de alambre para darle 6 vueltas al terreno ");



	
	
}

