const title = document.querySelector(".poll__title");
const answers = document.querySelector(".poll__answers");

const xhr = new XMLHttpRequest();
xhr.responseType = "json";

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    const response = xhr.response.data;

    title.textContent = response.title;

    for (let answer of response.answers) {
      const button = document.createElement("button");
      button.className = "poll__answer";
      button.style.marginRight = "5px";
      button.textContent = answer;
      answers.append(button);

      button.addEventListener("click", () => {
        alert("Спасибо, ваш голос засчитан!");
      });
    }
  }
});

xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/poll");
xhr.send();
