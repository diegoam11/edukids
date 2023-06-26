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
  
  // Función para generar las preguntas y respuestas en los elementos HTML
  function generateQuestions() {
    const container = document.querySelector('.container');
  
    questions.forEach((questionData) => {
      const questionBox = document.createElement('div');
      questionBox.classList.add('question-box');
  
      const questionElement = document.createElement('div');
      questionElement.classList.add('question'); 
      questionElement.textContent = `Pregunta ${questionData.questionNumber}: ${questionData.question}`;
  
      const correctAnswer = questionData.options.find(option => option.correct);
      const answerElement = document.createElement('div');
      answerElement.classList.add('answer');
      answerElement.textContent = `Respuesta: ${correctAnswer.text}`;;
  
      questionBox.appendChild(questionElement);
      questionBox.appendChild(answerElement);
  
      container.appendChild(questionBox);
    });
  }
  
  // Llamada a la función para generar las preguntas y respuestas
  generateQuestions();
