const quizData = [
  {
    question: "Where do you write JavaScript?",
    a: "in the JS file",
    b: "in the CSS file",
    c: "in the HTML file",
    d: "in the JSK file",
    correct: "a",
  },
  {
    question: "Where do you write JavaScript?",
    a: "in the JS file",
    b: "in the CSS file",
    c: "in the HTML file",
    d: "in the JSK file",
    correct: "a",
  },
  {
    question: "Where do you write JavaScript?",
    a: "in the JS file",
    b: "in the CSS file",
    c: "in the HTML file",
    d: "in the JSK file",
    correct: "a",
  },
  {
    question: "Where do you write JavaScript?",
    a: "in the JS file",
    b: "in the CSS file",
    c: "in the HTML file",
    d: "in the JSK file",
    correct: "a",
  },
  {
    question: "Where do you write JavaScript?",
    a: "in the JS file",
    b: "in the CSS file",
    c: "in the HTML file",
    d: "in the JSK file",
    correct: "a",
  },
];
const quiz = document.getElementById("Quiz");
const answerEl = document.querySelectorAll(".answer");
const questionEl = document.querySelector("#Question");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

let currentQuiz = 0;

let score = 0;


function deselectAnswers(){
    answerEl.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

loadQuiz();
function loadQuiz(){

    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


}


function getSelected(){
    let answer;
    answerEl.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });
    return answer;
}

const submitBtn = document.getElementById("Submit-btn");

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
     if (answer === quizData[currentQuiz].correct) {
        score++;
     }
     currentQuiz++;

     if (currentQuiz < quizData.length) {
        loadQuiz();
     } else {
        quiz.innerHTML = ` 
        <h1>You answered correctly ${score}/${quizData.length}
        questions</h1>
        <button class="btn green" onclick="location.reload()"> Try again
        </button>
         `;
     }
});
