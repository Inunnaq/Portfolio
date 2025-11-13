document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.getElementById("burger-menu");
    const navBar = document.getElementById("nav-bar");
  
    burgerMenu.addEventListener("click", () => {
      navBar.classList.toggle("active"); // Brug korrekt id fra HTML
      burgerMenu.classList.toggle("open"); // Tilføj animation til burger-menu
    });
  });
  