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
        question: "What does Natalie Teeger call Monk?",
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
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const questionContainer = document.getElementById("question-container");
    const submitButton = document.getElementById("submit-btn");
    const backButton = document.getElementById("back-btn");
    const resultContainer = document.getElementById("result");
    const congratulationsContainer = document.getElementById("congratulations");
    const currentQuestionElement = document.getElementById("current-question");
    const totalQuestionsElement = document.getElementById("total-questions");
    const correctFeedback = document.getElementById("correct-feedback");
    const incorrectFeedback = document.getElementById("incorrect-feedback");
    const correctAnswerSpan = document.getElementById("correct-answer");

    let currentQuestion = 0;
    let score = 0;
    let userAnswers = Array(quizData.length).fill(null);

    function updateQuestionCounter(currentQuestion, totalQuestions) {
        currentQuestionElement.textContent = currentQuestion + 1;
        totalQuestionsElement.textContent = totalQuestions;
    }

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

    function showFeedback() {
        const userAnswer = userAnswers[currentQuestion];
        const correctAnswer = quizData[currentQuestion].answer;

        if (userAnswer === correctAnswer) {
            correctFeedback.style.display = 'block';
            incorrectFeedback.style.display = 'none';
            score++;
        } else {
            correctFeedback.style.display = 'none';
            incorrectFeedback.style.display = 'block';
            correctAnswerSpan.textContent = correctAnswer;
        }

        if (currentQuestion === quizData.length - 1) {
            submitButton.textContent = "Finish";
        } else {
            submitButton.textContent = "Next Question";
        }
        submitButton.removeEventListener("click", checkAnswer);
        submitButton.addEventListener("click", loadNextQuestion);
    }

    function checkAnswer() {
        const selectedOption = document.querySelector('input[name="answer"]:checked');
        if (!selectedOption) {
            alert("Please select an answer!");
            return;
        }

        userAnswers[currentQuestion] = selectedOption.value;
        showFeedback();

        backButton.style.display = currentQuestion > 0 ? "inline-block" : "none";
    }

    function loadNextQuestion() {
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuestion();
            submitButton.removeEventListener("click", loadNextQuestion);
            submitButton.addEventListener("click", checkAnswer);
        } else {
            showResult();
        }
    }

    function hideQuestionCounter() {
        const questionCounter = document.getElementById("question-counter");
        questionCounter.style.display = "none";
    }
    

    function showResult() {
        questionContainer.innerHTML = "";
        submitButton.style.display = "none";
        backButton.style.display = "none";
        resultContainer.innerHTML = `Your score: ${score}/${quizData.length}`;
        congratulationsContainer.style.display = "block";
        correctFeedback.style.display = 'none';
        incorrectFeedback.style.display = 'none';
        hideQuestionCounter(); // Call the function to hide the question counter
    }

    // Start the quiz
    loadQuestion();
    updateQuestionCounter(currentQuestion, quizData.length);

    // Event listeners
    submitButton.addEventListener("click", checkAnswer);

    backButton.addEventListener("click", () => {
        if (currentQuestion > 0) {
            currentQuestion--;
            loadQuestion();
            submitButton.removeEventListener("click", loadNextQuestion);
            submitButton.addEventListener("click", checkAnswer);

            if (userAnswers[currentQuestion] !== null) {
                showFeedback();
            }

            backButton.style.display = currentQuestion > 0 ? "inline-block" : "none";
        }
    });
});
