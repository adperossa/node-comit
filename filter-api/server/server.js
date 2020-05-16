const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
const clientRoot = path.join(__dirname, "../client/");

// Middleware para assets estáticos
app.use(express.static(clientRoot));

// Endpoint GET a / (ruta raíz)
app.get("/", (req, res) => {

  // Cuando llega un request a la ruta raíz, retornamos la página inicial.
  res.status(200).sendFile(path.join(clientRoot, "index.html"));

});

// Endpoint GET a /person
app.get("/person", (req, res) => {

  // Inicializo el resultado con la lista completa
  // Si no hay filtros se retornará tal cual está
  let results = getPersonList();

  let isCaseSensitive = req.query.case === "true" ? true : false;
  let isPartialSearch = req.query.partial === "true" ? true : false;

  // Si llegó un filtro de nombre, lo realizamos y actualizamos results 
  if (req.query.name) {

    results = results.filter(person => {

      // Dependiendo de si es case sensitive, seteo el nombre a chequear y el
      // filtro así como están o en mayúsculas
      let personName = isCaseSensitive ? person.name : person.name.toUpperCase();
      let nameFilter = isCaseSensitive ? req.query.name : req.query.name.toUpperCase();

      // Si se aceptan coincidencias parciales, el filtrado se hace en la siguiente línea
      if (isPartialSearch) return personName.includes(nameFilter);

      // Si no, sale por este otro return
      return personName === nameFilter;

    });

  }

  // Si llegó un filtro de edad, lo realizamos y actualizamos results 
  if (req.query.minage) {

    results = results.filter(person => person.age > parseInt(req.query.minage));

  }

  //enviar la respuesta
  res.json(results);

});

app.listen(port, () => {

  console.log("Servidor online, escuchando en puerto " + port);
  
});


/**
 * Función que retorna una lista de personas
 */
function getPersonList() {

  return [
    {
      name: "Juana",
      age: 1
    },
    {
      name: "Juan",
      age: 33
    },
    {
      name: "Fernando",
      age: 24
    },
    {
      name: "Fernanda",
      age: 42
    },
    {
      name: "Juana",
      age: 16
    },
    {
      name: "Lucía",
      age: 22
    },
    {
      name: "Alfredo",
      age: 67
    },
    {
      name: "Gustavo",
      age: 50
    }
  ];

}

