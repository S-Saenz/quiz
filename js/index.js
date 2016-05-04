var body = document.getElementById("body");
var question = document.getElementById("question");
var number = document.getElementById("number");
var answer = document.getElementsByClassName("a");
var questions = ["q1.html", "q2.html", "q3.html", "q4.html", "final.html" ];
var answerKey = ["Chinese", "Korean", "Russian", "Italian", "Arabic"]

var p = document.getElementById("score");

function myFunction(clicked_id){
    var text = document.getElementById(clicked_id).textContent;
    for (var i = 0; i < questions.length; i++) {
    var score = 0;
    sessionStorage.getItem("points");
        if (document.getElementById(clicked_id).textContent === answerKey[parseInt(number.textContent)-1]){
            p.style.color = "green";
            score = score+1;
            sessionStorage.setItem("points", score);
            window.location.href = questions[parseInt(number.textContent)-1];
            return;
        } else{
            p.style.color = "red";
            sessionStorage.setItem("points", score);
            window.location.href = questions[parseInt(number.textContent)-1];
        }
    }
}

        
        function myscore(){
    
            document.getElementById("finalScore").textContent= sessionStorage.getItem("points");
        }