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
      question: "Question 1: What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Madrid"],
      answer: 0
    },
    {
      question: "Question 2: Which planet is known as the Red Planet?",
      choices: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: 1
    },
    // Add more questions here...
  ];
  
  var score = 0; // Initial score
  var currentQuestionIndex = 0; // Current question index
  
  // Function to display a question
  function displayQuestion() {
    var questionContainer = document.getElementById("questionContainer");
    var questionElement = document.createElement("div");
    questionElement.classList.add("question");
  
    var questionText = document.createElement("h2");
    questionText.textContent = questions[currentQuestionIndex].question;
    questionElement.appendChild(questionText);
  
O[O    var choicesElement = document.createElement("div");
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
  
    var scoreElement = document.createElement("p");
    scoreElement.textContent = "Your final score is: " + score;
  
    resultsElement.appendChild(scoreElement);
    questionContainer.appendChild(resultsElement);
  }
  
  // Initialize the quiz
  displayQuestion();

  // ...Previous code...

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
