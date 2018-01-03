// Define UI Vars

let form = document.querySelector('#task-form');
let taskList = document.querySelector('.collection');
let clearBtn = document.querySelector('.lear-tasks');
let filter = document.querySelector('#filter');
let taskInput = document.querySelector('#task');

function loadEventListeners(){

    form.addEventListener('submit', addTask);
}

loadEventListeners();

function addTask(e){
    if(taskInput.value === ''){
        alert("Add a friggin' task already");
    }
    e.preventDefault();
    // creat LI
    let li = document.createElement('li');
    // add class
    li.className = "collection-item";
    // append task to li
    li.appendChild(document.createTextNode(taskInput.value));
// create delete button
    let deletelink = document.createElement('a');
    // add class to button
    deletelink.className = "delete-item secondary-content"

    // add icon to delete button
    deletelink.innerHTML ='<i class= "fa fa-remove"></i>' 
    // append icon to link
    li.appendChild(deletelink);

    // apend li to ul
    taskList.appendChild(li);
    // clear input
    taskInput.value = "";
  
}








// const form = document.querySelector('#task-form');
// const taskList = document.querySelector('.collection');
// const clearBtn = document.querySelector('.clear-tasks');
// const filter = document.querySelector('#filter');
// const taskInput = document.querySelector('#task');

// // Load all event listeners
// loadEventListeners();

// // Load all event listeners
// function loadEventListeners() {
//   // Add task event
//   form.addEventListener('submit', addTask);
// }

// // Add Task
// function addTask(e) {
//   if(taskInput.value === '') {
//     alert('Add a task');
//   }

//   // Create li element
//   const li = document.createElement('li');
//   // Add class
//   li.className = 'collection-item';
//   // Create text node and append to li
//   li.appendChild(document.createTextNode(taskInput.value));
//   // Create new link element
//   const link = document.createElement('a');
//   // Add class
//   link.className = 'delete-item secondary-content';
//   // Add icon html
//   link.innerHTML = '<i class="fa fa-remove"></i>';
//   // Append the link to li
//   li.appendChild(link);

//   // Append li to ul
//   taskList.appendChild(li);

//   // Clear input
//   taskInput.value = '';

//   e.preventDefault();
// }