
const button = document.querySelector("#button");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const summary = document.querySelector("#summary");
const button_b =document.querySelector("#button_b");
const button_c= document.getElementById('button_c');

//agregar evento onclick al botón siguiente
button.addEventListener("click", function() {
  // recopilar datos del primer paso
  
  let nombre = document.querySelector("#nombre").value;
  let apellido = document.querySelector("#apellido").value;
  let celular = document.querySelector("#celular").value;
  let email = document.querySelector("#email").value;
  let comentarios = document.querySelector("#textarea").value;
  // mostrar resumen en el segundo paso
  summary.innerHTML = `Nombre: ${nombre}<br>
  Apellido: ${apellido}<br>
  Celular: ${celular}   <br>
  Email: ${email}<br>
  Comentario:${comentarios}`;
  
  // ocultar el primer paso y mostrar el segundo paso
  step1.style.display = "none";
  step2.style.display = "block";
});

const btn_print = document.getElementById('btn_print')
btn_print.onclick = () => { window.print() }

const buttonc = document.getElementById('button_c')
buttonc.onclick = () => { window.location.reload() }