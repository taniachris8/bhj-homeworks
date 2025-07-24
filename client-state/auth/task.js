const signin = document.querySelector(".signin");
const welcomeDiv = document.querySelector(".welcome");
const spanUserId = document.querySelector("#user_id");
const form = document.querySelector("#signin__form");

function createLogoutButton() {
  if (document.querySelector(".logout-btn")) return;

  const logoutBtn = document.createElement("button");
  logoutBtn.className = "logout-btn";
  logoutBtn.style.cssText = `
    background-color: green;
    color: white;
    width: 120px;
    height: 40px;
    border: none;
    cursor: pointer;
    margin-left: 20px;
    `;
  logoutBtn.textContent = "Выйти";
  welcomeDiv.append(logoutBtn);

  const btn = document.querySelector(".logout-btn");

  btn.addEventListener("click", () => {
    localStorage.removeItem("user_id");
    welcomeDiv.classList.remove("welcome_active");
    signin.classList.add("signin_active");
  });
}

let storedId = null;

try {
  storedId = JSON.parse(localStorage.getItem("user_id"));
} catch (error) {
  console.error("Ошибка парсинга JSON:", error);
}

function showWelcomeUser(userId) {
  signin.classList.remove("signin_active");
  welcomeDiv.classList.add("welcome_active");
  spanUserId.textContent = userId;
}

if (storedId) {
  showWelcomeUser(storedId);
  createLogoutButton();
} else {
  signin.classList.add("signin_active");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.responseType = "json";

  xhr.addEventListener("load", () => {
    try {
      if (xhr.response.success) {
        localStorage.setItem("user_id", JSON.stringify(xhr.response.user_id));

        showWelcomeUser(xhr.response.user_id);
        createLogoutButton();
      } else {
        alert("Неверный логин или пароль");
      }
    } catch (error) {
      console.error("Ошибка парсинга JSON:", error);
      alert("Ошибка сервера, попробуйте ещё раз позже");
    }
  });

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

  const formData = new FormData(form);
  xhr.send(formData);

  form.reset();
});
