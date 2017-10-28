let run = () => {
	// prompt for special key
	let specialKey = askForSpecialKey().trim();

	let keypressTracker = [];

	// listen for special key
	window.addEventListener('keypress', (e) => {
		addKeyToKeypressTracker(e.key, keypressTracker);
		keypressTracker = adjustKeypressTrackerSize(specialKey.length, keypressTracker);
		// if keypress mataches specialKey
		if (keypressTracker.join('') === specialKey) {
			// show stickers
			cornify_add();
		}
	})
		
}

let adjustKeypressTrackerSize = (specialKeySize, keypressTracker) => {
	return (keypressTracker.length > specialKeySize) 
			? keypressTracker.slice(-specialKeySize)
			: keypressTracker;
}

let addKeyToKeypressTracker = (key, keypressTracker) => {
	keypressTracker.push(key);
}

let askForSpecialKey = () => {
	return window.prompt('Type your special key for cool stickers', 'key');
}

//////////
run();