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
let wrongAnswer = false;

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
      if(quizFinished || timerCount === 0){
        clearInterval(timer);
        hideDiv(questionsDiv);
        showDiv(endScreen);
        showFinalScore();
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

  questionsDiv.innerHTML = question.question;

  // Clear any existing options
  //optionsContainer.innerHTML = "";
 // loop and display option answers and add button element to each answer
  question.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option');
    button.addEventListener('click', () => checkAnswer(index));
    optionsContainer.appendChild(button);
    
  });
 
} 


function checkAnswer(event) {
  let userAnswer = event.target;
  const question = javascriptQuiz[currentQuestionIndex];
  //check if answer correct play Correct sound and display message
  if (userAnswer === question.correctAnswer) {
     showDiv(feedback);
     feedback.textContent = "Correct!"
     var correctSound = new Audio("starter/assets/sfx/correct.wav")
     correctSound.play();
     
     currentQuestionIndex++;
     userScore ++;
     console.log(userScore);
     // when quiz is over
      if(currentQuestionIndex === javascriptQuiz.length  || timerCount === 0) {
        //chnage boolean quizFinished to true 
        quizFinished = true;
      } else {  // else there are more questions 
        renderQuestion();
    } 
  } else {
  //if answer iz incorrect play wrong sound and display message
      showDiv(feedback);
      feedback.textContent = "Wrong!"
      var wrongSound =  new Audio("starter/assets/sfx/incorrect.wav")
      wrongSound.play();
      timeLeft -= 10;
      renderQuestion();
  }
}


const showFinalScore = function () {
 finalScore.textContent = `${userScore}.`;
}
 




    // input form text to type student initials and sumbit button.
    // When submit is clicked redirect to highscore.html page

//-------------what we reneder on higscore.html page-----------------------//
//line 8 in highscores.html, under title create dataset visible line with  student's quizz results with initials and scores. 
// #clear CLEAR HIGHSCORE BUTTON hides the line with student results 
// GO BACK BUTTTON navigates to index.html page to start quizz again