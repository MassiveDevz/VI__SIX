function handleNav() {
  const menu = document.getElementById("mobileMenu");
  const openIcon = document.getElementById("menuOpen");
  const closeIcon = document.getElementById("menuClose");

  const isOpen = menu.classList.contains("top-0");

  if (isOpen) {
    // Close menu - move to top: -200%
    menu.classList.remove("top-0");
    menu.classList.add("-top-[200%]");
  } else {
    // Open menu - move to top: 0
    menu.classList.remove("-top-[200%]");
    menu.classList.add("top-0");
  }

  // Toggle icons
  openIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
}
