function toggleSidebar() {
    let sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
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
    question: "¿Cuál es tu animal favorito?",
    options: [
      { text: "Perro", correct: true },
      { text: "Gato", correct: false },
      { text: "Elefante", correct: false },
      { text: "León", correct: false }
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
    questionNumberElement.textContent = "Puntaje final";
    questionElement.textContent = `Puntaje: ${score}`;
    optionButtons.forEach(button => {
      button.style.display = "none"; // Ocultar botones de opción al finalizar el cuestionario
    });
    prevButton.style.display = "none"; // Ocultar botón anterior al finalizar el cuestionario
    nextButton.textContent = "Volver al menu principal"; // Cambiar texto del botón siguiente al finalizar el cuestionario
  } else {
    const options = currentQuestion.options;
    optionButtons.forEach((button, index) => {
      button.style.display = "inline-block"; // Mostrar botones de opción
      button.textContent = options[index].text;
      if(options[index].correct==true) {
        button.addEventListener("click", () => handleAnswer(button));
        score++;
      }
    });
    prevButton.style.display = "inline-block"; // Mostrar botón anterior
    nextButton.textContent = "Siguiente"; // Restaurar texto del botón siguiente
  }
}

// Función para manejar la respuesta seleccionada por el usuario
function handleAnswer(button) { 
  button.removeEventListener("click", handleAnswer);
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

  