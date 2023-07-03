import { User } from "../models/User.js";

const formOpenBtn = document.querySelector("#form-open");
const home = document.querySelector(".home");
const formContainer = document.querySelector(".form_container");
const formCloseBtn = document.querySelector(".form_close");
const signupBtn = document.querySelector("#signup");
const loginBtn = document.querySelector("#login");
const pwShowHide = document.querySelectorAll(".pw_hide");

formOpenBtn.addEventListener("click", () => home.classList.add("show"));
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

pwShowHide.forEach((icon) => {
  icon.addEventListener("click", () => {
    let getPwInput = icon.parentElement.querySelector("input");
    if (getPwInput.type === "password") {
      getPwInput.type = "text";
      icon.classList.replace("uil-eye-slash", "uil-eye");
    } else {
      getPwInput.type = "password";
      icon.classList.replace("uil-eye", "uil-eye-slash");
    }
  });
});

signupBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.add("active");
});

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  formContainer.classList.remove("active");
});


// 

document.getElementById('registro').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  const usuario = new User();
  usuario.email = document.getElementById('emailRegistro').value
  usuario.password = document.getElementById('passwordRegistro').value

  console.log(usuario);
  console.log("hola");

  fetch('https://localhost:7110/api/Users/Register', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(usuario), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(function(response) {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Error en la respuesta de la API');
    }
  })
  .then(function(data) {
    console.log(data); // Manejar la respuesta de la API
    // Hacer algo con la respuesta, como mostrar un mensaje de éxito al usuario
  })
  .catch(function(error) {
    console.log(error); // Manejar errores
  });
});

// inicio de sesion

document.getElementById('inicioSesion').addEventListener('submit', function(event) {
  event.preventDefault(); // Evitar el envío del formulario por defecto

  const usuario = new User();
  usuario.email = document.getElementById('emailInicioSesion').value
  usuario.password = document.getElementById('passwordInicioSesion').value

  fetch('https://localhost:7110/api/Users/Login', {
    method: 'POST', // or 'PUT'
    body: JSON.stringify(usuario), // data can be `string` or {object}!
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(function(response) {
    if (response.ok) {
      return response.text();
    } else {
      throw new Error('Error en la respuesta de la API');
    }
  })
  .then(function(data) {
    console.log(data); // Manejar la respuesta de la API
    localStorage.setItem('key', data);
    localStorage.setItem('username', usuario.email);
    window.location.href = '../CU-0004 Habilitar cuestionario general/home.html';

  })
  .catch(function(error) {
    console.log(error); // Manejar errores
  });
});

