window.onload=function(){

    const preguntas = [

        {
            pregunta:"¿Cúal es la capital de Francia?",
            imagen:"0.jpg"
        },

        {
            pregunta:"¿Cúal es el río más largo del mundo?",
            imagen:"1.jpg"
        },

        {
            pregunta:"¿Cúal es la capital de España?",
            imagen:"2.jpg"
        },

        {
            pregunta:"¿Cúal es la capital de Alemania?",
            imagen:"3.jpg"
        },

        {
            pregunta:"¿Cúal es la capital de Croacia?",
            imagen:"4.jpg"
        },

        {
            pregunta:"¿Cúal es el río más largo de España?",
            imagen:"5.jpg"
        },

        {
            pregunta:"¿Cúal es la montaña mas alta del mundo?",
            imagen:"6.jpg"
        },

        {
            pregunta:"¿En qué año se fundó Google?",
            imagen:"7.jpg"
        },

        {
            pregunta:"¿En que año nació Lionel Messi?",
            imagen:"8.jpg"
        },

        {
            pregunta:"¿Cuántos mundiales tiene Brasil?",
            imagen:"9.jpg"
        }

    ];

    

    function obtenerPreguntasAleatorias(){
        const preguntasAleatorias = [];
        while (preguntasAleatorias.length < 5){
            const indiceAleatorio = Math.floor(Math.random() * preguntas.length);

            if (!preguntasAleatorias.includes(preguntas[indiceAleatorio])){
                preguntasAleatorias.push(preguntas[indiceAleatorio]);
            }
        }
        return preguntasAleatorias;
    }



    function pintarPreguntas(preguntasAleatorias){
        const ContenedorDePreguntas = document.getElementById("preguntas-contenedor");
        ContenedorDePreguntas.innerHTML = "";

        for (const pregunta of preguntasAleatorias){

            const BloquePregunta = document.createElement("div");
            BloquePregunta.classList.add("bloque-pregunta");
            ContenedorDePreguntas.appendChild(BloquePregunta);



            const imagen = document.createElement("img");
            imagen.src = `imagenes/${pregunta.imagen}`;
            imagen.classList.add("pregunta-imagen");
            BloquePregunta.appendChild(imagen);



            const contenedorTexto = document.createElement("div");
            contenedorTexto.classList.add("contenedor-texto");
            BloquePregunta.appendChild(contenedorTexto);



            const preguntaArray = document.createElement("div");
            preguntaArray.textContent = pregunta.pregunta;
            contenedorTexto.appendChild(preguntaArray);



            const respuestas = document.createElement("input");
            contenedorTexto.appendChild(respuestas);
            
        }
    }



    const generarBoton = document.getElementById("boton-generar");
    generarBoton.addEventListener("click", generarPreguntas);



    function generarPreguntas() {
        const preguntasAleatorias = obtenerPreguntasAleatorias();
        pintarPreguntas(preguntasAleatorias);
    }



    

    const botonGenerarRespuestas = document.getElementById("comprobar");
    botonGenerarRespuestas.addEventListener("click",mostrarRespuestas);

    function mostrarRespuestas() {

        const preguntasMostradas = document.querySelectorAll(".contenedor-texto");
        const contenedorRespuestas = document.getElementById("contenedor-respuestas");
        contenedorRespuestas.innerHTML = "";
        const listaRespuestas = document.createElement("ol");
        for (const pregunta of preguntasMostradas) {
          const inputRespuesta = pregunta.querySelector("input");
          const respuestaCadaInput = inputRespuesta.value;
          const elementoLista = document.createElement("li");
          elementoLista.textContent = respuestaCadaInput;
          listaRespuestas.appendChild(elementoLista);
        }
        contenedorRespuestas.appendChild(listaRespuestas);
      }
      

      
    

    
}