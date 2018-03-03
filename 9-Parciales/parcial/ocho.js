function Mostrar()
{
    //ingresar un nombre, ademas se ingresa el peso del animal que tiene que ser mayor a 0 y no puede ser lalala
    //ingresar la temperatura del habitat donde vive este animal(es de -40 a +40) 
    // ingresar el sexo de ese animal
    // hay que informar el nombre del animal mas pesado
    // el nombre del animal cuyo habitat es el mas frio
    // la cantidad de temperaturas pares e impares
    // la cantidad de temperaturas positivas y negativas
    // el sexo del animal cuyo habitat tiene como temperatura 0
    /*var nombreAnimal;
    var peso;
    var temperatura;
    var sexo;
    var respuesta="si";
    var contador=0;
    var temperaturaMaxima;
    var pesoMaximo;
    var animalMasPesado;
    var animalConElHabitatMasFrio;
    var sexoTemperatura;
    var temperaturaPar=0;
    var temperaturaImpar=0;
    var temperaturaPositiva;
    var temperaturaNegativa;

    while(respuesta!="no")
    {
        contador++;
        nombreAnimal=prompt(" Ingrese el nombre de un animal");
        while(isNaN(nombreAnimal)||nombreAnimal=="")
            {
                 nombreAnimal=prompt(" Ingrese el nombre de un animal");

            }
        peso=prompt(" Ingrese el peso de su animal");
        peso=parseInt(peso);
        while(peso<=0||isNaN(peso))    
            {
                peso=prompt(" Ingrese el peso de su animal");
                peso=parseInt(peso);

            }

        sexo=prompt(" Ingrese el sexo de su animal, presione f si es femenino o m si es masculino");

        while(sexo!="f"||sexo!="m")
            {
                sexo=prompt(" Ingrese el sexo de su animal, presione f si es femenino o m si es masculino");

            }


        temperatura=prompt(" Ingrese la temperatura del habitat"); 
        temperatura=parseInt(temperatura);
        while(temperatura<-40||temperatura>40)
            {
                temperatura=prompt(" Ingrese la temperatura del habitat"); 
                temperatura=parseInt(temperatura);

            }






        respuesta=prompt("¿Desea continuar ingresando animales?");            
    }//while(respuesta!="no")


}*/

    var numero;
    var contador=0;
    var cantidadNumerosPares=0;
    var respuesta="si";
    var maximo;
    var minimo;
    var sumaNumeros=0;
    var promedioNumeros;


    while(respuesta!="no")
        {
            contador++;

            numero=prompt("Ingrese un numero");

            numero=parseInt(numero);

            

            while(numero<=0|| isNaN(numero))
                {
                    numero=prompt(" Ingrese un numero mayor a 0");
                    numero=parseInt(numero);

                }
            sumaNumeros=sumaNumeros+numero;

            if(numero%2==0&&numero!=0)
                {
                    cantidadNumerosPares++;

                }
            
            if(contador==1)
                {
                         maximo=numero;
                         minimo=numero;
                }
             else
                {
                     if(numero>maximo)
                        {
                              maximo=numero;

                        }
                    else
                        {
                            minimo=numero;
                         }    
                } 

        respuesta=prompt("Si quiere salir, ingresar no");

        } ////while(respuesta!="no") 




                   
        

    sumaNumeros=sumaNumeros+numero;

    
   promedioNumeros=sumaNumeros/contador;

   document.write(" la suma de todos los numeros es de " + sumaNumeros + "<br>");
   document.write(" el numero maximo es " + maximo+ "<br>");
   document.write(" el numero minimo es " + minimo+ "<br>");
   document.write(" el promedio de todos los numeros es " + promedioNumeros + "<br>");
   document.write(" la cantidad de numeros pares es " + cantidadNumerosPares + "<br>");
    

   




}
