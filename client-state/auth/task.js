const signin = document.querySelector(".signin");
const welcomeDiv = document.querySelector(".welcome");
const spanUserId = document.querySelector("#user_id");
const form = document.querySelector("#signin__form");

const storedId = JSON.parse(localStorage.getItem("user_id"));

if (storedId) {
  signin.classList.remove("signin_active");
  welcomeDiv.classList.add("welcome_active");
  spanUserId.textContent = storedId;
} else {
  signin.classList.add("signin_active");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const xhr = new XMLHttpRequest();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 400) {
        const data = JSON.parse(xhr.responseText);

        if (data.success) {
          localStorage.setItem("user_id", JSON.stringify(data.user_id));
          signin.classList.remove("signin_active");
          welcomeDiv.classList.add("welcome_active");
          spanUserId.textContent = data.user_id;
        } else {
          alert("Неверный логин или пароль");
        }
      } else {
        alert("Ошибка сервера ");
      }
    });

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth");

    const formData = new FormData(form);
    xhr.send(formData);
  });
}
