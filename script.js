function mostrarTab(id) {
let contenidos = document.querySelectorAll(".tab-contenido");
  for (let i = 0; i < contenidos.length; i++) {
    contenidos[i].classList.remove("mostrar");
  }

  let botones = document.querySelectorAll(".tab-link");
  for (let i = 0; i < botones.length; i++) {
    botones[i].classList.remove("activo");
  }

  document.getElementById(id).classList.add("mostrar");

  event.target.classList.add("activo");
} 

let usoElegido = "";
let presupuestoElegido = "";

function guardarUso(uso) {
  usoElegido = uso;
  document.getElementById("pregunta1").classList.remove("mostrar");
  document.getElementById("pregunta2").classList.add("mostrar");
}

function guardarPresupuesto(presupuesto) {
  presupuestoElegido = presupuesto;
  document.getElementById("pregunta2").classList.remove("mostrar");
  document.getElementById("resultado").classList.add("mostrar");
  mostrarRecomendacion();
}

function mostrarRecomendacion() {
  let recomendacion = "";
  if (usoElegido === "Oficina" && presupuestoElegido === "Bajo") {
    recomendacion = "Procesador Intel i3, 8GB RAM, SSD 240GB.";
  } else if (usoElegido === "Oficina" && presupuestoElegido === "Medio") {
    recomendacion = "Procesador Intel i5, 8GB RAM, SSD 480GB.";
  } else if (usoElegido === "Oficina" && presupuestoElegido === "Alto") {
    recomendacion = "Procesador Intel i7, 16GB RAM, SSD 1TB.";
  } else if (usoElegido === "Gaming" && presupuestoElegido === "Bajo") {
    recomendacion = "Ryzen 5, 16GB RAM, GPU GTX 1650, SSD 480GB.";
  } else if (usoElegido === "Gaming" && presupuestoElegido === "Medio") {
    recomendacion = "Ryzen 5, 16GB RAM, GPU RTX 3060, SSD 1TB.";
  } else if (usoElegido === "Gaming" && presupuestoElegido === "Alto") {
    recomendacion = "Ryzen 7, 32GB RAM, GPU RTX 4070, SSD 2TB.";
  } else if (usoElegido === "Edición" && presupuestoElegido === "Bajo") {
    recomendacion = "Ryzen 5, 16GB RAM, GPU GTX 1660, SSD 480GB.";
  } else if (usoElegido === "Edición" && presupuestoElegido === "Medio") {
    recomendacion = "Ryzen 7, 32GB RAM, GPU RTX 3070, SSD 1TB.";
  } else if (usoElegido === "Edición" && presupuestoElegido === "Alto") {
    recomendacion = "Ryzen 9, 32GB RAM, GPU RTX 4080, SSD 2TB.";
  }

  document.getElementById("texto-resultado").textContent =
    "Uso: " + usoElegido + " | Presupuesto: " + presupuestoElegido +
    ". Te recomendamos: " + recomendacion;
}

function reiniciarWizard() {
  usoElegido = "";
  presupuestoElegido = "";
  document.getElementById("resultado").classList.remove("mostrar");
  document.getElementById("pregunta1").classList.add("mostrar");
}

let formulario = document.getElementById("form-contacto");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  let valido = true;

  let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]{3,40}$/;
  let regexEmail = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
  let regexTelefono = /^[0-9]{8,15}$/;

  let nombre = document.getElementById("nombre").value;
  let email = document.getElementById("email").value;
  let telefono = document.getElementById("telefono").value;

  if (!regexNombre.test(nombre)) {
    document.getElementById("error-nombre").textContent = "Ingresá un nombre válido (solo letras).";
    valido = false;
  } else {
    document.getElementById("error-nombre").textContent = "";
  }

  if (!regexEmail.test(email)) {
    document.getElementById("error-email").textContent = "Ingresá un email válido.";
    valido = false;
  } else {
    document.getElementById("error-email").textContent = "";
  }

  if (!regexTelefono.test(telefono)) {
    document.getElementById("error-telefono").textContent = "Ingresá un teléfono válido (solo números).";
    valido = false;
  } else {
    document.getElementById("error-telefono").textContent = "";
  }

  if (valido) {
    document.getElementById("mensaje-exito").textContent = "¡Solicitud enviada correctamente!";
    formulario.reset();
  } else {
    document.getElementById("mensaje-exito").textContent = "";
  }
});

let btnArriba = document.getElementById("btn-arriba");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    btnArriba.style.display = "block";
  } else {
    btnArriba.style.display = "none";
  }
});

btnArriba.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});



