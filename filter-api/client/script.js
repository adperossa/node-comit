// Definicion API
const endpoint = "/person?";

// Seleccion DOM
const form = document.getElementById("searchForm");
const nameInp = document.getElementById("name");
const ageInp = document.getElementById("minage");
const caseChk = document.getElementById("caseSensitive");
const partialChk = document.getElementById("partial");
const resultsContainer = document.getElementById("results");

// Manejador del evento submit en el formulario, que dispara la búsqueda
form.addEventListener("submit", ev => {

  ev.preventDefault();

  // Va construyendo la query string según los filtros encontrados
  let query = "";

  if (nameInp.value) query += `&name=${nameInp.value}`;
  if (ageInp.value) query += `&minage=${ageInp.value}`;
  if (caseChk.checked) query += `&case=true`;
  if (partialChk.checked) query += `&partial=true`;


  // Ya obtuve los datos del formulario, por lo tanto aprovecho para
  // limpiar los campos y también el área de resultados
  form.reset();
  resultsContainer.innerHTML = "";

  // Realizo la llamada ajax, y como segundo parametro paso una callback
  // que muestra lo recibido
  fetchData(endpoint + query, showResults);

})


/**
 * Hace un pedido AJAX a la url provista, y luego le pasa la respuesta
 * ya parseada a la función recibida como segundo parámetro.
 * @param {string} url El endpoint
 * @param {function} callback Callback a la que pasarle la respuesta parseada
 */
function fetchData(url, callback) {

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);

  xhr.addEventListener("load", function() {
    if (this.status === 200) {
      let data = JSON.parse(this.responseText);
      return callback(data);
    }
  });

  xhr.send();

}


function showResults(data) {

  if (data.length === 0) {

    // Se recibió un array vacío, informarlo
    resultsContainer.innerText = "No se encontraron registros que cumplan las condiciones.";
  
  } else {

    let resultsList = document.createElement("ul");

    // Iterar sobre el array recibido y para cada persona, armar un li y añadirlo
    // a la lista
    data.forEach(person => {
      let li = document.createElement("li");
      li.innerText = `${person.name}, ${person.age} ${person.age > 1 ? "años" : "año"}`;
      resultsList.append(li);
    });

    // Mostrar la <UL> generada en el sector correspondiente
    resultsContainer.append(resultsList);

  }

}