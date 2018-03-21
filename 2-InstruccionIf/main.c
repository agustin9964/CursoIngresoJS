#include <stdio.h>
#include <limits.h>
void main(void)
{
    // AGREGAR EL PROMEDIO
    int i;
    int suma = 0;
    int max = 0; // constante definida en limits.h
    int min = 0; // constante definida en limits.h
    int promedio;
    for(i=0; i<10;i++)
    {
        int aux;
        scanf("%d",&aux);
        suma=suma+aux;
        if(i==0)
        {
            max=aux;
            min=aux;
            i==1;

        }
        else
        {
            if(aux>max)
            {
                max=aux;
            }
            else
            {
                if(aux<min)
                {
                    min=aux;
                }
            }
        }


    }



    printf("la suma es:%d\n",suma);
    printf("El maximo es:%d\n",max);
    printf("El minimo es:%d\n",min);

}
