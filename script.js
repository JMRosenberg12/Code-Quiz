
const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const questionElement = document.getElementById("question");

const choices= ["A", "B", "C", "D"]

const counter = document.getElementById("counter");

const timeGauge = document.getElementById("timeGauge");

const progress = document.getElementById("renderProgress");

const scoreDiv = document.getElementById("scoreContainer");

const questionTime = 15;

const gaugeWidth = 150;

const renderProgress = document.getElementById("render");

const runningQuestion = document.getElementById("runningQuestion");

const lastQuestion = document.getElementById("lastQuestion");

const buttons = document.getElementById("button");

let count = 0;

var score = 0;

const userInitials = document.getElementById("initials");

const localStorage = document.getElementById("highscore");








var TIMER = undefined
// It's supposed to be a function
function scoreRender() {

}


// current question number
    var currentQuestion = 0;
    

    var questions = [
        {
            title: "Which of the animators from Disney designed Cody for Disney's The Recuers Down Under?",
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
        }
    ];
    
function newFunction() {
    return { userInitials: initials, score: timeScore };
}

    function renderQuestion(index) {
        // console.log (questions)

        // write question
        var question = document.createElement("p");
        question.innerHTML = questions[index].title
        questionElement.appendChild(question);
        
    
        // make buttons
        // console.log (questions [index].choices)
       
        for (var i = 0; i < questions[index].choices.length; i++) {
            var buttons = document.createElement("button");
            buttons.innerHTML = questions[index].choices[i]
            questionElement.appendChild(buttons) 
            
            if (questions[index].choices[i] === questions[index].correct){
                buttons.dataset.correct = true 
            }
            buttons.addEventListener("click", checkCorrectAnswer); 
            
        }}
    


    // renderQuestion();


    start.addEventListener("click",startQuiz);
    function startQuiz(){
        start.style.display = "none";
        renderQuestion(0);
        quiz.style.display = "block";
        renderCounter();
        TIMER = setInterval(renderCounter,1000); 
    }
// check to see if the answer is right
    function checkCorrectAnswer(event){
        
        if (event.target.dataset.correct){
            // if it's a correct answer
            console.log ("correct") 
            score = score + 1
        }else{ console.log ("wrong") 


        }
        
            
            questionElement.innerHTML = '';
            console.log(currentQuestion)
            // if this question is not the last question,
          if (currentQuestion != 4  ) {
             
          
                currentQuestion = currentQuestion + 1
                renderQuestion(currentQuestion); 
                renderQuestion
                quiz.style.display = "block";
                renderCounter();
                TIMER = setInterval(renderCounter,1000);  
          }else {
              // if this is the last question, your score is at the console
              var scoreMessage = document.createElement("h1");
              scoreMessage.innerHTML = score + " out of 5"
              questionElement.appendChild(scoreMessage);
          }

    }

    

    
    



    function renderCounter(){
        if(count <= questionTime){
            counter.innerHTML = count;
            timeGauge.style.width = count * timeGauge + "px";
            count++
        }else{
            count = 0; }
          
            
                
                // clearInterval(TIMER);
                // scoreRender();
       
        
        
            
        
        
        
    }
    function getformattedSeconds(){

    var secondsLeft = (totalSesonds - secondsElasped) % 60;
    var formattedSeconds;
    if (secondsLeft < 10) {
        formattedSeconds = "0" + secondsLeft;
    } else {
        formattedSeconds = secondsLeft;
    }
    return formattedSeconds;
}


function generate() {
    let userInitials = initials
    var complexity = prompt("How many letters you want in your password?");
        
        if (complexity > 6 || complexity < 3){
        alert("You need intials btween 3 - 6  to make a password.");
        return; 
}
document.getElementById("initials").innerHTML = highscore + "<br /r>";

document.getElementById("highscore").innerHTML = "highscore";

}
