/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un porcentaje del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un porcentaje del 40 % y si es de otra marca el porcentaje es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un porcentaje del 25 % y si es de otra marca el porcentaje es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el porcentaje es del 15%, si es  “FelipeLamparas” se hace un porcentaje del 10 % y si es de otra marca un 5%.
E.	Si el importe final con porcentaje suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    
    var cantidad;
    var marca;
    var precioFinal;
    var precio;
    var porcentaje;
    var precioBruto;
    var descuento;

   
    cantidad=document.getElementById("Cantidad").value;

    marca=document.getElementById("Marca").value;

    precio=35;
    
    precioBruto=cantidad*precio;
    
    porcentaje=0;
//punto A
    if(cantidad>5)
        {
            porcentaje=0.5;
        }
//punto B 
    else 
    {   if(cantidad==5&&marca=="ArgentinaLuz")
        {
        porcentaje=0.6;
        }
      
        else { 
              porcentaje=0.7;

              if(cantidad==4&&marca=="ArgentinaLuz") 
              { 
                 porcentaje=0.75;
              }
              else if (cantidad==4&&marca=="FelipeLamparas")
             {
                 porcentaje=0.75;
             }
             else {
                 porcentaje=0.80;

                 
                    if (cantidad==3&&marca=="ArgentinaLuz")
                     {   
                         porcentaje=0.85
                    }
                    else if (cantidad==3&&marca=="FelipeLamparas") 
                        { 
                            porcentaje=0.90

                        }  
                    else
                         {
                             descuento=0.95

                         }    
                }
                 

        }   


    }
                    
                              
     descuento=precioBruto*porcentaje;
     precioFinal=precioBruto-descuento;

     if(precioFinal>120)
        {
            precioFinal=precioFinal*1.1;
        }                   

     document.getElementById("precioDescuento").value=precioFinal;


        



   
     

    

         


 	
}
