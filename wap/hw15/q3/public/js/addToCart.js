$(onReady);

function onReady(){
    console.log('Ready!');
    $('#atc').click(onClickAddToCart);
}

function addedSuccess(response){
    console.log("In addedSuccess");
    console.log(response);    
    alert('Product added!');
    $('#n').text(response.number);
}

function onClickAddToCart(){
    console.log('AddToCart!');
    let pID = $('input#pID').val();
    console.log(pID);
    
    fetch('/addToCart',
    {
        method: 'post',
        body: 'id=' + pID,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
        }
    })
    .then(res => res.json())
    .then(response => addedSuccess(response))
    .catch(error => console.log("Error: ", error));
}