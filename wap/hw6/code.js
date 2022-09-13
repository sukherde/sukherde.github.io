//2. In your html form markup code from task 1, include a feature such that the User can only submit the form 
//if the Password field is at least 10 characters in length and contain at least one number and one uppercase and lowercase letter).

window.onload = () => {
    document.getElementById("submit").onclick = onClickSubmit;
}



function onClickSubmit() {
    let checked = document.getElementById("checkBox").checked;
    if(checked){
        checkFields();
    }
}

function checkFields() {
    let regexp1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,}$/;
    let passTxt = document.getElementById("password").value;

    if (!regexp1.test(passTxt)) {
        alert("Password field is at least 10 characters in length and contain at least one number and one uppercase and lowercase letter!");
    }

    let regexp2 = new RegExp("https?://.+|http?://.+ ");
    let web = document.getElementById("web").value;
    if (!regexp2.test(web)) {
        alert('Please enter a correct URL.');
    }
}


