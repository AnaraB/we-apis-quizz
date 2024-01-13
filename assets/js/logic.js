const timerTracker = document.querySelector(".timer");
const startScreen = document.querySelector("#start-screen");
const start = document.querySelector("#start");
const question = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const codeExample = document.querySelector("#codeExample");
const options = document.querySelector("#options");
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const initials = document.querySelector("#initials");
const submitButton = document.querySelector("#submit");
const feedback = document.querySelector("#feedback");

let timer;
let timerCount;
let currentQuestion = '';
let optionsIndexNumber = 0;

//create init function, it's called when index.html page loads. It call another functions..
//create function that will hold 3 divs (start-screen, questions, end-screen) with add or remove classes 
//each div call its function when needed: startQuiz, renderQuestions, quizIsOver
  
//create func startTimer for timer countdown
//quizIsOver function  is called when timer reaches ==0 OR all questions has been answered

// The startQuiz function is called when the start button is clicked
function startQuiz() {
  timerCount = 75;
  
  renderQuestions()  // create this function   
  //startTimer()
}

startQuiz();

// The startTimer function starts and stops the timer and triggers quizIsOver()
// if selected answer is incorrect take away 10 sec from the timer
function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerTracker.textContent = timerCount;
    if (timerCount === 0) {
      // Tests if timesIsOver condition is met OR lastQuestion has been answered
      // if (renderQuestion) {
      //   // Clears interval and stops timer
      //   clearInterval(timer);
      //   timeIsOver()
      // }
      //alert("time is over");
    }
    // Tests if time has run out
   
  }, 1000);
}

function renderQuestions(){
  
  for(let i=0; i < javascriptQuiz.length; i++) {
    currentQuestion = javascriptQuiz[i];
    console.log(`Question 1 ${currentQuestion.question};`)
  }

}




