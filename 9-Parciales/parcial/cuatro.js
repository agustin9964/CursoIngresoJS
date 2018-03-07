function Mostrar()
{
   //ingresar 2 numeros por prompt, si son iguales concatenados, si el primero es mayor que el segundo se multiplica
   // si el primero es menor que el segundo, se resta 

   /* var numeroUno;
    var numeroDos;
    var resultado;
    
    numeroUno=prompt("Ingrese un numero");

    numeroDos=prompt("Ingrese un numero nuevamente");
    

     numeroUno=parseInt(numeroUno);
     numeroDos=parseInt(numeroDos);

    if(numeroUno==numeroDos)
        {
           resultado=numeroUno+"" + numeroDos;
               
        }
    else 
        {
                            
            if(numeroUno>numeroDos)
                {
                   resultado=numeroUno*numeroDos;
                      
                   if(resultado%2==0&&resultado!=0)
                    {
                        resultado=resultado+" es par ";

                    }
                    
                    
                }
            else 
            {           
               resultado = numeroUno-numeroDos;
                          
            }
             
       }    
       document.write(resultado);   */

       var numeroUno;
       var numeroDos;
       var resultado;

       numeroUno=prompt("Ingrese el primer numero");

       numeroDos=prompt("Ingrese el segundo numero");

       numeroUno=parseInt(numeroUno);
       numeroDos=parseInt(numeroDos);

       if(numeroUno==numeroDos)
          {
            resultado=numeroUno*numeroDos;


          }
      else 
        {
          if(numeroUno>numeroDos)
            {
              resultado=numeroUno-numeroDos;

            }
         else
            {
              resultado=numeroUno+numeroDos;

            }   

        }

    document.write(" El resultado es : " + resultado);    



}
