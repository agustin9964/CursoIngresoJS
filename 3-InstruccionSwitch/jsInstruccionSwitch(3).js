function Mostrar()
{
    // se usa el default para darle un valor a todos los demas sin necesidad de escribirlos todos
//tomo la edad  

     var mesDelAño;

     mesDelAño=document.getElementById('mes').value;

     switch(mesDelAño)
         {
          
                  
            case "Febrero":
                 alert("Este mes no tiene más de 29 días");
                 break;
            default:
                 alert("Este mes tiene 30 o más días");
                 break;           
            



         }

//alert (mesDelAño);
	
	


}//FIN DE LA FUNCIÓN