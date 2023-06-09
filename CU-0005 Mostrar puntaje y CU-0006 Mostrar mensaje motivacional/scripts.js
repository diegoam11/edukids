function toggleSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

function goToMainMenu() {
    window.location.href = '../CU-0004 Habilitar cuestionario general/home.html';
}

function goToSeeSolution() {
  window.location.href = '../CU-007 Ver solucion/solucion.html';
}

// Obtener elementos HTML
const questionNumberElement = document.getElementById("question-number");
const questionElement = document.getElementById("question");
const optionButtons = document.querySelectorAll(".option");
const prevButton = document.getElementById("prev-button");
const nextButton = document.getElementById("next-button");

// Definir preguntas y opciones
const questions = [
  {
    questionNumber: 1,
    question: "¿Cuánto es 7 + 5?",
    options: [
      { text: "12", correct: true },
      { text: "5", correct: false },
      { text: "11", correct: false },
      { text: "1", correct: false }
    ]
  },
  {
    questionNumber: 2,
    question: "¿Cuál es un número primo?",
    options: [
      { text: "2", correct: true },
      { text: "6", correct: false },
      { text: "8", correct: false },
      { text: "21", correct: false }
    ]
  },
  {
    questionNumber: 3,
    question: "¿Cuál es un número par?",
    options: [
      { text: "1", correct: false },
      { text: "2", correct: true },
      { text: "5", correct: false },
      { text: "15", correct: false }
    ]
  },
  {
    questionNumber: 4,
    question: "¿Cuál es el valor de pi aproximadamente?",
    options: [
      { text: "3", correct: false },
      { text: "3.14", correct: true },
      { text: "3.10", correct: false },
      { text: "4.1", correct: false }
    ]
  },
];

let currentQuestionIndex = 0;
let score = 0;
let quizFinished = false;

// Función para actualizar el contenido de la pregunta
function updateQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionNumberElement.textContent = `Pregunta ${currentQuestion.questionNumber}`;
  questionElement.textContent = currentQuestion.question;

  if (quizFinished) {
    questionNumberElement.textContent = `Puntaje: ${score}`;
    questionElement.textContent = getMotivationalMsg(score);
    optionButtons.forEach(button => {
      button.style.display = "none"; // Ocultar botones de opción al finalizar el cuestionario
    });
    prevButton.textContent = "Ver solución"; // Ocultar botón anterior al finalizar el cuestionario
    prevButton.addEventListener("click", () => goToSeeSolution())
    nextButton.textContent = "Volver al menu principal"; // Cambiar texto del botón siguiente al finalizar el cuestionario
    if(nextButton.textContent != "Siguiente"){
      nextButton.addEventListener("click", () => goToMainMenu())
    }
  } else {
    const options = currentQuestion.options;
    optionButtons.forEach((button, index) => {
      button.style.display = "inline-block"; // Mostrar botones de opción
      button.textContent = options[index].text;
    });
    prevButton.textContent = "Regresar"; // Restaurar texto del botón Regresar
    nextButton.textContent = "Siguiente"; // Restaurar texto del botón siguiente
  }
}

// Función para calcular el puntaje y finalizar el cuestionario
function finishQuiz() {
  quizFinished = true;
  updateQuestion();
}

// Función para ir a la siguiente pregunta
function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    updateQuestion();
  } else {
    finishQuiz();
  }
}

// Función para ir a la pregunta anterior
function previousQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    updateQuestion();
  }
}

// Asignar eventos de clic a los botones
nextButton.addEventListener("click", nextQuestion);
prevButton.addEventListener("click", previousQuestion);

// Actualizar la primera pregunta al cargar la página
updateQuestion();

function getMotivationalMsg(score){ 
  if(score<=3){
    msg = "Cada intento cuenta, ¡Sigue esforzándote!";
  } else if(score>4 && score<=6 ){
    msg = "¡No te rindas, estás en el camino correcto!";
  } else{
    msg = "!Tus habilidades son asombrosas, sigue adelante!";
  }
  return msg;
}

  