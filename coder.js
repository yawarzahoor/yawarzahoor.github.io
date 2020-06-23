// An array Consisting of all the questions
var questionBank = [
    {
        problem: "Q.1. What does HTML stand for?",
        a: "a) Home Tool Markup Language",
        b: "b) Hyperlink and Text Markup Language",
        c: "c) Hyper Text Markup Language",
        d: "d) Hyper Text Machine Language",
        key: "c"
    },
    {
        problem: "Q.2. Which is the correct HTML element for the largest heading?",
        a: "a) &lt; largest &gt;",
        b: "b) &lt; heading &gt;",
        c: "c) &lt; h6 &gt;",
        d: "d) &lt; h1 &gt;",
        key: "d"
    },
    {
        problem: "Q.3. Choose the correct HTML element to define important text.",
        a: "a) &lt; strong &gt;",
        b: "b) &lt; important &gt;",
        c: "c) &lt; i &gt;",
        d: "d) &lt; imp &gt;",
        key: "a"
    },
    {
        problem: "Q.4. How can you open a link in a new tab?",
        a: "a) &lt; a href = 'url' target = 'new' &gt;",
        b: "b) &lt; a href = 'url' new_tab = 'true' &gt;",
        c: "c) &lt; a href = 'url' target = '_blank' &gt;",
        d: "d) &lt; a href = 'url' tab = 'new' &gt;",
        key: "c"
    },
    {
        problem: "Q.5. In HTML, which attribute is used to specify that an input field must be filled?",
        a: "a) required",
        b: "b) validate",
        c: "c) placeholder",
        d: "d) necessary",
        key: "a"
    },
    {
        problem: "Q.6. What does CSS stand for?",
        a: "a) Colorful Style Sheets",
        b: "b) Cascading Style Sheets",
        c: "c) Cascading Style System",
        d: "d) Creative Style Sheets",
        key: "b"
    },
    {
        problem: "Q.7. Where is the correct place to link an external style sheet to an HTML document?",
        a: "a) At the end of the document",
        b: "b) In the body section ",
        c: "c) In the head section",
        d: "d) Anywhere we want",
        key: "c"
    },
    {
        problem: "Q.8. Which CSS property is used to change the text color of an element?",
        a: "a) color",
        b: "b) background-color",
        c: "c) text-color",
        d: "d) font-color",
        key: "a"
    },
    {
        problem: "Q.9. Which property is used to change the font of an element?",
        a: "a) font-style",
        b: "b) font-type",
        c: "c) font-weight",
        d: "d) font-family",
        key: "d"
    },
    {
        problem: "Q.10. How do you select elements with class name 'demo'?",
        a: "a) #demo",
        b: "b) .demo",
        c: "c) *demo",
        d: "d) +demo",
        key: "b"
    },
    {
        problem: "Q.11. Inside which element do we put the JavaScript?",
        a: "a) &lt; scripting &gt;",
        b: "b) &lt; script &gt;",
        c: "c) &lt; javascript &gt;",
        d: "d) &lt; js &gt;",
        key: "b"
    },
    {
        problem: "Q.12. How do we create a function in Javascript?",
        a: "a) function: myFunction()",
        b: "b) createfunction myFunction()",
        c: "c) function myFunction()",
        d: "d) function = myFunction()",
        key: "c"
    },
    {
        problem: "Q.13. How do we call a function in Javascript?",
        a: "a) myFunction()",
        b: "b) call myFunction()",
        c: "c) call = myFunction()",
        d: "d) function myFunction()",
        key: "a"
    },
    {
        problem: "Q.14. Which event occurs when the user clicks on an HTML element?",
        a: "a) onclick",
        b: "b) onmouseclick",
        c: "c) onchange",
        d: "d) onmouseover",
        key: "a"
    },
    {
        problem: "Q.15. How do we add a multi-line comment in Javascript",
        a: "a) 'Comment'",
        b: "b) //comment",
        c: "c) /*comment*/",
        d: "d) /*comment",
        key: "c"
    },

]

// Defining the points for a correct answer and the penalty for an incorrect answer
var correctPoints = 2;
var incorrectPenalty = 0.25;

// An array consisting of all the answer keys. Calculated automatically
var keybank = [];
for (var i = 0; i < questionBank.length; i++) {
    keybank[i] = questionBank[i].key;
}

// Different variables to be used for result calculations.
var answer = "";
var answerBank = [];
var skipped = 0;
var correct = 0;
var incorrect = 0;
var positiveMarks = 0;
var negativeMarks = 0;
var totalMarks = 0;
var finalMsg = "";

// For getting various nodes to manipulate the DOM.
var question = document.getElementById("question");
var choicea = document.getElementById("option1");
var choiceb = document.getElementById("option2");
var choicec = document.getElementById("option3");
var choiced = document.getElementById("option4");
var choiceAChecker = document.getElementById("radoption1");
var choiceBChecker = document.getElementById("radoption2");
var choiceCChecker = document.getElementById("radoption3");
var choiceDChecker = document.getElementById("radoption4");
var body = document.getElementById("parent");
var questionPage = document.getElementById("questionContainer");
var optionsContainer = document.getElementById("optionsDiv");
var buttonsDiv = document.getElementById("answerButtons");
var testFinishPage = document.getElementById("finishMsg");
var introductionPage = document.getElementById("introductionDiv");
var emptyAlert = document.getElementById("alertPara");
var resultPage = document.getElementById("reportContainer");
var myResponsePage = document.getElementById("responseSheet");


