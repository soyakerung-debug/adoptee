// ==========================
// Fade-in on Scroll
// ==========================
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

// ==========================
// Add CSS dynamically for animation
// ==========================
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

// ==========================
// Button Bounce Effect
// ==========================
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.transform = "scale(1.1)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

// ==========================
// Image Tilt Effect
// ==========================
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

// ==========================
// Cute Paw Floating Effect 🐾
// ==========================
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

  setTimeout(() => {
    paw.remove();
  }, 3000);
}

// spawn paws every few seconds
setInterval(createPaw, 2500);

// ==========================
// Form Submission Popup 💌
// ==========================
const form = document.querySelector(".purchase-form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Create popup
    const popup = document.createElement("div");
    popup.innerHTML = "💖 Inquiry Sent! We'll contact you soon!";
    
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "#c97a1c";
    popup.style.color = "#fff";
    popup.style.padding = "20px 30px";
    popup.style.borderRadius = "15px";
    popup.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
    popup.style.fontSize = "16px";
    popup.style.zIndex = "9999";

    document.body.appendChild(popup);

    // remove popup
    setTimeout(() => {
      popup.remove();
    }, 2500);

    form.reset();
  });
}