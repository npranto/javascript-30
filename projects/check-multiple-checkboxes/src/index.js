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

    new Promise((resolve, reject) => {
        adjustContainerWidth();
        displayTodos();
        addListenerForNewTodo();
        true ? resolve(true) : reject(false);
    }).then((done) => {
        if (done) {
            addEventListenerForCheckboxes();
        }
    }).catch((err) => console.error(err));

}

let getContainerWidthBasedOnWindowWidth = (windowWidth) => {
    return Math.floor( (-4/100) * (windowWidth) + 102 );
}

let adjustContainerWidth = () => {
    let windowWidth = window.innerWidth;
    let containerWidth = getContainerWidthBasedOnWindowWidth(windowWidth);
    document.documentElement.style.setProperty(`--containerWidth`, `${containerWidth}vw`);
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
            console.log(checkbox.dataset);
            let currentTodoIndex = parseInt(checkbox.dataset.todoindex);
            todos[currentTodoIndex].completed = !todos[currentTodoIndex].completed;
        })
    })
}

let displayTodos = () => {

    const containerElem = document.querySelector('.container');

    let todosToHtml = todos.map((todo, index) => {
        return `
            <div class="list-item">
                <div class="checkbox-container">
                    <input class="check-box" id="checkbox${index}" data-todoindex=${index} type="checkbox" />
                </div>
                <p id="checkbox${index}-content"> ${todo.todo} </p>
            </div>
        `
    })

    containerElem.innerHTML = todosToHtml.join('\n');

}

let enterIsPressed = (key) => {
    if (key === 13) {
        return true;
    }
}

let addListenerForNewTodo = () => {

    const newTodoForm = document.querySelector('.new-todo-form form');

}





//////////
run();