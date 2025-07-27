// Elementos del DOM
const startScreen = document.getElementById('start-screen');
const examScreen = document.getElementById('exam-screen');
const questionsContainer = document.getElementById('questions-container');
const submitBtn = document.getElementById('submit-btn');
const timerElement = document.getElementById('timer');
const progressBar = document.getElementById('progress-bar');
const navigation = document.getElementById('navigation');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

// Variables de estado
let score = 0;
let minutos = 90; // Duración del examen en minutos
let timer = minutos * 60;
let timerInterval;
let examMode = 'normal';
let currentQuestionIndex = 0;
let shuffledQuestions = [];
let answeredQuestions = [];
let timeIsUp = false;
let inReviewMode = false;

function startExam(mode) {
  examMode = mode;
  score = 0;
  timeIsUp = false;
  inReviewMode = false;

  startScreen.classList.add('hidden');
  examScreen.classList.remove('hidden');
  submitBtn.style.display = 'block';
  progressBar.style.display = 'block';
  progressBar.parentElement.style.display = 'block';
  nextBtn.style.display = 'block';
  prevBtn.style.display = 'block';
  navigation.classList.toggle('hidden', mode !== 'random');

  // Resetear las respuestas de usuario al comenzar
  questions.forEach(q => q.userAnswer = undefined);

  if (mode === 'random') {
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    answeredQuestions = [];
    showQuestion(0);
  } else {
    displayAllQuestions();
  }

  startTimer();
}

