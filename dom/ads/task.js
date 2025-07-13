const rotatorCases = document.querySelectorAll(".rotator__case");

let i = 0;

setInterval(() => {
  if (i === rotatorCases.length) {
    i = 0;
  }

  rotatorCases.forEach((rotator) =>
    rotator.classList.remove("rotator__case_active")
  );

  rotatorCases[i].classList.add("rotator__case_active");
  i++;
}, 1000);
