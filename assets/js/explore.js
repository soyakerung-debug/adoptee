// SCROLL ANIMATION FOR STORY CARDS
const cards = document.querySelectorAll('.story-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, {
    threshold: 0.2
});

cards.forEach(card => observer.observe(card));


// OPTIONAL: NAVBAR SCROLL EFFECT (small polish 🔥)
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');

    if (window.scrollY > 20) {
        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.1)";
    } else {
        header.style.boxShadow = "none";
    }
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