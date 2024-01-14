const timerTracker = document.querySelector(".timer");
const startScreen = document.querySelector("#start-screen");
const start = document.querySelector("#start");
const questionsDiv = document.querySelector("#questions");
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
let quizFinished = false;
let wrongAnswer = false;

let optionsIndexNumber = 0;

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
  timerCount = 5;
  
  renderQuestions()

  startTimer()
}



// The startTimer function starts and stops the timer and triggers quizIsOver()

function startTimer() {
  // Sets timer
  timer = setInterval(function() {
    timerCount--;
    timerTracker.textContent = `Time: ${timerCount}`;
    if (timerCount>=0) {
      // if selected answer is incorrect take away 10 sec from the timer
      if (wrongAnswer){
       timerCount-10;
      }
      //test if conditions are met
      if(quizFinished || timerCount === 0){
        clearInterval(timer);
        hideDiv(questionsDiv);
        showDiv(endScreen);
     
        //and pass function scores() and dislay endScreen div 
      }
    }
  }, 1000);
}


// loop through array to display one question at a time 
let questionsNumber = 10;


function renderQuestions(){

  for(let i = 0; i < javascriptQuiz.length; i++) {
    var currentQuestion = javascriptQuiz[i].question;
    questionTitle.textContent = currentQuestion;
    //create btn and append it to each answer option
     // Select the options container
     const optionsContainer = document.querySelector("#options");
     // Clear any existing options
     optionsContainer.innerHTML = "";
 /// loop answer options
    for (let j = 0; j < Math.min(4, mappedQuizAnswers[i].options.length); j++) {
      const questionOptions = mappedQuizAnswers[i].options;
      // for loop to append button to each answer option
          const optionBtn = document.createElement("button");
          optionBtn.value = questionOptions[j].id; 
          var optionNumber = optionBtn.value;
          var optionName  =questionOptions[j].text;
          optionBtn.textContent = optionNumber 
          optionBtn.textContent = `${optionNumber}: ${optionName}`;
        
          optionsContainer.appendChild(optionBtn);    

  }

  }
  
}

//function to     
    // first grab all elements with answer buttons loop through and add eventListener "click"
  //   for ( i = 0; i < questionOptions; i ++){
  //     optionBtn.querySelectorAll("button")[i].addEventListener("click", function(){
  //         console.log(this);     
  //         // create loop   if correct play correctSound else play incorrect
  //         // create condition if answer is wrong take away 10sec from the timer.
  //     })
  // }

//play sound if correct/wrong when button clicked submit 
// var correctSound = new Audio("starter/assets/sfx/correct.wav")
// audio.play()
// var incorrectSound = new Audio("starter/assets/sfx/incorrect.wav")
// audio.play()
//feedback diplayes coorect or wrong message
//display next question 



//------------------how to render one question after another logic -------//


// event click, with sound (correct or Incorrect) when answer is chosen it triggers toggleDivBlock to display feedback div visible



// when all questions have been answered  ALL DONE! message is displayed and
    // message with the  final score {studentScore} displayed on next line 
    // input form text to type student initials and sumbit button.
    // When submit is clicked redirect to highscore.html page

//-------------what we reneder on higscore.html page-----------------------//
//line 8 in highscores.html, under title create dataset visible line with  student's quizz results with initials and scores. 
// #clear CLEAR HIGHSCORE BUTTON hides the line with student results 
// GO BACK BUTTTON navigates to index.html page to start quizz again


