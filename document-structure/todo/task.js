const tasksList = document.querySelector(".tasks__list");
const tasksInput = document.querySelector(".tasks__input");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (tasksInput.value) {
    const task = document.createElement("div");
    task.className = "task";
    const taskTitle = document.createElement("div");
    taskTitle.className = "task__title";

    taskTitle.textContent = tasksInput.value.trim();

    const removeBtn = document.createElement("a");
    removeBtn.className = "task__remove";
    removeBtn.textContent = "x";
    removeBtn.href = "#";
    removeBtn.addEventListener("click", (event) => {
      event.preventDefault();
      task.remove();
    });

    task.append(taskTitle, removeBtn);
    tasksList.append(task);
  }
  form.reset();
});
