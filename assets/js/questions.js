const javascriptQuiz = [
    {
      question: "What is the correct way to declare a variable in JavaScript?",
      options: ["var x;", "variable x;", "x = 5;", "int x;"],
      correctAnswer: "var x;"
    },
    {
      question: "Which of the following is not a JavaScript data type?",
      options: ["String", "Boolean", "Number", "Float"],
      correctAnswer: "Float"
    },
    {
      question: "What is the output of the following code: console.log(2 + '2');",
      options: ["4", "22", "NaN", "TypeError"],
      correctAnswer: "22"
    },
    {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["var x;", "variable x;", "x = 5;", "int x;"],
        correctAnswer: "var x;"
      },
      {
        question: "Which of the following is not a JavaScript data type?",
        options: ["String", "Boolean", "Number", "Float"],
        correctAnswer: "Float"
      },
      {
        question: "What is the output of the following code: console.log(2 + '2');",
        options: ["4", "22", "NaN", "TypeError"],
        correctAnswer: "22"
      },
      {
        question: "What is the correct way to declare a variable in JavaScript?",
        options: ["var x;", "variable x;", "x = 5;", "int x;"],
        correctAnswer: "var x;"
      },
      {
        question: "Which of the following is not a JavaScript data type?",
        options: ["String", "Boolean", "Number", "Float"],
        correctAnswer: "Float"
      },
      {
        question: "What is the output of the following code: console.log(2 + '2');",
        options: ["4", "22", "NaN", "TypeError"],
        correctAnswer: "22"
      },
      {
        question: "What is the output of the following code: console.log(2 + '2');",
        options: ["4", "22", "NaN", "TypeError"],
        correctAnswer: "22"
      }
   
  ];




// // Use map to create new array with QUESTIONS and CODE examples
// const mappedQuestionsAndCodes = javascriptQuiz.map((quizItem, index) => {
//     // Queston and code example 
//     const modifiedItem = {
//     ...quizItem,
//     question: `Question ${index + 1}: ${quizItem.question}`,
//     // Add more modifications as needed
//     code: `${index + 1} Code: ${quizItem.code}`
//     };
//     return modifiedItem;
// });

//use nested map method to create new array with ANSWER OPTIONS
const mappedQuizAnswers = javascriptQuiz.map((question) => {
    const mappedOptions = question.options.map((option, index) => {
        return {
            id: index + 1,
            text: option
        };
    })
return {
    options: mappedOptions
};
});
  
//use nested map method to create new array with CORRECT ANSWERS
const mappedCorrectsAnswers= javascriptQuiz.map((question) => {
return question.correctAnswer

});



//console.log(mappedQuestionsAndCodes);
console.log(mappedQuizAnswers);
console.log(mappedCorrectsAnswers);


// function renderQuestions(){
//     const questionTitle = document.querySelector("#question-title");

//     for(let i = 0; i < mappedQuestionsAndCodes.length; i++) {
//       currentQuestion = mappedQuestionsAndCodes[i].question;
//       questionCodeDemo = mappedQuestionsAndCodes[i].code;
//       questionTitle.textContent = currentQuestion;
//       codeExample.textContent = questionCodeDemo;
      
// }
// }

// renderQuestions()


// function renderPossibleAnswers(){
//     const options = document.querySelector("#options");
  
//     for (let i = 0; i < mappedQuizAnswers.length; i++){
//       //append buttons to options 
//       var optionBtn = document.createElement("button");
//       options.appendChild(optionBtn);
//       var optionValue = mappedQuizAnswers[i].options;
//       optionBtn.textContent = optionValue;
    
//     }
  
//   }
// renderPossibleAnswers();

// function renderPossibleAnswers() {
//     const options = document.querySelector("#options");

//     for (let i = 0; i < mappedQuizAnswers.length; i++) {
//         const questionOptions = mappedQuizAnswers[i].options;
//         // for loop to append button to each answer option
//         for (let j = 0; j < questionOptions.length; j++) {
//             const optionBtn = document.createElement("button");
//             optionBtn.textContent = questionOptions[j].text; // Accessing the text property of the option
//             optionBtn.value = questionOptions[j].id; // Optionally, set a unique value for each button
//             options.appendChild(optionBtn);
//         }
//     }
// }





