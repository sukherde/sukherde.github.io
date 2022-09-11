window.onload = (event) => {
    init();
  };

var textArea;
var allText;
var curIndex = null;
var curAnimation = null;
var curInterval = null;
var startButton;
var stopButton;
var animationSelectBox;
var turboCheckBox;
var started;
var fontSizeTextArea;

function init(){    
    textArea = document.getElementById("text-area");    
    startButton = document.getElementById("start");
    startButton.onclick = onClickStart;    

    stopButton = document.getElementById("stop")
    stopButton.onclick = onClickStop;

    animationSelectBox = document.getElementById("animation")
    animationSelectBox.onchange = onChangeAnimation;

    turboCheckBox = document.getElementById("turbo");
    turboCheckBox.onclick = onClickTurbo;

    fontSizeTextArea = document.getElementById("fontsize");
    fontSizeTextArea.onchange = onChangeFontSize;
}

function onChangeAnimation(){
    curIndex = 0;
}

function onChangeFontSize(){ 
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
    if(animationSelectBox.value != "Blank"){
        let curAnimationText = ANIMATIONS[animationSelectBox.value];
        allText = curAnimationText.split("=====\n");

        if (turboCheckBox.checked) {
            curInterval = setInterval(startAnimate, 50);
        } else {
            curInterval = setInterval(startAnimate, 250);
        }
        
        started = true;
        changeAvailibilityButtons();
    }
}

function onClickStop(){
    clearInterval(curInterval);
    started = false;
    changeAvailibilityButtons();
}

function onClickTurbo(){    
    if(!started){
        return;
    }
    clearInterval(curInterval);
    if(turboCheckBox.checked){
        curInterval = setInterval(startAnimate, 50);
    } else {
        curInterval = setInterval(startAnimate, 250);
    }
}

function changeAvailibilityButtons(){
    stopButton.disabled = !started;
    startButton.disabled = started;
    animationSelectBox.disabled = started;
}

function startAnimate(){
    if(curIndex === null){
        curIndex = 0;
    }
    textArea.value = allText[curIndex];  
    curIndex++;
    if(curIndex == allText.length){
        curIndex = 0;
    }
}


