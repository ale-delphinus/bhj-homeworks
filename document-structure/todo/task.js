const taskInput = document.getElementById('task__input');
const tasksList = document.getElementById('tasks__list');
const button = document.getElementById('tasks__add');
const tasks = document.getElementsByClassName('task__remove');

function addTask(event) {
    event.preventDefault();
    if (taskInput.value !== '') {
        tasksList.insertAdjacentHTML('beforeend',
            `<div class="task">
        <div class="task__title">
            ${taskInput.value}
        </div>
        <a href="#" class="task__remove">&times;</a>
    </div>`);
         
    for (let item of tasks) {
        item.onclick = function (event) {
            event.target.closest('.task').remove()
        };
    }
    taskInput.value = '';
    }
}


button.addEventListener('click', addTask);
taskInput.addEventListener('keydown', function (event) {
    if (event.key === 13) {
        addTask(event);
    }
})