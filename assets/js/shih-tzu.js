// ==========================
// Smooth Scroll to Form
// ==========================
const adoptBtn = document.querySelector(".adopt-btn");

if (adoptBtn) {
  adoptBtn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("#adopt-form").scrollIntoView({
      behavior: "smooth"
    });
  });
}

// ==========================
// Fade In on Scroll
// ==========================
const elements = document.querySelectorAll(
  ".dog-hero, .dog-info-card, .dog-description-card, .adopt-section"
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

// Add animation styles
const style = document.createElement("style");
style.innerHTML = `
.hidden {
  opacity: 0;
  transform: translateY(30px);
}
.show {
  opacity: 1;
  transform: translateY(0);
  transition: 0.7s ease;
}
`;
document.head.appendChild(style);

// ==========================
// Hero Image Slight Zoom
// ==========================
const heroImg = document.querySelector(".dog-hero img");

if (heroImg) {
  heroImg.addEventListener("mouseenter", () => {
    heroImg.style.transform = "scale(1.04)";
  });

  heroImg.addEventListener("mouseleave", () => {
    heroImg.style.transform = "scale(1)";
  });
}

// ==========================
// Button Press Effect
// ==========================
const buttons = document.querySelectorAll("button, .back-btn, .adopt-btn");

buttons.forEach(btn => {
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.95)";
  });

  btn.addEventListener("mouseup", () => {
    btn.style.transform = "scale(1)";
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "scale(1)";
  });
});

// ==========================
// Form Submission Popup
// ==========================
const form = document.querySelector(".adopt-section form");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const popup = document.createElement("div");
    popup.textContent = "🐶 Request Sent Successfully!";

    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.background = "#c97a1c";
    popup.style.color = "#fff";
    popup.style.padding = "18px 28px";
    popup.style.borderRadius = "12px";
    popup.style.boxShadow = "0 8px 20px rgba(0,0,0,0.2)";
    popup.style.zIndex = "9999";
    popup.style.fontSize = "15px";

    document.body.appendChild(popup);

    setTimeout(() => {
      popup.remove();
    }, 2200);

    form.reset();
  });
}