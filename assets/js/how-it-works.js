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