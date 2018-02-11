function Mostrar()
{
	
    //se identifican las variables;

    // se les da valor por ID;

    // se las hace enteros con parseInt;

    // se le da valor al perimetro del rectangulo;

    // se da el resultado por alert ;


	var largo;
	var ancho;
	var perimetro;


	largo=document.getElementById("alrgo").value;
	ancho=document.getElementById("ancho").value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);


	perimetro=largo*2+ancho*2;


	alert(" se necesitan "+ perimetro*3 +" metros de alambrado para colocarle 3 hilos a su perimetro");





}
