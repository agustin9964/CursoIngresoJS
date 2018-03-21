#include <stdio.h>
#include <stdlib.h>

int main()
{
    char nombre [41];
    char localidad [41];
    printf("Nombre :");

    scanf("%s", nombre); //se usa el %s en caso de querer hacer un string, sin ampersand

    //se puede hacer como ("%c",&nombre[0])

    printf("Localidad : ");

    scanf("%s",localidad);

    printf("Usted se llama: %s y usted vive en : %s",nombre,localidad);
}

