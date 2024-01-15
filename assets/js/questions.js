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
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["<scripting>", "<script>", "<js>", "<javascript>"],
        correctAnswer: "<script>"
      },
      {
        question: "How to write an IF statement in JavaScript?",
        options: ["if i==5 then", "if i=5", "if i=5 then", "if(i==5)"],
        correctAnswer: "if(i==5)"
      },
      {
        question: "How does a FOR loop start?;",
        options: ["for(i=0; i<=5", "for(i<=5; i++", "for(i=0; i<=5; i++)", "for i=1 to 5"],
        correctAnswer: "for(i=0; i<=5; i++)"
      },
      {
        question: "How do you round the number 7.25, to the nearest integer?",
        options: ["round(7.25)", "Math.rnd(7.25)", "rnd(7.25)", "Math.round(7.25)"],
        correctAnswer: "Math.round(7.25)"
      },
      {
        question: "How do you find the number with the highest value of x and y?",
        options: ["String", "Boolean", "Number", "Float"],
        correctAnswer: "Float"
      },
      {
        question: "What is the output of the following code: console.log(2 + '2');",
        options: ["4", "22", "NaN", "TypeError"],
        correctAnswer: "22"
      },
      {
        question: "last ---What is the output of the following code: console.log(2 + '2');",
        options: ["4", "22", "NaN", "TypeError"],
        correctAnswer: "22"
      }
   
  ];
  

//use nested map method to create new array with ANSWER OPTIONS and ID
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
  






