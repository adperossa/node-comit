/* Definir una constante con algún contenido de texto cualquiera (prueben distintos contenidos para probar todo lo que sigue). Para ese texto, les pido distintos algoritmos. Al final de cada uno aclaro una pista sobre alguna(s) funcion(es) o propiedad(es) del prototipo string para usar. En todos los casos, resolver el algoritmo y mostrar por consola el resultado.
1- Evaluar si el texto contiene más de una palabra (es decir, si hay algún espacio). indexOf()
2- Evaluar si el texto tiene más de 10 letras o no. length
3- Determinar si la cantidad de letras de la palabra es par o impar. length
4- Mostrar las primeras 4 letras del texto. slice
5- Determinar si es un texto que está todo en mayúsculas, todo en minúsculas o si es alguna mezcla de ambos casos. toUpperCase() toLowerCase()
6- Mostrar la última palabra del texto. slice lastIndexOf
7- Mostrar la letra del medio o la más cercana al medio. charAt
8- Evaluar si esa letra del medio es una vocal o no (o sea, es una consonante, un espacio, un número o un símbolo, x ej).
9- Evaluar si en la frase hay una pregunta. indexOf
10- Reemplazar la primer ocurrencia de la secuencia "dad" por "tud". replace
11- Dificultad extra - Si la frase tiene una sola palabra, mostrarla toda en mayúsculas. Si tiene dos, juntarlas y mostrarlas como camelCase. Si tiene más, mostrar solo la última, toda en minúsculas. indexOf lastIndexOf slice toUpperCase toLowerCase replace
*/

const texto = "Esto es un string de ejemplo";
console.log("La frase es: " + texto + "\n");

// 1

console.log("El texto " + ( (texto.indexOf(" ") >= 0) ? 
  ""
:
  "NO "
) + "contiene más de una palabra.");


// 2

console.log("El texto " + ( (texto.length >= 10) ? 
  ""
:
  "NO "
) + "contiene más de diez letras.");


// 3

console.log("El texto tiene una cantidad " + ( (texto.length % 2 === 0) ? 
  "PAR"
:
  "IMPAR"
) + " de caracteres.");


// 4

console.log("Los primeros cuatro caracteres son: " + texto.slice(0, 4));


// 5 

console.log("El texto está en " + ( (texto === texto.toUpperCase()) ? 
  "mayúsculas."
:
  (texto === texto.toLowerCase()) ?
    "minúsculas."
  :
    "una combinación de mayúsculas y minúsculas."
));


// 6

console.log("La última palabra es: " + texto.slice(texto.lastIndexOf(" ") + 1, texto.length));


// 7 y 8

let caracterMedio = texto.charAt(Math.floor(texto.length / 2));

console.log("La letra más cercana al medio es: " + caracterMedio + " y " + (("aeiou".indexOf(caracterMedio) >= 0) ?
  "ES "
:
  "NO es "
) + "una vocal.");


// 9

console.log("La frase " + ((texto.indexOf("?") >= 0) ?
  ""
:
  "NO "
) + "contiene una pregunta.");


// 10

let contieneDad = (texto.toLowerCase().indexOf("dad") >= 0) ? true : false;

if (!contieneDad) {
  console.log('La frase no contiene la secuencia "dad", por lo tanto no se puede reemplazar.')
} else {
  console.log("Reemplazando la secuencia 'dad', la frase queda asi: " + texto.replace("dad", "tud"));
}


// 11

console.log("*** Consigna extra ***");

if (texto.indexOf(" ") === -1) { // una sola palabra
  console.log(texto.toUpperCase());
} else if (texto.indexOf(" ") === texto.lastIndexOf(" ")) { // dos palabras
  let primeraPalabra = texto.slice(0, texto.indexOf(" ")).toLowerCase();
  let segundaPalabra = texto.slice(texto.indexOf(" ") + 1, texto.length).toLowerCase();
  segundaPalabra = segundaPalabra.replace(segundaPalabra.charAt(0), segundaPalabra.charAt(0).toUpperCase());
  console.log(primeraPalabra + segundaPalabra);
} else { // mas de dos palabras
  let ultimaPalabra = texto.slice(texto.lastIndexOf(" ") + 1);
  console.log(ultimaPalabra.toLowerCase());
}