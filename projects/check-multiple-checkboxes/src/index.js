let run = () => {
    addEventListenerForCheckboxes();
}

let toggleContentStrikethrough = (checkbox) => {
    const getCheckBoxId = checkbox.id ? checkbox.id : '';
    if (getCheckBoxId) {
        const getCheckBoxContentElem = document.getElementById(`${getCheckBoxId}-content`);
        getCheckBoxContentElem.classList.toggle('strikethrough');
    }
    
}

let addEventListenerForCheckboxes = () => {
    const checkboxes = document.querySelectorAll('.list-item .checkbox-container .check-box');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            toggleContentStrikethrough(checkbox);
        })
    })
}



//////////
run();