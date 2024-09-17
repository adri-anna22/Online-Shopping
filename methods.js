// Formulario
document.addEventListener("DOMContentLoaded", function () {

// Cargar estados al cargar la página
cargarEstados();

// Función para cargar estados
function cargarEstados() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "script.php?accion=estados", true);

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      document.getElementById("estados").innerHTML = xhr.responseText;
    }
  };

  xhr.send();
}

// Función para cargar municipios
function cargarMunicipios(idEstado) {
  var xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "script.php?accion=municipios&id_estado=" + idEstado,
    true
  );

  xhr.onload = function () {
    if (xhr.status >= 200 && xhr.status < 400) {
      document.getElementById("municipios").innerHTML =
        xhr.responseText;
    }
  };

  xhr.send();
}

// Evento de cambio en el select de estados
document
  .getElementById("estados")
  .addEventListener("change", function () {
    var idEstado = this.value;
    cargarMunicipios(idEstado);
  });

  const formulario = document.getElementById("registro-form");
  const tabla = document
    .getElementById("datos-table")
    .getElementsByTagName("tbody")[0];

  formulario.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita el envío del formulario por defecto

    // Captura los valores de los campos
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const fechaNacimiento = document.getElementById("nacimiento").value;
    const estado = document.getElementById("estados").value;
    const municipio = document.getElementById("municipios").value;
    const correo = document.getElementById("correo").value;

    // Calcula la edad
    const edad = calcularEdad(fechaNacimiento);

    if (edad < 18) {
      alert("Error, para registrarte debes ser mayor de edad");
      return;
    }

    // Crea una nueva fila en la tabla y agrega los datos
    const fila = tabla.insertRow();
    fila.innerHTML = `<td>${nombre} ${apellido}</td><td>${correo}</td><td>${fechaNacimiento}</td><td>${edad}</td><td>${estado}</td><td>${municipio}</td>`;

    // Limpia el formulario después de agregar los datos a la tabla
    formulario.reset();
  });
});

//Validación de alerta si la edad es menor que 18 años
document.getElementById("nacimiento").addEventListener("change", function () {
  var fechaNacimiento = this.value;
  var edad = calcularEdad(fechaNacimiento);

  if (edad < 18) {
    alert("Error, para registrarte debes ser mayor de edad");
  }
});

//Listener para cambiar el color
document.getElementById("cambiarColor").addEventListener("click", function () {
  var logoLink = document.getElementById("logoLink");
  logoLink.style.color = "red";
});

//Listener para cambiar el texto del titulo
document.getElementById("cambiarTexto").addEventListener("click", function () {
  var logoLink = document.getElementById("logoLink");
  logoLink.innerText = "From Venezuela";
});

//Listener para cambiar el color del header
document
  .getElementById("cambiarColores")
  .addEventListener("click", function () {
    var header = document.querySelector("header");
    header.classList.toggle("inverted");
  });

//Funcion para calcular la edad
function calcularEdad(fechaNacimiento) {
  var fechaNac = new Date(fechaNacimiento);
  var fechaActual = new Date();
  var edad = fechaActual.getFullYear() - fechaNac.getFullYear();

  if (
    fechaActual.getMonth() < fechaNac.getMonth() ||
    (fechaActual.getMonth() == fechaNac.getMonth() &&
      fechaActual.getDate() < fechaNac.getDate())
  ) {
    edad--;
  }

  return edad;
}
