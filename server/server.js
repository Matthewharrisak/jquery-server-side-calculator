

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const mathProblems = require ('./modules/mathObjects');



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
     mathProblems.push(req.body );
         mathProblems.push({answer}); // this line is pushing the variable answer and turning it into an object. 
        res.sendStatus(200);
});


// computes the equation with objects from POST request 
function solveThisProblem (numOne, numTwo, operator) {
    if (operator == '+' ){
        return Number(numOne) + Number(numTwo);
    }
     else if (operator == '-'){
         return   numOne - numTwo; 
    }
         else if (operator == '/'){
              return  numOne / numTwo;
    }
      else if ( operator == '*'){
         return numOne * numTwo;
    } 
    };
  



app.listen(port, () => {
    console.log("Up and running on port: ", port);
});