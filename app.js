//REQUIRE
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

//launch express function
var app = express();

//tell node.js which view engine we will be using when calling views
app.set('view engine', "ejs");
//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//opening a listening port
app.listen(3000);
console.log('listening on port 3000');

//use ~these~ directories when serving an html file
//automatically sends contents to the viewer as the html will not load them when served by node
app.use("/css",  express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/assets",  express.static(__dirname + '/assets'));
app.use("/fonts",  express.static(__dirname + '/fonts'));
app.use("/lib",  express.static(__dirname + '/lib'));

//GETS
//upon navigating the site send corresponding html pages to client
app.get("/", function(req, res){
res.sendFile(__dirname + '/index.html');
});

app.get("/index.html", function(req, res){
  res.sendFile(__dirname + '/index.html');
  });

app.get("/about.html", function(req, res){
  res.sendFile(__dirname + '/about.html');
  });

app.get("/schedule.html", function(req, res){
  res.sendFile(__dirname + '/schedule.html');
  //when requesting this page automatically include this excel file
  app.get('/scheduleTemplate.xlsx',function(req,res){
    res.sendFile(__dirname + '/schedule/scheduleTemplate.xlsx'); 
});
  });

app.get("/player.html", function(req, res){
  res.sendFile(__dirname + '/player.html');
  });

//send a view template for user submission data
app.get("/submission.html", function(req, res){
  res.render('submission', {qs: req.query});
  });

app.post("/submission.html", urlencodedParser, function(req, res){
  //console.log(req.body);
  res.render('submission', {qs: req.query}); 
  fs.mkdirSync('./submissions/' + req.body.lastname + req.body.firstname);
  fs.writeFileSync('./submissions/' + req.body.lastname + req.body.firstname + "/info.JSON", JSON.stringify(req.body, null, "\t"));
});

