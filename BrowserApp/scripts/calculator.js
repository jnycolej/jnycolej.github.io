/* Get HTML Elements as JS objects */
var equation = document.getElementById("calculation");
const equalSign = document.getElementById("submit");
var answerView = document.getElementById("answerOutput");
const clearButton = document.getElementById("C");
const historyList = document.getElementById("history");

/* Add Event Listener to button with callback function*/
equalSign.addEventListener("click", calculate);
clearButton.addEventListener("click", clearCalculation);

/*Callback functions for event: Button click */
function appendToCalculation(value) {
    equation.value += value;
}

function clearCalculation(){
    equation.value = "";
}

function calculate() {
    var calculation = equation.value;
    if (calculation === ""){
        return;
    }

    var answer;
    try{
        answer = eval(calculation);
        answerView = document.body.innerHTML += `${calculation} = ${answer}`;
        addToHistory(`${calculation} = ${answer}`);
        equation.value = "";
    } catch (error){
        answerView.innerText = "Error";
    }
    equation.value = answer;
    equation.focus();
    equation.setSelectionRange(equation.value.length, equation.value.length);
}

function addToHistory(entry){
    var li = document.createElement("li");
    li.innerText = entry;
    historyList.appendChild(li);
}

function clearHistory(){
    historyList = document.body.innerHTML = "";
}