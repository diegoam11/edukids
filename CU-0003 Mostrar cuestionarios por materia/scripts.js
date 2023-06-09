function toggleSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

function goToMainMenu() {
    window.location.href = '../CU-0004 Habilitar cuestionario general/home.html';
}

const mainMenuButton = document.getElementById('back-button')
mainMenuButton.addEventListener("click", () => goToMainMenu())