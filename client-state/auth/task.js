const signin = document.querySelector(".signin");
const welcomeDiv = document.querySelector(".welcome");
const spanUserId = document.querySelector("#user_id");
const form = document.querySelector("#signin__form");

function createLogoutButton() {
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
    localStorage.clear();
    location.reload();
  });
}

let storedId = null;

try {
  storedId = JSON.parse(localStorage.getItem("user_id"));
} catch (error) {
  console.error("Ошибка парсинга JSON:", error);
}

if (storedId) {
  signin.classList.remove("signin_active");
  welcomeDiv.classList.add("welcome_active");
  spanUserId.textContent = storedId;
  createLogoutButton();
} else {
  signin.classList.add("signin_active");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        try {
          const data = JSON.parse(xhr.responseText);

          if (data.success) {
            localStorage.setItem("user_id", JSON.stringify(data.user_id));
            signin.classList.remove("signin_active");
            welcomeDiv.classList.add("welcome_active");
            spanUserId.textContent = data.user_id;
            createLogoutButton();
          } else {
            alert("Неверный логин или пароль");
          }
        } catch (error) {
          console.error("Ошибка парсинга JSON:", error);
          alert("Ошибка сервера, попробуйте ещё раз позже");
        }
      } else {
        console.error("Ошибка HTTP запроса");
        alert("Ошибка сервера");
      }
    });

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

    const formData = new FormData(form);
    xhr.send(formData);

    form.reset();
  });
}
