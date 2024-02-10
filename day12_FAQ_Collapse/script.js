const toggles = document.querySelectorAll(".faq-toggle");
const dropdown = document.querySelectorAll(".bi-chevron-down");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});