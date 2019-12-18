	//open stream from VPS
	// var myaudio = new Audio('http://rhizotron.net:8080/listen.mp3');
	// //global variables
	// let init = false;
	// let status = true;


	function play(){
		// if (init === false){
		// myaudio.play(); 
		// init = true;
		// console.log("stream opened!");	
		// }

		// if (status === true){
		// myaudio.muted = false;
		// status = false;
		// // console.log(status);
		// document.getElementById("volumeon-icon").src = "assets/audio_player_files/volumeonbutton.png";

		// } else if (status === false){
		// 	myaudio.muted = true;
		// 	status = true;
		// 	// console.log(status);
		// 	document.getElementById("volumeon-icon").src = "assets/audio_player_files/volumeoffbutton.png";
		// }

	// 	$('#volumeon-icon').on('click', function(){

	// 		$('audio,video').each(function(){
	// 			 $(this).volume = 0.0;
	// 		});
	
	// });
	}

	// setTimeout(function fauxPlay(){
	// 	// if (init === true){
	// 	myaudio.play(); 
	// 	status = false;
	// 	// }
	// }, 1);

// Player specific time and date. Does not update a clock, pulls clock information to update the text bar.
// Works in sync with schedule.js 

function startTime() {
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
var DOTW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = DOTW[today.getDay()];
var scheduleTime;

  m = checkTime(m);
  s = checkTime(s);

	if(day == "Monday") {
    tempMath = (h - 10);
    scheduleTime = tempMath;
	} else if(day == "Tuesday") {
    tempMath = 9 + (h - 10);
    scheduleTime = tempMath;
	}else if(day == "Wednesday") {
    tempMath = 18 + (h - 10);
		scheduleTime = tempMath;
	}else if(day == "Thursday") {
    tempMath = 27 + (h - 10);
    scheduleTime = tempMath;
	} else if(day == "Friday") {
    tempMath = 36 + (h - 10);
    scheduleTime = tempMath;
	} else if(day == "Saturday" || "Sunday") {
    scheduleTime = 99;
	} 
	
	textBar(scheduleTime);
	console.log(scheduleTime);
	console.log("sending time to player")
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};
  return i;
}
 