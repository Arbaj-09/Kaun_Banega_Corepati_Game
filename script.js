const indianGKQuestions = [
    {
        question: "Question 1: What is the national animal of India?",
        options: ["Tiger", "Lion", "Elephant", "Panther"],
        correctOption: 1,
        explanation: "The national animal of India is the Tiger."
    },
    {
        question: "Question 2: Which river is known as the Ganges in India?",
        options: ["Yamuna", "Brahmaputra", "Indus", "Sutlej"],
        correctOption: 1,
        explanation: "The river Yamuna is known as the Ganges in India."
    },
    {
        question: "Question 3: Which city is the capital of India?",
        options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
        correctOption: 3,
        explanation: "The capital of India is New Delhi."
    },
    {
        question: "Question 4: Who was the first Prime Minister of India?",
        options: ["Jawaharlal Nehru", "Indira Gandhi", "Lal Bahadur Shastri", "Sardar Patel"],
        correctOption: 1,
        explanation: "The first Prime Minister of India was Jawaharlal Nehru."
    },
    {
        question: "Question 5: What is the currency of India?",
        options: ["Rupee", "Pound", "Dollar", "Euro"],
        correctOption: 1,
        explanation: "The currency of India is the Indian Rupee."
    },
    {
        question: "Question 6: Which festival is known as the Festival of Lights?",
        options: ["Diwali", "Holi", "Eid", "Christmas"],
        correctOption: 1,
        explanation: "Diwali is known as the Festival of Lights."
    },
    {
        question: "Question 7: Who wrote the Indian national anthem 'Jana Gana Mana'?",
        options: ["Rabindranath Tagore", "Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru"],
        correctOption: 1,
        explanation: "The Indian national anthem 'Jana Gana Mana' was written by Rabindranath Tagore."
    },
    {
        question: "Question 8: Which planet is known as the 'Red Planet'?",
        options: ["Venus", "Mars", "Jupiter", "Saturn"],
        correctOption: 2,
        explanation: "Mars is known as the 'Red Planet'."
    },
    {
        question: "Question 9: Which is the largest mammal?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        correctOption: 2,
        explanation: "The Blue Whale is the largest mammal."
    },
    {
        question: "Question 10: Who is known as the 'Father of the Nation' in India?",
        options: ["Jawaharlal Nehru", "Sardar Patel", "Subhas Chandra Bose", "Mahatma Gandhi"],
        correctOption: 4,
        explanation: "Mahatma Gandhi is known as the 'Father of the Nation' in India."
    },
    {
        question: "Question 11: Which gas do plants absorb from the atmosphere?",
        options: ["Carbon Monoxide", "Nitrogen", "Oxygen", "Carbon Dioxide"],
        correctOption: 4,
        explanation: "Plants absorb Carbon Dioxide from the atmosphere during photosynthesis."
    },
    {
        question: "Question 12: Who wrote the Indian epic 'Mahabharata'?",
        options: ["Vedavyasa", "Valmiki", "Tulsidas", "Kalidasa"],
        correctOption: 1,
        explanation: "The Indian epic 'Mahabharata' was written by Vedavyasa."
    },
    {
        question: "Question 13: What is the largest planet in our solar system?",
        options: ["Mercury", "Venus", "Earth", "Jupiter"],
        correctOption: 4,
        explanation: "Jupiter is the largest planet in our solar system."
    },
    {
        question: "Question 14: Which scientist formulated the laws of motion and gravitation?",
        options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Nikola Tesla"],
        correctOption: 2,
        explanation: "The laws of motion and gravitation were formulated by Isaac Newton."
    },
    {
        question: "Question 15: Which is the highest mountain in the world?",
        options: ["Mount Kilimanjaro", "Mount Everest", "Mount Fuji", "Mount McKinley"],
        correctOption: 2,
        explanation: "Mount Everest is the highest mountain in the world."
    },
    {
        question: "Question 16: What is the chemical symbol for gold?",
        options: ["Ag", "Au", "Fe", "Hg"],
        correctOption: 2,
        explanation: "The chemical symbol for gold is 'Au'."
    },
    {
        question: "Question 17: Which gas is most abundant in Earth's atmosphere?",
        options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
        correctOption: 3,
        explanation: "Nitrogen is the most abundant gas in Earth's atmosphere."
    },
    {
        question: "Question 18: Which planet is known as the 'Morning Star' or 'Evening Star'?",
        options: ["Venus", "Mars", "Mercury", "Jupiter"],
        correctOption: 1,
        explanation: "Venus is known as the 'Morning Star' or 'Evening Star'."
    },
    {
        question: "Question 19: What is the smallest bone in the human body?",
        options: ["Femur", "Stapes", "Radius", "Tibia"],
        correctOption: 2,
        explanation: "The stapes bone in the human ear is the smallest bone."
    },
    {
        question: "Question 20: What is the largest organ in the human body?",
        options: ["Liver", "Heart", "Brain", "Skin"],
        correctOption: 4,
        explanation: "The skin is the largest organ in the human body."
    }
    ];
   
  // Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Shuffle the array of questions
