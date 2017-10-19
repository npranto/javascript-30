let todos = [
    {
        todo: 'Apple',
        completed: false
    },
    {
        todo: 'Oranges',
        completed: false
    },
    {
        todo: 'Coffee',
        completed: false
    },
    {
        todo: 'Get 2 regular milk',
        completed: false
    },
    {
        todo: 'The life of a human being is very important for anyone, so we should all value it greatly as many in the past have',
        completed: false
    }
];

let run = () => {
    // let promiseForDisplayingTodos = new Promise((resolve, reject) => {
    //     displayTodos();
    //     true ? resolve(true) : reject(false);
    // });

    new Promise((resolve, reject) => {
        displayTodos();
        true ? resolve(true) : reject(false);
    }).then((done) => {
        if (done) {
            addEventListenerForCheckboxes();
        }
    }).catch((err) => console.error(err));

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

let displayTodos = () => {

    const containerElem = document.querySelector('.container');

    let todosToHtml = todos.map((todo, index) => {
        return `
            <div class="list-item">
                <div class="checkbox-container">
                    <input class="check-box" id="checkbox${index}" type="checkbox" />
                </div>
                <p id="checkbox${index}-content"> ${todo.todo} </p>
            </div>
        `
    })

    containerElem.innerHTML = todosToHtml.join('\n');

}





//////////
run();