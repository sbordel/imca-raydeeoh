/* set up XMLHttpRequest */
var url = "scheduleTemplate.xlsx";
var oReq = new XMLHttpRequest();
oReq.open("GET", url, true);
oReq.responseType = "arraybuffer";

/* Variables */
var worksheet, workbook, radioObject;
let monData = [0, 9];
let tuesData = [9, 18];
let wedData = [18, 27];
let thursData = [27, 36];
let friData = [36, 45];
var dayData = [0, 0];
var j=1;
var storedTitles = [];

oReq.onload = function(e) {
  var arraybuffer = oReq.response;

  /* convert data to binary string */
  var data = new Uint8Array(arraybuffer);
  var arr = new Array();
  for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
  var bstr = arr.join("");

  /* Call XLSX */
  var workbook = XLSX.read(bstr, {type:"binary"});
  var first_sheet_name = workbook.SheetNames[0];

  /* Get worksheet */
  worksheet = workbook.Sheets[first_sheet_name];

  /* Display and save worksheet as usable JSON data */
  console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
  radioObject = XLSX.utils.sheet_to_json(worksheet,{raw:true});
}

oReq.send();

function fill(){
 /* jQuery function to search and replace text within schedule table */
$(document).ready(function(){
  for(i=dayData[0];i<dayData[1];i++){
  $(".show-name", "#row"+(j)).text(radioObject[i].Show);
  $(".host-name", "#row"+(j)).text(radioObject[i].Artist);
  $(".show-description", "#row"+(j)).text(radioObject[i].Description);
  ++j;
  if (j >= 10){
    j=1;
  }
  // console.log(j);
}
});
}

//Update information in the textBar via excel data, timed within player.js
function textBar(timeData){
  if (timeData == 99){
    $("#external-player-text").text("OFF AIR");
  } else{
    $("#external-player-text").text(radioObject[timeData].Artist + " - " + radioObject[timeData].Show);
    console.log("i am the textbar");
  }
  }

//Variable updaters for time of the week
function monday(){
  dayData = monData;
  fill();
}

function tuesday(){
  dayData = tuesData;
  fill();
}

function wednesday(){
  dayData = wedData;
  fill();
}

function thursday(){
  dayData = thursData;
  fill(); 
}

function friday(){
  dayData = friData;
  fill();
}


