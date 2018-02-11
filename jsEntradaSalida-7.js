/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{
	//poner las variables

	// buscar la ID de la variable

	// transformarla solo a numero con ParseInt

	// hacer la operacion

	// mostrar el resultado con Alert

	



	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value;

	numeroDos=document.getElementById("numeroDos").value;

	numeroUno=parseInt(numeroUno);

	numeroDos=parseInt(numeroDos);

	resultado=numeroUno+numeroDos;

	alert(" la suma es " + resultado );
}

function restar()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno= document.getElementById('numeroUno').value;

	numeroDos= document.getElementById("numeroDos").value;

	numeroUno=parseInt(numeroUno);

	numeroDos=parseInt(numeroDos);

    resultado=numeroUno-numeroDos;

    alert(" la resta es " + resultado);
	
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value;

	numeroDos=document.getElementById("numeroDos").value;

	numeroUno=parseInt(numeroUno);

	numeroDos=parseInt(numeroDos);

	resultado=numeroUno*numeroDos;

	alert(" la multiplicacion es " + resultado);

	
}

function dividir()
{
	var numeroUno;
	var numeroDos;
	var resultado;

	numeroUno=document.getElementById('numeroUno').value;

	numeroDos=document.getElementById("numeroDos").value;

	numeroUno=parseInt(numeroUno);

	numeroDos=parseInt(numeroDos);

	resultado= numeroUno/numeroDos;

	alert(" la division es " + resultado );


}

