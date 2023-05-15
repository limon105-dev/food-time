"use strict";

window.onload = () => {

  // sticky header
  const header = document.querySelector(".header_nav")
  if (header) {
    function classAdd() {
      window.addEventListener("scroll", () => {
        const header = document.querySelector(".header_nav")
        // let headerHeight = document.querySelector("header").offsetHeight;

        if (document.documentElement.scrollTop > 350) {
          header.classList.add("nav-fixed");
        } else if (header.classList.contains("nav-fixed") && document.documentElement.scrollTop < 350) {
          header.classList.remove("nav-fixed");
        }
      })
    }

    classAdd();
  }
};
