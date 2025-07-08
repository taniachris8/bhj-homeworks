const clickerCounter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");

cookie.onclick = function countUp() {
  const currentNumber = Number(clickerCounter.textContent);
  clickerCounter.textContent = currentNumber + 1;

  if (cookie.width === 200) {
    cookie.width = 100;
  } else {
    cookie.width = 200;
  }
};
