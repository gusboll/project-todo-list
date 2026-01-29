import { title } from 'process';
import './style.css';


console.log("Funcionando");

const homeUserButton = document.getElementById("homeUserButton");
const addButton = document.getElementById("addButton");
const todayButton = document.getElementById("todayButton");
const calendarButton = document.getElementById("calendarButton");
const tasksButton = document.getElementById("tasksButton");

homeUserButton.addEventListener("click", () =>{
    console.log("homeUserButton clicked")
})

addButton.addEventListener("click", () =>{
    console.log("addButton clicked")
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

// todo items need to have:

// title; description; dueDate; priority; notes/checklist
// should be able to create different projects/todos
// should be able to: view all projects; view all todos in each project; expand a single todo; delete a todo;
// it needs to integrate dates and the calendar
// needs to save the data on local user computer