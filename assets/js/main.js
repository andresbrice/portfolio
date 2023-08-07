const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav ul li a");

window.onscroll = () => {
  sections.forEach((section) => {
    const top = window.scrollY;
    const offset = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav ul li a[href*="${id}"]`)
          .classList.add("active");
      });
    }
  });
};

// Función para desplazamiento suave al hacer clic en los enlaces
const smoothScroll = (target) => {
  const element = document.querySelector(target);
  window.scrollTo({
    top: element.offsetTop,
    behavior: "smooth",
  });
};

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = link.getAttribute("href");
    smoothScroll(target);
  });
});

// Obtener el botón hamburguesa y el menú
const hamburgerBtn = document.querySelector(".hamburger-btn");
const navMenu = document.querySelector(".nav-menu");

// Agregar evento de clic al botón hamburguesa para abrir/cerrar el menú
hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
