const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

let isOpen = false;

hamburger.addEventListener("click", () => {
  isOpen = !isOpen;
  navMenu.classList.toggle("show");

  // Ganti icon
  if (isOpen) {
    hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
  } else {
    hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
  }
});
