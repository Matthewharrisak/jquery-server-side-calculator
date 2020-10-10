const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const mathProblems = require ('./modules/mathObjects');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));


// gets math objects from mathObjects module. 
app.get('/mathCalc', (req, res) =>{
    res.send(mathProblems);
    console.log('hello from /mathCalc');
    
})

app.post('/mathCalc', (req, res) => {
    console.log(req.body);
    mathProblems.push(req.body);
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log("Up and running on port: ", port);
});