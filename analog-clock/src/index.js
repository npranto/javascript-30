function adjustFrame() {
	let width = window.innerWidth;
	let height = window.innerHeight;

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

function startTime(argument) {

	let secondsHand = document.querySelector('.second');
	let minutesHand = document.querySelector('.minute');
	let hoursHand = document.querySelector('.hour');

	setInterval(function () {
		
		// get currrent time
		let now = new Date();

		// get extract seconds, minutes, and hours value from current time
		let seconds = now.getSeconds();
		let minutes = now.getMinutes() + (seconds/60);
		let hours = now.getHours() + (minutes/60) + (seconds/60)/60;

		// move seconds hand
		let secondsDegreeRotation = ((seconds/60) * 360) + 90;
		secondsHand.style.transform = `rotate(${secondsDegreeRotation}deg)`;

		// move minutes hand
		let minutesDegreeRotation = ((minutes/60) * 360) + 90;
		minutesHand.style.transform = `rotate(${minutesDegreeRotation}deg)`;

		// move hours hand
		let hoursDegreeRotation = ((hours/12) * 360) + 90;
		hoursHand.style.transform = `rotate(${hoursDegreeRotation}deg)`;

	}, 1000);

}



adjustFrame();
startTime();



