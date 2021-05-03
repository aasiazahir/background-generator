var css= document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2= document.querySelector(".color2");
var body= document.getElementById('gradient');

function setGradient(){
body.style.background= "Linear-gradient(to right,"+color1.value+","+color2.value+")";

css.textContent= body.style.background +";";
}
//to detect when user inputs color(by dragging on  color board) and apply to bg 
color1.addEventListener("input",setGradient);//input is an event
color2.addEventListener("input",setGradient);
