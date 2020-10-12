

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const mathProblems = require ('./modules/mathObjects');

let answer = 0;

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


// // gets math objects from mathObjects module. 
app.get('/mathHistory', (req, res) =>{
    res.send(mathProblems);
    
})



// get and post on server side have to match get/post on client 
app.post('/mathObjects', (req, res) => {
    console.log(req.body);
   let answer = solveThisProblem(req.body.numOne , req.body.numTwo, req.body.operator);
    console.log('this is the answer', answer);
    mathProblems.push(req.body);
    mathProblems.push({answer});
    res.sendStatus(200);
});


// computes the equation with objects from POST request 
function solveThisProblem (numOne, numTwo, operator) {
    if (operator == '+' ){
        return answer = Number(numOne) + Number(numTwo);
    }
    else if (operator == '-'){
       return  answer =  numOne - numTwo; 
    }
    else if (operator == '/'){
        return answer = numOne / numTwo;
    }
    else if ( operator == '*'){
       return answer = numOne * numTwo;
    } return answer
    };
  



app.listen(port, () => {
    console.log("Up and running on port: ", port);
});