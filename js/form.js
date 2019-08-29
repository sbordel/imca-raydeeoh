var fs = require('fs');
var express = require('express');

var app = express();

app.set('view engine', 'ejs');
app.use('/assets', express.static('forms'));

app.get('/', function(req, res){
res.render('submission');
});

app.get();

var sample = fs.readFileSync('sample.txt','utf8');
// utf8 is encoding format
console.log(sample);

// this line of code creates an another file output.txt and writes the data in sample into the log.
fs.writeFileSync('output.txt',sample);