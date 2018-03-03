//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	/*var base
	var perimetro

	base=document.getElementById("lado").value;
	base=parseInt(base);

	perimetro=base*3
	perimetro=parseInt(perimetro);

	alert("El perimetro del triángulo equilatero es de " + perimetro);*/
	
	var base;
	var perimetro;
	base=document.getElementById("lado").value;

	//base=parseFloat(base);//el parseFloat se usa en caso de necesitar decimal, es lo mismo que parseInt
	base=parseInt(base);

	alert(" la base es " +base);

	perimetro=base*3;


	alert("el perimetro es " + perimetro);
	
		
}

