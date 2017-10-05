# Cifrado César #

## Función cipher ##

+ Inicio
+ Uso ciclo _Do...while_ para declarar variable *string* y le asigno la secuencia de letras ingresada por el usuario mediante uso de _prompt_
+ Declaro la _función_ *cipher*
+ Declaro un arreglo *transformAscci* vacío
+ Mediante un ciclo _For_ itero dentro de *string*
+ Guardo los números en un arreglo *transformAscii* para usarlos luego 
+ Declaro un arreglo *cesarOperation* vacío
+ Mediante un ciclo _For_ itero dentro de *transformAscci*
+ Mediante el uso de un bucle _If...else_ los números mayores a 65 y menores a 90, son transformados a código ascci y se guardan en el arreglo *cesarOperation* 
+ Los números mayores a 97 y menores de 127, son transformados a código ascci y se guardan en el arreglo *cesarOperation*
+ Usando _return_ llamo a *cesarOperation* como resultado de la función
+ Llamo a la función cipher para poder usarla 

## Función decipher ##

+ Inicio
+ Declaro la _función_ *decipher*
+ Declaro un arreglo *cesarToAscci* que usa el resultado de la función cipher
+ Mediante un ciclo _For_ itero dentro de *cesarOperation*
+ Usando _String.fromCharCode_ transformo cada número del cifrado a letra y lo guardo en *cesarToAscii*
+ Declaro la variable *stringBack* y le asigno el valor de *cesarToAscci* transformado con el método _.join_
+ Usando _return_ llamo a *stringBack* como resultado de la función
+ Llamo a la función decipher para poder usarla 
