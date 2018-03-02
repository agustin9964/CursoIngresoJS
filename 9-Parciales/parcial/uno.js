
function Mostrar()
{
	var base;
	var altura;
	var perimetro;
	var superficie;

	base=document.getElementById("laBase").value;
	altura=prompt("Ingrese la altura ");
	


	perimetro=base*3;

	superficie= (base*altura)/2

	alert("El perimetro es de " + perimetro);

	alert("La superficie es de " + superficie);


}
