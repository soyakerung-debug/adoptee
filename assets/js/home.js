// ===============================
// 🌟 SCROLL REVEAL ANIMATIONS
// ===============================
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".fade-up, .zoom-in").forEach(el => {
    observer.observe(el);
});

// ===============================
// 📰 ARTICLE CARD ANIMATION
// ===============================
const articleObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll(".article-card").forEach(card => {
    articleObserver.observe(card);
});

// ===============================
// 🐾 SMOOTH SCROLL
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// ===============================
// 🔍 SEARCH SYSTEM
// ===============================
const searchInput = document.getElementById("search");
const searchBtn = document.getElementById("searchBtn");

function handleSearch() {
    if (!searchInput) return;

    const value = searchInput.value.toLowerCase().trim();

    if (value.includes("dog") || value.includes("puppy")) {
        window.location.href = "dog.html";
    }
    else if (value.includes("cat") || value.includes("kitten")) {
        window.location.href = "cat.html";
    }
    else if (
        value.includes("rabbit") ||
        value.includes("bunny") ||
        value.includes("guinea pig") ||
        value.includes("hamster") ||
        value.includes("bird") ||
        value.includes("parrot")
    ) {
        window.location.href = "other-animal.html";
    }
    else if (value === "") {
        alert("Type something first 🐾");
    }
    else {
        alert("No results 😿 Try dog, cat, rabbit!");
    }
}

if (searchInput) {
    searchInput.addEventListener("focus", () => {
        searchInput.style.transform = "scale(1.05)";
    });

    searchInput.addEventListener("blur", () => {
        searchInput.style.transform = "scale(1)";
    });

    searchInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") handleSearch();
    });
}

if (searchBtn) {
    searchBtn.addEventListener("click", handleSearch);
}

// ===============================
// 💬 REVIEW HOVER EFFECT
// ===============================
document.querySelectorAll(".review-card").forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.05)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });
});

// ===============================
// 🎯 HERO TYPING EFFECT
// ===============================
const heroTitle = document.querySelector(".hero h1");

if (heroTitle) {
    const text = "Find your new best friend. Adopt a pet and give them a forever home 🐾";
    let i = 0;

    function typeEffect() {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 25);
        }
    }

    window.addEventListener("load", typeEffect);
}

// ===============================
// 🐶 CARD RIPPLE EFFECT
// ===============================
document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        const rect = card.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left}px`;
        ripple.style.top = `${e.clientY - rect.top}px`;

        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// ===============================
// ✨ NAVBAR SCROLL EFFECT
// ===============================
window.addEventListener("scroll", () => {
    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(255,255,255,0.9)";
        header.style.backdropFilter = "blur(10px)";
    } else {
        header.style.background = "transparent";
    }
});

// ===============================
// 🐾 PAW SOUND SYSTEM (FINAL)
// ===============================
const pawBtn = document.querySelector(".paw-btn");

const catSound = document.getElementById("catSound");
const dogSound = document.getElementById("dogSound");
const birdSound = document.getElementById("birdSound");

function playShort(sound, duration) {
    if (!sound) return;

    sound.currentTime = 0;
    sound.volume = 1;
    sound.play().catch(() => { });

    setTimeout(() => {
        sound.pause();
        sound.currentTime = 0;
    }, duration);
}

let soundIndex = 0;

if (pawBtn) {
    pawBtn.addEventListener("click", () => {

        // stop all sounds first
        [catSound, dogSound, birdSound].forEach(s => {
            if (s) {
                s.pause();
                s.currentTime = 0;
            }
        });

        // 🎯 play with custom durations
        if (soundIndex === 0) {
            playShort(catSound, 2000); // 🐱 2 sec
        }
        else if (soundIndex === 1) {
            playShort(dogSound, 2000); // 🐶 2 sec
        }
        else {
            playShort(birdSound, 5000); // 🐦 4 sec
        }

        soundIndex = (soundIndex + 1) % 3;

        // click animation
        pawBtn.classList.add("clicked");
        setTimeout(() => pawBtn.classList.remove("clicked"), 300);
    });
}
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