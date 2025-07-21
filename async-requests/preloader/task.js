const loader = document.querySelector(".loader");
const items = document.querySelector("#items");

const xhr = new XMLHttpRequest();
xhr.responseType = "json";

xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === xhr.DONE) {
    loader.classList.remove("loader_active");

    const response = xhr.response.response.Valute;

    for (let key in response) {
      const currency = response[key];

      items.insertAdjacentHTML(
        "afterbegin",
        `
                  <div class="item">
                  <div class="item__code">
                          ${currency.CharCode}
                      </div>
                      <div class="item__value">
                      ${currency.Value}
                      </div>
                      <div class="item__currency">
                       руб.
                      </div>
                </div>
                  `
      );
    }
  }
});

xhr.open(
  "GET",
  "https://students.netoservices.ru/nestjs-backend/slow-get-courses"
);
xhr.send();
