const questions = [
    {
        question: "Which NBA player is known as 'The King'?",
        answers: ["LeBron James", "Michael Jordan", "Kobe Bryant", "Stephen Curry"],
        correct: 0
    },
    {
        question: "How many players are on the court for each team during a basketball game?",
        answers: ["4", "5", "6", "7"],
        correct: 1
    },
    {
        question: "Which team has won the most NBA championships?",
        answers: ["Los Angeles Lakers", "Chicago Bulls", "Golden State Warriors", "Boston Celtics"],
        correct: 3
    },
    {
        question: "What is the height of a regulation NBA basketball hoop?",
        answers: ["9 feet", "10 feet", "11 feet", "12 feet"],
        correct: 1
    },
    {
        question: "Who holds the record for most points scored in a single NBA game?",
        answers: ["Kobe Bryant", "Michael Jordan", "Wilt Chamberlain", "LeBron James"],
        correct: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const question = questions[currentQuestion];
    document.getElementById('question').textContent = question.question;
    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.onclick = () => checkAnswer(index);
        answersDiv.appendChild(button);
    });
    document.getElementById('message').textContent = '';
    document.getElementById('nextButton').style.display = 'none';
}

function checkAnswer(answerIndex) {
    const question = questions[currentQuestion];
    const message = document.getElementById('message');
    const buttons = document.querySelectorAll('#answers button');
    buttons.forEach(button => button.disabled = true);

    if (answerIndex === question.correct) {
        message.textContent = "Correct!";
        score++;
    } else {
        message.textContent = `Wrong. The correct answer is: ${question.answers[question.correct]}`;
    }
    document.getElementById('nextButton').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        endGame();
    }
}

function endGame() {
    const gameContainer = document.querySelector('.game-container');
    gameContainer.innerHTML = `
        <h1>Game Over</h1>
        <p>Your score: ${score} out of ${questions.length}</p>
        <button onclick="location.reload()">Play Again</button>
    `;
}

document.addEventListener('DOMContentLoaded', loadQuestion);
