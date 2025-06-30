const btn = document.getElementById("tasks__add");
const input = document.getElementById("task__input");
const taskList = document.getElementById("tasks__list");

function createTask(text) {
  if (!text.trim()) return;

  const task = document.createElement("div");
  task.classList.add("task");

  const taskTitle = document.createElement("div");
  taskTitle.classList.add("task__title");
  taskTitle.textContent = text;

  const removeLink = document.createElement("a");
  removeLink.classList.add("task__remove");
  removeLink.setAttribute("href", "#");
  removeLink.innerHTML = "&times;";
  removeLink.addEventListener("click", (e) => {
    e.preventDefault();
    task.remove();
  });

  task.appendChild(taskTitle);
  task.appendChild(removeLink);
  taskList.prepend(task);

  input.value = "";
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
  createTask(input.value);
});

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    createTask(input.value);
  }
});