$(document).ready(function(){
    var status = "";
    var begin = 0;
    var end = 0;
    $(".boundary").hover(function(){
        if(begin == 1 && end ==0) {
            $(this).addClass("youlose");
            lose();
        }
    });

    $("#end").click(function(){
        if(status == "lose"){
            $("#status").text("You Lose!");
        }
        else{
            $("#status").text("You Win!");
        }
        begin = 0;
        end = 1;
    });

    $("#start").click(function(){
        $(".boundary").removeClass("youlose");
        $("#status").text("You have Begun... ");
        status = "begin";
        begin = 1;
        end = 0;
    });

    $("#maze").mouseleave(function() {
        if(status == "begin" && end == 0) {
            $(".boundary").addClass("youlose");
            lose();
        }
    });

    var lose = function(){
        $("#status").text("You Lose!");
        status = "lose";
        end =1;
    }

});
/*
var loser = false;

window.onload = function() {
    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].onmouseover = overBoundary;
    }
};

function overBoundary() {
    loser = true;
    $("status").textContent = "You lose!";
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].addClassName("youlose");
    }
}

function startClick() {
    loser = false;
    //alert('hello');
    $("status").textContent = "Find the end!";
    var boundaries = $$("div#maze div.boundary");
    for (var i = 0; i < boundaries.length; i++) {
        boundaries[i].removeClassName("youlose");
    }
}

function overEnd() {
    if (!loser) {
        $("status").textContent = "You win! :]";
    }
}
*/

/*

$(document).ready(function(){
    var mouseEntered = false;
    var sPressed = false;
    var curCursorPos = null;

    $(document).on('keypress',function(e) {
        if(e.which == 115) {
            console.log("You pressed s");
            sPressed = true;
        }
    });

    $("div.start").mouseover(function(){
        console.log("You hovered S!");
    });

    $("div.start").mouseenter(function(){
        mouseEntered = true;
    });

    $("div.start").mouseleave(function(){
        mouseEntered = false;
        curCursorPos = null;
    });
    

    $("div.start").mousemove(function(){
        if (!sPressed || !mouseEntered) {
            return;
        }
        const wid = 530;
        var left1 = event.pageX - wid;

        let leftVal = parseInt(this.style.left, 10);
        leftVal = (Number.isNaN(leftVal) ) ? 0 : leftVal;

        if (curCursorPos == null) {
            curCursorPos = left1;    
        }
        

        if (leftVal > 130 && (leftVal - curCursorPos) > 0) {
            return;
        } else {
            this.style.left = left1 + (leftVal - curCursorPos) + 'px';
        }

        

        
        
        

        
         //$(".start span").text(x += 1);
    });
});
*/