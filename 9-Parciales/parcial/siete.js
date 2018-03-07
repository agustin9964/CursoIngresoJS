function Mostrar()
{

	var notas;
	var sexo;
	var promedio;
	var notasTotales=0;
	var alumnos=0;
	var notaMasBaja;
	var varonesMayorNotaMayorSeis=0;

	for(alumnos=0;alumnos<10;alumnos++)
		{
			notas=prompt("Ingrese las notas ");
			notas=parseInt(notas);

			while(notas<0||notas>10)
				{
					notas=prompt("Ingrese notas del 1 al 10");
					notas=parseInt(notas);
				}

			notasTotales=notasTotales+notas;

			sexo=prompt("Ingrese el sexo del alumno, f si es femenino, m si es masculino");
			while(sexo!="f"&& sexo!="m")
			{
				sexo=prompt("Ingrese el sexo del alumno, f si es femenino, m si es masculino");
			}
			if(alumnos==0)
				{
					notaMasBaja=notas;
				}
			else
				{
					if(notas<notaMasBaja)
						{
							notaMasBaja=notas;
						}
				}
			if(sexo=="m"&&notas>6)
				{
					varonesMayorNotaMayorSeis++;
				}		
		}

	promedio=notasTotales/alumnos;

	document.write("El promedio de las notas es: " + promedio+"<br>");
	document.write("La nota mas baja es : " + notaMasBaja+ "<br>");
	document.write("La cantidad de varones con nota mayor a 6 es :"+ varonesMayorNotaMayorSeis+ "<br>");

}
