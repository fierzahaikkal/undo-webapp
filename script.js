const textInput = document.querySelector('.text-input input');
taskSection = document.querySelector(".task-section");

let todos = JSON.parse(localStorage.getItem("todo-list"));

function showTodo() {
    let li = "";
    if(todos) {
        todos.forEach((todo, id) => {
            li += `<li class="task">
            <label for="${id}">
                <input type="checkbox" id ="${id}"/>
                <p>${todo.name}</p>
            </label>
            <div class="settings">
                <i class="fa-solid fa-ellipsis-vertical"></i>
                <ul class="setting-menu">
                    <li><i class="fa-solid fa-pen"></i>Edit</li>
                    <li><i class="fa-solid fa-trash"></i>Delete</li>
                </ul>
            </div>
        </li>`;
        });
    }
    taskSection.innerHTML = li;
}
showTodo();

textInput.addEventListener("keyup", e => {
    let userTask = textInput.value.trim();
    if(e.key == "Enter" && userTask) {
        if (!todos) {
            todos = [];
        }
        textInput.value = "";
        let taskInfo = {name: userTask, status: "pending"};
        todos.push(taskInfo);
        localStorage.setItem("todo-list", JSON.stringify(todos));
        showTodo();
    }
})