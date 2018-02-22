function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

// si se quiere se puede usar un if para cuando el sexo valga null y ponerlo con un break
    while ((sexo!="f"&&sexo!="m")&&sexo!=null)
        {
          
         sexo=prompt("ingrese su sexo correctamente.");  
        }
         

document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN