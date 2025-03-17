"use strict";

// ! -------------------------------------------------------------------------
// ! NAVBAR - Sticky /
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".z-navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

// ! -------------------------------------------------------------------------
// ! SIDE NAV Functionality /
const sidebarIcon = document.querySelector(".hamburger");
const x_mark = document.querySelector(
  ".side-nav .side-nav-container .img-cross .x-mark"
);
const sideNav = document.querySelector(".side-nav .side-nav-container");
const overlay = document.querySelector(".overlay");

// Function to open the side nav
function openSideNav() {
  overlay.classList.add("show"); // Show overlay
  setTimeout(() => {
    sideNav.classList.add("active"); // Show sideNav after a delay
    sidebarIcon.classList.add("active"); // Add active class to hamburger
  }, 100);
}

// Function to close the side nav
function closeSideNav() {
  sideNav.classList.remove("active"); // Hide sideNav first
  setTimeout(() => {
    overlay.classList.remove("show"); // Hide overlay after sideNav hides
  }, 300); // Wait for sideNav transition (0.3s)
  sidebarIcon.classList.remove("active"); // Remove active class from hamburger
}

// * Event Listeners
sidebarIcon.addEventListener("click", () => {
  if (!sideNav.classList.contains("active")) {
    openSideNav();
  } else {
    closeSideNav();
  }
});

x_mark.addEventListener("click", closeSideNav);
overlay.addEventListener("click", closeSideNav);

// Close sideNav when screen size is above 768px
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    closeSideNav();
  }
});
