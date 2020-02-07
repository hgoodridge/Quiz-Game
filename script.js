var timeRemaining = document.querySelector("#timeRemaining")
var gameOver = document.querySelector(".questionContainer")
var question = document.querySelector("#question")
var HighScores = document.querySelector("#HighScores")
var start = document.querySelector("#start")
var q1 = document.querySelector("#answer1")
var q2 = document.querySelector("#answer2")
var q3 = document.querySelector("#answer3")
var q4 = document.querySelector("#answer4")

var allAns = document.querySelectorAll(".answerBtn")
var tracker = 0;
var highScores = 0;

function hideBtn() {
    button.style.display = "none";


}


for (var i = 0; i < allAns.length; i++) {
    allAns[i].addEventListener("click", function () {
        console.log(this.textContent)
        if (this.textContent === questions[tracker].answer) {
            alert("Correct!");
            ++tracker;
            displayQ();
            highScores++;
        }

        else {
            alert("Wrong")
            ++tracker
            displayQ()


        }
    })

    if(tracker === 2 ) {
        alert("Game over!")
        clearInterval(intevalId)
        
    }
    

    var questions = [
        {
            title: "Why so JavaScript and Java have similar name?",
            choices: ["JavaScript is a stripped-down version of Java", "JavaScript's syntax is loosely based on Java's", "They both originated on the island of Java", "None of the above"],
            answer: "JavaScript's syntax is loosely based on Java's"
        },

        {
            title: "When a user views a page containing a JavaScript program, which machine actually executes the script?",
            choices: ["The User's machine running a Web browser", "The Web server", "A central machine deep within Netscape's corporate offices", "None of the above"],
            answer: "The User's machine running a Web browser"
        },

        {
            title: " ______ JavaScript is also called client-side JavaScript.",
            choices: ["Microsoft", "Navigator", "LiveWire", "Native"],
            answer: "Navigator"
        },

        {
            title: " __________ JavaScript is also called server-side JavaScript.",
            choices: [" Microsoft", "Navigator", "LiveWire", "Native"],
            answer: "LiveWire"
        },

        {
            title: " What are variables used for in JavaScript Programs?",
            choices: ["Storing numbers, dates, or other values", "Varying randomly", " Causing high-school algebra flashbacks", "None of the above"],
            answer: "Storing numbers, dates, or other values"
        },

        {
            title: " _____ JavaScript statements embedded in an HTML page can respond to user events",
            choices: ["Client-side", "Server-side", "Local", "Native"],
            answer: "Client-side"
        },
        {
            title: " What should appear at the very end of your JavaScript?",
            choices: ["</script>", "<script>", "The END statement", "None of the above"],
            answer: "</script>"
        },
        {
            title: "Which of the following can't be done with client-side JavaScript?",
            choices: [" Validating a form", " Sending a form's contents by email", "Storing the form's contents to a database file on the server", "None of the above"],
            answer: "Storing the form's contents to a database file on the server"
        },
        {
            title: "Which of the following are capabilities of functions in JavaScript?",
            choices: ["Return a value", "Accept parameters and Return a value", "Accept parameters", "None of the above"],
            answer: "Accept parameters"
        },
        {
            title: " Which of the following is not a valid JavaScript variable name?",
            choices: ["2names", "_first_and_last_names", "FirstAndLast", "None of the above"],
            answer: "2names"
        }
    ]


    function displayQ() {
        question.textContent = questions[tracker].title
        q1.textContent = questions[tracker].choices[0]
        q2.textContent = questions[tracker].choices[1]
        q3.textContent = questions[tracker].choices[2]
        q4.textContent = questions[tracker].choices[3]
    }

    start.addEventListener("click", function () {
        displayQ()
        var secondsLeft = 90;
        var intevalId = setInterval(function () {
            timeRemaining.textContent = secondsLeft + " Time remaining";
            secondsLeft--;

            if (secondsLeft === -1) {
                clearInterval(intevalId);
                gameOver.textContent = "Times Up!"




            }
        }, 1000);
    })
}