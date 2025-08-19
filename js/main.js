document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Fade in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, observerOptions);

document.querySelectorAll(".fade-in").forEach((el) => {
  observer.observe(el);
});

// Article filtering
function filterArticles(category) {
  const articles = document.querySelectorAll(".article-item");
  const buttons = document.querySelectorAll(".category-btn");

  // Update active button
  buttons.forEach((btn) => btn.classList.remove("active"));
  event.target.classList.add("active");

  // Filter articles
  articles.forEach((article) => {
    if (category === "all" || article.dataset.category === category) {
      article.style.display = "block";
      setTimeout(() => {
        article.style.opacity = "1";
        article.style.transform = "translateY(0)";
      }, 100);
    } else {
      article.style.opacity = "0";
      article.style.transform = "translateY(20px)";
      setTimeout(() => {
        article.style.display = "none";
      }, 300);
    }
  });
}

// Service functions
function showConsultationForm() {
  alert("Fitur konsultasi online akan segera tersedia! Hubungi hotline darurat untuk konsultasi mendesak.");
}

function showVaccinationSchedule() {
  alert("Jadwal vaksinasi akan ditampilkan di sini. Fitur dalam pengembangan.");
}

function showGroomingServices() {
  alert("Layanan grooming tersedia di klinik mitra kami. Hubungi untuk booking.");
}

// Navbar background change on scroll
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.style.background = "rgba(255, 255, 255, 0.98)";
  } else {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
  }
});

// Add loading animation
window.addEventListener("load", function () {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});
