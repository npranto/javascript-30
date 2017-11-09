let start = () => {

    // get all slide images
    let allSlideInImages = document.querySelectorAll('.slide');

    let checkSlideIn = () => {
        allSlideInImages.forEach((image, index) => {
            // check if image is at half way point off its height while scrolling, then slide in
        })
    }

    // listen for scroll event on window
    window.addEventListener('scroll', debounce(checkSlideIn));

}

// debounce function runs a given function after a certain given interval (in this case, in runs a given function every 20 milliseconds)
let debounce = (func, wait = 20, immediate = true) => {
    let timeout;
    return function() {
        let context = this, args = arguments;
        let later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

//////////

start();