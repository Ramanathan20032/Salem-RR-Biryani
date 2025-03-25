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

// ! -------------------------------------------------------------------------
// ! Image Switching Functionality /
// Array of images for the banner
const images = [
  "salem-rr-images/z-home-page/banner/image-2.jpg",
  "salem-rr-images/z-home-page/banner/image-3.jpg",
  "salem-rr-images/z-home-page/banner/image-4.jpg",
  "salem-rr-images/z-home-page/banner/image-5.jpg",
  "salem-rr-images/z-home-page/banner/image-6.jpg",
  "salem-rr-images/z-home-page/banner/image-7.jpg",
  "salem-rr-images/z-home-page/banner/image-8.jpg",
  "salem-rr-images/z-home-page/banner/image-9.jpg",
  "salem-rr-images/z-home-page/banner/image-10.jpg",
  "salem-rr-images/z-home-page/banner/image-11.jpg",
  "salem-rr-images/z-home-page/banner/image-12.jpg",
];

const bannerWrapper = document.querySelector(".banner-wrapper"); // Select the banner wrapper
const bannerBg = document.querySelector(".banner-bg"); // Select the banner image
let index = 0; // Start from the first image

// Preload images to prevent flickering
images.forEach((src) => {
  const img = new Image();
  img.src = src;
});

// Create overlay element
const overlay1 = document.createElement("div");
overlay1.style.position = "absolute";
overlay1.style.top = "0";
overlay1.style.left = "0";
overlay1.style.width = "100%";
overlay1.style.height = "100%";
overlay1.style.background = "rgba(0, 0, 0, 0.2)";
overlay1.style.transition = "opacity 1s ease-in-out";
overlay1.style.opacity = "0";
bannerWrapper.appendChild(overlay1);

function changeBannerImage() {
  overlay1.style.opacity = "1"; // Black overlay fade-in

  setTimeout(() => {
    index = (index + 1) % images.length; // Loop through images
    bannerBg.src = images[index]; // Update the image source
    overlay1.style.opacity = "0"; // Fade out overlay
  }, 300); // Delay before changing image
}

// Set interval to change image every 4 seconds
setInterval(changeBannerImage, 4000);

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
// ? section-1-wrapper
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
    { threshold: 0.0 }
  );

  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });
});

// !--------------------------------------------------------------------------------
// ? section-2-wrapper
// ! Standard Animation
document.addEventListener("DOMContentLoaded", () => {
  const zoomElements = document.querySelectorAll(
    ".section-2-wrapper .row .e-zoom"
  );

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

// !--------------------------------------------------------------------------------
// ! variety Animation
document.addEventListener("DOMContentLoaded", function () {
  const elementsToObserve = document.querySelectorAll(
    "section-5-wrapper .zoom, section-5-wrapper .up"
  );

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // To trigger only once
        }
      });
    },
    { threshold: 0.0 }
  );

  elementsToObserve.forEach((element) => {
    observer.observe(element);
  });
});

// !--------------------------------------------------------------------------------
// ! catering Animation

// ? image - section
document.addEventListener("DOMContentLoaded", () => {
  const zoomElements = document.querySelectorAll(".section-6-wrapper .e-zoom");

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

//  ? content - section
document.addEventListener("DOMContentLoaded", () => {
  const upElement = document.querySelector(".section-6-wrapper .up");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Ensures animation triggers only once
        }
      });
    },
    { threshold: 0.0 }
  ); // Adjust threshold for better triggering

  if (upElement) {
    observer.observe(upElement);
  }
});

// !--------------------------------------------------------------------------------
// ! Branding text Animation
document.addEventListener("DOMContentLoaded", () => {
  const options = {
    root: null, // Viewport
    threshold: 0.0, // Trigger when the element is even 0% visible
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, options);

  // Targeting both elements for the animation
  const firstElements = document.querySelectorAll(".section-7-wrapper .first");
  const secondElements = document.querySelectorAll(
    ".section-7-wrapper .second"
  );

  firstElements.forEach((el) => observer.observe(el));
  secondElements.forEach((el) => observer.observe(el));
});

// ? Animation
// ? ----------------------------------------------------
// ? ----------------------------------------------------

// !--------------------------------------------------------------------------------
// ! Popular Section Slider
const popularSwiper = new Swiper(".popularSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  speed: 1000, // Add smooth transition speed (1000ms = 1s)
  effect: "slide", // Ensure smooth slide effect
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, // Pause on hover
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 576px
    576: {
      slidesPerView: 2,
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
    },
    // when window width is >= 992px
    992: {
      slidesPerView: 4,
    },
  },
});

// !--------------------------------------------------------------------------------
// ! Testimonial Section Slider
// var swiper = new Swiper(".testimonial-slider", {
//   loop: true,
//   speed: 1000, // Add smooth transition speed (1000ms = 1s)
//   effect: "slide",
//   autoplay: {
//     delay: 3500, // Auto-slide every 3.5 seconds
//     disableOnInteraction: false,
//   },
//   slidesPerView: 1,
//   spaceBetween: 20,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     576: {
//       slidesPerView: 2,
//     },
//     768: {
//       slidesPerView: 3, // Show 2 slides on tablets
//     },
//     1024: {
//       slidesPerView: 3, // Show 3 slides on large screens
//     },
//   },
// });

// // ? Function to handle cursor changes on long press
// const slider = document.querySelector(".testimonial-slider .swiper-wrapper");

// // Default cursor style
// slider.style.cursor = "grab";

// slider.addEventListener("mousedown", () => {
//   slider.style.cursor = "grabbing"; // Change to grabbing when pressed
// });

// slider.addEventListener("mouseup", () => {
//   slider.style.cursor = "grab"; // Revert to grab when released
// });

// // Touch support for mobile
// slider.addEventListener("touchstart", () => {
//   slider.style.cursor = "grabbing";
// });

// slider.addEventListener("touchend", () => {
//   slider.style.cursor = "grab";
// });

var swiper = new Swiper(".video-swiper", {
  loop: true,
  speed: 1000,
  effect: "slide",
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    576: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    992: { slidesPerView: 3 },
  },
});

// Open Video Overlay
function openOverlay(videoElement) {
  const overlay = document.getElementById("videoOverlay");
  const overlayVideo = document.getElementById("overlayVideo");

  // Set the video source
  overlayVideo.src = videoElement.querySelector("source").src;

  // Remove default controls
  overlayVideo.removeAttribute("controls");

  // Show the overlay
  overlay.style.display = "flex";

  // Play the video
  overlayVideo.play();
}

// Close Video Overlay
function closeOverlay() {
  const overlay = document.getElementById("videoOverlay");
  const overlayVideo = document.getElementById("overlayVideo");

  // Pause the video and reset source
  overlayVideo.pause();
  overlayVideo.src = "";

  // Hide the overlay
  overlay.style.display = "none";
}

// Toggle Play/Pause on Click
document.getElementById("overlayVideo").addEventListener("click", function () {
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});
