var typed = new Typed(".text", {
  strings: ["Front-End Developer", "Back-End Developer", "Full-Stack Developer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((sec) => {
    if (window.scrollY >= sec.offsetTop - 120) current = sec.id;
  });
  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === "#" + current);
  });
});
const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
if (menuIcon) {
  menuIcon.onclick = () => navbar.classList.toggle("active");
}