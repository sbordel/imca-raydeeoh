/* set up XMLHttpRequest */
var url = "scheduleSheet/schedule.xlsx";
var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";

/* Variables */
var worksheet, workbook, radioObject;
//dotw data (hours + days) corresponds to excel rows
let monData = [0, 8];
let tuesData = [8, 16];
let wedData = [16, 24];
let thursData = [24, 32];
let friData = [32, 40];
var dayData = [0, 0];


//Onload, grab data from the schedule excel file
oReq.onload = function (e) {
  var arraybuffer = oReq.response;

  /* convert data to binary string */
  var data = new Uint8Array(arraybuffer);
  var arr = new Array();
  for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  var bstr = arr.join("");

  /* Call XLSX */
  var workbook = XLSX.read(bstr, {
    type: "binary"
  });
  var first_sheet_name = workbook.SheetNames[0];

  /* Get worksheet */
  worksheet = workbook.Sheets[first_sheet_name];

  // /* Display and save worksheet as usable JSON data */
  // console.log(XLSX.utils.sheet_to_json(worksheet, {
  //   raw: true
  // }));
  radioObject = XLSX.utils.sheet_to_json(worksheet, {
    raw: true
  });
}

oReq.send();

/* the fill function replaces info within the schedule's HTML table */
function fill() {
  var j = 1;
  $(document).ready(function () {
    // if ((/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) || window.innerWidth < 500) {
      if (window.innerWidth < 800) {  
    //populates schedule row data in MOBILE for i, j will keep track of the interations and HTML rows
      for (i = dayData[0]; i < dayData[1]; i++) {
        $("#show-name", "#row" + (j)).text(radioObject[i].Show);
        $("#host-name", "#row" + (j)).text(radioObject[i].Artist);
        ++j;
      }
    } else {
      //populates schedule row data for i, j will keep track of the interations and HTML rows
      for (i = dayData[0]; i < dayData[1]; i++) {
        $(".show-name", "#row" + (j)).text(radioObject[i].Show);
        $(".host-name", "#row" + (j)).text(radioObject[i].Artist);
        $(".show-description", "#row" + (j)).text(radioObject[i].Description);
        ++j;
      }
    }
  });
}

// ********** mobile max-width: 800px **********

//Updates textbar information
//timeData is a single value corresponding to a row in the excel schedule
function textBar(timeData) {
  // console.log("textbar populated")
  if (timeData === 99) {
    $("#external-player-text").text("OFF AIR");
    $("#player-text").text("OFF AIR");
    $("#player-modal").text("OFF AIR");
  } else {
    $("#external-player-text").text(radioObject[timeData].Artist + " - " + radioObject[timeData].Show);
    $("#player-text").text(radioObject[timeData].Artist + " - " + radioObject[timeData].Show);
    $("#player-modal").text(radioObject[timeData].Artist + " - " + radioObject[timeData].Show);
  }
}


//Day functions for schedule buttons
function monday() {
  dayData = monData;
  fill();
}

function tuesday() {
  dayData = tuesData;
  fill();
}

function wednesday() {
  dayData = wedData;
  fill();
}

function thursday() {
  dayData = thursData;
  fill();
}

function friday() {
  dayData = friData;
  fill();
}

//redefine W H if the window is resized
function reportWindowSize() {
  heightOutput.textContent = window.innerHeight;
  widthOutput.textContent = window.innerWidth;
}