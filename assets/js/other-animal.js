// ==========================
// SEARCH FUNCTION 🔍
// ==========================
const searchInput = document.querySelector(".search-container input");
const cards = document.querySelectorAll(".card");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    cards.forEach(card => {
      const text = card.innerText.toLowerCase();
      card.style.display = text.includes(value) ? "flex" : "none";
    });
  });
}

// ==========================
// CARD HEART POP 💗
// ==========================
cards.forEach(card => {
  card.addEventListener("click", (e) => {
    const heart = document.createElement("div");
    heart.innerText = "💗";

    heart.style.position = "fixed";
    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";
    heart.style.fontSize = "18px";
    heart.style.pointerEvents = "none";
    heart.style.transition = "0.8s ease";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.style.transform = "translateY(-40px) scale(1.4)";
      heart.style.opacity = "0";
    }, 10);

    setTimeout(() => heart.remove(), 800);
  });
});

// ==========================
// CARD HOVER POP
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
// FADE-IN STAGGER ✨
// ==========================
window.addEventListener("load", () => {
  cards.forEach((card, index) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
      card.style.transition = "0.6s ease";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, index * 120);
  });
});

// ==========================
// SEARCH ICON CLICK
// ==========================
const searchIcon = document.querySelector(".search-icon");

if (searchIcon && searchInput) {
  searchIcon.addEventListener("click", () => {
    searchInput.focus();
  });
}

// ==========================
// FLOATING MIXED ANIMALS 🐰🦜🐹
// ==========================
const emojis = ["🐰", "🐹", "🦜", "🐾"];

function createFloat() {
  const el = document.createElement("div");
  el.innerText = emojis[Math.floor(Math.random() * emojis.length)];

  el.style.position = "fixed";
  el.style.left = Math.random() * window.innerWidth + "px";
  el.style.top = "100%";
  el.style.fontSize = "18px";
  el.style.opacity = "0.5";
  el.style.pointerEvents = "none";
  el.style.transition = "3s linear";

  document.body.appendChild(el);

  setTimeout(() => {
    el.style.top = "-10%";
    el.style.opacity = "0";
  }, 50);

  setTimeout(() => el.remove(), 3000);
}

setInterval(createFloat, 3000);

// ==========================
// SPARKLE CLICK ✨
// ==========================
document.addEventListener("click", (e) => {
  const sparkle = document.createElement("div");
  sparkle.innerText = "✨";

  sparkle.style.position = "fixed";
  sparkle.style.left = e.clientX + "px";
  sparkle.style.top = e.clientY + "px";
  sparkle.style.fontSize = "14px";
  sparkle.style.pointerEvents = "none";
  sparkle.style.transition = "0.6s ease";

  document.body.appendChild(sparkle);

  setTimeout(() => {
    sparkle.style.transform = "translateY(-20px)";
    sparkle.style.opacity = "0";
  }, 10);

  setTimeout(() => sparkle.remove(), 600);
});

// ==========================
// HERO TEXT ANIMATION
// ==========================
const heroText = document.querySelector(".hero");

if (heroText) {
  heroText.style.opacity = "0";
  heroText.style.transform = "translateY(20px)";

  setTimeout(() => {
    heroText.style.transition = "0.8s ease";
    heroText.style.opacity = "1";
    heroText.style.transform = "translateY(0)";
  }, 300);
}
function comingSoon(e) {
    e.preventDefault();

    const popup = document.createElement("div");
    popup.innerText = "🚧 Social Media Coming Soon!";

    popup.style.position = "fixed";
    popup.style.bottom = "30px";
    popup.style.left = "50%";
    popup.style.transform = "translateX(-50%)";

    // 🎨 MATCH YOUR COLOR PALETTE
    popup.style.background = "linear-gradient(135deg, #c9c05e, #c97a1c)";
    popup.style.color = "#fff";
    popup.style.padding = "14px 22px";
    popup.style.borderRadius = "25px";
    popup.style.fontSize = "14px";
    popup.style.boxShadow = "0 5px 15px rgba(0,0,0,0.2)";
    popup.style.zIndex = "9999";

    document.body.appendChild(popup);

    setTimeout(() => {
        popup.remove();
    }, 2000);
}