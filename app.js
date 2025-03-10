/* This JavaScript code snippet is creating a mobile menu functionality. Here's a breakdown of what it
does: */

const mobileMenuButton = document.getElementById("mobile-menu");
const mobileMenu = document.getElementById("mobile");
const yearElement = document.querySelector("small");
const getFullYear = new Date().getFullYear();
yearElement.textContent = `© Copyright ${getFullYear} All rights reserved  `;

const handleMobileMenu = () => {
  mobileMenu.classList.toggle("hidden"); //  Keep toggling 'hidden' for initial mobile hiding
  mobileMenu.classList.toggle("translate-y-[-100%]"); // Toggle slide-down position
  mobileMenu.classList.toggle("opacity-0"); // Toggle opacity for fade (optional, but nice)
};

if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    handleMobileMenu();
  });
}
