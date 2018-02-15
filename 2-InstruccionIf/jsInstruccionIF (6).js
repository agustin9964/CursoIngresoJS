function Mostrar()
{
   
   //se usa un else para encasillar a los menores de edad 
   // dentro del else se usa un if y un else para separarse en dos
   
    var edad
    edad=document.getElementById("edad").value;

    if(edad>=18)
    {
        alert("usted es un adulto");
        
    }
    

    else{

    
    if(edad<13)
    {
        alert("usted es un niño");

    }
    else
    {
        alert("usted es un adolescente");
    }
     
}



//tomo la edad  




}//FIN DE LA FUNCIÓN