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
    
  var cantidadLamparas;
  var precioLamparas;
  var marca;
  var porcentaje;
  var precioDescuento;
  var descuento;
  


  cantidadLamparas=document.getElementById("Cantidad").value;

  precioLamparas=35;

  if (cantidadLamparas>=6)
        {
            porcentaje=0.5;

        }

 else if (cantidadLamparas==5)
    {
      if (marca=="ArgentinaLuz")   
            {
                porcentaje=0.6;


            } 
        
    
     else
        {
            porcentaje=0.7;

        }

    }    
 else if (cantidadLamparas==4)
    {
        if(marca=="ArgentinaLuz" || marca == "FelipeLamparas")
            {
                porcentaje=0.75;

            }   

        else
            {
                porcentaje=0.80;
            }    
    }   

 else if (cantidadLamparas==3)
    {
        if (marca=="ArgentinaLuz")
            {
                porcentaje=0.85;
            }
        else if (marca=="FelipeLamparas")
            {
                porcentaje=0.90;

            }
        else 
            {
                porcentaje=0.95;
            }
    }       
 else 
    {
        porcentaje =1.0;   

          
    }                
    
    document.getElementById("precioDescuento").value = cantidadLamparas * precioLamparas * porcentaje;


    precioDescuento=document.getElementById("precioDescuento").value;

    if (precioDescuento>120)
        {
            descuento=precioDescuento*1.1;

            alert (" usted pago " + precioDescuento + " siendo " + descuento + " el precio que pago");

        } 




         


 	
}
