function run () {
	// adds playing effect on keydown
	window.addEventListener('keydown', function(e) {
		const audioElement = document.querySelector(`.keypad-audio[data-key="${e.keyCode}"]`);
		const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
		if (audioElement) {
			key.classList.add('playing');
			audioElement.currentTime = 0;
			audioElement.play();
		}
	})

	// removes playing effects from each key after each transition
	const keys = document.querySelectorAll('.key');
	console.log(keys);
	keys.forEach(function (key, index, keys) {
		key.addEventListener('transitionend', function (e) {
			key.classList.remove('playing');
		})
	})
}

run();
