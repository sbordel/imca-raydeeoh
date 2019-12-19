	//open stream from VPS
	var myaudio = new Audio('http://rhizotron.net:8080/listen.mp3');
	//determines if audio has been initialized
	let init = false;
	//streaming status
	let muted = true;

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
			document.getElementById("external-volume-icon").src = "assets/audio_player_files/volumeonbutton-2.png";

		} else if (muted === false) {
			myaudio.muted = true;
			muted = true;
			//update to muted icon
			document.getElementById("external-volume-icon").src = "assets/audio_player_files/volumeoffbutton-2.png";
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

		//queries time (located in ux.js)
		m = checkTime(m);
		s = checkTime(s);

		//check dotw, calculate what row of schedule to check for data
		if (day == "Monday") {
			tempMath = (h - 10);
			scheduleTime = tempMath;
			monday();
		} else if (day == "Tuesday") {
			tempMath = 8 + (h - 10);
			scheduleTime = tempMath;
			tuesday();
		} else if (day == "Wednesday") {
			tempMath = 16 + (h - 10);
			scheduleTime = tempMath;
			wednesday();
		} else if (day == "Thursday") {
			tempMath = 24 + (h - 10);
			scheduleTime = tempMath;
			thursday();
		} else if (day == "Friday") {
			tempMath = 32 + (h - 10);
			scheduleTime = tempMath;
			friday();
		} else if (day == "Saturday" || "Sunday") {
			scheduleTime = 99;
		} else if (h >= 17) {
			scheduleTime = 99;
		}

		//update text in both player sections (schedule.js)
		textBar(scheduleTime);
	}

	