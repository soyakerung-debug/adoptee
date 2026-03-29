// ==========================
// SEARCH FUNCTIONALITY 🔍
// ==========================
const searchInput = document.querySelector(".search-container input");
const cards = document.querySelectorAll(".card");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    cards.forEach(card => {
      const name = card.querySelector("p").textContent.toLowerCase();

      if (name.includes(value)) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  });
}

// ==========================
// CARD HOVER POP EFFECT
// ==========================
cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px) scale(1.05)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// ==========================
// FADE-IN ON LOAD
// ==========================
window.addEventListener("load", () => {
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
      card.style.transition = "0.5s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 100);
  });
});

// ==========================
// SEARCH ICON CLICK FOCUS
// ==========================
const searchIcon = document.querySelector(".search-icon");

if (searchIcon && searchInput) {
  searchIcon.addEventListener("click", () => {
    searchInput.focus();
  });
}

// ==========================
// FLOATING PAW EFFECT 🐾
// ==========================
function createPaw() {
  const paw = document.createElement("div");
  paw.innerText = "🐾";

  paw.style.position = "fixed";
  paw.style.left = Math.random() * window.innerWidth + "px";
  paw.style.top = "100%";
  paw.style.fontSize = "18px";
  paw.style.opacity = "0.5";
  paw.style.pointerEvents = "none";
  paw.style.transition = "3s linear";

  document.body.appendChild(paw);

  setTimeout(() => {
    paw.style.top = "-10%";
    paw.style.opacity = "0";
  }, 50);

  setTimeout(() => {
    paw.remove();
  }, 3000);
}

// every 3s (not too annoying)
setInterval(createPaw, 3000);

// ==========================
// HERO TEXT ANIMATION
// ==========================
const heroText = document.querySelector(".hero h1");

if (heroText) {
  heroText.style.opacity = "0";
  heroText.style.transform = "translateY(20px)";

  setTimeout(() => {
    heroText.style.transition = "0.8s ease";
    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0)";
  }, 300);
}