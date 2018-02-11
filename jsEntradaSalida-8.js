/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	// se ponene las variables

	// se identifica la ID de las variables

	// se transforman a enteros por parseInt

	// se aplica el modulo y se hace la operacion

	// se muestra por alert el resultado final
	

	var dividendo;
	var divisor;
	var resultado;

	dividendo=document.getElementById('numeroDividendo').value;
	divisor=document.getElementById("numeroDivisor").value;

	dividendo=parseInt(dividendo);
	divisor=parseInt(divisor);

	resultado=dividendo%divisor;

	alert(" el resto es " + resultado);



	
}
