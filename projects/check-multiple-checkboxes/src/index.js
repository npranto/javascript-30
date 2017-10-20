let store = {
    todos: [
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
    ]
}

let run = () => {
    adjustContainerWidth();
    displayTodos(store.todos);
    addEventListenerForCheckboxes(store.todos);
    addListenerForNewTodo(store.todos);
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

let addEventListenerForCheckboxes = (todos) => {
    const checkboxes = document.querySelectorAll('.list-item .checkbox-container .check-box');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('click', () => {
            toggleContentStrikethrough(checkbox);
            let currentTodoIndex = parseInt(checkbox.dataset.todoindex);
            todos[currentTodoIndex].completed = !todos[currentTodoIndex].completed;
            console.log(store.todos);

            // check for multiple checkboxes checked
        })
    })
}

let displayTodos = (todos) => {

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

let serializeFormFields = (form) => {
    let fields = form.querySelectorAll('input');
    let formFieldsSerialized = {};
    fields.forEach((field) => {
        formFieldsSerialized[field.name] = field.value;
    })
    return formFieldsSerialized;
}

let clearFormFields = (form) => {
    let fields = form.querySelectorAll('input');
    fields.forEach((field) => {
        field.value = '';
    })
}

let addNewTodo = (newTodo, todos) => {
    todos.unshift({
        todo: newTodo,
        completed: false
    });
    return todos;
}

let addListenerForNewTodo = (todos) => {

    const newTodoForm = document.querySelector('.new-todo-form form');

    newTodoForm.addEventListener('keypress', (e) => {
        let key = e.charCode || e.keyCode || 0;
        if (enterIsPressed(key)) {
            let formFieldsObject = serializeFormFields(newTodoForm);
            // add new item to todos array
            todos = addNewTodo(formFieldsObject.newtodocontent, todos);
            displayTodos(todos);
            addEventListenerForCheckboxes(todos);
            clearFormFields(newTodoForm);
            e.preventDefault();
        }
    })

}




//////////
run();