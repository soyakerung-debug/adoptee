const faqItems = document.querySelectorAll(".faq-item");

/* CLICK FUNCTION */
faqItems.forEach(item => {
    item.addEventListener("click", () => {

        faqItems.forEach(i => {
            if (i !== item) i.classList.remove("active");
        });

        item.classList.toggle("active");
    });
});

/* SCROLL ANIMATION */
function revealFAQ() {
    const trigger = window.innerHeight * 0.85;

    faqItems.forEach(item => {
        const top = item.getBoundingClientRect().top;

        if (top < trigger) {
            item.classList.add("show");
        }
    });
}

window.addEventListener("scroll", revealFAQ);
window.addEventListener("load", revealFAQ);