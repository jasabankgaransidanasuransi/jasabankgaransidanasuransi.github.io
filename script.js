// ===============================
// PT ABEKA MANDIRI SOLUSI
// JavaScript Website
// ===============================

document.addEventListener("DOMContentLoaded", function () {

  /* ===============================
     Smooth Scroll (Anchor)
  =============================== */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href'))
        .scrollIntoView({ behavior: 'smooth' });
    });
  });


  /* ===============================
     Navbar Shadow on Scroll
  =============================== */
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      header.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";
    } else {
      header.style.boxShadow = "none";
    }
  });


  /* ===============================
     WhatsApp Click Tracking
     (SEO & Marketing Ready)
  =============================== */
  const waButtons = document.querySelectorAll(".wa-float, .btn");

  waButtons.forEach(button => {
    button.addEventListener("click", () => {
      console.log("WhatsApp CTA clicked");

      // Contoh siap untuk Google Analytics / Meta Pixel
      // gtag('event', 'click', { event_category: 'WhatsApp', event_label: 'CTA' });
    });
  });


  /* ===============================
     Scroll Animation (Fade In)
  =============================== */
  const animatedElements = document.querySelectorAll(
    ".card, .hero div, .section-title"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = 1;
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.2 }
  );

  animatedElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
    observer.observe(el);
  });

});
