const timerTracker = document.querySelector(".timer");
const startScreen = document.querySelector("#start-screen");
const start = document.querySelector("#start");
const questionsDiv = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const codeExample = document.querySelector("#codeExample");
const answerChoices = document.querySelector(".choices");
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const initials = document.querySelector("#initials");
const submitButton = document.querySelector("#submit");
const feedback = document.querySelector("#feedback");

let timer;
let timerCount;
let quizFinished = false;
let userScore = 0;



//create init function, it's called when index.html page loads. may be it should call other functions?


// add event listener when button start is clicked 
var startBtn = document.getElementById("start");
startBtn.addEventListener("click", function(){
  hideDiv(startScreen);
  showDiv(questionsDiv);
  startQuiz();

})

//--------------Two functions that triggers div blocks visibility---------------//

    function showDiv(divId){
      divId.classList.remove('hide');
      divId.classList.add('show');

    }

    function hideDiv(divId){
      divId.classList.add('hide');
      divId.classList.remove('show');

    }
//------------------------------------------------------------------------//

  
// The startQuiz function is called when the start button is clicked
function startQuiz() {
  quizFinished = false;
  timerCount = 75;
  renderQuestion()
  startTimer()
}



// The startTimer function starts and stops the timer and triggers quizIsOver()

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerTracker.textContent = `Time: ${timerCount}`;
    if (timerCount>=0) {
      //test if conditions are met
      if(quizFinished || timerCount <= 0){
        clearInterval(timer);
        hideDiv(questionsDiv);
        showDiv(endScreen);
        showFinalScore();
        hideDiv(feedback);
      }
    }
  }, 1000);
}


// loop through quiz array to display one question at a time 

//Initialize a variable to keep track of the current question index.
let currentQuestionIndex = 0;

const optionsContainer = document.querySelector("#options");

function renderQuestion(){
  const question = javascriptQuiz[currentQuestionIndex];

  questionTitle.innerHTML = question.question;

   // Clear any existing options
   optionsContainer.innerHTML = "";


      // Limit the loop to 4 options
      for (let j = 0; j < Math.min(4, mappedQuizAnswers[currentQuestionIndex].options.length); j++) {
        const optionBtn = document.createElement("button");
        const answerID = mappedQuizAnswers[currentQuestionIndex].options[j].id;
        const answerText = mappedQuizAnswers[currentQuestionIndex].options[j].text;
        optionBtn.textContent = `${answerID}. ${answerText}`
        optionBtn.addEventListener('click', checkAnswer);
        optionsContainer.appendChild(optionBtn);
  
    }

 
} 

var correctSound = new Audio("./assets/sfx/correct.wav");
var wrongSound =  new Audio("./assets/sfx/incorrect.wav");

function checkAnswer(event) {
  
  let userAnswer = event.target.textContent;
  const question = javascriptQuiz[currentQuestionIndex];
  //check if answer correct 
  if (userAnswer === question.correctAnswer) {
    showDiv(feedback);
    feedback.textContent = "Correct!";
    correctSound.play();
    userScore ++;
    console.log(userScore);
    } else {
      //incorrect answer logic
    showDiv(feedback);
    feedback.textContent = "Wrong!";
    wrongSound.play();
    timerCount -= 10;
    renderQuestion();     
  }

//Proceed to the next question or end the quiz
  currentQuestionIndex++;
    if(currentQuestionIndex < javascriptQuiz.length && timerCount > 0) {
    renderQuestion();   
  
    } else {  
      quizFinished = true;
      console.log("quiz finished");
  } 
 
  
}



const showFinalScore = function () {
 finalScore.textContent = `${userScore}`;
}
 


    // input form text to type student initials and sumbit button.
    //store all local storage
    // When submit is clicked redirect to highscore.html page

//-------------what we reneder on higscore.html page-----------------------//
//line 8 in highscores.html, under title create dataset visible line with  student's quizz results with initials and scores. 
// #clear CLEAR HIGHSCORE BUTTON hides the line with student results 
// GO BACK BUTTTON navigates to index.html page to start quizz again