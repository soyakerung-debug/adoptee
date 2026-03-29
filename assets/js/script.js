const hamster = document.querySelector("svg");

hamster.addEventListener("click", () => {
    hamster.style.transition = "transform 0.3s ease";
    hamster.style.transform = "scale(1.2) rotate(10deg)";
    
    setTimeout(() => {
        hamster.style.transform = "scale(1)";
    }, 300);
});
