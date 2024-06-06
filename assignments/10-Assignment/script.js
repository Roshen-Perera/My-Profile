const display = document.getElementById("display");

function displayValue(input){
    display.value += input;
    console.log(input);
}

function calculate(){
    display.value = eval(display.value);
}

function clearDisplay(){
    display.value = "";
}