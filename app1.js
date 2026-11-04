const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

let tasks = [];

function renderTasks() {
    taskList.innerHTML = "";

    tasks.forEach((task, index) => {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const taskText = document.createElement("span");
        taskText.textContent = task;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remover";
        removeButton.classList.add("remove-button");

        removeButton.addEventListener("click", () => {
            tasks.splice(index, 1);
            renderTasks();
        });

        taskElement.appendChild(taskText);
        taskElement.appendChild(removeButton);

        taskList.appendChild(taskElement);
    });
}

function addTask() {
    const task = taskInput.value.trim();

    if (task === "") {
        return;
    }

    tasks.push(task);

    taskInput.value = "";
    taskInput.focus();

    renderTasks();
}

addButton.addEventListener("click", addTask);

taskInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        addTask();
    }
});

renderTasks();