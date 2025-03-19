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


// !--------------------------------------------------------------------------------
// ! Testimonial Section Slider
var swiper = new Swiper(".testimonial-slider", {
  loop: true,
  speed: 1000, // Add smooth transition speed (1000ms = 1s)
  effect: "slide",
  autoplay: {
    delay: 3500, // Auto-slide every 3.5 seconds
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1, // Show 2 slides on tablets
    },
    1024: {
      slidesPerView: 1, // Show 3 slides on large screens
    },
  },
});

// ? Function to handle cursor changes on long press
const slider = document.querySelector(".testimonial-slider .swiper-wrapper");

// Default cursor style
slider.style.cursor = "grab";

slider.addEventListener("mousedown", () => {
  slider.style.cursor = "grabbing"; // Change to grabbing when pressed
});

slider.addEventListener("mouseup", () => {
  slider.style.cursor = "grab"; // Revert to grab when released
});

// Touch support for mobile
slider.addEventListener("touchstart", () => {
  slider.style.cursor = "grabbing";
});

slider.addEventListener("touchend", () => {
  slider.style.cursor = "grab";
});
