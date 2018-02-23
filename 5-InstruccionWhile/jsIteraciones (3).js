function Mostrar()
{// se pide una clave distinta a la correcta y distinta a valor null, para asi poder mostrar un alert y luego un prompt para que se introduzca nuevamente

var clave;

clave = prompt("ingrese el número clave.");

while (clave!="utn750"&&clave!=null)
	{
		alert("error en la clave");


		clave=prompt("ingrese el número clave correcto");



	}


}//FIN DE LA FUNCIÓN
