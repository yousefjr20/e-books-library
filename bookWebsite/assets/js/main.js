// search icon action
const searchBtn = document.getElementById("search-button");
const searchClose = document.getElementById("search-close");
const searchContent = document.getElementById("search-content");

if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    searchContent.classList.add("show-content");
  });
}

if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-content");
  });
}

// login icon action
const loginBtn = document.getElementById("login-button");
const loginClose = document.getElementById("login-close");
const loginContent = document.getElementById("login-content");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    loginContent.classList.add("show-content");
  });
}

if (loginClose) {
  loginClose.addEventListener("click", () => {
    loginContent.classList.remove("show-content");
  });
}

// Home Swiper
let swiperHome = new Swiper(".home-swiper", {
  loop: true,
  spaceBetween: -24,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1220: {
      spaceBetween: -32,
    },
  },
});

// header shadow

const shadowHeader = () => {
  const header = document.getElementById("header");
  this.scrollY >= 50
    ? header.classList.add("shadow-header")
    : header.classList.remove("shadow-header");
};

// Features Swiper
let swiperFeatures = new Swiper(".features-swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    1150: {
      slidesPerView: 4,
      centeredSlides: false,
    },
  },
});
// News Swiper
let swiperNews = new Swiper(".news-swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
    },
  },
});
// Testimonials Swiper
let swiperTestimonial = new Swiper(".testimonial-swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});

// show scroll up button function

const scrollUp = () => {
  const scrollUPBtn = document.getElementById("scroll-up");
  this.scrollY >= 350
    ? scrollUPBtn.classList.add("show-scroll")
    : scrollUPBtn.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

// active link function

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-menu a");

function scrollActive() {
  let scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50; // adjust for fixed header if needed
    const sectionId = section.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active-link");
        }
      });
    }
  });
}

window.addEventListener("scroll", scrollActive);

// DARK COLOR THEME //

const themeBtn = document.getElementById("theme-button");
const darkTheme = "dark-theme";
// light theme icon
const iconTheme = "ri-sun-line";

// prev selected
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// optain the current theme

const getCurrentTheme = () => {
  document.body.classList.contains(darkTheme) ? "dark" : "light";
};

const getCurrentIcon = () => {
  themeBtn.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";
};

// if user previously choose a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeBtn.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// activate and deactivate theme manually by the button
themeBtn.addEventListener("click", () => {
  // add or remove dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeBtn.classList.toggle(iconTheme);
  // set the local storage value
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// ANIMATIONS //
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  // reset : true , //animation repeat
});

sr.reveal(`.home-data , .features-container , .new-container,
  .join-data , .testimonial-container , .footer`);
sr.reveal(`.home-images`, { delay: 600 });
sr.reveal(`.sevices-card`, { interval: 100 });
sr.reveal(`.discount-data`, { origin: "left" });
sr.reveal(`.discount-images`, { origin: "right" });
sr.reveal(`.new-card`, { origin: "right" });
