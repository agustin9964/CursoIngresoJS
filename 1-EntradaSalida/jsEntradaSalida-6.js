/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
Mostar el resulto por medio de "ALERT"*/
function sumar()
{
    var numeroUno;
    var numeroDos;
    var resultado;

    numeroUno=document.getElementById("numeroUno").value;
    numeroDos=document.getElementById("numeroDos").value;

    numeroUno=parseInt(numeroUno);
    numeroDos=parseInt(numeroDos);

    //numeroUno=2;
    //numeroDos=5;

    resultado= numeroUno+numeroDos;

    alert("la suma es "+ resultado);





}

