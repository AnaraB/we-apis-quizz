const javascriptQuiz = [
  {
      question: "What will be the output of the following code?",
      code: `
          var x = 5;
          var y = "10";
          console.log(x + y);
      `,
      options: ["15", "510", "105", "Error"],
      correctAnswer: "510"
  },
  {
      question: "What does the following function output?",
      code: `
          function greet(name) {
              console.log("Hello, " + name);
          }
          greet("John");
      `,
      options: ["Hello, John", "Hello, undefined", "Error", "Hello, null"],
      correctAnswer: "Hello, John"
  },
  {
      question: "How many elements are in the 'fruits' array?",
      code: `
          var fruits = ["apple", "orange", "banana"];
          console.log(fruits.length);
      `,
      options: ["3", "4", "0", '["apple", "orange", "banana"]'],
      correctAnswer: "3"
  },
  {
      question: "What will be logged in the console?",
      code: `
          var num = 0;
          while (num < 5) {
              console.log(num);
              num++;
          }
      `,
      options: ["0 1 2 3 4", "1 2 3 4 5", "0 1 2 3", "Infinite loop"],
      correctAnswer: "0 1 2 3 4"
  },
  {
      question: "What will be the output of the following code?",
      code: `
          var x = 10;
          function foo() {
              var x = 5;
              console.log(x);
          }
          foo();
          console.log(x);
      `,
      options: ["10", "5 10", "5", "10 5"],
      correctAnswer: "5 10"
  },
  {
      question: "What will be the value of 'person.age'?",
      code: `
          var person = { name: "John", age: 25 };
          delete person.age;
          console.log(person.age);
      `,
      options: ["25", "undefined", "Error", "null"],
      correctAnswer: "undefined"
  },
  {
      question: "What is the result of 'num %= 4;'?",
      code: `
          var num = 15;
          num %= 4;
          console.log(num);
      `,
      options: ["3", "1", "0", "4"],
      correctAnswer: "3"
  },
  {
      question: "What is the output of the following code?",
      code: `
          function add(a, b) {
              return a + b;
          }
          var result = add(2, "3");
          console.log(result);
      `,
      options: ["5", "\"23\"", "23", "Error"],
      correctAnswer: "\"23\""
  },
  {
      question: "What is the total length of arr1 and arr2 combined?",
      code: `
          var arr1 = [1, 2, 3];
          var arr2 = arr1.slice();
          arr2.push(4);
          console.log(arr1.length + arr2.length);
      `,
      options: ["7", "6", "8", "4"],
      correctAnswer: "6"
  },
  {
      question: "What will be the output of the following code?",
      code: `
          var x = 5;
          if (x === "5") {
              console.log("Equal");
          } else {
              console.log("Not equal");
          }
      `,
      options: ["Equal", "Not equal", "Error", "undefined"],
      correctAnswer: "Not equal"
  }
];





//create function renderQuestions where you loop through the questions length and display first q with set of possible answers. 
