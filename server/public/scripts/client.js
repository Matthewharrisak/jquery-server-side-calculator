console.log('whats up from JS');

$(document).ready(readyNow);
// let sum = 0;
function readyNow() {
    console.log('hello from JQ');
    $('#equal').on('click' , whatsThisEqual);
    $('.operator').on('click' , operatorValue);
}


let operator = '';
let numOne = 0;
let numTwo = 0;

function operatorValue() {
    operator = event.target.innerHTML;
    console.log(operator);
    }


//takes in values from DOM and sends them to server /mathCalc to find the sum of the values.
function whatsThisEqual() {
    console.log('hello from the equal sign');
    operatorValue;
    let mathValues = {
        numOne: $('#numOne').val(), 
        numTwo: $('#numTwo').val(),
        operator: operator
        }
    console.log(mathValues);
    $.ajax({ // POST request allows us to post values to the server where the logic is stored.
        method: 'POST',
        url: '/mathLogic',
        data: mathValues
    }).then(function(response) {
       console.log('response',  response); // response here = math object returned from server
        $('#numOne').val(''), 
        $('#numTwo').val('');
        // get math answer   
       //append to DOM 
    }).catch(function(error){
        alert(error);
    });
}

//appends mathObjects array to the DOM // to the equal sign
function problemsOnTheDom (array) {
    $('#listedProblems').empty(); // emptys array to prevent reapted appends
    for (let index = 0; index < array.length; index++) {
    $('#listedProblems').append(`
    <li> Problem: ${array[index].problem} | Solution ${array[index].solution}</li>
    `)    
    }
}



// write a 'get' request to pull data from server with mathcalc