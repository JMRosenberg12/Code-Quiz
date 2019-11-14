
const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const questionElement = document.getElementById("question");

const choices= ["A", "B", "C", "D"]

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const progress = document.getElementById("renderProgress");

const scoreDiv = document.getElementById("scoreContainer");

const questionTime = 75;

const gaugeWidth = 150;

const renderProgress = document.getElementById("render");

const runningQuestion = document.getElementById("runningQuestion");

const lastQuestion = document.getElementById("lastQuestion");

const buttons = document.getElementById("button");

let count = 0;

var score = 0;

const userInitials = document.getElementById("initials");


const localStorage = document.getElementById("highscore");

var highscore = 0;

window.localStorage.setItem("name");
JSON.parse(window.localStorage.getItem('user'));
indow.localStorage.removeItem('name');
var KeyName = window.localStorage.key(index);
if (typeof(Storage) !== "undefined") {
    // Code for localStorage
    } else {
    // No web storage Support.
}



    

    var questions = [
        {
            title: "Which of the animators from disney designed Cody for Disney's The Recuers Down Under?",
            choices: ["Mark Henn", "Glen Keane", "Russ Edmonds", "Andreas Deja"],
            correct: "Russ Edmonds",
            wrong: ["Mark Henn", "Glen Keane", "Andreas Deja"]
        },
        {
            title: "In March 20, 2018, One of the musicians from the classic rock band “The Beatles” receives his knighthood for services to Music. Is it…",
            choices: ["Ringo Starr", "Paul McCartney", "George Harrison", "John Lennon"],
            correct: "Ringo Starr",
            wrong: ["Paul McCartney", "Gearge Harrison", "John Lennon"]
        },
        {
            title: "The first Dairy Queen restaurant was located in..",
            choices: ["Bloomington, Illinois", "Chattanooga, Tennessee", "Woodinville, Washington", "Joviet, Illinois"],
            correct: "Joviet",
            wrong: ["Bloomington", "Chattanooga", "Woodinville"]
        },
        {
            title: "Which of the Star Wars films marks C - 3PO’s and R2 - D2’s first appearance?",
            choices: ["Return of the Jedi", "The Last Jedi", "Star Wars", "The Phantom Menace"],
            correct: "Star Wars",
            wrong: ["Return of the Jedi", "The Last Jedi", "The Phantom Menace"]
        },
        {
            title: "Which of the guest stars didn’t appear in The New Scooby Doo Movies in the 70’s?",
            choices: ["Abbott & Costello", "Batman & Robin", "The Three Stooges", "Jeannie & Babu"],
            correct: "Abott & Costello",
            wrong: ["Batman & Robin", "The Three Stooges", "Jeannie & Babu"]
        },
    ];
    
