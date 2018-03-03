//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var sexo;
	var promedio;
	var notaBaja;
	var contadorVarones=0;
	var bandera=0;
	var suma=0;
	var i;
	var acumuladorNotas=0;

	for(i=0;i<6;i++)
		{
			nota=prompt("Ingrese la nota");
			nota=parseInt(nota);

			while(nota<0||nota>10)
				{
					nota=prompt("ERROR!! Reingrese la nota");
					nota=parseInt(nota);
				}
			sexo=prompt("Ingrese sexo, si es femenino ingrese f, si es masculino ingrese m");
			sexo=sexo.toLowerCase();

			while(isNaN(sexo)==true && sexo!="f"&& sexo!="m")
				{
					sexo=prompt("Ingrese sexo, si es femenino ingrese f, si es masculino ingrese m");
					sexo=sexo.toLowerCase();
				}
			acumuladorNotas=acumuladorNotas+nota;

			if(bandera==0||nota<notaBaja)
				{
					notaBaja=nota;
					bandera=1;
				}
			if(sexo=="m"&&nota>=6)
				{
					contadorVarones++;
				}

		}

		promedio=acumuladorNotas/i;

		alert("el promedio de las notas es: " +promedio);
		alert("la nota mas baja es : " + notaBaja);
		alert("la cantidad de varones con nota mayor o igual a 6 son: " + contadorVarones);
	
}

