
const wrapper = document.querySelector(".wrapper");
const highscores = document.querySelector("#highscores");
const clearButton = document.querySelector("#clear");


// functions to get information out from local storage and display on page 
function getUsers() {
  // Get stored value from client storage, if it exists or get an empty array
  var storedScores = JSON.parse(localStorage.getItem("users")) || []
  
  displayUsers(storedScores);

}

//call function
getUsers();

//create function to display users results in a list, highest first
function displayUsers(storedScores){
    storedScores.sort((a, b) => {
      b.score - a.score;
    })
  storedScores.forEach(userScore => {
    var highscoreListItem = document.createElement('li');
    highscoreListItem.textContent = `${userScore.userInitials} -- ${userScore.score}`
    highscores.appendChild(highscoreListItem);


  

  });

}



// clear list of scores and user initials 
clearButton.addEventListener('click', function(){
  highscores.textContent = "";
})