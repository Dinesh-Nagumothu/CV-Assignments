document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
    let taskTitle = document.getElementById("taskTitle").value.trim();
    if (taskTitle === "") {
        alert("Enter a task title.");
        return;
    }

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(taskTitle);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    document.getElementById("taskTitle").value = "";
    renderTask(taskTitle);
}

function renderTask(taskTitle) {
    let taskList = document.getElementById("taskList");
    let div = document.createElement("div");
    div.classList.add("task-item");

    div.innerHTML = `
        ${taskTitle}
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;

    taskList.appendChild(div);
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(renderTask);
}

function deleteTask(button) {
    let div = button.parentElement;
    let title = div.textContent.trim().replace("Delete", "").trim();

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(task => task !== title);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    div.remove();
}
