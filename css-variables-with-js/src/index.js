function run() {
    let allInputs = document.querySelectorAll('.each-control input');
    allInputs.forEach((input) => {
        input.addEventListener('change', changeInputStyle)
        input.addEventListener('mousemove', changeInputStyle);
    })
}
function changeInputStyle() {
    console.log(this.dataset);
    document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${(this.dataset.unit ? this.dataset.unit : '')}`);
}

/////////
run();