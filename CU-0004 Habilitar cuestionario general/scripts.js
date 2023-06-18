function toggleSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

function goToQuestionare() {
    window.location.href = '../CU-0003 Mostrar cuestionarios por materia/questionare.html';
}

const buttonMath = document.getElementById("math-button");
buttonMath.addEventListener("click", () => goToQuestionare())
