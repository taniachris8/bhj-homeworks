const getHole = (index) => document.getElementById(`hole${index}`);
const deadMole = document.getElementById("dead");
const lost = document.getElementById("lost");

for (let i = 1; i < 9; i++) {
  getHole(i).onclick = function () {
    if (getHole(i).className.includes("hole_has-mole")) {
      deadMole.textContent = Number(deadMole.textContent) + 1;
    } else {
      lost.textContent = Number(lost.textContent) + 1;
    }

    if (Number(lost.textContent) === 5) {
      alert("Вы проиграли");
      location.reload();
    } else if (Number(deadMole.textContent) === 9) {
      alert("Победа");
      location.reload();
    }
  };
}
