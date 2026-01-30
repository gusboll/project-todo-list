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
//const confirmTaskButton = document.getElementById("confirm-task-button");
const cancelProjectButton = document.getElementById("cancel-project-button");
//const confirmProjectButton = document.getElementById("confirm-project-button");
const taskForm = document.getElementById("task-form");
const projectForm = document.getElementById("project-form")
const tasksDisplay = document.getElementById("tasks");
const projectsDisplay = document.getElementById("projects");

//constructor for all tasks and for individual task
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

class Task{
    constructor(taskTitle, taskDueBy, taskPriority, taskId){
        this.taskTitle = taskTitle;
        this.taskDueBy = taskDueBy;
        this.taskPriority = taskPriority;
        this.taskId = taskId;
    }
}

const myTasks = new storedTasks();


//constructor for all projects and specific project
class storedProjects{
    constructor(){
        this.projects = [];
    }
    addProject(project){
        this.projects.push(project);
    }
    removeProject(index){
        this.projects.splice(index,1);
    }
    findProjectById(id){
        return this.projects.findIndex(b => b.projectId === id)
    }
}

class Project{
    constructor(projectTitle, projectDueBy, projectTasks, projectPriority, projectId){
        this.projectTitle = projectTitle;
        this.projectDueBy = projectDueBy;
        this.projectTasks = projectTasks;
        this.projectPriority = projectPriority;
        this.projectId = projectId;
    }
}

const myProjects = new storedProjects();

//function to show all tasks
function displayTasks(){
    tasksDisplay.innerHTML = " ";
        myTasks.tasks.forEach(task => {
        let newTask = document.createElement("div");
        newTask.classList.add("task");
        newTask.innerHTML = `
        <div class = "task-title"><h3>${task.taskTitle}</h3></div>
        <div class = "task-due-by">Due in: ${task.taskDueBy}</div>
        <button id = "done-task" >Done</button>
        <button id = "remove-task" >Remove</button>
        `
        //set the color of the div according to its priority
        tasksDisplay.appendChild(newTask);
        })
        
}

//function to show all projects
function displayProjects(){
    projectsDisplay.innerHTML = " ";
        myProjects.projects.forEach(project => {
        let newProject = document.createElement("div");
        newProject.classList.add("project");
        newProject.innerHTML = `
        <div class = "project-title"><h3>Project - ${project.projectTitle}</h3></div>
        <div class = "project-tasks">1 - ${project.projectTasks}</div>
        <div class = "project-due-by">Due in: ${project.projectDueBy}</div>
        <button id = "done-project" >Done</button>
        <button id = "remove-project" >Remove</button>
        `
        //set the color of the div according to its priority
        projectsDisplay.appendChild(newProject);
        })
}
//function to show home - tasks above and projects below
function displayHome(){
    tasksDisplay.style.display = "";
    projectsDisplay.style.display = "";
    displayTasks();
    displayProjects();
}

displayHome();

//buttons event listeners
homeUserButton.addEventListener("click", () =>{
    console.log("homeUserButton clicked")
    displayHome();

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

//done and remove buttons for tasks and projects
const doneTaskButton = document.getElementById("done-task");
const removeTaskButton = document.getElementById("remove-task");
const doneProjectButton = document.getElementById("done-project");
const removeProjectButton = document.getElementById("remove-project");

//submit and exhibit the tasks
taskForm.addEventListener("submit", (event) =>{
    console.log("confirmTaskButton clicked");
    event.preventDefault();
    taskDialog.close();
    let taskName = document.getElementById("task-name").value;
    let taskDate = document.getElementById("task-date").value;
    let taskPriority = document.getElementById("task-priority").value;
    let taskId = crypto.randomUUID();
    const newTask = new Task (taskName, taskDate, taskPriority, taskId);
    myTasks.addTask(newTask);
    displayTasks();
    console.log(taskName, taskDate, taskPriority, taskId);
    return taskName, taskDate, taskPriority, taskId;
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

//submit and exhibit the projects
projectForm.addEventListener("submit", (event) =>{
    console.log("confirmProjectButton clicked");
    event.preventDefault();
    projectDialog.close();
    let projectName = document.getElementById("project-name").value;
    let projectDate = document.getElementById("project-date").value;
    let projectSteps = document.getElementById("project-task-1").value;
    let projectPriority = document.getElementById("project-priority").value;
    let projectId = crypto.randomUUID();
    const newProject = new Project (projectName, projectDate, projectSteps, projectPriority, projectId);
    myProjects.addProject(newProject);
    displayProjects();
    console.log(projectName, projectDate, projectSteps, projectPriority, projectId);
    return projectName, projectDate, projectSteps, projectPriority, projectId;
})


//other event listeners
todayButton.addEventListener("click", () =>{
    console.log("todayButton clicked")
})

calendarButton.addEventListener("click", () =>{
    console.log("calendarButton clicked")
})

tasksButton.addEventListener("click", () =>{
    console.log("tasksButton clicked")
    tasksDisplay.style.display = "";
    projectsDisplay.style.display = "none";
    displayTasks();
})

projectsButton.addEventListener("click", () => {
    console.log("projectsButton clicked")
    tasksDisplay.style.display = "none";
    projectsDisplay.style.display = "";
    displayProjects();
})

// todo items need to have:

// title; description; dueDate; priority; notes/checklist
// should be able to create different projects/todos
// should be able to: view all projects; view all todos in each project; expand a single todo; delete a todo;
// it needs to integrate dates and the calendar
// needs to save the data on local user computer