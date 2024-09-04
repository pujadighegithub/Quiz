const questions = [
    {
        question: "What is the capital of France?",
        choices: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Earth", "Jupiter", "Mars", "Saturn"],
        answer: "Mars"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        choices: ["Harper Lee", "Mark Twain", "Ernest Hemingway", "Jane Austen"],
        answer: "Harper Lee"
    },
    {
        question: "Who is the founder of c programming?",
        choices: ["van guido ", "denis ritche", "james gosling", "John"],
        answer: "denis ritche"
    }
   
];



let currentQuestionIndex = 0;
let score = 0;

function showQuestion() {
    const questionContainer = document.getElementById('question-container');
    const question = questions[currentQuestionIndex];

    questionContainer.innerHTML = `
        <h2>${question.question}</h2>
        ${question.choices.map((choice, index) => `
            <div>
                <input type="radio" id="choice${index}" name="choice" value="${choice}">
                <label for="choice${index}">${choice}</label>
            </div>
        `).join('')}
    `;
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        const answer = selectedChoice.value;
        if (answer === questions[currentQuestionIndex].answer) {
            score++;
        }
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = `<h2>You scored ${score} out of ${questions.length}</h2>`;
    document.getElementById('next-button').disabled = true;
}

document.getElementById('next-button').addEventListener('click', checkAnswer);

// Initialize quiz
showQuestion();

