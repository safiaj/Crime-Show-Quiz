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


