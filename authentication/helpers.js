const username = localStorage.getItem('username');
const usernameText = document.getElementById('username');
console.log(usernameText);
usernameText? usernameText.textContent=username: usernameText.textContent = 'username';

const cerrarSesionBtn = document.getElementById('cerrarSesion');
cerrarSesionBtn.addEventListener('click', () => {
    localStorage.removeItem('key');
    localStorage.removeItem('username');
    window.location.href = 'http://127.0.0.1:5500/edukids/CU-0001%20y%20CU-0002%20Iniciar%20sesi%C3%B3n%20y%20Registrar%20usuarios/login_register.html'
} )