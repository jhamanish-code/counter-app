function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter the task");
    return;
  }

  const taskList = document.getElementById('taskList');
  const li = document.createElement('li');

  li.innerHTML = `
    <span onclick="toggleComplete(this)">${taskText}</span>
    <button onclick="deleteTask(this)">❌</button>
  `;

  taskList.appendChild(li);
  taskInput.value = ""; // Clear input after adding
}

function toggleComplete(task) {
  task.classList.toggle('completed');
}

function deleteTask(btn) {
  btn.parentElement.remove();
}
