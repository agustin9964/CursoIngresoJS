function Mostrar()
{
    var numero=prompt("Ingrese un numero");
    var contador=0;

    for(i=2;i<numero;i++)
        {
            if(numero%i==0)
            {
                contador=3;
                break;
            

            }
        }
    if  (contador==2)
    {
        alert("es primo");

    }
    else 
    {
        alert("no es primo");
    }



}//FIN DE LA FUNCIÓN