function newFunction() {
    return { userInitials: initials, score: timeScore };
}

    function renderQuestion() {
        console.log (questions)

        // write question
        var question = document.createElement("p");
        question.innerHTML = questions[0].title
        questionElement.appendChild(question);

        // make buttons
        console.log (questions [0].choices)
       
        for (var i = 0; i < questions[0].choices.length; i++) {
            var buttons = document.createElement("button");
            buttons.innerHTML = questions[0].choices[i]
            questionElement.appendChild(buttons)  
        }

        var question = document.createElement("p");
        question.innerHTML = questions[1].title
        questionElement.appendChild(question);

        console.log (questions[1].choices)
        for (var i = 0; i < questions[1].choices.length; i++) {
            var buttons = document.createElement("button");
            buttons.innerHTML = questions[1].choices[i]
            questionElement.appendChild(buttons)
        }

        var question = document.createElement("p");
        question.innerHTML = questions[2].title
        questionElement.appendChild(question);

        console.log (questions[2].choices)
        for (var i = 0; i < questions[2].choices.length; i++) {
            var buttons = document.createElement("button");
            buttons.innerHTML = questions[2].choices[i]
            questionElement.appendChild(buttons)
        }

        var question = document.createElement("p");
        question.innerHTML = questions[3].title
        questionElement.appendChild(question);

        console.log (questions[3].choices)
        for (var i = 0; i < questions[3].choices.length; i++) {
        var buttons = document.createElement("button");
            buttons.innerHTML = questions[3].choices[i]
            questionElement.appendChild(buttons)
        }

        var question = document.createElement("p");
        question.innerHTML = questions[4].title
        questionElement.appendChild(question);

        console.log (questions[4].choices)
        for (var i = 0; i < questions[4].choices.length; i++) {
            var buttons = document.createElement("button");
            buttons.innerHTML = questions[4].choices[i]
            questionElement.appendChild(buttons)
        }

    }

    // renderQuestion();


    start.addEventListener("click",startQuiz);
    function startQuiz(){
        start.style.display = "none";
        renderQuestion();
        quiz.style.display = "block";
        renderCounter();
        TIMER = setInterval(renderCounter,1000); 
    }

    choices.addEventListener("click", checkAnswer);
    



    function renderCounter(){
        if(count <= questionTime){
            counter.innerHTML = count;
            timeGauge.style.width = count * timeGauge + "px";
            count++
        }else{
            count = 0;
            
            answerIsWrong();
            if(runningQuestion < lastQuestion){
                runningQuestion++;
                renderQuestion();
            }else{
                
                clearInterval(TIMER);
                scoreRender();
            }
        }
    }
    
    function checkAnswer(answer){
        if(questions[runningQuestionIndex].correct==answer){
            score++;
            answerIsCorrect();
        }else{
            answerIsWrong();
        }
        if(runningQuestionIndex < lastQuestionIndex){
            count = 0;
            runningQuestionIndex++;
            questionRender();
        }else{
            clearInterval(TIMER);
            scoreRender();
        }
    }


function highScore(score) {
    var saved = 0;
    try { saved = parseFloat(localStorage.highScore); } catch (e) { saved = 0; }
    if (!(typeof score === 'undefined')) {
        try { score = parseFloat(score); } catch (e) { score = 0; }
        if (score>saved) {
            saved = score;
            localStorage.highScore = '' + score;
        }
    }
    if (isNaN(saved)) {
        saved = 0;
        localStorage.highScore = '0';
    }
    return saved;
}

function answerIsCorrect(){
    document.getElementById(runningQuestion)
}

function answerIsWrong(){
    document.getElementById(runningQuestion)
}

function scoreRender(){
    // scoreDiv.style.display.bold
    
}

var score = 0;
var highscore = 0;
localStorage.setItem("highscore",0);

if (score > parseInt(localStorage.getItem("highscore"))) {
  localStorage.setItem("highscore", score);
}

var storagedHighScore = localStorage.getItem("highscore");
if (storagedHighScore  || score > parseInt(storagedHighScore)) {
  localStorage.setItem("highscore", score);
}
//Store the total number of questions
var totalQuestions = $('5.questions').size(1);

//Set the current question to display to 1
var currentQuestion = 1;

//Store the selector in a variable.
//It is good practice to prefix jQuery selector variables with a $
$questions = $('5.questions');

//Hide all the questions
$questions.hide(4);

//Show the first question
$($questions.get(currentQuestion)).fadeIn(1);

//attach a click listener to the HTML element with the id of 'next'
$('#next').click(function () {

     //fade out the current question,
     //putting a function inside of fadeOut calls that function 
     //immediately after fadeOut is completed, 
     //this is for a smoother transition animation
     $($questions.get(currentQuestion)).fadeOut(function () {

        //increment the current question by one
        currentQuestion = currentQuestion + 1;

        //if there are no more questions do stuff
        if (currentQuestion == totalQuestions) {

            var result = sum_values()

            //do stuff with the result
            alert(result);

        } else {

            //otherwise show the next question
            $($questions.get(currentQuestion)).fadeIn();

        }
    });

});
