//================================================================//
// Stiky Navbar & toTop
window.onscroll = function () {
  const header = document.querySelector("header");
  const toTop = document.querySelector("#toTop");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navHeadeFixed");
    header.classList.remove("absolute");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navHeadeFixed");
    header.classList.add("absolute");
    toTop.classList.add("hidden");
    toTop.classList.remove("flex");
  }
};
//================================================================//

//================================================================//
// Hamburger Menu / Open Close Menu (mobile)
const hamburgerMenu = document.querySelector("#hamburgerMenu input");
const navMenu = document.querySelector("#navMenu");

hamburgerMenu.addEventListener("click", function () {
  navMenu.classList.toggle("hidden");
});

//================================================================//

//================================================================//
// Theme Change
const themeToggle = document.querySelector("#themeToggle");
const html = document.querySelector("html");

themeToggle.addEventListener("click", function () {
  if (themeToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeToggle.checked = true;
} else {
  themeToggle.checked = false;
}
//================================================================//

//================================================================//
// Run Feather-icons
feather.replace();

//================================================================//
