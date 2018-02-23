function Mostrar()
{
// se pide un valor distinto de null,f o m en el cual se da la orden de que ingrese de nuevo un valor valido
// luego si el valor de sexo es m se muestra el valor masculino por id y respectivamente con el valor f en femenino
var sexo = prompt("ingrese f ó m .");

while(sexo!="f"&&sexo!="m"&&sexo!=null)

	{
		alert("ingrese su sexo nuevamente ");

		sexo=prompt("ingrese f ó m .");
	}
if (sexo=="m")
	{
		document.getElementById('Sexo').value="Masculino";

	}

else
	{
		document.getElementById('Sexo').value="Femenino";
	}


}//FIN DE LA FUNCIÓN