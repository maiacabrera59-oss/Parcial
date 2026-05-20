alert("Hola a todos, bienvenidos al sitio web de cursos.");
console.log("Archivo JavaScript cargado correctamente.");



document.querySelector('#boton').onclick = function(){
     document.body.style.backgroundColor = "lightblue";
     }

let tituloCurso = "Curso de Excel";
let descripcionCurso= "Aprendemos lenguajes como Python, Java y JavaScript."
let duracionCurso = "7 semanas";
document.getElementById("tituloCurso").innerHTML = tituloCurso;
document.getElementById("descripcionCurso").innerHTML = descripcionCurso;
document.getElementById("duracionCurso").innerHTML = duracionCurso;