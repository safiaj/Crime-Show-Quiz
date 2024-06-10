// Quiz data sourced from funtrivia.com
// Quiz data

const quizData = [
    {
        question: "In the TV show 'Monk', what is Adrian Monk's profession?",
        options: ["Detective", "Lawyer", "Doctor", "Journalist"],
        answer: "Detective"
    },
    {
        question: "What is the full name of the lead character in 'CSI: Miami'?",
        options: ["Horatio Caine", "David Caruso", "Eric Delko", "Calleigh Duquesne"],
        answer: "Horatio Caine"
    },
    {
        question: "Which actor played Detective Elliot Stabler in 'Law and Order: SVU'?",
        options: ["Christopher Meloni", "Mariska Hargitay", "Ice-T", "Richard Belzer"],
        answer: "Christopher Meloni"
    },
    {
        question: "Which TV show follows a group of FBI profilers who analyze the country's most twisted criminal minds?",
        options: ["Monk", "CSI: Miami", "Law and Order: SVU", "Criminal Minds"],
        answer: "Criminal Minds"
    },

    {
        question: " What does Natalie Teeger call Monk?",
        options: ["Monkey Man", "Mr. Monk", "Super-Monk-Genius", "Investigator Monk"],
        answer: "Mr. Monk"
    },

    {
        question: "Which actress played Assistant DA Alexandra Cabot?",
        options: ["Diane Neal", "Michaela Mcmanus", "Casey Novak", "Stephanie March"],
        answer: "Stephanie March"
    },

    {
        question: "Trudy, Monk's beloved wife, was murdered before the time line of the show began. In what way was she murdered?",
        options: ["Car bomb", "Shooting", "Stabbing", "Hidden Poison"],
        answer: "Car bomb"
    },

];

// Used the following sources to create the following code: youtube, google, code institue love math challenge and modules 

// Pull through DOM content
const questionContainer = document.getElementById("question-container");
const submitButton = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");

let currentQuestion = 0;
let score = 0;

// question counter
const currentQuestionElement = document.getElementById("current-question");
const totalQuestionsElement = document.getElementById("total-questions");

// Function to update question counter
function updateQuestionCounter(currentQuestion, totalQuestions) {
  currentQuestionElement.textContent = currentQuestion + 1;
  totalQuestionsElement.textContent = totalQuestions;
}

// Load first question when the page loads
loadQuestion();

// Event listener for submit button
submitButton.addEventListener("click", checkAnswer);

// Function to load question
function loadQuestion() {
    const questionData = quizData[currentQuestion];
    questionContainer.innerHTML = `<p>${questionData.question}</p>`;
    questionData.options.forEach(option => {
        questionContainer.innerHTML += `<label><input type="radio" name="answer" value="${option}" ${userAnswers[currentQuestion] === option ? 'checked' : ''}>${option}</label><br>`;
    });
    updateQuestionCounter(currentQuestion, quizData.length);
    correctFeedback.style.display = 'none';
    incorrectFeedback.style.display = 'none';
    submitButton.textContent = "Submit Answer";
}

// Function to check answer and allow access to the next question in the quiz set 
function checkAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked');
    if (!selectedOption) {
        alert("Please select an answer!");
        return;
    }

    const userAnswer = selectedOption.value;
    if (userAnswer === quizData[currentQuestion].answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

// Function to show result
function showResult() {
    questionContainer.innerHTML = "";
    submitButton.style.display = "none";
    resultContainer.innerHTML = `Your score: ${score}/${quizData.length}`;
}