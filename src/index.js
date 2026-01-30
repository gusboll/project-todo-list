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
const tasksDisplay = document.getElementById("tasks");
const projectsDisplay = document.getElementById("projects");

//constructor for all tasks

class storedTasks {
    constructor(){
        this.tasks = [];
    }

    addTask(task){
        this.tasks.push(task);
    }

    removeTask(index){
        this.tasks.splice(index,1);
    }

    findTaskById(id){
        return this.tasks.findIndex(b => b.taskId === id);
    }
}

const myTasks = new storedTasks();

// constructor for specific tasks
class Task{
    constructor(taskTitle, taskDueBy, taskId){
        this.taskTitle = taskTitle;
        this.taskDueBy = taskDueBy;
        this.taskId = taskId;
    }
}

//constructor for all projects

//constructor for specific project

//function to show all tasks

function displayTasks(){
    tasksDisplay.innerHTML = " ";
        myTasks.tasks.forEach(task => {

        let newTask = document.createElement("div");
        newTask.classList.add("task");

        newTask.innerHTML = `
        <div class = "task-title"><h3>${task.taskTitle}</h3></div>
        <div class = "task-due-by">Due by: ${task.taskDueBy}</div>
        <button id = "done-task" >Done</button>
        <button id = "remove-task" >Remove</button>
        `
        //add task done or remove task buttons
        tasksDisplay.appendChild(newTask);
        })
        
}

const doneTaskButton = document.getElementById("done-task");
const removeTaskButton = document.getElementById("remove-task");

//function to show all projects


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

//done and remove buttons for tasks



//submit and exhibit the tasks
taskForm.addEventListener("submit", (event) =>{
    console.log("confirmTaskButton clicked");
    event.preventDefault();
    taskDialog.close();
    let taskName = document.getElementById("task-name").value;
    let taskDate = document.getElementById("task-date").value;
    let taskId = crypto.randomUUID();
    const newTask = new Task (taskName, taskDate, taskId)
    myTasks.addTask(newTask);
    //code to display tasks
    displayTasks();
    console.log(taskName, taskDate, taskId);
    return taskName, taskDate, taskId;
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
    displayTasks();
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