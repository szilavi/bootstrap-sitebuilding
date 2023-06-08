const navbar = document.querySelector(".navbar");

const brand = document.querySelector(".navbar-brand");

window.addEventListener("scroll", changeNavBar);

function changeNavBar() {
  if (window.scrollY !== 0) {
    navbar.classList.add("bg-white");
    navbar.classList.add("fixed-top");
  } else {
    navbar.classList.remove("bg-white");
    navbar.classList.remove("fixed-top");
  }
}

// navMenu.forEach((i) => {
//   i.addEventListener("mouseover", changeColorWhite);
//   i.addEventListener("mouseleave", changeColorGrey);
// });

function changeColorWhite(e) {
  if (window.scrollY === 0) {
    e.style.color = "#ffffff";
  }
}

function changeColorGrey(e) {
  e.style.color = "#a6a6a6";
}

function changeColorGreyBrand(e) {
  if (window.scrollY === 0) {
    e.style.color = "#ffffff";
  }
}

function changeColorYellowBrand(e) {
  e.style.color = "#ffcd01";
}
