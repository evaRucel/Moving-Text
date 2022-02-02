const heading = document.getElementById("text");
const speedOr = document.getElementById("speed");
const text = "David";
let idletter = 1;
let delay = 500/ speedOr.value;

function printText(){
    heading.innerHTML = text.slice(0, idletter);
    idletter++;

    if(idletter > text.length){
        idletter = 1;
    }
    setTimeout(printText, delay);

};
printText();

speedOr.addEventListener("input", function(event){
    delay = 500/event.target.value;
})

const input = document.getElementById("input");
let p = document.getElementById("odstavec");

input.addEventListener("input" , function(event){
    
    odstavec.innerHTML = event.target.value;
})























