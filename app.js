const mobileMenuButton = document.getElementById("mobile-menu"); // Select button by ID
const mobileMenu = document.getElementById("mobile"); // Select menu wrapper by ID
if (mobileMenuButton && mobileMenu) {
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden"); //  Keep toggling 'hidden' for initial mobile hiding
    mobileMenu.classList.toggle("translate-y-[-100%]"); // Toggle slide-down position
    mobileMenu.classList.toggle("opacity-0"); // Toggle opacity for fade (optional, but nice)
  });
}
