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



// console.log(mappedQuizAnswers);
// console.log(mappedCorrectsAnswers);





