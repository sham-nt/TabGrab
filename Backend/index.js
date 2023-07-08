const express = require('express');
const bodyParser = require('body-parser');

const dbactions = require('./dbactions.js');

const port = 3000;
const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
  
app.use(bodyParser.json());


app.post('/text',(req,res) =>{
   dbactions.insertText(req.body.url, req.body.text);
    res.sendStatus(200);
})

app.post('/image',(req,res) =>{
   dbactions.insertImage(req.body.url, req.body.imageUrl);
   res.sendStatus(200);
})

app.post('/url',(req,res) =>{
    dbactions.insertUrl(req.body.url);
    res.sendStatus(200);
})

app.get('/data',async (req,res) =>{
    await dbactions.get_data()
    .then((rows) => {
        res.json({"rows": rows});
    });
});

app.get('/data/:id',(req,res) =>{
  const id = req.params.id;
  dbactions.get_data_id(id)
  .then((row) => {
      res.json(row);
  });
});


app.listen(port,() => {
  console.log(`Listening on port ${port}`);
});
