/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        //answerContainers[questionNumber].style.color = "lightgreen";
      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
 

/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////






/////////////// Write the MCQ below in the exactly same described format ///////////////


  const myQuestions = [
     {
            question: "1. The bright field imaging contrast in TEM can NOT be increased by enhancing:", ///// Write the question inside double quotes
            answers: {
                a: "mass-thickness difference of existing constituents", ///// Write the option 1 inside double quotes
                b: "selective diffraction of existing constituents", ///// Write the option 1 inside double quotes
                c: "absorption between phase of existing constituents", ///// Write the option 1 inside double quotes
                d: "accelerating voltage for imaging of existing constituents", ///// Write the option 1 inside double quotes
            },
            correctAnswer: "d" ///// Write the correct option inside double quotes
        },

        {
            question: "2. Bright field image is obtained when ________________ beam is captured to form image after it transmits through the sample", ///// Write the question inside double quotes
            answers: {
                a: "Direct beam", ///// Write the option 1 inside double quotes
                b: "Diffracted beam", ///// Write the option 1 inside double quotes
                c: "Inelastically scattered beam", ///// Write the option 1 inside double quotes
                d: "None of the above", ///// Write the option 1 inside double quotes

            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        }, ///// To add more questions, copy the section below 

        {
            question: "3. Dark field image is obtained when ________________ beam is captured to form image after it transmits through the sample", ///// Write the question inside double quotes
            answers: {
                a: "Direct beam", ///// Write the option 1 inside double quotes
                b: "Diffracted beam", ///// Write the option 1 inside double quotes
                c: "Inelastically scattered beam", ///// Write the option 1 inside double quotes
                d: "None of the above", ///// Write the option 1 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },
        
        {
            question: "4. The following TEM micrograph is _________________ image.<br><img src='images/1.jpg'>", ///// Write the question inside double quotes
            answers: {
                a: "Dark field image", ///// Write the option 1 inside double quotes
                b: "bright field image", ///// Write the option 1 inside double quotes
               
            },
            correctAnswer: "a" ///// Write the correct option inside double quotes
        },
        {
            question: "5. The following TEM micrograph is _________________ image.<br><img src='images/2.jpg'>", ///// Write the question inside double quotes
            answers: {
                a: "Dark field image", ///// Write the option 1 inside double quotes
                b: "bright field image", ///// Write the option 1 inside double quotes
            },
            correctAnswer: "b" ///// Write the correct option inside double quotes
        },

  ];




/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the below code ////////////////////////

/////////////////////////////////////////////////////////////////////////////


  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();


/////////////////////////////////////////////////////////////////////////////

/////////////////////// Do not modify the above code ////////////////////////

/////////////////////////////////////////////////////////////////////////////
