const elementWithTooltip = document.querySelectorAll(".has-tooltip");

const tooltip = document.createElement("div");
tooltip.className = "tooltip";
document.body.append(tooltip);

elementWithTooltip.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      tooltip.classList.contains("tooltip_active") &&
      tooltip.textContent === element.title
    ) {
      tooltip.classList.remove("tooltip_active");
        return;
    }

    tooltip.textContent = element.title;

    const { top, left } = element.getBoundingClientRect();
    tooltip.style.top = `${top + 20}px`;
    tooltip.style.left = `${left}px`;

    tooltip.classList.add("tooltip_active");
  });
});
