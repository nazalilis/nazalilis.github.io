window.onscroll = function () {
	const header = document.querySelector("header");
	const fixedNav = header.offsetTop;

	if (window.pageYOffset > fixedNav) {
		header.classList.add("navHeadeFixed");
		header.classList.toggle("absolute");
	} else {
		header.classList.remove("navHeadeFixed");
		header.classList.toggle("absolute");
	}
};

const hamburgerMenu = document.querySelector("#hamburgerMenu input");
const navMenu = document.querySelector("#navMenu");

hamburgerMenu.addEventListener("click", function () {
	navMenu.classList.toggle("hidden");
});
