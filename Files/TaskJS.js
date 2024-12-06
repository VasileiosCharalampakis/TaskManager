// Selectors
const darkMode = document.getElementById('dark-mode-toggle');
const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskCategory = document.getElementById('task-category');
const taskDeadline = document.getElementById('task-deadline');
const taskList = document.getElementById('task-list');
const filterButtons = document.getElementById('filter-buttons');


// Event Listeners
darkMode.addEventListener('click', toggleDarkMode);
taskForm.addEventListener('submit', addTask);
taskList.addEventListener('click', manageTask);
document.addEventListener('DOMContentLoaded',  function() {
    loadDarkMode();
    loadTasks();
});
setInterval(checkDeadlines, 60000);


//Dark-Mode;
function toggleDarkMode() {

    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'false'); 
    } else {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'true');
    }
}

function loadDarkMode() {
    const darkMode = localStorage.getItem('darkMode');
    if (darkMode === 'true') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}


// Add a new task
function addTask(e) {
    e.preventDefault();

    const taskText = taskInput.value;
    const category = taskCategory.value;
    const deadline = taskDeadline.value;

    const li = document.createElement('li');
    li.classList.add(category);

    let formattedDate = deadline ? formatDate(deadline) : "No Deadline";

    //li.textContent = `${taskText} [${category}] - Due: ${formattedDate}`;
    li.innerHTML = `Do: ${taskText} <br> For: [${category}] <br> Due: ${formattedDate}`;

    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Completed';
    completeBtn.classList.add('complete-btn');
    li.appendChild(completeBtn);

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    saveTaskToLocalStorage(taskText, category, deadline);

    taskInput.value = '';
    taskDeadline.value = '';
}


//Date
function formatDate(date) {

    const d = new Date(date);
    const day = String(d.getDate()).padStart(2, '0'); 
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();
    
    return `${day}/${month}/${year}`;
}


// Manage tasks
function manageTask(e) {
    const item = e.target;

    if (item.classList.contains('complete-btn')) {
        item.parentElement.classList.toggle('completed');
    }

    if (item.classList.contains('delete-btn')) {
        const task = item.parentElement;
        removeTaskFromLocalStorage(task.textContent);
        task.remove();
    }
}


// Filter tasks
function filterTasks(category) {
    const tasks = taskList.querySelectorAll('li'); // Select all tasks (li elements)

    tasks.forEach(task => {
        if (category === 'all' || task.classList.contains(category)) {
            task.style.display = 'flex'; // Show task
        } else {
            task.style.display = 'none'; // Hide task
        }
    });
}


// Local Storage functions
function saveTaskToLocalStorage(task, category, deadline) {
    const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.push({ task, category, deadline });
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.forEach(({ task, category, deadline }) => {
        const li = document.createElement('li');
        li.classList.add(category);

        let formattedDate = deadline ? formatDate(deadline) : "No Deadline";

        //li.textContent = `${task} [${category}] <br> Due: ${formattedDate}`;
        li.innerHTML = `Do: ${task} <br> For: [${category}] <br> Due: ${formattedDate}`;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = 'Completed';
        completeBtn.classList.add('complete-btn');
        li.appendChild(completeBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

function removeTaskFromLocalStorage(taskContent) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter(({ task }) => !taskContent.includes(task));
    localStorage.setItem('tasks', JSON.stringify(tasks));
}


