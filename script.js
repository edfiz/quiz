const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        correctAnswer: "Mars"
    }
    // Add more questions as needed
];

let currentQuestion = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;

    optionsElement.innerHTML = "";
    currentQuizData.options.forEach((option, index) => {
        const li = document.createElement('li');
        li.textContent = option;
        li.classList.add('option');
        li.onclick = () => selectOption(index);
        optionsElement.appendChild(li);
    });
}

function selectOption(selectedIndex) {
    // You can add additional logic if needed
    console.log("Selected option:", quizData[currentQuestion].options[selectedIndex]);
}

function submitAnswer() {
    // Add your logic to check the answer and perform actions accordingly
    console.log("Submit answer button clicked");
    
    // Example: Move to the next question
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert("Quiz completed!");
    }
}

// Initial load
loadQuestion();
