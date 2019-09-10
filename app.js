var fs = require('fs');
var express = require('express');
// let ejs = require('ejs');
// var app = express();

// app.set('view engine', 'ejs');
// app.use('/assets', express.static('forms'));

// app.get('/', function(req, res){
// res.render('submission');
// });

// app.get();


// this line of code creates an another file output.txt and writes the data in sample into the log.
fs.writeFileSync('output.txt', "hello");

app.listen(3000);