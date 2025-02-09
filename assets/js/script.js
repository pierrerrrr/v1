// navbar js
window.addEventListener("scroll", () => {
  var nav = this.document.querySelector("nav");
  nav.classList.toggle("sticky", window.scrollY > 0);
});

// navbar responsive
var menu = document.querySelector(".menu");
var menuBtn = document.querySelector(".menu-btn");
var closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});

// work preview
const windowObject = window; // pensar numa maneira de fazer funcionar em qualquer seção do site
windowObject.addEventListener("scroll", function () {
  const scrollY = windowObject.scrollY;
  const horizontalScrollElement = this.document.getElementById("workPreview");
  const horizontalScrollElement2 =
    this.document.getElementById("testimonyPreview");

  horizontalScrollElement.scrollLeft = scrollY * 0.2;
  horizontalScrollElement2.scrollLeft = scrollY * 0.2;
});

// scroll reveal
const sr = ScrollReveal({
  origin: "bottom",
  distance: "60px",
  duration: 1000,
  delay: 100,
  easing: "ease-in-out",
});

// hero page section
sr.reveal(".hero-page .gradient-blue");
sr.reveal(".hero-page-headline h1", { delay: 200, origin: left });
sr.reveal(".hero-page-headline p", { delay: 500, origin: left });
sr.reveal(".tagline", { delay: 300, origin: left });
sr.reveal(".brands", { delay: 500 });