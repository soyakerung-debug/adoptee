// Fade-in
const elements = document.querySelectorAll(
  ".hero, .breed-details, .price-card, .purchase-section"
);

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});

// Animation CSS
const style = document.createElement("style");
style.innerHTML = `
.hidden {
  opacity: 0;
  transform: translateY(40px);
}
.show {
  opacity: 1;
  transform: translateY(0);
  transition: 0.8s ease;
}
`;
document.head.appendChild(style);

// Button hover
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.1)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

// Image tilt
const img = document.querySelector(".breed-img");

if (img) {
  img.addEventListener("mousemove", (e) => {
    const rect = img.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;

    img.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  img.addEventListener("mouseleave", () => {
    img.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
}

// Paw animation
function createPaw() {
  const paw = document.createElement("div");
  paw.innerText = "🐾";

  paw.style.position = "fixed";
  paw.style.left = Math.random() * window.innerWidth + "px";
  paw.style.top = "100%";
  paw.style.fontSize = "20px";
  paw.style.opacity = 0.6;
  paw.style.pointerEvents = "none";
  paw.style.transition = "3s linear";

  document.body.appendChild(paw);

  setTimeout(() => {
    paw.style.top = "-10%";
    paw.style.opacity = 0;
  }, 50);

  setTimeout(() => paw.remove(), 3000);
}

setInterval(createPaw, 2500);
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