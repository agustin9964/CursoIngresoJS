function Mostrar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno=prompt("ponga su primer numero");

    numeroDos=prompt("ponga su segundo numero");

    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);

    if(numeroUno==numeroDos)
    { 
        resultado=numeroUno*numeroDos;
        document.write(resultado);

    }
    else
    { 
        if(numeroUno>numeroDos)
        { 
            resultado=numeroUno-numeroDos;
            document.write(resultado);

    }
     else
     {
         resultado=numeroUno+numeroDos;
         document.write(resultado);
     } 

    }
}
