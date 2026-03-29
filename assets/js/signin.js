// ================= PASSWORD TOGGLE =================
const eye = document.querySelector(".toggle-eye");
const password = document.getElementById("password");

eye.addEventListener("click", () => {
    if (password.type === "password") {
        password.type = "text";
        eye.textContent = "🙈";
    } else {
        password.type = "password";
        eye.textContent = "👁️";
    }
});

// ================= ELEMENTS =================
const form = document.getElementById("signinForm");
const popup = document.getElementById("popup");
const container = document.querySelector(".signin-container");

// ================= PAW BURST =================
function createPaw(x, y) {
    const paw = document.createElement("div");
    paw.textContent = "🐾";
    paw.style.position = "fixed";
    paw.style.left = x + "px";
    paw.style.top = y + "px";
    paw.style.fontSize = "20px";
    paw.style.opacity = "1";
    paw.style.pointerEvents = "none";
    paw.style.transition = "all 0.8s ease";

    document.body.appendChild(paw);

    setTimeout(() => {
        paw.style.transform = "translateY(-40px) scale(1.5)";
        paw.style.opacity = "0";
    }, 10);

    setTimeout(() => paw.remove(), 800);
}

// ================= CONFETTI =================
function confetti() {
    for (let i = 0; i < 25; i++) {
        const conf = document.createElement("div");
        conf.style.position = "fixed";
        conf.style.width = "8px";
        conf.style.height = "8px";
        conf.style.background = `hsl(${Math.random() * 360}, 70%, 60%)`;
        conf.style.left = Math.random() * window.innerWidth + "px";
        conf.style.top = "-10px";
        conf.style.opacity = "1";
        conf.style.transition = "transform 2s linear, opacity 2s";

        document.body.appendChild(conf);

        setTimeout(() => {
            conf.style.transform = `translateY(${window.innerHeight}px) rotate(360deg)`;
            conf.style.opacity = "0";
        }, 10);

        setTimeout(() => conf.remove(), 2000);
    }
}

// ================= ERROR WIGGLE =================
function wiggle(el) {
    el.style.animation = "wiggle 0.4s";
    setTimeout(() => el.style.animation = "", 400);
}

// ================= FORM SUBMIT =================
form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let valid = true;

    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");

    // ===== VALIDATION =====
    [emailInput, passwordInput].forEach(input => {
        if (input.value.trim() === "") {
            input.style.border = "2px solid red";
            wiggle(input);
            valid = false;
        } else {
            input.style.border = "none";
        }
    });

    if (!valid) return;

    // ===== BACKEND LOGIN =====
    try {
        const res = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: emailInput.value,
                password: passwordInput.value
            })
        });

        const data = await res.json();

        if (data.success) {

            // 🐾 Paw burst
            const btn = form.querySelector("button");
            const rect = btn.getBoundingClientRect();

            for (let i = 0; i < 6; i++) {
                createPaw(
                    rect.left + rect.width / 2 + (Math.random() * 60 - 30),
                    rect.top + rect.height / 2
                );
            }

            // 🎉 Confetti
            confetti();

            // 🐶 Bounce effect
            container.style.transform = "scale(1.03)";
            setTimeout(() => container.style.transform = "scale(1)", 300);

            // ✅ Popup
            popup.textContent = "Welcome " + data.name + " 🐾";
            popup.classList.add("show");

            // 🔄 Redirect
            setTimeout(() => {
                window.location.href = "index.html";
            }, 1500);

        } else {
            popup.textContent = "Invalid email or password ❌";
            popup.classList.add("show");

            setTimeout(() => {
                popup.classList.remove("show");
            }, 2000);
        }

    } catch (err) {
        popup.textContent = "Server error ⚠️";
        popup.classList.add("show");

        setTimeout(() => {
            popup.classList.remove("show");
        }, 2000);

        console.error(err);
    }
});