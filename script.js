const questions = [
    {
        question: "Which is the largest animal in the world ?",
        answers: [
            { text: "Blue Whale", correct: true },
            { text: "Shark", correct: false },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false }
        ]
    },
    {
        question: "Which is the smallest country in the world ?",
        answers: [
            { text: "Bhutan", correct: false },
            { text: "Vatican City", correct: true },
            { text: "Nepal", correct: false },
            { text: "Sri Lanka", correct: false }
        ]
    },
    {
        question: "Which is the largest desert in the world ?",
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: false },
            { text: "Antarctica", correct: true },
            { text: "Sahara", correct: false },
        ]
    },
    {
        question: "Which is the smallest continent in the world ?",
        answers: [
            { text: "Asia", correct: false },
            { text: "Africa", correct: false },
            { text: "Arctic", correct: false },
            { text: "Australia", correct: true },
        ]
    },
    {
        question: "Which continent is known as the Dark Continent ?",
        answers: [
            { text: "Africa", correct: true },
            { text: "Asia", correct: false },
            { text: "North America", correct: false },
            { text: "Antartica", correct: false }
        ]
    },
    {
        question: "Which is the largest ocean by volume ?",
        answers: [
            { text: "Indian Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
            { text: "Atlantic Ocean", correct: false },
            { text: "Arctic Ocean", correct: false }
        ]
    },
    {
        question: "Which country has the most time zones ?",
        answers: [
            { text: "China", correct: false },
            { text: "Brazil", correct: false },
            { text: "Russia", correct: true },
            { text: "United States", correct: false }
        ]
    },
    {
        question: "What is the largest island in the world ?",
        answers: [
            { text: " New Guinea", correct: false },
            { text: "Borneo", correct: false },
            { text: "Madagascar", correct: false },
            { text: "Greenland", correct: true }
        ]
    },
    {
        question: "Which continent has the fewest countries ?",
        answers: [
            { text: "Antarctica", correct: true },
            { text: "Africa", correct: false },
            { text: "South America", correct: false },
            { text: "Europe", correct: false }
        ]
    },
    {
        question: "Which city is known as the City of Canals ?",
        answers: [
            { text: "Amsterdam", correct: false },
            { text: "Venice", correct: true },
            { text: "Bangkok", correct: false },
            { text: "Bruges", correct: false }
        ]
    },

];

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const replayButton = document.getElementById('replay-btn');
const endScreen = document.getElementById('end-screen');
const amitabhImage = document.getElementById('amitabh-image');
const amitabhMessage = document.getElementById('amitabh-message');

let currentQuestionIndex = 0;
let score = 0;

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.style.display = 'none';
    replayButton.style.display = 'none';
    endScreen.style.display = 'none';
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.textContent = question.question;
    answerButtonsElement.innerHTML = ''; 

    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.textContent = answer.text;
        button.classList.add('btn');
        button.dataset.correct = answer.correct;
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === 'true';

   
    if (correct) {
        score++;
    }

    
    Array.from(answerButtonsElement.children).forEach(button => {
        button.classList.add(button.dataset.correct === 'true' ? 'correct-answer' : 'incorrect-answer');
        if (button.dataset.correct === 'true') {
            button.classList.add('correct');
        } else {
            button.classList.add('incorrect');
        }
    });

    
    selectedButton.classList.add(correct ? 'correct' : 'incorrect');

    nextButton.style.display = 'block';
}

function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
        nextButton.style.display = 'none';
    } else {
        showScore();
    }
}

function showScore() {
    questionElement.textContent = `You completed the quiz! Your score is ${score} out of ${questions.length}.`;
    answerButtonsElement.innerHTML = '';
    nextButton.style.display = 'none';
    replayButton.style.display = 'block';
    endScreen.style.display = 'block'; 
}

function restartGame() {
    startGame();
}

nextButton.addEventListener('click', handleNextQuestion);
replayButton.addEventListener('click', restartGame);

startGame();
