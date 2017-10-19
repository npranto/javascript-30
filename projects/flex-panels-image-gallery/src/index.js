let run = () => {
    let allPanels = document.querySelectorAll('.gallery .panels .panel');
    allPanels.forEach((panel) => {
        panel.addEventListener('click', function () {
            panel.classList.toggle('panel-expand');
        })
        panel.addEventListener('mouseleave', function () {
            this.classList.remove('panel-expand');
        });
    })
}

//////////
run()