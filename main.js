function bookTable() {
  alert("Table booked successfully 🍽");
  return false;
}

const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight - 80) {
      sec.classList.add("show");
    }
  });
});