function Mostrar()
{
    var numero=prompt("Ingrese un numero");
    numero=parseInt(numero);
    var cantidadPares=0;//al ser un contador debe estar en 0 al principio
 


    for(i=1 ;i<numero ;i++)
    {

        if(i%2==0&&i!=0)
        {
            cantidadPares++;            
        }

       
    }
alert(" la cantidad de numeros pares que hay es " + cantidadPares);



}//FIN DE LA FUNCIÓN