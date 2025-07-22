const progress = document.getElementById("progress");
const form = document.querySelector("#form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const xhr = new XMLHttpRequest();

  xhr.upload.addEventListener("progress", (e) => {
    if (e.lengthComputable) {
      const percentComplete = e.loaded / e.total;
      progress.value = percentComplete;
    }
  });

  xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/upload");

  xhr.addEventListener("load", () => {
    if (xhr.status >= 200 && xhr.status < 400) {
      alert("Файл успешно загружен!");
    } else {
      alert("Ошибка при загрузке файла");
    }
  });

  const formData = new FormData(form);
  xhr.send(formData);
});
