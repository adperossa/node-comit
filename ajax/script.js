const button = document.getElementById("boton");
const figure = document.getElementById("fig");
const img = document.getElementById("imagen");
const daySpan = document.getElementById("dia");
const monthSpan = document.getElementById("mes");
const yearSpan = document.getElementById("año");
const title = document.getElementById("titulo");
const desc = document.getElementById("desc");
const link = document.getElementById("link");

button.addEventListener("click", function() {
  
  const xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function() {
    if (this.status === 200) {

      const response = JSON.parse(this.responseText);
      
      const date = response.date.split("-");
      yearSpan.textContent = date[0];
      monthSpan.textContent = date[1];
      daySpan.textContent = date[2];
      title.textContent = response.title;
      desc.textContent = response.explanation;
      img.src = response.url;
      link.href = response.hdurl;

      button.classList.add("hidden");
      figure.classList.remove("hidden");
    } else {
      console.error("Error en la llamada AJAX con código " + this.status);
    }
  });

  xhr.open("GET", "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");

  xhr.send();

})