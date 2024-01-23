window.onload=function(){



// Array de preguntas
const preguntas = [
    "¿Cúal es la capital de Francia?",
    "¿Cúal es el río más largo del mundo?",
    "¿Cúal es la capital de España?",
    "¿Cúal es la capital de Alemania?",
    "¿Cúal es la capital de Croacia?",
    "¿Cúal es el río más largo de España?",
    "¿Cúal es la montaña mas alta del mundo?",
    "¿En qué año se fundó Google?",
    "¿En que año nació Lionel Messi?",
    "¿Cuántos mundiales tiene Brasil?"
  ];


 // Asignar evento al botón de generar preguntas
 const generarBoton = document.getElementById("boton-generar");
 generarBoton.addEventListener("click", generarPreguntas);

 const comprobarBoton = document.getElementById("comprobar");
 comprobarBoton.addEventListener("click", generarRespuestas);



// Seleccionar aleatoriamente 5 preguntas
function generarPreguntas() {

    const preguntasAleatorias = [];

    while (preguntasAleatorias.length <= 5) {

      const IndicesAleatorios = Math.floor(Math.random() * preguntas.length);

      // verifica si ya se han seleccionado preguntas aleatorias previamente. Si todavia no se han seleccionado, entonces genera nuevas preguntas aleatorias y
      // las mete en la variable preguntasAleatorias
      if (!preguntasAleatorias.includes(IndicesAleatorios)) {
        preguntasAleatorias.push(IndicesAleatorios);
      }
    }

  
    // Dibujar preguntas

    //este es el contenedor donde van las preguntas
    const ContenedorDePreguntas = document.getElementById("preguntas-contenedor");


    //lo pongo vacío porque sino se pintan las preguntas todo el rato al darle al boton
    ContenedorDePreguntas.innerHTML = "";
    for (let i = 0; i < preguntasAleatorias.length; i++) {
      const pregunta = preguntas[preguntasAleatorias[i]];
  

      // Crear contenedor de pregunta donde va la pregunta, la imagen y el texto
      const BloquePregunta = document.createElement("div");
      BloquePregunta.classList.add("bloque-pregunta");
      ContenedorDePreguntas.appendChild(BloquePregunta);
  
      // Crear elemento de imagen
      const imagen = document.createElement("img");
      imagen.src = `imagenes/${preguntasAleatorias[i]}.jpg`;
      imagen.classList.add("pregunta-imagen");
      BloquePregunta.appendChild(imagen);
  
      // Crear contenedor de texto
      const contenedorTexto = document.createElement("div");
      contenedorTexto.classList.add("contenedor-texto");
      BloquePregunta.appendChild(contenedorTexto);
  
      // Crear elemento de pregunta
      const preguntaArray = document.createElement("div");
      preguntaArray.textContent = pregunta;
      contenedorTexto.appendChild(preguntaArray);
  
      // Crear elemento de texto para las respuestas
      const respuestas = document.createElement(preguntasAleatorias[i] % 2 === 0 ? "textarea" : "input");
      contenedorTexto.appendChild(respuestas);
    }
  }





  


  }



 
  
 
 
  

