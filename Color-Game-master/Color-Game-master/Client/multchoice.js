(function() {
    
var myQuestions = [
    {
        question: "Which language is most know for styling our websites?",
        answers: {
            a: "JavaScript",
            b: "CSS",
            c: "AngularJS"
        },
        correctAnswer: "b"
    },
    {
        question: "What does OOP stand for?",
        answers: {
            a: "Object-oriented Programming",
            b: "Online Operating Procedure",
            c: "Overly-optimistic Programmer"
        },
        correctAnswer: "a"
    },
    {
        question: "How is an array composed?",
        answers: {
            a: "Curly brackets {}",
            b: "Parentheses ()",
            c: "Square brackets []"
        },
        correctAnswer: "c"
    },
    {
        question: "What best describes the boolean datatype?",
        answers: {
            a: "True/False",
            b: "Positive/Negative",
            c: "Up/Down/All-around"
        },
        correctAnswer: "a"
    },
    {
        question: "What is the PUT method synonymous with?",
        answers: {
            a: "Creating",
            b: "Updating",
            c: "Deleting"
        },
        correctAnswer: "b"
    },
    {
        question: "Where is Node.js utilized?",
        answers: {
            a: "Backend",
            b: "Frontend",
            c: "MySQL"
        },
        correctAnswer: "a"
    },
    {
        question: "What does the p element represent?",
        answers: {
            a: "Python",
            b: "Paragraph",
            c: "Parser"
        },
        correctAnswer: "b"
    },
    {
        question: "Why do we use console.log?",
        answers: {
            a: "Debugging purposes",
            b: "Because it's so much fun",
            c: "To add functionality"
        },
        correctAnswer: "a"
    },
    {
        question: "What does it mean when we receive a 500 HTTP Status Code?",
        answers: {
            a: "OK",
            b: "Unauthorized",
            c: "Internal Server Error"
        },
        correctAnswer: "c"
    },
    {
        question: "How do we incorporate our CSS styling into our HTML file?",
        answers: {
            a: "By adding a span element within the body",
            b: "By adding a link element within the head",
            c: "By adding a script element with a paragraph"
        },
        correctAnswer: "b"
    }
];
function buildQuiz() {
    var output = [];
    myQuestions.forEach((currentQuestion, questionNumber) => {
      var answers = [];
      for (letter in currentQuestion.answers) {
        answers.push(
          `<label>
             <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
           </label>`
        );
      }

      output.push(
        `<div class="slide">
           <div class="question"> ${currentQuestion.question} </div>
           <div class="answers"> ${answers.join("")} </div>
         </div>`
      );
    });

    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    var answerContainers = quizContainer.querySelectorAll(".answers");
    var numCorrect = 0;
    myQuestions.forEach((currentQuestion, questionNumber) => {
      var answerContainer = answerContainers[questionNumber];
      var selector = `input[name=question${questionNumber}]:checked`;
      var userAnswer = (answerContainer.querySelector(selector) || {}).value;

      if (userAnswer === currentQuestion.correctAnswer) {
        numCorrect++;

        answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        answerContainers[questionNumber].style.color = "red";
      }
    });

    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove("active-slide");
    slides[n].classList.add("active-slide");
    currentSlide = n;
    
    if (currentSlide === 0) {
      previousButton.style.display = "none";
    } else {
      previousButton.style.display = "inline-block";
    }
    
    if (currentSlide === slides.length - 1) {
      nextButton.style.display = "none";
      submitButton.style.display = "inline-block";
    } else {
      nextButton.style.display = "inline-block";
      submitButton.style.display = "none";
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  var quizContainer = document.getElementById("quiz");
  var resultsContainer = document.getElementById("results");
  var submitButton = document.getElementById("submit");

  buildQuiz();

  var previousButton = document.getElementById("previous");
  var nextButton = document.getElementById("next");
  var slides = document.querySelectorAll(".slide");
  var currentSlide = 0;

  showSlide(0);

  submitButton.addEventListener("click", showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();