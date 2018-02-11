//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho=document.getElementById('ancho').value;
	largo=document.getElementById('largo').value;

	ancho=parseInt(ancho);
	largo=parseInt(largo);

	perimetro=ancho*2+largo*2;


	alert(" se necesitan " + perimetro*6 + " metros de hilo para darle 6 vueltas al perimetro");


}

