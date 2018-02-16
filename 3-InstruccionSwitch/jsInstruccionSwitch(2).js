function Mostrar()
{

// se puede cambiar de if a switch si hay un ==, ademas se puede cambiar de switch a if siempre
//tomo la edad  
// break sirve para cortar la ejecucion del switch
       var mesDelAño;

       mesDelAño = document.getElementById('mes').value;

       switch(mesDelAño)
         {
            case "Enero": 
            case "Febrero":                
            case "Marzo":                
            case "Abril":                
            case "Mayo":               
            case "Junio":
                 alert("Falta para el invierno");
                 break;
            case "Julio":               
            case "Agosto":
                 alert("Abrigate que hace frio");
                 break;
            case "Septiembre":
            case "Octubre":
            case "Noviembre":
            case "Diciembre":
                 alert("Ya pasamos el frio, ahora calor!!!");
                 break;
                              
         }




}//FIN DE LA FUNCIÓN