function startTimer() {
  timer = minutos * 60;
  clearInterval(timerInterval);
  updateTimerDisplay();
  timerInterval = setInterval(() => {
    timer--;
    updateTimerDisplay();
    if (timer <= 0) {
      clearInterval(timerInterval);
      timeIsUp = true;
      finishExam();
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(timer / 60).toString().padStart(2, '0');
  const seconds = (timer % 60).toString().padStart(2, '0');
  timerElement.textContent = `${minutes}:${seconds}`;
  timerElement.style.color = timer <= 30 ? '#e74c3c' : '';
}

function displayAllQuestions() {
  questionsContainer.innerHTML = '';
  const sourceArray = (examMode === 'random' && !inReviewMode) ? shuffledQuestions : questions;
  sourceArray.forEach((q, index) => questionsContainer.appendChild(createQuestionElement(q, index)));
  updateProgressBar();
}

function showQuestion(index) {
  if (inReviewMode) return displayAllQuestions();
  if (examMode === 'random') {
    if (index < 0 || index >= shuffledQuestions.length) return;
    currentQuestionIndex = index;
    questionsContainer.innerHTML = '';
    questionsContainer.appendChild(createQuestionElement(shuffledQuestions[index], index));
    updateProgressBar();
    updateNavigationButtons();
  } else {
    displayAllQuestions();
  }
}

function createQuestionElement(q, index) {
  console.log('Pregunta tipo:', q.type, 'columns:', !!q.columns, 'rows:', !!q.rows);
  const questionDiv = document.createElement('div');
  questionDiv.className = 'question';
  questionDiv.innerHTML = `<p><strong>${q.question}</strong></p>`;

  if (q.type === 'match') {
    // Renderiza tabla match con estilos
    const table = document.createElement('table');
    table.className = 'question-table';  // <-- Aquí la clase CSS
    table.innerHTML = `
      <thead><tr><th>Afirmación</th><th>Respuesta</th></tr></thead>
      <tbody>
        ${q.leftColumn.map((def, i) => `
          <tr>
            <td>${def}</td>
            <td>
              <select name="q${index}_match_${i}" ${inReviewMode ? 'disabled' : ''}>
                <option value="">-- Seleccione --</option>
                ${q.rightColumn.map((concept, ci) => `
                  <option value="${ci}" ${q.userAnswer && q.userAnswer[i] === ci ? 'selected' : ''}>${concept}</option>
                `).join('')}
              </select>
            </td>
          </tr>
        `).join('')}
      </tbody>
    `;
    questionDiv.appendChild(table);
  } 
  else if (q.columns && q.rows) {
    // Render tabla con columns y rows usando clase question-table
    const table = document.createElement('table');
    table.className = 'question-table';
    table.innerHTML = `
      <thead>
        <tr>
          ${q.columns.map(col => `<th>${col}</th>`).join('')}
        </tr>
      </thead>
      <tbody>
        ${q.rows.map(row => `
          <tr>${row.map(cell => `<td>${cell}</td>`).join('')}</tr>
        `).join('')}
      </tbody>
    `;
    questionDiv.appendChild(table);

    // Renderizar opciones tipo radio
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';
    q.options.forEach((option, i) => {
      const checked = q.userAnswer === i;
      optionsDiv.innerHTML += `
        <input type="radio" id="q${index}_${i}" name="q${index}" value="${i}" ${checked ? 'checked' : ''} ${inReviewMode ? 'disabled' : ''}>
        <label for="q${index}_${i}">${option}</label><br>
      `;
    });
    questionDiv.appendChild(optionsDiv);
  } 
  else {
    // Preguntas normales (radio o checkbox)
    const optionsDiv = document.createElement('div');
    optionsDiv.className = 'options';
    q.options.forEach((option, i) => {
      const inputType = q.multiple ? 'checkbox' : 'radio';
      let checked = false;
      if (q.multiple) {
        checked = q.userAnswer && Array.isArray(q.userAnswer) && q.userAnswer.includes(i);
      } else {
        checked = q.userAnswer === i;
      }
      optionsDiv.innerHTML += `
        <input type="${inputType}" id="q${index}_${i}" name="q${index}" value="${i}" ${checked ? 'checked' : ''} ${inReviewMode ? 'disabled' : ''}>
        <label for="q${index}_${i}">${option}</label><br>
      `;
    });
    questionDiv.appendChild(optionsDiv);
  }

  if (inReviewMode) {
    questionDiv.classList.add(q.isCorrect ? 'correct' : 'incorrect');
  }

  return questionDiv;
}


// También podemos eliminar la función getCorrectAnswerText ya que no se usa más


function updateProgressBar() {
  progressBar.style.width = examMode === 'random' ? `${(answeredQuestions.length / questions.length) * 100}%` : '100%';
}

function updateNavigationButtons() {
  prevBtn.disabled = currentQuestionIndex === 0;
  nextBtn.textContent = answeredQuestions.includes(shuffledQuestions[currentQuestionIndex]) ? 'Siguiente pregunta' : 'Guardar y continuar';
}

function nextQuestion() {
  saveCurrentAnswer();
  if (!answeredQuestions.includes(shuffledQuestions[currentQuestionIndex])) {
    answeredQuestions.push(shuffledQuestions[currentQuestionIndex]);
    updateProgressBar();
  }
  const nextIndex = shuffledQuestions.findIndex((q, i) => !answeredQuestions.includes(q) && i > currentQuestionIndex);
  nextIndex === -1 ? finishExam() : showQuestion(nextIndex);
}

function prevQuestion() {
  showQuestion(currentQuestionIndex - 1);
}

function finishExam() {
  saveCurrentAnswer();
  clearInterval(timerInterval);
  inReviewMode = true;
  if (examMode === 'random') shuffledQuestions = questions;
  gradeExam();
  displayAllQuestions();
  showResults();
}

function saveCurrentAnswer() {
  if (inReviewMode) return;

  if (examMode === 'random') {
    const currentQ = shuffledQuestions[currentQuestionIndex];
    const questionDiv = questionsContainer.children[0];
    if (!questionDiv) return;

    if (currentQ.type === 'match') {
      currentQ.userAnswer = [];
      currentQ.leftColumn.forEach((_, i) => {
        const select = questionDiv.querySelector(`select[name="q${currentQuestionIndex}_match_${i}"]`);
        currentQ.userAnswer[i] = select ? parseInt(select.value) : undefined;
      });
    } else if (currentQ.multiple) {
      currentQ.userAnswer = Array.from(questionDiv.querySelectorAll('input[type="checkbox"]:checked')).map(cb => parseInt(cb.value));
    } else {
      const selected = questionDiv.querySelector('input[type="radio"]:checked');
      currentQ.userAnswer = selected ? parseInt(selected.value) : undefined;
    }
  } else {
    // Modo normal - guardar todas las respuestas
    const questionDivs = questionsContainer.children;
    questions.forEach((q, index) => {
      const questionDiv = questionDivs[index];
      if (!questionDiv) return;

      if (q.type === 'match') {
        q.userAnswer = [];
        q.leftColumn.forEach((_, i) => {
          const select = questionDiv.querySelector(`select[name="q${index}_match_${i}"]`);
          q.userAnswer[i] = select ? parseInt(select.value) : undefined;
        });
      } else if (q.multiple) {
        q.userAnswer = Array.from(questionDiv.querySelectorAll('input[type="checkbox"]:checked')).map(cb => parseInt(cb.value));
      } else {
        const selected = questionDiv.querySelector('input[type="radio"]:checked');
        q.userAnswer = selected ? parseInt(selected.value) : undefined;
      }
    });
  }
}

function gradeExam() {
  const sourceArray = examMode === 'random' ? shuffledQuestions : questions;
  score = 0;
  sourceArray.forEach((q, index) => {
    let isCorrect = false;

    if (q.type === 'match') {
      isCorrect = q.userAnswer && q.leftColumn.every((_, i) => {
        return q.userAnswer[i] === q.answer[i];
      });
    } else if (q.multiple) {
      const selected = q.userAnswer || [];
      const correctAnswers = Array.isArray(q.answer) ? q.answer : [];
      isCorrect = arraysEqual(selected.sort(), [...correctAnswers].sort());
    } else {
      isCorrect = q.userAnswer !== undefined && q.userAnswer === q.answer;
    }

    q.isCorrect = isCorrect;
    if (isCorrect) score++;
  });
}

function showResults() {
  navigation.classList.add('hidden');
  submitBtn.style.display = 'none';
  progressBar.style.display = 'none';
  progressBar.parentElement.style.display = 'none';
  nextBtn.style.display = 'none';
  prevBtn.style.display = 'none';
  timerElement.style.color = '';

  const minutesUsed = Math.floor((minutos * 60 - timer) / 60);
  const secondsUsed = (minutos * 60 - timer) % 60;

  const notaSobreDiez = ((score / questions.length) * 10).toFixed(2);

  timerElement.innerHTML = `
    <div">
      <span><strong>Puntuación:</strong> ${score} / ${questions.length} &nbsp;|&nbsp; <strong>Nota:</strong> ${notaSobreDiez} / 10</span>&emsp;
      <span><strong>Tiempo:</strong> ${minutesUsed.toString().padStart(2, '0')}:${secondsUsed.toString().padStart(2, '0')}</span>
      ${timeIsUp ? '<span class="time-up">¡Tiempo agotado!</span>' : ''}
    </div>
  `;
}


function arraysEqual(a, b) {
  return a && b && a.length === b.length && a.every((val, i) => val === b[i]);
}

submitBtn.addEventListener('click', finishExam);
nextBtn.addEventListener('click', nextQuestion);
prevBtn.addEventListener('click', prevQuestion);

window.addEventListener('load', () => {
  if (typeof questions === 'undefined') {
    alert('Error: No se encontró la variable questions. Verifica que questions_examen.js se haya cargado correctamente.');
  }
});