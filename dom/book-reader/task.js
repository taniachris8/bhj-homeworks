const fontSizes = document.querySelectorAll(".font-size");
const book = document.querySelector(".book");

fontSizes.forEach((size) => {
  size.addEventListener("click", (e) => {
    e.preventDefault();

    fontSizes.forEach((font) => font.classList.remove("font-size_active"));
    size.classList.add("font-size_active");

    book.classList.remove("book_fs-small", "book_fs-big");
    if (size.dataset.size === "small") {
      book.classList.add("book_fs-small");
    } else if (size.dataset.size === "big") {
      book.classList.add("book_fs-big");
    }
  });
});
