	//open stream from VPS
	var myaudio = new Audio('http://rhizotron.net:8080/listen.mp3');
	//determines if audio has been initialized
	let init = false;
	//streaming status
	let muted = true;