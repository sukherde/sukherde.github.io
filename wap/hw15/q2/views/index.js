$(eventHandler);

function eventHandler() {
    console.log("In eventHandler");
    $('#submitButton').click(callBall);
    $('#question').change(callBall);

    $('#question').on('keypress', function (e) {
        if(e.which === 13){
            console.log("In enter");
            $(this).attr("disabled", "disabled");
            callBall();
            $(this).removeAttr("disabled");
        }
    })
};

function addedSuccess(response){
    console.log("In addedSuccess");
    console.log(response);    
    $("#question").val(response.answer);
}

function callBall() {
    console.log("In callBall");
  
    fetch('/8ball',
    {
        method: 'post',
        body: $("#question").val(),
        contentType: "application/json; charset=utf-8"
    })
    .then(res => res.json())
    .then(response => addedSuccess(response))
    .catch(error => console.log("Error: ", error));
}