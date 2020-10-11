

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// const mathLogic = require ('./modules/mathLogic');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


// // gets math objects from mathObjects module. 
// app.get('/mathCalc', (req, res) =>{
//     res.send(mathProblems);
//     console.log('hello from /mathCalc');
    
// })


// get and post on server side have to match get/post on client 
app.post('/mathLogic', (req, res) => {
    console.log(req.body);
    let pencil = solveThisProblem(req.body.numOne , req.body.numTwo, req.body.operator);
    console.log(pencil);
    
    // mathLogic.hello();
    res.sendStatus(200);
});

function solveThisProblem (numOne, numTwo, operator) {
    if (operator == '+' ){
        return numOne + numTwo;
    }
    else if (operator == '-'){
       return numOne - numTwo; 
    }
    
};

app.listen(port, () => {
    console.log("Up and running on port: ", port);
});