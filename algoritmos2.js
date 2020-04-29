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
  if (n < 1) return false;

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


/* Escribir una función que reciba por parámetro una palabra y valide si es un mail. Para 
ser considerado un mail, diremos que tiene que:
Contener un @ (y solo uno)
Antes del @ (la "etiqueta") tener por lo menos 2 caracteres.
Dicha etiqueta no puede contener espacios ni los signos " ' ` , ; : [ ] { } = + \
Después del @ (el "dominio") debe tener por lo menos un punto, por lo menos 3 caracteres 
antes del punto y por lo menos 2 caracteres después del punto.
*/

/**
 * Chequea si un string es un email válido de acuerdo a los requerimientos
 * @param {string} input El string para validar
 * @returns {boolean}
 */
function isValidEmail(input) {
  const invalidChars = [" ", "\"", "'", "`", ",", ";", ":", "[", "]", "{", "}", "=", "+", "\\"];
  
  if (!input) return false; // chequear string vacio, undefined, null

  // si es email valido, arrInput[0] deberia ser etiqueta y arrInput[1] el dominio
  const arrInput = input.split("@");
  const tag = arrInput[0];
  const domain = arrInput[1];

  if (arrInput.length !== 2) return false; // valida un y solo un arroba

  if (tag.length < 2) return false; // etiqueta tiene al menos 2 caracteres

  for (let i = 0; i < invalidChars.length; i++) { // etiqueta sin caracteres invalidos
    const invalidChar = invalidChars[i];
    if (tag.includes(invalidChar)) return false;
  }
  
  const firstDotLocation = domain.indexOf(".");
  const lastDotLocation = domain.lastIndexOf(".");
  if (firstDotLocation === -1) return false; // domain al menos con un punto

  if (domain.substring(0, firstDotLocation).length < 3) return false; // al menos tres chars antes del punto

  if (domain.substring(lastDotLocation + 1).length < 2) return false // al menos dos chars despues del ultimo punto

  return true; // al llegar hasta aca, paso las validaciones

  // TODO: - chequear minimo dos caracteres después de CADA punto que hubiera
  //       - chequear que no haya dos puntos seguidos
}