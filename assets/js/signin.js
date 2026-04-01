// ================= BASE URL =================
const BASE_URL = "https://adoptee-backend.onrender.com";

// ================= ELEMENTS =================
const eye = document.querySelector(".toggle-eye");
const password = document.getElementById("password");
const form = document.getElementById("signinForm");
const popup = document.getElementById("popup");
const container = document.querySelector(".signin-container");
const forgotLink = document.getElementById("forgotLink");

// ================= PASSWORD TOGGLE =================
eye.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";
    eye.textContent = password.type === "password" ? "👁️" : "🙈";
});

// ================= POPUP =================
function showPopup(message) {
    popup.textContent = message;
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
}

// ================= SAFE FETCH (FIXES JSON ERROR) =================
async function safeFetch(url, options) {
    try {
        const res = await fetch(url, options);

        const text = await res.text(); // always read text first

        let data;
        try {
            data = JSON.parse(text);
        } catch {
            console.error("❌ Not JSON response:", text);
            return { success: false, message: "Server error ⚠️" };
        }

        return data;

    } catch (err) {
        console.error("❌ Fetch error:", err);
        return { success: false, message: "Server down ⚠️" };
    }
}

// ================= PAW BURST =================
function createPaw(x, y) {
    const paw = document.createElement("div");
    paw.textContent = "🐾";

    Object.assign(paw.style, {
        position: "fixed",
        left: x + "px",
        top: y + "px",
        fontSize: "20px",
        opacity: "1",
        pointerEvents: "none",
        transition: "all 0.8s ease"
    });

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

        Object.assign(conf.style, {
            position: "fixed",
            width: "8px",
            height: "8px",
            background: `hsl(${Math.random() * 360}, 70%, 60%)`,
            left: Math.random() * window.innerWidth + "px",
            top: "-10px",
            opacity: "1",
            transition: "transform 2s linear, opacity 2s"
        });

        document.body.appendChild(conf);

        setTimeout(() => {
            conf.style.transform = `translateY(${window.innerHeight}px) rotate(360deg)`;
            conf.style.opacity = "0";
        }, 10);

        setTimeout(() => conf.remove(), 2000);
    }
}

// ================= LOGIN =================
form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const pass = password.value;

    if (!email || !pass) {
        showPopup("Fill all fields ❌");
        return;
    }

    const data = await safeFetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password: pass })
    });

    if (data.success) {

        const btn = form.querySelector("button");
        const rect = btn.getBoundingClientRect();

        for (let i = 0; i < 6; i++) {
            createPaw(
                rect.left + rect.width / 2 + (Math.random() * 60 - 30),
                rect.top + rect.height / 2
            );
        }

        confetti();

        container.style.transform = "scale(1.03)";
        setTimeout(() => container.style.transform = "scale(1)", 300);

        showPopup("Welcome " + data.name + " 🐾");

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1500);

    } else {
        showPopup(data.message || "Login failed ❌");
    }
});

// ================= FORGOT PASSWORD =================
forgotLink.addEventListener("click", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;

    if (!email) {
        showPopup("Enter your email first 📧");
        return;
    }

    const data = await safeFetch(`${BASE_URL}/forgot-password`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
    });

    if (data.success) {
        showPopup("Reset link sent 📩");
    } else {
        showPopup(data.message || "User not found ❌");
    }
});