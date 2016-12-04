const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var app = express();
app.use(cors());
app.use(bodyParser.json());

app.listen(1337,()=>
console.log('listening on port 1337.  so leet.')
);

const entries = [{
  name: "Tyler",
  age: 33,
  crunches: 500,
}, {
  name: "Mark",
  age: 34,
  crunches: 2000,
}, {
  name: "Emily",
  age: 30,
  crunches: 50000,
}];

app.get ('/entries', function(req, res){
  res.send(entries);
});

app.post ('/entries', function(req, res){
  var newEntry = {
    name:req.body.name,
    age:req.body.age,
    crunches:req.body.crunches,
  };
  entries.push(newEntry);
  res.send(entries);
});
