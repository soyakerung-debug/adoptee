// SCROLL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".dog-card").forEach(card => {
    observer.observe(card);
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