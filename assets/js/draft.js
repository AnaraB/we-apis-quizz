
//index.html  CODING QUIZ



// start button triggers both timer function and quizzQuestions function 

//click "start button" TIMER STARTS countdown 75 sec, page reveals first question  instantly. 
//one question and 4 possible answers - selected button has hoover effect
// if selected answer is right/wrong the - WRONG or CORRECT - word is displayed at the bottom 
//play sound if correct/wrong when button clicked submit 
// var correctSound = new Audio("starter/assets/sfx/correct.wav")
// audio.play()
// var incorrectSound = new Audio("starter/assets/sfx/incorrect.wav")
// audio.play()
    // first grab all elements with answer buttons loop through and add eventListener "click"
    // for ( i = 0; I <numberOfAnswerButtons; i ++){
    //     document.quesrySelectorAll(".answerBtn")[i].addEventListener("click", function(){
    //         console.log(this);
    //         this.style.color = "white"  // or hoover effect       
            //  create loop   if correct play correctSound else play incorrect
            // create condition if answer is wrong take away 10sec from the timer.
    //     })
    // }
    // 


//next question diplayed automatically

// when all questions have been answered  ALL DONE! message is displayed and
    // message with the  final score {studentScore} displayed on next line 
    // input form text to type student initials and sumbit button.
    // When submit is clicked redirect to highscore.html page

//line 8 in highscores.html, under title create dataset visible line with  student's quizz results with initials and scores. 
// #clear CLEAR HIGHSCORE BUTTON hides the line with student results 
// GO BACK BUTTTON navigates to index.html page to start quizz again

//manipulate stile in js
//document.querySelector("button").classList.add("invisilbe"); write in css .invisible { diplay: hidden;}
//document.querySelector("button").classList.remove("invisilbe");
// or use the same button method classList.toggle("invisible") it combines add and remove and toggles between two


