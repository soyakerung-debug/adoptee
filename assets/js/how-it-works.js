const items = document.querySelectorAll('.step-card, .feature');

function animateOnScroll() {
    const trigger = window.innerHeight * 0.85;

    items.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if (top < trigger) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }
    });
}

window.addEventListener("scroll", animateOnScroll);

/* initial state */
items.forEach(item => {
    item.style.opacity = "0";
    item.style.transform = "translateY(50px)";
    item.style.transition = "all 0.6s ease";
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