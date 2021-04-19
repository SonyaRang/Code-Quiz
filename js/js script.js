var quizContainer = document.getElementById('Quiz');
var resultsContainer = document.getElementById('Results');
var submitButton = document.getElementById('Submit');
var startQuiz = document.getElementById('startQuiz');
var loopQuestions = 0;
var score = 0;

//array with all questions
var quizQuestions = 
[
{
  question: "Commonly used data types DO NOT include:",
  choiceA: "strings",
  choiceB: "booleans",
  choiceC: "alerts",
  choiceD: "numbers",
  correctAnswer: "alerts"
},
{
  question: "The condition in an if / else statement is enclosed with __.",
  choiceA: "quotes",
  choiceB: "curly brackets",
  choiceC: "parenthesis",
  choiceD: "square brackets",
  correctAnswer: "parenthesis"
},
{
  question: "String values must be enclosed within __ when being assigned to variables",
  choiceA: "commas",
  choiceB: "curly brackets",
  choiceC: "quotes",
  choiceD: "parenthesis",
  correctAnswer: "quotes"
},
{
  question: "Arrays in JavaScript can be used to store __.",
  choiceA: "numbers and strings",
  choiceB: "other arrays",
  choiceC: "booleans",
  choiceD: "all of the above",
  correctAnswer: "all of the above"
},
{
  question: "A very useful toll used during development and debugging for printing content to the debugger is:",
  choiceA: "JavaScript",
  choiceB: "Bterminal/bash",
  choiceC: "for loops",
  choiceD: "console.log",
  correctAnswer: "console log"
}
];

// add event listensers
startQuiz.addEventListener('click', startTimedQuiz);
startQuiz.addEventListener('click', beginTimer);

// timer
function beginTimer(){
    let timeLeft = 120
    var countdownTimer = document.getElementById('timeLeft');
    setInterval(function() {
      if(timeLeft <= 0) {
        clearInterval(timeLeft = 0)
      }
      countdownTimer.innerHTML = timeLeft
      timeLeft -=1
    }, 1000)
  };

// start quiz on click
function startTimedQuiz() {
  var instructions = document.getElementById('Prompt');
  instructions.remove();
  displayQuestions();
};

//display questions
function displayQuestions() 
{
var quizQuestions = document.createElement('div');
quizQuestions.className= "questionCSS";
quizQuestions.textContent= quizQuestions[loopQuestions].question
var Houseq = document.getElementById('Houseq');
Houseq.innerHTML = '';
Houseq.appendChild(quizQuestions);


}