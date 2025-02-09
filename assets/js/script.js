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
const windowObject = window; 
windowObject.addEventListener("scroll", function () {
  const scrollY = windowObject.scrollY;
  const horizontalScrollElement = this.document.getElementById("workPreview");
  const horizontalScrollElement2 = this.document.getElementById("testimonyPreview");
  
  horizontalScrollElement.scrollLeft = scrollY * 0.2;
  horizontalScrollElement2.scrollLeft = scrollY * 0.2;
});
