function run () {
	window.addEventListener('keydown', function(e) {
		const audioElement = document.querySelector(`.keypad-audio[data-key="${e.keyCode}"]`);
		if (audioElement) {
			document.querySelector(`.key[data-key="${e.keyCode}"]`).classList.add('playing');
			audioElement.currentTime = 0;
			audioElement.play();
		}
	})
}

run();
