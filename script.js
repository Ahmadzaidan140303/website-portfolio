document.addEventListener("scroll", function () {
  const scrollPos = window.pageYOffset;

  // Parallax Effect untuk H1 di Hero
  const heroTitle = document.querySelector(".hero-content h1");
  if (heroTitle) {
    heroTitle.style.transform = `translateY(${scrollPos * 0.3}px)`;
  }

  // Navbar Shadow Animation on Scroll
  const nav = document.querySelector("nav");
  if (scrollPos > 50) {
    nav.style.boxShadow = "4px 4px 0px #000";
    nav.style.top = "10px";
  } else {
    nav.style.boxShadow = "8px 8px 0px #000";
    nav.style.top = "20px";
  }
});

// Logic untuk menutup menu mobile sudah ada di HTML kamu, itu sudah benar.
