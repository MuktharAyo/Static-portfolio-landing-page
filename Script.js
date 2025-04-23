const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav .mobile-menu");
const navLinks = document.querySelectorAll("nav .mobile-menu li a");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1024) {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

// magnetic-button
const btn = document.querySelector(".mag-btn");

btn.addEventListener("mousemove", (e) => {
  const rect = btn.getBoundingClientRect();
  const x = e.clientX - rect.left - rect.width / 2;
  const y = e.clientY - rect.top - rect.height / 2;

  btn.style.transform = `translate3d(${x * 1}px, ${y * 1}px, 0)`;
});

btn.addEventListener("mouseleave", () => {
  btn.style.transform = "translate3d(0, 0, 0)";
});

// featured
// document.addEventListener("DOMContentLoaded", () => {
//   const slider = document.querySelector(".featured-slider");
//   const slides = document.querySelectorAll(".featured");

//   // Clone slides for infinite loop
//   slides.forEach((slide) => {
//     const clone = slide.cloneNode(true);
//     slider.appendChild(clone);
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//     const slider = document.querySelector(".featured-slider");
//     const slides = document.querySelectorAll(".featured");
//     const originalSlidesCount = slides.length / 2; // Since duplicates are already in HTML
//     let currentIndex = 0;
//     const transitionDuration = 500; // Match this with CSS transition duration in ms

//     // Set up transition
//     slider.style.transition = `transform ${transitionDuration}ms ease`;

//     function nextSlide() {
//       currentIndex++;

//       // Check if we've reached the end of original slides
//       if (currentIndex >= originalSlidesCount) {
//         // Disable transition for instant reset
//         slider.style.transition = 'none';
//         currentIndex = 0;
//         slider.style.transform = `translateX(0%)`;

//         // Force reflow to apply the reset immediately
//         void slider.offsetHeight;

//         // Re-enable transition
//         slider.style.transition = `transform ${transitionDuration}ms ease`;
//       } else {
//         slider.style.transform = `translateX(-${currentIndex * 100}%)`;
//       }
//     }

//     // Change slide every 3 seconds (adjust as needed)
//     setInterval(nextSlide, 3000);
//   });

// stats-counter
const section = document.querySelector("#stat"),
  stats = document.querySelectorAll(".stat h1");

const animate = (el, target, suffix, duration = 2000) => {
  let start = Date.now();
  const update = () => {
    const elapsed = Date.now() - start;
    const progress = Math.min(elapsed / duration, 1);
    el.textContent = Math.floor(progress * target) + suffix;
    progress < 1 ? requestAnimationFrame(update) : null;
  };
  requestAnimationFrame(update);
};

new IntersectionObserver(
  ([entry]) => {
    if (entry.isIntersecting) {
      stats.forEach((stat) => {
        const original = stat.textContent;
        const suffix = original.replace(/\d/g, "");
        const target = parseInt(original) || 0;
        stat.textContent = "0" + suffix;
        animate(stat, target, suffix, 2000);
      });
    }
  },
  { threshold: 0.5 }
).observe(section);

// feature-slider
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector(".featured-slider");
  const slides = document.querySelectorAll(".featured");

  // Clone each original slide once to create the infinite loop
  slides.forEach((slide) => {
    const clone = slide.cloneNode(true);
    slider.appendChild(clone);
  });
});

// client-testimonial
$(".testimonials-container").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  margin: 10,
  nav: true,
  navText: [
    "<i class= 'fa-solid fa-arrow-left'></i>",
    "<i class= 'fa-solid fa-arrow-right'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
  },
});
