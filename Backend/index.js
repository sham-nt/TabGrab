const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
app.use(bodyParser.json());


app.post('/data',(req,res) =>{
   console.log(req.body);
    res.sendStatus(200);
})

app.post('/url',(req,res) =>{
    console.log(req.body);
    res.sendStatus(200);
})

app.listen(port,() => {
  console.log(`Listening on port ${port}`);
});
