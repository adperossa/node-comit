// declaro variables a usar

let multiples = [];
let multiplesString = "";
let multiplesSplit = [];
let accumulator = 0;

// Agregar en el array (push) todos los números entre 1 y 200 que sean múltiplos de 11
for (i = 1; i * 11 <= 200; i++) {
  multiples.push(i * 11);
}

// Mostrar ese array por consola.
console.log(multiples);

//Generar a partir de ese array un string, concatenando todos 
// sus elementos (sin ningún caracter en el medio).
multiplesString = multiples.join("");

// A partir de ese string obtenido, generar un array donde 
// cada caracter de ese string sea un elemento, previamente 
// convirtiéndolo en número (parseInt).
// Recorrer ese array acumulando en una nueva variable 
// la suma de cada elemento multiplicado por su ordinal de posición.

for (i = 0; i < multiplesString.length; i++) {
  let currentNumber = parseInt(multiplesString[i]);
  //también se podría usar multiplesString.charAt(i)

  multiplesSplit.push( currentNumber );

  // aprovecho el mismo for para generar el nuevo array y tambien acumular cada numero
  accumulator += currentNumber * i;  
}

// Mostrar ese valor obtenido por consola.
console.log(accumulator);

