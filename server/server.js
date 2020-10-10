const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

const mathProblems = require ('./modules/mathObjects');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

app.get('/mathCalc', (req, res) =>{
    res.send(mathProblems);
    console.log('hello from /mathCalc');
    
})

app.listen(port, () => {
    console.log("Up and running on port: ", port);
});