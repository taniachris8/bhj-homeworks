const modal = document.querySelector(".modal");
const modalCloseBtn = document.querySelector(".modal__close");

function getCookie(name) {
  const pairs = document.cookie.split("; ");
  const cookie = pairs.find((pair) => pair.startsWith(name + "="));
  return cookie ? cookie.substring(name.length + 1) : null;
}

if (getCookie("wasClosed") !== "true") {
  modal.classList.add("modal_active");
}

modalCloseBtn.addEventListener("click", () => {
  modal.classList.remove("modal_active");
  document.cookie = "wasClosed=true";
});
