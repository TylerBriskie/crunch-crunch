const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.listen(1337,()=>
console.log('listening on port 1337.  so leet.')
);
