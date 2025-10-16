const userInput = document.getElementById('userInput');
const submitButton = document.getElementById('submitButton');

const tasks = document.getElementById('tasks');

const today = new Date();
const dayOfMonth = today.getDate();
const month = today.getMonth() + 1;
const year = today.getFullYear();




function addCheckList(){
    const checkList = document.createElement("input");
    checkList.type = 'checkbox';
    checkList.id = 'checkList';
    checkList.name = 'checkList';
    checkList.checked = false;

    return checkList;

}

function addTaskName(){
    const taskName = document.createElement("h2");
    taskName.textContent = userInput.value;

    return taskName;
}

function addDeleteButton(){
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    return deleteButton;
}

function addTaskDone(){
    const taskDone = document.createElement("p");
    taskDone.textContent = '';

    return taskDone;
}



function addTask(){

    const taskContainer = document.createElement("div");
    taskContainer.classList.add("taskContainer");
    tasks.appendChild(taskContainer);

    const checkbox = addCheckList();
    const name = addTaskName();
    const deleteBttn = addDeleteButton();
    const completeTask = addTaskDone();
    

    taskContainer.appendChild(checkbox);
    taskContainer.appendChild(name);
    taskContainer.appendChild(deleteBttn);
    taskContainer.appendChild(completeTask);

    deleteBttn.addEventListener('click', ()=>{
        taskContainer.remove();
    });

    checkbox.addEventListener('click', ()=>{
        if(checkbox.checked === true){
            completeTask.textContent = `Completed ${month}/${dayOfMonth}/${year}`;
        }else{
            completeTask.textContent = "";
        }
    });


    
}



submitButton.addEventListener('click', ()=>{
    if(userInput.value.trim() === ""){
        return;
    }else{
        addTask();
        userInput.value = "";
    }
});