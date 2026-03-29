// ================= BASE URL =================
const BASE_URL = "https://adoptee-backend.onrender.com";

// ================= ELEMENTS =================
const form = document.getElementById("contactForm");
const msg = document.getElementById("successMsg");

// ================= POPUP =================
function showMessage(text, success = true) {
    msg.textContent = text;
    msg.style.display = "block";
    msg.style.color = success ? "green" : "red";

    setTimeout(() => {
        msg.style.display = "none";
    }, 3000);
}

// ================= FORM SUBMIT =================
form.addEventListener("submit", async function (e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");

    // reset borders
    [name, email, subject, message].forEach(input => {
        input.style.border = "none";
    });

    // ===== VALIDATION =====
    if (name.value.trim() === "") {
        name.style.border = "2px solid red";
        valid = false;
    }

    if (!email.value.includes("@")) {
        email.style.border = "2px solid red";
        valid = false;
    }

    if (subject.value === "") {
        subject.style.border = "2px solid red";
        valid = false;
    }

    if (message.value.trim().length < 5) {
        message.style.border = "2px solid red";
        valid = false;
    }

    if (!valid) {
        showMessage("Please fix errors ❌", false);
        return;
    }

    // ===== SEND TO BACKEND =====
    try {
        const res = await fetch(`${BASE_URL}/contact`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name.value,
                email: email.value,
                subject: subject.value,
                message: message.value
            })
        });

        const data = await res.json();

        if (data.success) {
            showMessage("Message sent successfully! 🐾", true);
            form.reset();
        } else {
            showMessage("Failed to send ❌", false);
        }

    } catch (err) {
        console.error(err);
        showMessage("Server error ⚠️", false);
    }
});