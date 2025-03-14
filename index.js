"use strict";

// ! -------------------------------------------------------------------------
// ! PRELOAD - loading will be end after document is loaded /
document.addEventListener("DOMContentLoaded", function () {
  const preloader = document.querySelector(".preload");

  window.addEventListener("load", function () {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
  });
});

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
const x_mark = document.querySelector(".side-nav .side-nav-container .img-cross .x-mark");
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


// ! -------------------------------------------------------------------------
// ! Image Switching Functionality /
const images = [
  "Images/background-image/slider_1.jpg",
  "Images/background-image/slider_2.jpg",
  "Images/background-image/slider_3.jpg",
  "Images/background-image/slider_4.jpg",
  "Images/background-image/slider_5.jpg"
];

let currentIndex = 0;
const banner = document.querySelector(".banner-wrapper");

// Create overlay layers for smooth transition
const overlay1 = document.createElement("div");
const overlay2 = document.createElement("div");

[overlay1, overlay2].forEach(overlay => {
  overlay.style.position = "absolute";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.backgroundSize = "cover";
  overlay.style.backgroundPosition = "center";
  overlay.style.transition = "opacity 2s ease-in-out";
  overlay.style.opacity = 0;
  banner.appendChild(overlay);
});

// Initialize overlays
overlay1.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)), url(${images[0]})`;
overlay1.style.opacity = 1;
let activeOverlay = overlay1;
let nextOverlay = overlay2;

// Function to change background smoothly
function changeBackground() {
  currentIndex = (currentIndex + 1) % images.length;
  // nextOverlay.style.backgroundImage = `url(${images[currentIndex]})`;
  nextOverlay.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1)), url(${images[currentIndex]})`;
  nextOverlay.style.opacity = 1;

  setTimeout(() => {
    activeOverlay.style.opacity = 0;
    [activeOverlay, nextOverlay] = [nextOverlay, activeOverlay]; // Swap overlays
  }, 2000);
}

// Start changing images every 5 seconds to ensure smooth transitions
setInterval(changeBackground, 5000);


// !--------------------------------------------------------------------------------
// ! Gallery In - View
const galleryImages = document.querySelectorAll(".big, .small");

// Get the lightbox and lightbox image elements
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const closeBtn = document.querySelector(".lightbox .close");

// Add event listener to each .big and .small container
galleryImages.forEach((container) => {
  container.addEventListener("click", (e) => {
    // Get the inner img element inside the clicked .big or .small div
    const imgElement = container.querySelector("img");
    
    if (imgElement) {
      lightboxImage.src = imgElement.src;
      lightbox.style.display = "flex";
    }
  });
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
  }
});



// ? ----------------------------------------------------
// ? ----------------------------------------------------
// ? Animation

// !--------------------------------------------------------------------------------
// ! About Us Animation
document.addEventListener("DOMContentLoaded", function () {
  const elementsToObserve = document.querySelectorAll(".zoom, .up");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // To trigger only once
        }
      });
    },
    { threshold: 0.1 }
  );

  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });
});


// !--------------------------------------------------------------------------------
// ! Standard Animation
document.addEventListener("DOMContentLoaded", () => {
  const zoomElements = document.querySelectorAll(".standard-wrapper .row .e-zoom");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target); 
      }
    });
  });

  zoomElements.forEach((element) => {
    observer.observe(element);
  });
});

// ? Animation
// ? ----------------------------------------------------
// ? ----------------------------------------------------
