const timer = document.getElementById("timer");
let intervalId;

function countdown() {
  const currentNumber = Number(timer.textContent);

  if (currentNumber === 0) {
    alert("Вы победили в конкурсе");
    clearInterval(intervalId);
    location.reload();
  }
  if (currentNumber > 0) {
    timer.textContent = currentNumber - 1;
  }
}

intervalId = setInterval(() => countdown(), 1000);
