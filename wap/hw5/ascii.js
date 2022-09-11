window.onload = (event) => {
    init();
};
var allText;
var curIndex = null;
var curInterval = null;
var started;

function init(){    
    document.getElementById("start").onclick = onClickStart;    
    document.getElementById("stop").onclick = onClickStop;
    document.getElementById("animation").onchange = onChangeAnimation;
    document.getElementById("turbo").onclick = onClickTurbo;
    document.getElementById("fontsize").onchange = onChangeFontSize;
}
function onChangeAnimation(){
    document.getElementById("text-area").value = ANIMATIONS[this.value];
    curIndex = 0;
}
function onChangeFontSize(){ 
    fontSizeTextArea = document.getElementById("fontsize");
    textArea = document.getElementById("text-area");    

    switch(fontSizeTextArea.value) {
        case "Tiny":
            textArea.style.fontSize = '7pt';            
            break;
        case "Small":
            textArea.style.fontSize = '10pt';            
            break;
        case "Medium":
            textArea.style.fontSize = '12pt';
            break;
        case "Large":
            textArea.style.fontSize = '16pt';  
            break;
        case "Extra Large":
            textArea.style.fontSize = '24pt';  
            break;
        case "XXL":
            textArea.style.fontSize = '32pt';  
            break;
        default:
            textArea.style.fontSize = '12pt';        
    }
}
function onClickStart(){ 
    let animationSelectBox = document.getElementById("animation");
    if(animationSelectBox.value === "Blank") return;

    allText = ANIMATIONS[animationSelectBox.value].split("=====\n");    
    curInterval = setInterval(startAnimate, (document.getElementById("turbo").checked) ? 50 : 250);
    started = true;
    changeAvailibilityButtons();
}
function onClickStop(){
    clearInterval(curInterval);
    started = false;
    changeAvailibilityButtons();
}
function onClickTurbo(){    
    if(!started) return;
    clearInterval(curInterval);
    turboCheckBox = document.getElementById("turbo");
    if(turboCheckBox.checked){
        curInterval = setInterval(startAnimate, 50);
    } else {
        curInterval = setInterval(startAnimate, 250);
    }
}
function changeAvailibilityButtons(){ 
    document.getElementById("stop").disabled = !started;
    document.getElementById("start").disabled = started;
    document.getElementById("animation").disabled = started;
}
function startAnimate(){
    textArea = document.getElementById("text-area");    

    if(curIndex === null) curIndex = 0;

    textArea.value = allText[curIndex];  
    curIndex++;
    if(curIndex == allText.length){
        curIndex = 0;
    }
}