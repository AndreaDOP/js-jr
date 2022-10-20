/*  Variables y las tres formas para declarar.
1- var (alcance global dentre de un bloque), let (alcance limitado al bloque especifico), const (las variables const quedan fijas, no se modifica nunca mas su valor, es una constante).
Ej.(Variable = "recipiente" - y en esa variable vamos a guardar un dato) 
2- datos primitivos: 
String = "cadena de texto"
Number = 19
Booleano = false o true
Nota: Datos especiales: undefined,null, NaN.toExponential.. estos datos nos dicen que la variable no esta definida, o hay un error.
3- Entonces, como declaramos una variable:
let numero; (variable declarada)
numero = 19 (variable definida e inicializada)
Nota: para declarar e unicializar una variable en la misma linea, se escribe asi:
let numero = 29; (de esta manera la variable queda declara, definida e inicializada en la misma linea)
En el caso de la variable const, siempre se tiene que declaras e inicializar en linea, porque si no, seria un error.

4 multiples variables
Ej. let numero1 = 23;
        numero2 = 12;
Tambien se puede escribir: let numero1 = 23, numero2 = 12; */

let nombre = prompt("Dime tu nombre");
alert("Hola " + nombre);
