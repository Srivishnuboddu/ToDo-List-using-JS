document.addEventListener("DOMContentLoaded", loadTasks);

const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearAllTasksBtn = document.getElementById("clearAllTasks");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Add a new task
addTaskBtn.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText === "") return alert("Task cannot be empty!");

    tasks.push({ text: taskText, completed: false });
    updateTasks();
    taskInput.value = "";
});

// Update task list and localStorage
function updateTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center");
        li.innerHTML = `
            <span class="task-text ${task.completed ? 'text-decoration-line-through' : ''}">${task.text}</span>
            <div>
                <button class="btn btn-warning btn-sm me-2" onclick="editTask(${index})">✏️</button>
                <button class="btn btn-success btn-sm me-2" onclick="toggleComplete(${index})">✔️</button>
                <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">❌</button>
            </div>
        `;
        taskList.appendChild(li);
    });
    
    localStorage.setItem("tasks", JSON.stringify(tasks));
    clearAllTasksBtn.classList.toggle("d-none", tasks.length === 0);
}

// Edit a task
function editTask(index) {
    const newText = prompt("Edit Task:", tasks[index].text);
    if (newText !== null) {
        tasks[index].text = newText.trim();
        updateTasks();
    }
}

// Toggle task completion
function toggleComplete(index) {
    tasks[index].completed = !tasks[index].completed;
    updateTasks();
}

// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    updateTasks();
}

// Clear all tasks
clearAllTasksBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to delete all tasks?")) {
        tasks = [];
        updateTasks();
    }
});

// Load tasks from localStorage
function loadTasks() {
    updateTasks();
}

// Fetch Motivational Quote
async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io/random");
        if (!response.ok) throw new Error("Failed to fetch quote");
        const data = await response.json();
        document.getElementById("quote").textContent = `"${data.content}" - ${data.author}`;
    } catch (error) {
        console.error("Error fetching quote", error);
        document.getElementById("quote").textContent = "⚠️ Failed to load quote. Try again!";
    }
}

// Fetch quote on page load
fetchQuote();

// Refresh quote on button click
document.getElementById("refreshQuote").addEventListener("click", fetchQuote);
