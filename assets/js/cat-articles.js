// ==========================
// SCROLL ANIMATIONS (ALL SECTIONS)
// ==========================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.15 });

// Target ALL sections of your page
document.querySelectorAll(
  ".cat-article, .cat-hero, .cat-fun, .footer"
).forEach((el, index) => {
  el.style.transitionDelay = `${index * 0.1}s`; // ✨ stagger effect
  observer.observe(el);
});

// 3D TILT EFFECT
document.querySelectorAll(".dog-card").forEach(card => {

    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = -(y - centerY) / 12;
        const rotateY = (x - centerX) / 12;

        card.style.transform = `
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.05)
        `;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });

});

// HERO FADE IN
window.addEventListener("load", () => {
    const hero = document.querySelector(".dog-hero");

    hero.style.opacity = 0;
    hero.style.transform = "translateY(20px)";

    setTimeout(() => {
        hero.style.transition = "0.8s";
        hero.style.opacity = 1;
        hero.style.transform = "translateY(0)";
    }, 200);
});
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