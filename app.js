//nodemailer auth
require('dotenv').config();

//~~~ REQUIRE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var fs = require('fs');
var express = require('express');
var bodyParser = require('body-parser');
var mkdirp = require('mkdirp');
const nodemailer = require('nodemailer');
var icy = require('icy');
var lame = require('lame');
var Speaker = require('speaker');
var MuteStream = require('mute-stream');
var events = require('events');

//~~~ SETUP ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//launch express function
var app = express();

//tell node.js which view engine we will be using when calling views
app.set('view engine', "ejs");
//create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({
  extended: false
});

//opening a listening port
app.listen(80);
console.log('listening on port 80');

//~~~ STREAM ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
var muted = true;
var stream;

// URL to a known ICY stream
var url = 'http://rhizotron.net:8080/listen.mp3';

app.post('/mute', function (request, response) {
  response.send("Click Recorded");

  if (muted) {
    // connect to the remote stream
    icy.get(url, function (res) {

      // log the HTTP response headers
      console.error(res.headers);

      // var ms = new MuteStream();
      // res.pipe(ms);
      // ms.mute();

      stream = res.pipe(new lame.Decoder())
        .pipe(new Speaker());
      muted = false;

    });
  } else {
    stream.end();
    muted = true;
  }
});

// Let's play the music (assuming MP3 data).
// lame decodes and Speaker sends to speakers!
// res.pipe(new lame.Decoder())
//  .pipe(new Speaker());



//~~~ USE ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//use ~these~ directories when serving an html file
//automatically sends contents to the viewer as the html will not load them when served by node
app.use("/css", express.static(__dirname + '/css'));
app.use("/js", express.static(__dirname + '/js'));
app.use("/assets", express.static(__dirname + '/assets'));
app.use("/fonts", express.static(__dirname + '/fonts'));
app.use("/lib", express.static(__dirname + '/lib'));
app.use("/scheduleSheet", express.static(__dirname + '/scheduleSheet'));

//~~~ GET ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ß~~~~~~~~~~~~~~~~~
//upon navigating the site send corresponding html pages to client
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.get("/about", function (req, res) {
  res.sendFile(__dirname + '/about.html');
});

app.get("/schedule", function (req, res) {
  res.sendFile(__dirname + '/schedule.html');
  //when requesting this page automatically include this excel file
  //   app.get('/schedule.xlsx',function(req,res){
  //     res.sendFile(__dirname + '/scheduleSheet/schedule.xlsx'); 
  // });
});

app.get("/player", function (req, res) {
  res.sendFile(__dirname + '/player.html');
});

app.get("/submissions", function (req, res) {
  res.sendFile(__dirname + '/submission-index.html');
});

//render a view template for user submission data
app.get("/show", function (req, res) {
  res.render('show', {
    qs: req.query
  });
});

app.get("/sound", function (req, res) {
  res.render('sound', {
    qs: req.query
  });
});


//~~~ POST (SHOW) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//post user data to server
app.post("/show", urlencodedParser, function (req, res) {
  //rerender submission view on refresh
  res.render('show', {
    qs: req.query
  });

  mkdirp(('./submissions/' + req.body.lastname + req.body.firstname), function (err) {

    //write the JSON file to the new directory
    fs.writeFileSync('./submissions/' + req.body.lastname + req.body.firstname + "/info.JSON", JSON.stringify(req.body, null, "\t"));

    if (err) {
      //write the JSON file to the new directory
      fs.writeFileSync('./submissions/' + req.body.lastname + req.body.firstname + "/info.JSON", JSON.stringify(req.body, null, "\t"));
    }
  });


  //~~~ NODEMAILER (TO IMCA) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  //
  let mailoptions = {
    from: 'imcaraydeeoh@gmail.com',
    to: 'matt.halpenny@gmail.com',
    subject: 'New User Submission',
    text: JSON.stringify(req.body, null, "\t") + '\n \n \n \n sent by imcabot2000 👻'
  }

  transporter.sendMail(mailoptions, function (err, data) {
    if (err) {
      console.log('oopsie: ', err);
    } else {
      console.log("yipee");
    }
  });


  //~~~ NODEMAILER (TO APP) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // create reusable transporter object using the default SMTP transport
  let transporter2 = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  let mailoptions2 = {
    from: 'imcaraydeeoh@gmail.com',
    to: req.body.email,
    subject: 'IMCA Raydeeoh has recieved your application', // Subject line
    text: 'thank you!!! if your work is selected youll hear back from us soon! \n \n \n \n sent by imcabot2000 👻'
  };

  transporter2.sendMail(mailoptions2, function (err, data) {
    if (err) {
      console.log('oopsie: ', err);
    } else {
      console.log("yipee");
    }
  });
  //POST });
});


//~~~ POST (SOUND) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//post user data to server
app.post("/sound", urlencodedParser, function (req, res) {
  //rerender submission view on refresh
  res.render('sound', {
    qs: req.query
  });

  mkdirp(('./submissions/' + req.body.lastname + req.body.firstname), function (err) {

    //write the JSON file to the new directory
    fs.writeFileSync('./submissions/' + req.body.lastname + req.body.firstname + "/info.JSON", JSON.stringify(req.body, null, "\t"));

    if (err) {
      //write the JSON file to the new directory
      fs.writeFileSync('./submissions/' + req.body.lastname + req.body.firstname + "/info.JSON", JSON.stringify(req.body, null, "\t"));
    }
  });


  //~~~ NODEMAILER (TO IMCA) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  //
  let mailoptions = {
    from: 'imcaraydeeoh@gmail.com',
    to: 'matt.halpenny@gmail.com',
    subject: 'New User Submission',
    text: JSON.stringify(req.body, null, "\t") + '\n \n \n \n sent by imcabot2000 👻'
  }

  transporter.sendMail(mailoptions, function (err, data) {
    if (err) {
      console.log('oopsie: ', err);
    } else {
      console.log("yipee");
    }
  });


  //~~~ NODEMAILER (TO APP) ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  // create reusable transporter object using the default SMTP transport
  let transporter2 = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD
    }
  });

  let mailoptions2 = {
    from: 'imcaraydeeoh@gmail.com',
    to: req.body.email,
    subject: 'IMCA Raydeeoh has recieved your application', // Subject line
    text: 'thank you!!! if your work is selected youll hear back from us soon! \n \n \n \n sent by imcabot2000 👻'
  };

  transporter2.sendMail(mailoptions2, function (err, data) {
    if (err) {
      console.log('oopsie: ', err);
    } else {
      console.log("yipee");
    }
  });
  //POST });
});



//~~~ LA FIN ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~