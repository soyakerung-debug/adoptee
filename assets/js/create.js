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
        popup.textContent = "Please fill all fields ❌";
        popup.classList.add("show");
        setTimeout(() => popup.classList.remove("show"), 2000);
        return;
    }

    if (pass !== confirm) {
        popup.textContent = "Passwords do not match ❌";
        popup.classList.add("show");
        setTimeout(() => popup.classList.remove("show"), 2000);
        return;
    }

    // ===== SEND TO BACKEND =====
    try {
        const res = await fetch("http://localhost:5000/signup", {
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
            popup.textContent = "Account created! 🐾";
            popup.classList.add("show");

            setTimeout(() => {
                window.location.href = "signin.html";
            }, 1500);

        } else {
            popup.textContent = data.message || "Signup failed ❌";
            popup.classList.add("show");

            setTimeout(() => popup.classList.remove("show"), 2000);
        }

    } catch (err) {
        console.error(err);
        popup.textContent = "Server error ⚠️";
        popup.classList.add("show");

        setTimeout(() => popup.classList.remove("show"), 2000);
    }
});
