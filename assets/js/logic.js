const timerTracker = document.querySelector(".timer");
const startScreen = document.querySelector("#start-screen");
const start = document.querySelector("#start");
const questionsDiv = document.querySelector("#questions");
const questionTitle = document.querySelector("#question-title");
const codeExample = document.querySelector("#codeExample");
const answerChoices = document.querySelector(".choices");
const endScreen = document.querySelector("#end-screen");
const finalScore = document.querySelector("#final-score");
const submitInitials = document.querySelector("#submit");
const feedback = document.querySelector("#feedback");

let timer;
let timerCount;
let quizFinished = false;
let userScore = 0;


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
      if(timerCount <= 0){
        //clear timer 
        timerTracker.textContent = "";
        clearInterval(timer);
        hideDiv(questionsDiv);
        showDiv(endScreen);
        getScores();
        hideDiv(feedback);
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
        
        optionBtn.textContent = `${answerID}: ${answerText}`
        optionBtn.addEventListener('click', checkAnswer);
        optionsContainer.appendChild(optionBtn);
    }
 
} 

var correctSound = new Audio("./assets/sfx/correct.wav");
var wrongSound =  new Audio("./assets/sfx/incorrect.wav");

function checkAnswer(event) {
 // clear feedback message doesn't work ((
  feedback.textContent = "";

  // Split user's answer to extract ID
  let userAnswer = event.target.textContent;
  let userAnswerID = userAnswer.split(':')[1].trim();

  const question = javascriptQuiz[currentQuestionIndex];
  //check if answer correct 
  if (userAnswerID === question.correctAnswer) {
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
 // render all questions, one at a time untill questions finished
  if (currentQuestionIndex < javascriptQuiz.length) {
    
      renderQuestion();
    }
  
// when time finished stop the quiz and show scores 
  if (timerCount <= 0){
      quizFinished = true;
      timerTracker.textContent = "";
      showDiv(endScreen);
      hideDiv(feedback);
      getScores();
    }
}


let userInitials = document.getElementById("initials");
let input = userInitials.value;

// Updates user initials and sets to client storage
function setUserScoreAndInitials() {

localStorage.setItem("userInitials", JSON.stringify(input));
console.log(input);
 localStorage.setItem("scores", JSON.stringify(userScore));
 
}

submitInitials.addEventListener('click', function(event) {
  event.preventDefault();
    // create user object from submission
    var user = {
      userInitials: input,
      scores: userScore     
    };

  if(user.userInitials === "") {
    alert("Please type your name and surname initials");
  } else {
    // When submit is clicked redirect to highscore.html page
    window.location.href = "highscores.html";
  }

  setUserScoreAndInitials();
 
})
 
// These 2 functions are used by init
function getScores() {
  // Get stored value from client storage, if it exists
  var storedScores = JSON.parse(localStorage.getItem("scores"));
  // If stored value doesn't exist, set scores to 0
  if (storedScores === null) {
    scores = 0;
  } else {
    // If a value is retrieved from client storage set the scores to that value
    scores = storedScores;
  }
  //Render win scores to page
  finalScore.textContent = `${userScore}`;
}

function getInitials() {

  var storedUserInitials = JSON.parse(localStorage.getItem("userInitials"));
  if (storedUserInitials === null) {
    userInitials = 0;
  } else {
    userInitials = storedUserInitials;
  }
  initials.textContent = storedUserInitials;
}

getInitials();
getScores();



