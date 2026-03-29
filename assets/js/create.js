// ================= BASE URL =================
const BASE_URL = "https://adoptee-backend.onrender.com";

// ================= PASSWORD TOGGLE =================
const eye1 = document.getElementById("eye1");
const eye2 = document.getElementById("eye2");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

eye1.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";
});

eye2.addEventListener("click", () => {
    confirmPassword.type = confirmPassword.type === "password" ? "text" : "password";
});

// ================= FORM =================
const form = document.getElementById("signupForm");
const popup = document.getElementById("popup");

form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = password.value.trim();
    const confirm = confirmPassword.value.trim();

    // ===== VALIDATION =====
    if (!name || !email || !pass || !confirm) {
        showPopup("Please fill all fields ❌");
        return;
    }

    if (pass !== confirm) {
        showPopup("Passwords do not match ❌");
        return;
    }

    // ===== SEND TO BACKEND =====
    try {
        const res = await fetch(`${BASE_URL}/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: pass
            })
        });

        const data = await res.json();

        if (data.success) {
            showPopup("Account created! 🐾");

            setTimeout(() => {
                window.location.href = "signin.html";
            }, 1500);

        } else {
            showPopup(data.message || "Signup failed ❌");
        }

    } catch (err) {
        console.error(err);
        showPopup("Server error ⚠️");
    }
});

// ================= POPUP FUNCTION =================
function showPopup(message) {
    popup.textContent = message;
    popup.classList.add("show");

    setTimeout(() => {
        popup.classList.remove("show");
    }, 2000);
}