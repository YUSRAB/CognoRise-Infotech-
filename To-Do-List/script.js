document.addEventListener('DOMContentLoaded', () => {
  const taskForm = document.getElementById('task-form');
  const taskInput = document.getElementById('task-input');
  const taskDate = document.getElementById('task-date');
  const taskCategory = document.getElementById('task-category');
  const taskPriority = document.getElementById('task-priority');
  const taskList = document.getElementById('task-list');
  const themeToggle = document.getElementById('theme-toggle');

  let tasks = [];

  // Add task to the DOM
  const addTaskToDOM = (task) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <div class="task-details">
        <span class="task-text">${task.text}</span>
        <span class="task-date">${task.date}</span>
        <span class="task-category">${task.category}</span>
        <span class="task-priority">${task.priority}</span>
      </div>
      <div class="task-actions">
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
      </div>
    `;
    taskList.appendChild(li);

    // Edit task event
    li.querySelector('.edit').addEventListener('click', () => {
      const newTaskText = prompt('Edit task:', task.text);
      const newTaskDate = prompt('Edit date:', task.date);
      const newTaskCategory = prompt('Edit category:', task.category);
      const newTaskPriority = prompt('Edit priority:', task.priority);
      if (newTaskText && newTaskDate && newTaskCategory && newTaskPriority) {
        li.querySelector('.task-text').innerText = newTaskText;
        li.querySelector('.task-date').innerText = newTaskDate;
        li.querySelector('.task-category').innerText = newTaskCategory;
        li.querySelector('.task-priority').innerText = newTaskPriority;
        tasks = tasks.map(t => t === task ? {
          text: newTaskText,
          date: newTaskDate,
          category: newTaskCategory,
          priority: newTaskPriority
        } : t);
      }
    });

    // Delete task event
    li.querySelector('.delete').addEventListener('click', () => {
      taskList.removeChild(li);
      tasks = tasks.filter(t => t !== task);
    });
  };

  // Add task event
  taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value.trim();
    const taskDateValue = taskDate.value;
    const taskCategoryValue = taskCategory.value;
    const taskPriorityValue = taskPriority.value;
    if (taskText && taskDateValue && taskCategoryValue && taskPriorityValue) {
      const task = {
        text: taskText,
        date: taskDateValue,
        category: taskCategoryValue,
        priority: taskPriorityValue
      };
      tasks.push(task);
      addTaskToDOM(task);
      taskInput.value = '';
      taskDate.value = '';
      taskCategory.value = '';
      taskPriority.value = '';
    }
  });

  // Theme toggle event
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
  });
});