// Removing everything from the window initially except introduction.
optionsContainer.style.display = "none";
testFinishPage.style.display = "none";
questionPage.style.display = "none";
buttonsDiv.style.display = "none";
resultPage.style.display = "none";
myResponsePage.style.display = "none";
var j = 0;

// Defining what clicking on start button does.
function strt() {
    introductionPage.style.display = "none";
    questionPage.style.display = "block";
    optionsContainer.style.display = "block";
    buttonsDiv.style.display = "flex";
    question.innerHTML = questionBank[j].problem;
    choicea.innerHTML = questionBank[j].a;
    choiceb.innerHTML = questionBank[j].b;
    choicec.innerHTML = questionBank[j].c;
    choiced.innerHTML = questionBank[j].d;
}

// Defining function of the NEXT button.
function next() {

    // Getting the answers.
    if (choiceAChecker.checked) {
        answer = "a";
    }
    if (choiceBChecker.checked) {
        answer = "b";
    }
    if (choiceCChecker.checked) {
        answer = "c";
    }
    if (choiceDChecker.checked) {
        answer = "d";
    }
    if (answer === "") {
        emptyAlert.innerHTML = "Select an answer or Skip this question";
    }
    else {
        emptyAlert.innerHTML = "";
        j++;
        answerBank.push(answer);
        answer = "";
        choiceAChecker.checked = false;
        choiceBChecker.checked = false;
        choiceCChecker.checked = false;
        choiceDChecker.checked = false;

        // if all the question have been shown.
        if (j === questionBank.length) {
            questionPage.style.display = "none";
            optionsContainer.style.display = "none";
            buttonsDiv.style.display = "none";
            testFinishPage.style.display = "block";
        } else {
            question.innerHTML = questionBank[j].problem;
            choicea.innerHTML = questionBank[j].a;
            choiceb.innerHTML = questionBank[j].b;
            choicec.innerHTML = questionBank[j].c;
            choiced.innerHTML = questionBank[j].d;
        }
    }
}

// Defining what the SKIP button does.
function skipp() {
    j++;
    emptyAlert.innerHTML = "";
    answerBank.push("skipped");
    if (j === questionBank.length) {
        questionPage.style.display = "none";
        optionsContainer.style.display = "none";
        buttonsDiv.style.display = "none";
        testFinishPage.style.display = "block";
    } else {
        choiceAChecker.checked = false;
        choiceBChecker.checked = false;
        choiceCChecker.checked = false;
        choiceDChecker.checked = false;
        question.innerHTML = questionBank[j].problem;
        choicea.innerHTML = questionBank[j].a;
        choiceb.innerHTML = questionBank[j].b;
        choicec.innerHTML = questionBank[j].c;
        choiced.innerHTML = questionBank[j].d;
    }

}

// Calculating the Final Result and points.
function calculateResult() {
    for (var l = 0; l < questionBank.length; l++) {
        if (answerBank[l] === "skipped") {
            skipped++;
        } else if (answerBank[l] === keybank[l]) {
            correct++;
        } else if (answerBank[l] !== keybank[l]) {
            incorrect++;
        }
    }
    positiveMarks = correct * correctPoints;
    negativeMarks = incorrect * incorrectPenalty;
    totalMarks = positiveMarks - negativeMarks;

    // Deciding what message to display.
    if (totalMarks < 0) {
        finalMsg = "I don't think this is your cup of tea."
    } else if (totalMarks < 5) {
        finalMsg = "Oh Man! Looks like you need a lot of work to do";
    } else if (totalMarks < 15) {
        finalMsg = "Don't worry and keep going. You have got it in you. "
    } else if (totalMarks < 25) {
        finalMsg = "A little more hardwork and you will be on the path of glory."
    } else {
        finalMsg = "Ahh Man! You are a champ."
    }

    testFinishPage.style.display = "none";
    resultPage.style.display = "block";
    document.getElementById("finalResult").innerHTML = "You scored " + totalMarks + " points out of " + (correctPoints * questionBank.length);
    document.getElementById("reportMsg").innerHTML = finalMsg;

    // Getting the table filled with appropriate values.
    document.getElementById("NoOfQ").innerHTML = questionBank.length;
    document.getElementById("attempted").innerHTML = questionBank.length - skipped;
    document.getElementById("correct").innerHTML = correct;
    document.getElementById("incorrect").innerHTML = incorrect;
    document.getElementById("positiveMarks").innerHTML = positiveMarks;
    document.getElementById("negativeMarks").innerHTML = negativeMarks;
    document.getElementById("finalMarks").innerHTML = totalMarks;


}

// Getting the user's response sheet ready.
function getResponseSheet() {
    document.documentElement.scrollTop = 0;
    myResponsePage.style.display = "block";
    resultPage.style.display = "none";
    var questionResponse;
    for (var m = 0; m < questionBank.length; m++) {
        questionResponse = document.createElement("div");
        questionResponse.innerHTML = questionBank[m].problem + "<br>" + questionBank[m].a + "<br>" + questionBank[m].b + "<br>" + questionBank[m].c + "<br>" + questionBank[m].d + "<br><br> <span style='color:green'> Correct Answer: " + questionBank[m].key + ")</span> <br> <span style='color:red'>Your Response: " + answerBank[m] + ")</span>";
        myResponsePage.appendChild(questionResponse);
    }
}