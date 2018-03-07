function Mostrar()
{
    //ingresar 3 numeros, indicar cual es el mayor y mostrar con un solo mensaje cual es el Numero mayor

  /*  var numeroUno;
    var numeroDos;
    var numeroTres;
    var resultado;
    var numeroMayor;

    numeroUno=prompt("Ingrese un numero");
    numeroDos=prompt("Ingrese un numero");
    numeroTres=prompt("Ingrese un numero");

    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);
    numeroTres=parseInt(numeroTres);

    
    
   if   (numeroUno>numeroDos&&numeroUno>numeroTres)
        {
            resultado=numeroUno;
            numeroMayor="la primer posicion es la mayor";
        }
    else if (numeroUno<numeroDos&&numeroDos>numeroTres)
        {
            resultado=numeroDos;
            numeroMayor="la segunda posicion es la mayor";
        }
    else
        {
            resultado=numeroTres;
            numeroMayor="la tercer posicion es la mayor";

        }
   

    alert( numeroMayor +" y  el numero mas grande es "+ resultado); */ // mod octavio

    var dia;

    dia=prompt("ingrese un dia de la semana");
    dia=dia.toLowerCase(dia)


    switch(dia)
        {
            case "sabado":
            case "domingo":
                alert("es fin de semana");
                break;
            default:
                    alert("a trabajar !!!");

        }


    
}
