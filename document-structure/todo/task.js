const tasksList = document.querySelector(".tasks__list");
const tasksInput = document.querySelector(".tasks__input");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (tasksInput.value.trim()) {
    const title = tasksInput.value.trim();

    tasksList.insertAdjacentHTML(
      "afterbegin",
      `
      <div class="task">
      <div class="task__title">
      ${title}
      </div>
      <a href="#" class="task__remove">&times;</a>
      </div>
      `
    );

    const task = tasksList.querySelector(".task");
    const removeBtn = task.querySelector(".task__remove");

    removeBtn.addEventListener("click", (event) => {
      event.preventDefault();
      task.remove();
    });
  }
  form.reset();
});