let shuffledIndianGKQuestions = shuffleArray(indianGKQuestions);

// Initialize variables to keep track of the current question, total winnings, and timer interval
let currentIndianGKQuestionIndex = 0;
let totalWinnings = 0;
let timerInterval;

// Get references to HTML elements
const questionText = document.getElementById("question-text");
const options = document.querySelectorAll(".option");
const resultText = document.getElementById("result-text");
const nextQuestionButton = document.querySelector(".next-button");
const timerElement = document.getElementById("time-left");
const totalWinningsElement = document.getElementById("total-winnings");
const restartButton = document.querySelector(".restart-button");

// Display a question and its options
function displayQuestion() {
    const currentQuestion = shuffledIndianGKQuestions[currentIndianGKQuestionIndex];
    questionText.textContent = currentQuestion.question;

    for (let i = 0; i < options.length; i++) {
        options[i].textContent = currentQuestion.options[i];
    }

    resultText.textContent = "";
    nextQuestionButton.style.display = "none";

    startTimer();
}

// Start the countdown timer
function startTimer() {
    let timeLeft = 30;
    timerElement.textContent = timeLeft;
    timerInterval = setInterval(function() {
        timeLeft--;
        timerElement.textContent = timeLeft;
        if (timeLeft === 0) {
            timeUp(); // Call timeUp function when time's up
        }
    }, 1000);
}

// Stop the timer interval
function stopTimer() {
    clearInterval(timerInterval);
    timerElement.textContent = "";
}

// Check the selected answer against the correct answer
function checkAnswer(selectedOption) {
    stopTimer();

    const correctOption = shuffledIndianGKQuestions[currentIndianGKQuestionIndex].correctOption;
    if (selectedOption === correctOption) {
        totalWinnings += calculateCurrentWinnings();
        if (currentIndianGKQuestionIndex === shuffledIndianGKQuestions.length - 1) {
            resultText.textContent = "Congratulations! You became a Crorepati!";
            nextQuestionButton.style.display = "none";
        } else {
            resultText.textContent = `Correct! Congratulations! You win ₹${calculateCurrentWinnings()}!`;
            nextQuestionButton.style.display = "block";
        }
    } else {
        const correctAnswerIndex = correctOption - 1;
        const correctAnswer = shuffledIndianGKQuestions[currentIndianGKQuestionIndex].options[correctAnswerIndex];
        const explanation = shuffledIndianGKQuestions[currentIndianGKQuestionIndex].explanation;
        resultText.innerHTML = `Wrong answer. The correct answer is: ${correctAnswer}<br>${explanation}`;
        nextQuestionButton.style.display = "none";
    }

    totalWinningsElement.textContent = `Total Winnings: ₹${totalWinnings}`;
}

// Display the correct answer and explanation when time runs out and no option is chosen
function timeUp() {
    stopTimer();

    const correctOption = shuffledIndianGKQuestions[currentIndianGKQuestionIndex].correctOption;
    const correctAnswerIndex = correctOption - 1;
    const correctAnswer = shuffledIndianGKQuestions[currentIndianGKQuestionIndex].options[correctAnswerIndex];
    const explanation = shuffledIndianGKQuestions[currentIndianGKQuestionIndex].explanation;

    resultText.innerHTML = `Time's up! You didn't choose an option.<br>The correct answer is: ${correctAnswer}<br>${explanation}`;
    totalWinningsElement.textContent = `Total Winnings: ₹${totalWinnings}`;
    nextQuestionButton.style.display = "none";
}

// Calculate the current winnings based on the question index
function calculateCurrentWinnings() {
    return (currentIndianGKQuestionIndex + 1) * 100000;
}

// Move to the next question
function nextQuestion() {
    currentIndianGKQuestionIndex++;
    if (currentIndianGKQuestionIndex < shuffledIndianGKQuestions.length) {
        displayQuestion();
    }
}

// Restart the game
function restartGame() {
    totalWinnings = 0;
    currentIndianGKQuestionIndex = 0;
    shuffledIndianGKQuestions = shuffleArray(indianGKQuestions);
    displayQuestion();
    totalWinningsElement.textContent = `Total Winnings: ₹${totalWinnings}`;
}

// Display the first question when the page loads
displayQuestion();
