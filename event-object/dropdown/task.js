const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownValue = dropdown.querySelector(".dropdown__value");
  const dropdownList = dropdown.querySelector(".dropdown__list");

  dropdownValue.addEventListener("click", function () {
    dropdownList.classList.toggle("dropdown__list_active");
  });

  const dropdownLinks = dropdown.querySelectorAll(".dropdown__link");

  for (let i = 0; i < dropdownLinks.length; i++) {
    dropdownLinks[i].addEventListener("click", function (event) {
      event.preventDefault();
      dropdownValue.textContent = dropdownLinks[i].textContent;
      dropdownList.classList.remove("dropdown__list_active");
    });
  }
});
