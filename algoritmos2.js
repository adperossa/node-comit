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

  let letters = words.join("").split("").sort(); // creo un array ordenado de todas las letras usadas
  
  let processedLetters = "";
  let lettersCount = [];

  //realizo el conteo de cada letra y lo almaceno en el array de objetos lettersCount
  for (let i = 0; i < letters.length; i++) {
    let currentLetter = letters[i];
    
    //chequeo si es la primera vez que encuentro esta letra
    if (processedLetters.indexOf(currentLetter) < 0) {

      lettersCount.push({ letter: currentLetter, count: 1}); //es nueva, agrego la letra al array
      processedLetters += currentLetter;

    } else { // no es nueva, busco su objeto correspondiente y le incremento el contador
      
      for (let j = 0; j < lettersCount.length; j++) {
        if (lettersCount[j].letter === currentLetter) {
          lettersCount[j].count++;
        }
      }

    }
  }

  //inicializo arbitrariamente las tres variables que contendran las letras mas comunes
  //asumo que hay al menos tres letras distintas
  let mock = { letter: "x", count: 0 };
  let primera = mock, segunda = mock, tercera = mock;
  
  //ordenamiento
  for (let i = 0; i < lettersCount.length; i++) {
    if (lettersCount[i].count > primera.count) {
      tercera = segunda;
      segunda = primera;
      primera = lettersCount[i];
    } else if (lettersCount[i].count > segunda.count) {
      tercera = segunda;
      segunda = lettersCount[i];
    } else if (lettersCount[i].count > tercera.count) {
      tercera = lettersCount[i];
    }
  }

  console.log(primera,segunda,tercera);

}