// Array to store the questions
var questions = [
  {
    question: "Question 1: What is the capital of France?",
    choices: ["Paris", "London", "Berlin", "Madrid"],
    answer: 0
  },
  {
    question: "Question 2: Which planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: 1
  },
  {
    question: "Question 3: Which animal is used to carry loads?",
    choices: ["rat", "camel", "goat", "cow"],
    answer: 1 
},
   {
    question: "Question 4: What is the capital of Australia?",
    choices: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
    answer: 2
  },
  {
    question: "Question 5: Who painted the Mona Lisa?",
    choices: ["Leonardo da Vinci", "Vincent van Gogh", "Pablo Picasso", "Michelangelo"],
    answer: 0
  },
  {
    question: "Question 6: Which country is known for the Great Wall?",
    choices: ["China", "India", "Japan", "Russia"],
    answer: 0
  },
  {
    question: "Question 7: Who wrote the play 'Romeo and Juliet'?",
    choices: ["William Shakespeare", "Jane Austen", "Charles Dickens", "F. Scott Fitzgerald"],
    answer: 0
  }
  {
    question: "Question 8: Who discovered penicillin?",
    choices: ["Alexander Fleming", "Marie Curie", "Albert Einstein", "Isaac Newton"],
    answer: 0
  },
  {
    question: "Question 9: Which is the largest ocean in the world?",
    choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
    answer: 0
  },
  {
    question: "Question 10: What is the chemical symbol for gold?",
    choices: ["Au", "Ag", "Fe", "Cu"],
    answer: 0
  },
  {
    question: "Question 11: Who was the first person to step on the moon?",
    choices: ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
    answer: 0
  }
// Add more questions here...
];
var score = 0; // Initial score
var currentQuestionIndex = 0; // Current question index

function addQuestion(question, choices, answer) {
  var newQuestion = {
    question: question,
    choices: choices,
    answer: answer
  };
  questions.push(newQuestion);
},
// Function to display a question
function displayQuestion() {
  var questionContainer = document.getElementById("questionContainer");
  var questionElement = document.createElement("div");
  questionElement.classList.add("question");

  var questionText = document.createElement("h2");
  questionText.textContent = questions[currentQuestionIndex].question;
  questionElement.appendChild(questionText);

  var choicesElement = document.createElement("div");
  choicesElement.classList.add("choices");

  var choices = questions[currentQuestionIndex].choices;
  for (var i = 0; i < choices.length; i++) {
    var choiceElement = document.createElement("button");
    choiceElement.classList.add("choice");
    choiceElement.textContent = choices[i];
    choiceElement.addEventListener("click", handleChoiceClick);
    choicesElement.appendChild(choiceElement);
  }

  questionElement.appendChild(choicesElement);
  questionContainer.innerHTML = "";
  questionContainer.appendChild(questionElement);

  var scoreForm = document.getElementById("scoreForm");
  scoreForm.score.value = score;
}

// Function to handle choice click event
function handleChoiceClick(event) {
  var selectedChoice = event.target.textContent;
  var correctAnswer = questions[currentQuestionIndex].choices[questions[currentQuestionIndex].answer];

  if (selectedChoice === correctAnswer) {
    score += 10;
    displayFeedback(true);
  } else {
    displayFeedback(false, correctAnswer);
  }

  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    setTimeout(displayQuestion, 2000);
  } else {
    setTimeout(displayResults, 2000);
  }
}

// Function to display feedback for correct or incorrect answer
function displayFeedback(isCorrect, correctAnswer) {
  var feedbackElement = document.createElement("div");
  feedbackElement.classList.add("feedback");

  if (isCorrect) {
    feedbackElement.textContent = "Congratulations! Your answer is correct.";
    feedbackElement.classList.add("correct");
  } else {
    feedbackElement.textContent = "Sorry, your answer is incorrect. The correct answer is: " + correctAnswer;
    feedbackElement.classList.add("incorrect");
  }

  var questionContainer = document.getElementById("questionContainer");
  questionContainer.appendChild(feedbackElement);
}

// Function to display the final results
function displayResults() {
  var questionContainer = document.getElementById("questionContainer");
  questionContainer.innerHTML = "";

  var resultsElement = document.createElement("div");
  resultsElement.classList.add("results");

  var scoreForm = document.getElementById("scoreForm");
  var scoreInput = scoreForm.querySelector("#scoreInput");
  scoreInput.value = score; // Update the score input value

  resultsElement.appendChild(scoreForm); // Append the score form to the results element
  questionContainer.appendChild(resultsElement);
}

// Initialize the quiz
displayQuestion();
// Function to go back to the landing page
function goToLandingPage() {
  window.location.href = "landing.html";
}

// Function to exit the quiz
function exitQuiz() {
  // You can perform any necessary actions here before exiting
  window.close(); // This will close the current window/tab
}

// Add event listeners to the header links
var backLink = document.getElementById("backLink");
var exitLink = document.getElementById("exitLink");

backLink.addEventListener("click", goToLandingPage);
exitLink.addEventListener("click", exitQuiz);
