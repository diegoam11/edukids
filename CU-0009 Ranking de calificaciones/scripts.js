function toggleSidebar() {
  let sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}

// Datos de ejemplo: usuarios y puntajes
let usuarios = [
  { nombre: "Usuario1", puntaje: 100 },
  { nombre: "Usuario2", puntaje: 85 },
  { nombre: "Usuario3", puntaje: 92 },
  { nombre: "Usuario4", puntaje: 70 },
  { nombre: "Usuario5", puntaje: 95 },
  { nombre: "Usuario6", puntaje: 88 },
  { nombre: "Usuario7", puntaje: 75 },
  { nombre: "Usuario8", puntaje: 90 },
  { nombre: "Usuario9", puntaje: 82 },
  { nombre: "Usuario10", puntaje: 97 }
];

// Ordenar el arreglo de usuarios por puntaje de mayor a menor
usuarios.sort(function(a, b) {
  return b.puntaje - a.puntaje;
});

// Función para crear los elementos dinámicamente
function crearElementos() {
  let steps = document.getElementsByClassName("step");

  // Iterar sobre los elementos y agregar nombre de usuario y puntaje
  for (let i = 0; i < steps.length; i++) {
      let step = steps[i];
      let usuario = usuarios[i].nombre;
      let puntaje = usuarios[i].puntaje;
    
      // Crear elementos para el nombre de usuario y puntaje
      let nombreUsuario = document.createElement("span");
      nombreUsuario.textContent = `${usuario}: `;
      let puntajeUsuario = document.createElement("span");
      puntajeUsuario.textContent = `${puntaje} pts.  `;
    
      // Agregar los elementos al div correspondiente
      step.appendChild(nombreUsuario);
      step.appendChild(puntajeUsuario);
  }
}

// Llamar a la función para crear los elementos
crearElementos();
