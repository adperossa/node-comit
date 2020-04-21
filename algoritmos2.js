/* Escribir una función que reciba un número como parámetro y que muestre por
consola todos los números primos hasta ese número recibido. Recordatorio: números
primos son aquellos que solo son divisibles por 1 o por sí mismos: 1, 2, 3, 5, 7, 11, 13, etc.
Para saber si es "divisible por un valor", recuerden que pueden utilizar el operador
de resto (%). Ej: si le paso el número 8, debería mostrar 1, 2, 3, 5, 7.
*/

/**
 * Chequea si el numero que recibe como arg es primo
 * @param {number} n numero a chequear (mayor a 0)
 * @returns {boolean} true|false
 */
function isPrime(n) {
  if (n === 1) return true;
  if (n <= 0) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

/**
 * Muestra por consola todos los números primos desde 1 hasta un máximo pasado por parámetro
 * @param {number} max Limite superior hasta el que se van a buscar nros primos
 */
function showPrimes(max) {
  if (typeof max !== "number" || max <= 0) return false;
  
  let arrPrimes = [];

  for (let i = 1; i <= max; i++) {
    if (isPrime(i)) arrPrimes.push(i);
  }

  console.log(arrPrimes);
}




/* Escribir una función que reciba por parámetro entre 2 y 6 palabras, valide que 
ninguna tenga menos de 5 letras, y retorne las 3 letras más usadas en total, con la 
cantidad de veces que aparece cada una. En caso de empate, que se resuelva por orden 
alfabético. Ej: Si le paso "mates", "perro", "alfajor" debería 
retornar a: 3, r: 3, e: 2.
*/

/**
 * Toma una lista de palabras y devuelve las letras mas usadas
 * @param {array} words Un array de strings
 */
function getMostUsedLetters(words) {

  if (words.length < 2 || words.length > 6) { // valido cantidad de palabras
    console.log("La cantidad de palabras es menor a 2 o mayor a 6");
    return false;
  }

  for (let i = 0; i < words.length; i++) { // valido cantidad de letras
    if (words[i].length < 5) {
      console.log(`La palabra ${words[i]} tiene menos de cinco letras, abortando...`);
      return false;
    }
  }

  let letters = words.join("").split(""); // creo un array de todas las letras usadas
  let lettersCount = {};
  let tempArray = [];
  let resultsArray = [];

  for (let i = 0; i < letters.length; i++) { // acumulo el conteo para cada letra en un objeto
    let currentLetter = letters[i];

    //si aun no agregue esa letra al objeto, inicializo esa propiedad para que no 
    //sea undefined y le pueda sumar, sino el paso siguiente daria NaN
    if (lettersCount[currentLetter] === undefined) lettersCount[currentLetter] = 0;

    // por cada letra encontrada, sumarle uno a su contador en el objeto
    lettersCount[currentLetter] += 1;
  }

  // guardo las propiedades del objeto (letras) en un array intermedio para poder iterarlo
  // seria mejor usar for..in
  tempArray = Object.keys(lettersCount);

  //armo un nuevo array de objetos, de forma [{letra: a, conteo: 3},...]
  //saco cada letra encontrada usando el array temporal de antes, y el 
  //valor lo saco del primer objeto con todas las letras
  for (let i = 0; i < tempArray.length; i++) {
    let current = tempArray[i];
    let letterCount = { letra: current, conteo: lettersCount[current] };

    resultsArray.push(letterCount);
  }

  //ordeno el array de objetos que obtuve de mayor a menor, segun el valor de cada letra
  resultsArray.sort(function(a, b) {
    return b.conteo - a.conteo;
  })

  console.log(resultsArray.slice(0, 3));
  
}