const editor = document.querySelector("#editor");
const card = document.querySelector(".card");

editor.value = localStorage.getItem("value");

editor.addEventListener("input", (event) => {
  localStorage.setItem("value", event.target.value);
});

const clearBtn = document.createElement("button");
clearBtn.className = "clear-btn";
clearBtn.style.cssText = `
  background-color: red;
  color: white;
  width: 120px;
  height: 40px;
  border: none;
  cursor: pointer;
`;
clearBtn.textContent = "Очистить";
card.append(clearBtn);

const btn = document.querySelector(".clear-btn");

btn.addEventListener("click", () => {
  localStorage.removeItem("value");
  editor.value = "";
});
