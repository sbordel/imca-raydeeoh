	//open stream from VPS
	var myaudio = new Audio('http://rhizotron.net:80/listen.mp3');
	//global variables
	let init = false;
	let status = true;


	function play(){
		if (init === false){
		myaudio.play(); 
		init = true;
		console.log("stream opened!");	
		}

		if (status === true){
		myaudio.muted = false;
		status = false;
		// console.log(status);
		document.getElementById("volumeon-icon-index").src = "assets/audio_player_files/volumeonbutton.png";

		} else if (status === false){
			myaudio.muted = true;
			status = true;
			// console.log(status);
			document.getElementById("volumeon-icon-index").src = "assets/audio_player_files/volumeoffbutton.png";
		}
	}
 