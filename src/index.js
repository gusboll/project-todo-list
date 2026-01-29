import './style.css';

console.log("Funcionando");





// get elements by id
const homeUserButton = document.getElementById("home-user-button");
const addTaskButton = document.getElementById("add-task");
const addProjectButton = document.getElementById("add-project");
const todayButton = document.getElementById("today-button");
const calendarButton = document.getElementById("calendar-button");
const tasksButton = document.getElementById("tasks-button");
const projectsButton = document.getElementById("projects-button");
const taskDialog = document.getElementById("task-dialog");
const projectDialog = document.getElementById("project-dialog");
const cancelTaskButton = document.getElementById("cancel-task-button");
const confirmTaskButton = document.getElementById("confirm-task-button");
const cancelProjectButton = document.getElementById("cancel-project-button");
const confirmProjectButton = document.getElementById("confirm-project-button");
const taskForm = document.getElementById("task-form");
const projectForm = document.getElementById("project-form")

//buttons event listeners
homeUserButton.addEventListener("click", () =>{
    console.log("homeUserButton clicked")
})

//task buttons
addTaskButton.addEventListener("click", () =>{
    console.log("addTask clicked");
    taskForm.reset();
    taskDialog.showModal();
})

cancelTaskButton.addEventListener("click", () =>{
    console.log("cancelTaskButton clicked");
    taskDialog.close();
})

taskForm.addEventListener("submit", (event) =>{
    console.log("confirmTaskButton clicked");
    event.preventDefault();
    taskDialog.close();
    //code for inserting the task in the constructor
})

//project buttons
addProjectButton.addEventListener("click", () =>{
    console.log("addProject clicked")
    projectForm.reset();
    projectDialog.showModal();
})

cancelProjectButton.addEventListener("click", () =>{
    console.log("cancelProjectButton clicked");
    projectDialog.close();
})

projectForm.addEventListener("submit", (event) =>{
    console.log("confirmProjectButton clicked");
    event.preventDefault();
    projectDialog.close();
    //code for inserting the task in the constructor
})

todayButton.addEventListener("click", () =>{
    console.log("todayButton clicked")
})

calendarButton.addEventListener("click", () =>{
    console.log("calendarButton clicked")
})

tasksButton.addEventListener("click", () =>{
    console.log("tasksButton clicked")
})

projectsButton.addEventListener("click", () => {
    console.log("projectsButton clicked")
})


// 


// todo items need to have:

// title; description; dueDate; priority; notes/checklist
// should be able to create different projects/todos
// should be able to: view all projects; view all todos in each project; expand a single todo; delete a todo;
// it needs to integrate dates and the calendar
// needs to save the data on local user computer