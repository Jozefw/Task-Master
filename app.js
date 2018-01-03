// Define UI Vars

let form = document.querySelector('#task-form');
let taskList = document.querySelector('.collection');
let clearBtn = document.querySelector('.clear-tasks');
let filter = document.querySelector('#filter');
let taskInput = document.querySelector('#task');

function loadEventListeners(){
    // load tasks
    document.addEventListener('DOMContentLoaded',getTasks);
    // add a single task
    form.addEventListener('submit', addTask);
    // remove single task
    taskList.addEventListener('click',removeTask);
    // clear all tasks
    clearBtn.addEventListener('click', removeAll);
    // filter tasks
    filter.addEventListener('keyup',filterTasks);
};
// run all event listeners
loadEventListeners();
// add a single task

// get tasks from local storage
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
        }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
        } 

        tasks.forEach(function(task){
             // creat LI
            let li = document.createElement('li');
            // add class
            li.className = "collection-item";
            // append task to li
            li.appendChild(document.createTextNode(task));
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
        })
}

function addTask(e){
    if(taskInput.value === ''){
        alert("Add a friggin' task already");
    }
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

    // add to Local Storage
    addToLocalStorage(taskInput.value);
    e.preventDefault();
    
    // clear input
    taskInput.value = "";
}
// remove a single task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm("Are you sure you want to kill this?")){
        e.target.parentElement.parentElement.remove();
        // also remove from local storage
        removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}
// remove filtered item from local storage
function removeTaskFromLocalStorage(taskItem){
    console.log(taskItem);
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
        }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
        } 
        tasks.forEach(function(task, index){
            if(taskItem.textContent === task){
                tasks.splice(index,1)
            }
        });
        localStorage.setItem('tasks',JSON.stringify(tasks));
}

// clear all tasks
function removeAll(e){
    // taskList.innerHTML = "";
   while(taskList.firstChild){
       taskList.removeChild(taskList.firstChild);
   }
    //    clear from local storage
  clearAllTasksFromLocalStorage();
}

// clear all tasks from local storage
function clearAllTasksFromLocalStorage(){
   localStorage.clear();
}

// filter all tasks
function filterTasks(e){
    let text = e.target.value.toLowerCase();
   
    document.querySelectorAll('.collection-item').forEach(function(task){
        let item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display ='none'
        }
    });

}

// local storage persistance
function addToLocalStorage(taskInput){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
        }else{
            tasks = JSON.parse(localStorage.getItem('tasks'));
        } 
        tasks.push(taskInput);
        console.log(JSON.stringify(tasks));
        localStorage.setItem('tasks', JSON.stringify(tasks));
}