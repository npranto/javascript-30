function hideAnalogClock() {
    document.querySelector('.frame').style.display = 'none';
}

function adjustFrame() {
	// get width and height for current screen
	let width = window.innerWidth;
	let height = window.innerHeight;

	// sets clock outline size in proportion to smaller size between current screen width or height
	if (Number.isInteger(width) && Number.isInteger(height)) {
		if (width < height) {
			document.getElementById('outline').style.width = "50vw";
			document.getElementById('outline').style.height = "50vw";
		} else {
			document.getElementById('outline').style.height = "50vh";
			document.getElementById('outline').style.width = "50vh";
		}
	}
}

function startTime(cb) {
    // run every second
	setInterval(function () {
		// get current time
		let now = new Date();

		// get extract seconds, minutes, and hours value from current time
		let currentSecond = now.getSeconds();
		let currentMinute = now.getMinutes() + (currentSecond/60);
		let currentHour = now.getHours() + (currentMinute/60) + ((currentSecond/60)/60);

		console.log(currentSecond, currentMinute, currentHour);

		// move seconds hand
		moveSecondsHand(currentSecond, document.querySelector('.second'));

		// move minutes hand
		moveMinutesHand(currentMinute, document.querySelector('.minute'));

		// move hours hand
		moveHoursHand(currentHour, document.querySelector('.hour'));

        cb();
	}, 1000);
}

function moveSecondsHand (currentSecond, secondsHandElem) {
    let secondsDegreeRotation = ((currentSecond/60) * 360) + 90;
    secondsHandElem.style.transform = `rotate(${secondsDegreeRotation}deg)`;
}

function moveMinutesHand (currentMinute, minutesHandElem) {
    let minutesDegreeRotation = ((currentMinute/60) * 360) + 90;
    minutesHandElem.style.transform = `rotate(${minutesDegreeRotation}deg)`;
}

function moveHoursHand (currentHour, hoursHandElem) {
    let hoursDegreeRotation = ((currentHour/12) * 360) + 90;
    hoursHandElem.style.transform = `rotate(${hoursDegreeRotation}deg)`;
}

function displayAnalogClock() {
    document.querySelector('.frame').style.display = 'block';
}



////////


hideAnalogClock();
adjustFrame();
startTime(displayAnalogClock);



