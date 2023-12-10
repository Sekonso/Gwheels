const navToggle = document.querySelectorAll(".nav-toggle");
const navList = document.querySelector(".nav-list");

navToggle.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    navList.classList.toggle("inactive");
  });
});
