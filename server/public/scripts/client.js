console.log('whats up from JS');

$(document).ready(readyNow);

function readyNow() {
    console.log('hello from JQ');
    $('#equal').on('click' , whatsThisEqual);
}


//takes in values from DOM and sends them to server /mathCalc to find the sum of the values.
function whatsThisEqual() {
    console.log('hello from the equal sign');
    let mathValues = {
        numOne: $('#numOne').val, 
        numTwo: $('#numTwo').val,
        }
    console.log(numOne , numTwo);
    $.ajax({ // POST request allows us to post values to the server where the logic is stored.
        method: 'POST',
        url: '/mathCalc',
        // data: mathProblem
    }).then(function(response) {
       console.log('response',  response);
        $('#numOne').val(''), 
        $('#numTwo').val('');
        // get math answer   
        
    }).catch(function(error){
        alert(error);
    });
}
