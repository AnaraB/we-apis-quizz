import {setUserScoreAndInitials} from './logic.js';
import {submitInitials} from './logic.js';

const wrapper = document.querySelector(".wrapper");
const highscores = document.querySelector("#highscores");
const clearButton = document.querySelector("#clear");
// Get the submit button by its ID
const submitInitials = document.querySelector("#submit");


// create click input submit event

submitInitials.addEventListener('click', function(event) {
  event.preventDefault();

 //call this function to store user information in local storage
  setUserScoreAndInitials();

 
})
 

// functions to get information out from local storage and display on page 
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




// call getScores and getInitials to display on page 
highscores.innerHTML = "diplay final results here";

clearButton.addEventListener('click', function(){
  highscores.innerHTML = "";
})