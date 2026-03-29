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