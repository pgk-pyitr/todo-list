const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  const taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskText;
  taskItem.appendChild(taskTextSpan);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-btn';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
    updateTaskCounter();
  });

  taskItem.appendChild(deleteButton);

  taskItem.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  taskItem.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      taskItem.classList.toggle('completed');
    }
  });

  taskItem.setAttribute('tabindex', '0');

  taskList.appendChild(taskItem);
  updateTaskCounter();
  taskInput.value = '';
}

function updateTaskCounter() {
  const totalTasks = taskList.children.length;
  document.getElementById('task-counter').textContent = `Total tasks: ${totalTasks}`;
}

addTaskButton.addEventListener('click', addTask);

taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});

