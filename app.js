//REQUIRE
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');

// var icy = require('icy');
// var lame = require('lame');
// var Speaker = require('speaker');

//launch express function
var app = express();

//tell node.js which view engine we will be using when calling views
app.set('view engine', "ejs");
//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

//opening a listening port
app.listen(80);
console.log('listening on port 80');

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

// app.get("/index", function(req, res){
//   res.sendFile(__dirname + '/index.html');
//   });

app.get("/about", function(req, res){
  res.sendFile(__dirname + '/about.html');
  });

app.get("/schedule", function(req, res){
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

//temporary routing
app.get("/submissions", function(req, res){
  res.sendFile(__dirname + '/submissions/index.html');
  });

//OMNIPLAYER

// //FUNCTIONAL 
// // URL to a known ICY stream
// var url = 'http://rhizotron.net:8080/listen.mp3';

// icy.get(url, function (res) {
 
//   // log the HTTP response headers
//   console.error(res.headers);
 
//   // // log any "metadata" events that happen
//   // res.on('metadata', function (metadata) {
//   //   var parsed = icy.parse(metadata);
//   //   console.error(parsed);
//   // });
 
//   // Let's play the music (assuming MP3 data).
//   // lame decodes and Speaker sends to speakers!
//   res.pipe(new lame.Decoder())
//      .pipe(new Speaker());
//      console.log("connected?");
//      setTimeout(function Off(){
//       // res.emit('end');
//       // res.cork();
//       // res.off();
//      }, 1000);
// });
