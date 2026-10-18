document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById('create-task-form');

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const taskDescription = event.target.elements['new-task-description'].value;
    
    buildToDo(taskDescription);
    taskForm.reset();
});

function buildToDo(task) {
    const newLi = document.createElement('li');
    newLi.textContent = task;
    
    const taskList = document.getElementById('tasks');
    taskList.appendChild(newLi);
}
});
