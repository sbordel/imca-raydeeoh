	let dayInit = false;

	//function for index/player play button
	function play() {
		if (init === false) {
			myaudio.play();
			init = true;
			console.log("stream opened");
		}

		if (muted === true) {
			myaudio.muted = false;
			muted = false;
			//update to playing icon
			document.getElementById("external-volume-icon").src = "assets/audio_player_files/volumeonbutton-2.svg";

		} else if (muted === false) {
			myaudio.muted = true;
			muted = true;
			//update to muted icon
			document.getElementById("external-volume-icon").src = "assets/audio_player_files/volumeoffbutton-2.svg";
		}
	}

	// Player specific time and date. Does not update a clock, pulls clock information to update the text bar.
	// Works in sync with schedule.js 
	function startTime() {
		var today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		var DOTW = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
		var day = DOTW[today.getDay()];
		//index to determine whats playing in regards to the schedule
		var scheduleTime;

		//queries time every half second
		m = checkTime(m);
		s = checkTime(s);

		document.getElementById('clock').innerHTML =
			h + ":" + m + ":" + s;
		var t = setTimeout(startTime, 500);

		//check dotw, fill schedule (only runs once per load)
		if (dayInit == false) {
			if (day == "Monday") {
				monday();
				$("#monday-button").css('background-color', 'black');
				$("#monday-button").css('color', 'white');
			} else if (day == "Tuesday") {
				tuesday();
				$("#tuesday-button").css('background-color', 'black');
				$("#tuesday-button").css('color', 'white');
			} else if (day == "Wednesday") {
				wednesday();
				$("#wednesday-button").css('background-color', 'black');
				$("#wednesday-button").css('color', 'white');
			} else if (day == "Thursday") {
				thursday();
				$("#thursday-button").css('background-color', 'black');
				$("#thursday-button").css('color', 'white');
			} else if (day == "Friday") {
				friday();
				$("#friday-button").css('background-color', 'black');
				$("#friday-button").css('color', 'white');
			} else if (day == "Saturday" || "Sunday") {
				scheduleTime = 99;
			}
			dayInit = true;
		}
		if (day == "Saturday" || "Sunday") {
			scheduleTime = 99;
		}

			//check dotw, calculate what row of schedule to check for data
			if (day == "Monday") {
				tempMath = (h - 10);
				scheduleTime = tempMath;
			} else if (day == "Tuesday") {
				tempMath = 8 + (h - 10);
				scheduleTime = tempMath;
			} else if (day == "Wednesday") {
				tempMath = 16 + (h - 10);
				scheduleTime = tempMath;
			} else if (day == "Thursday") {
				tempMath = 24 + (h - 10);
				scheduleTime = tempMath;
			} else if (day == "Friday") {
				tempMath = 32 + (h - 10);
				scheduleTime = tempMath;
			}

			//if its after 6 or before 10, go off air
			if (h >= 18 || h < 10) {
				scheduleTime = 99;
			}

			//update text in both player sections (schedule.js)
			textBar(scheduleTime);
		}

		function checkTime(i) {
			if (i < 10) {
				i = "0" + i
			};
			return i;
		}