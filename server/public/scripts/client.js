// const { response } = require("express");

// const { response } = require("express");
answer = 0;
console.log('whats up from JS');

$(document).ready(readyNow);
function readyNow() {
    console.log('hello from JQ');
    getMathObjects();
    $('#equal').on('click' , whatsThisEqual);
    $('.operator').on('click' , operatorValue);
    $('#clear').on('click', clearItOut);
}


// uses a get request to recive information from the sever
function getMathObjects() {
    $.ajax({
        method: 'GET',
        url: '/mathHistory'
    }).then(function(response){
        console.log(response);
        problemsOnTheDom(response);
    }).catch(function(error){
        alert(error);
    });
}

// takes the operator buttons and assigns a value 
function operatorValue() {
    operator = event.target.innerHTML; // gets inline HTML data 
    console.log(operator);
    }


//takes in values from DOM and sends them to server /mathCalc to find the sum of the values.
function whatsThisEqual() {
    operatorValue; // gets operator value
    let mathValues = {
        numOne: $('#numOne').val(), 
        numTwo: $('#numTwo').val(),
        operator: operator,
        
        }
    console.log(mathValues);
    $.ajax({ // POST request allows us to post values to the server where the logic is stored.
        method: 'POST',
        url: '/mathObjects',
        data: mathValues
    }).then(function(response) {
       console.log('response',  response); // response here = math object returned from server
        $('#numOne').val(''), 
        $('#numTwo').val('');
        getMathObjects(); // loads new math object on click event
       console.log(response.answer);
    }).catch(function(error){
        alert(error);
    });
}

// //appends mathObjects array to the DOM // to the equal sign
function problemsOnTheDom (mathProblems) {
    $('#listedProblems').empty(); // emptys array to prevent reapted appends
    for (let index = 0; index < mathProblems.length; index++) {
    $('#listedProblems').append(`
    <li>  ${mathProblems[index].numOne}  ${mathProblems[index].operator} 
     ${mathProblems[index].numTwo} = ${answer} </li>
    `)    
    }
}

// this function will clear out the inouts 
function clearItOut() {
    $('#numOne').val(''), 
    $('#numTwo').val('');
    console.log('inclicked');
    
}

// write a 'get' request to pull data from server with mathcalc