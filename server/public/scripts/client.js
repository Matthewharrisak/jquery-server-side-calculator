console.log('whats up from JS');

$(document).ready(readyNow);
let sum = 0;
function readyNow() {
    console.log('hello from JQ');
    $('#equal').on('click' , whatsThisEqual);
    $('.operator').on('click' , operatorButtons);
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
        operatorButtons;
    }).catch(function(error){
        alert(error);
    });
}

//appends mathObjects array to the DOM
function problemsOnTheDom (array) {
    $('#listedProblems').empty(); // emptys array to prevent reapted appends
    for (let index = 0; index < array.length; index++) {
    $('#listedProblems').append(`
    <li> Problem: ${array[index].problem} | Solution ${array[index].solution}</li>
    `)    
    }
}


// attaches oprator buttons to click events that return sum
function operatorButtons() {
  if (('#addition').click(
      numOne + numOne == sum
    ));
  else if (('#subtraction').click(
      numOne - numTwo == sum
  ));
  else if (('#multiplication').click(
      numOne * numTwo == sum
  ));
  else if (('#division').click(
      numOne / numTwo == sum
  ));  
    return sum;
}